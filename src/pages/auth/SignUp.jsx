import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthBar from '../../components/common/bar/AuthBar';
import Input from '../../components/common/input/Input';
import { inputFields } from '../../static/InputFields';
import SmallButton from '../../components/common/button/SmallButton';
import useFormValidation from '../../hooks/useFormValidation';
import './SignUp.scss';

import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useGetCompanyList } from '../../apis/getCompanyList';

const SignUp = () => {
  const { email, userName, team, company, errors } = useSelector((state) => state.signup);
  const { password, validateField } = useFormValidation();

  const { loading, companies } = useGetCompanyList();

  const companyArray = companies.map((company) => company.name);
  const navigate = useNavigate();
  const userInfoCollectionRef = collection(db, 'users');

  const handleSignUp = async (event) => {
    event.preventDefault();

    const defualtProfile = 'https://i.pinimg.com/originals/68/b1/77/68b177feaf7970250997c89ac56c13ca.jpg';
    try {
      // 입력 필드의 값을 가져오기 전에 유효성 검사를 먼저 수행
      const hasErrors = Object.values(errors).some((error) => error.isError);

      if (hasErrors) {
        alert('회원가입 양식에 맞게 작성해주세요.');
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const uid = user.uid;

        const userDocRef = doc(userInfoCollectionRef, uid);
        await setDoc(userDocRef, { uid, email, userName, company, team, src: defualtProfile });

        auth.currentUser = null;
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
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
