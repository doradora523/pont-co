import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

import AuthBar from '../../components/common/bar/AuthBar';
import Input from '../../components/common/input/Input';
import SmallButton from '../../components/common/button/SmallButton';

import { inputFields } from '../../static/InputFields';
import { DEFAULT_PROFILE_URL, INFORM_ALERT } from '../../static/constants';
import useFormValidation from '../../hooks/useFormValidation';
import { useGetCompanyList } from '../../apis/getCompanyList';

import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';

const SignUp = () => {
  const { email, userName, team, company, errors } = useSelector((state) => state.signup);
  const { password, validateField, validateFieldOnBlur } = useFormValidation();

  const { loading, companies } = useGetCompanyList();

  const companyArray = companies.map((company) => company.name);
  const navigate = useNavigate();
  const userInfoCollectionRef = collection(db, 'users');

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      // 입력 필드의 값을 가져오기 전에 유효성 검사를 먼저 수행
      const hasErrors = Object.values(errors).some((error) => error.isError);

      if (hasErrors) {
        alert(INFORM_ALERT);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const uid = user.uid;

        const userDocRef = doc(userInfoCollectionRef, uid);
        await setDoc(userDocRef, { uid, email, userName, company, team, src: DEFAULT_PROFILE_URL });

        auth.currentUser = null;
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="sign-up">
      <AuthBar signup={'active'} />
      {!loading && (
        <form onSubmit={handleSignUp}>
          <div className="input-wrapper">
            {inputFields.map((field) => (
              <Input
                key={field.id}
                id={field.id}
                type={field.type}
                name={errors[field.id].isError ? errors[field.id].message : field.name}
                placeholder={field.placeholder}
                error={errors[field.id]?.isError ? 'error-label' : ''}
                onChange={(event) => validateField(field.id, event.target.value)}
                autoComplete={
                  field.id === 'email'
                    ? 'username'
                    : field.id === 'password' || field.id === 'passwordCheck'
                    ? 'new-password'
                    : 'off'
                }
                companies={field.name === 'Company' ? companyArray : ''}
              />
            ))}
          </div>
          <SmallButton name={'Sign Up'} type="submit" />
          <div></div>
        </form>
      )}
    </div>
  );
};

export default SignUp;
