import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setCompany, setTeam, setUserName, setErrors } from '../redux/slices/signupSlice';
import CheckEmailAvailability from './useCheckEmailAvailability';
import { debounce } from 'lodash';
import {
  CHECK_PASSWORD,
  INFORM_EMAIL,
  ERROR_EMAIL,
  INFORM_COMPANY,
  INFORM_PASSWORD,
  INFORM_TEAM,
  INFORM_USERNAME,
  USED_EMAIL,
  WRONG_PASSWORD,
} from '../static/constants';

const useFormValidation = () => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/;
  const { errors, email, userName, company, team } = useSelector((state) => state.signup);
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const dispatch = useDispatch();

  /** 이메일, 비밀번호 유효성 검사 */
  const validateField = useCallback(
    debounce(async (id, value) => {
      const validationErrors = { ...errors };
      if (value !== undefined) {
        const trimmedValue = value.trim();
        if (id === 'email') {
          dispatch(setEmail(value));
          const isValidEmail = emailRegex.test(value);

          if (!trimmedValue) {
            validationErrors.email = { message: INFORM_EMAIL, isError: true };
          } else if (!isValidEmail) {
            validationErrors.email = { message: ERROR_EMAIL, isError: true };
          } else {
            const isAvailable = await CheckEmailAvailability(value);
            if (!isAvailable) {
              validationErrors.email = { message: USED_EMAIL, isError: true };
            } else {
              validationErrors.email = { message: '', isError: false };
            }
          }
        } else if (id === 'password') {
          setPassword(value);
          validationErrors.password = {
            message: trimmedValue === '' ? INFORM_PASSWORD : !passwordRegex.test(value) ? INFORM_PASSWORD : '',
            isError: trimmedValue === '' || !passwordRegex.test(value),
          };

          // 비밀번호가 변경될 때 비밀번호 확인의 유효성 검사도 실시간으로 수행
          if (passwordCheck !== '') {
            validationErrors.passwordCheck = {
              message: trimmedValue === '' ? CHECK_PASSWORD : passwordCheck !== value ? WRONG_PASSWORD : '',
              isError: trimmedValue === '' || passwordCheck !== value,
            };
          }
        } else if (id === 'passwordCheck') {
          setPasswordCheck(value);
          validationErrors.passwordCheck = {
            message: trimmedValue === '' ? CHECK_PASSWORD : value !== password ? WRONG_PASSWORD : '',
            isError: trimmedValue === '' || value !== password,
          };
        } else if (id === 'userName') {
          dispatch(setUserName(value));
          validationErrors.userName = {
            message: trimmedValue === '' ? INFORM_USERNAME : '',
            isError: trimmedValue === '',
          };
        } else if (id === 'company') {
          dispatch(setCompany(value));
          validationErrors.company = {
            message: trimmedValue === '' ? INFORM_COMPANY : '',
            isError: trimmedValue === '',
          };
        } else if (id === 'team') {
          dispatch(setTeam(value));
          validationErrors.team = {
            message: trimmedValue === '' ? INFORM_TEAM : '',
            isError: trimmedValue === '',
          };
        }
      }
      dispatch(setErrors(validationErrors));
    }, 300),
    [(errors, email, password, passwordCheck, userName, company, team, dispatch)],
  );
  return {
    password,
    validateField,
  };
};

export default useFormValidation;
