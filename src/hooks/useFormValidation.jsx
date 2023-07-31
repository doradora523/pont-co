import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setCompany, setTeam, setUserName, setErrors } from '../redux/slices/signupSlice';
import CheckEmailAvailability from './useCheckEmailAvailability';

const useFormValidation = () => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/;
  const { errors, email, userName, company, team } = useSelector((state) => state.signup);
  const [password, setPassword] = useState(''); // 비밀번호 상태 추가
  const [passwordCheck, setPasswordCheck] = useState(''); // 비밀번호 체크 상태 추가

  const dispatch = useDispatch();

  /** 이메일, 비밀번호 유효성 검사 */
  const validateField = useCallback(
    async (id, value) => {
      const validationErrors = { ...errors };
      if (value !== undefined) {
        const trimmedValue = value.trim();
        if (id === 'email') {
          dispatch(setEmail(value));
          const isValidEmail = emailRegex.test(value);

          if (!trimmedValue) {
            validationErrors.email = { message: '이메일을 입력해주세요.', isError: true };
          } else if (!isValidEmail) {
            validationErrors.email = { message: '유효한 이메일 형식이 아닙니다.', isError: true };
          } else {
            const isAvailable = await CheckEmailAvailability(value);
            if (!isAvailable) {
              validationErrors.email = { message: '이미 사용중인 이메일입니다.', isError: true };
            } else {
              validationErrors.email = { message: '', isError: false };
            }
          }
        } else if (id === 'password') {
          setPassword(value);
          validationErrors.password = {
            message:
              trimmedValue === ''
                ? '숫자와 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.'
                : !passwordRegex.test(value)
                ? '숫자와 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.'
                : '',
            isError: trimmedValue === '' || !passwordRegex.test(value),
          };

          // 비밀번호가 변경될 때 비밀번호 확인의 유효성 검사도 실시간으로 수행
          if (passwordCheck !== '') {
            validationErrors.passwordCheck = {
              message:
                trimmedValue === ''
                  ? '확인을 위하여 위와 동일하게 입력해주세요.'
                  : passwordCheck !== value
                  ? '비밀번호가 틀렸습니다. 다시 입력해주세요.'
                  : '',
              isError: trimmedValue === '' || passwordCheck !== value,
            };
          }
        } else if (id === 'passwordCheck') {
          setPasswordCheck(value);
          validationErrors.passwordCheck = {
            message:
              trimmedValue === ''
                ? '확인을 위하여 위와 동일하게 입력해주세요.'
                : value !== password
                ? '비밀번호가 틀렸습니다. 다시 입력해주세요.'
                : '',
            isError: trimmedValue === '' || value !== password,
          };
        } else if (id === 'userName') {
          dispatch(setUserName(value));
          validationErrors.userName = {
            message: trimmedValue === '' ? '이름을 입력해주세요.' : '',
            isError: trimmedValue === '',
          };
        } else if (id === 'company') {
          dispatch(setCompany(value));
          validationErrors.company = {
            message: trimmedValue === '' ? '회사를 선택해주세요.' : '',
            isError: trimmedValue === '',
          };
        } else if (id === 'team') {
          dispatch(setTeam(value));
          validationErrors.team = {
            message: trimmedValue === '' ? '부서를 선택해주세요.' : '',
            isError: trimmedValue === '',
          };
        }
      }
      dispatch(setErrors(validationErrors));
    },
    [errors, email, password, passwordCheck, userName, company, team],
  );
  return {
    password,
    validateField,
  };
};

export default useFormValidation;
