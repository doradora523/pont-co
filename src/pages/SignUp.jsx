import React from 'react';
import AuthBar from '../components/common/bar/AuthBar';
import Input from '../components/common/Input';
import './SignUp.scss';
import SmallButton from '../components/common/button/SmallButton';

const SignUp = () => {
  const inputFields = [
    {
      id: 'email',
      type: 'email',
      name: 'Email',
      placeholder: '이메일을 입력해주세요.',
    },
    {
      id: 'password',
      type: 'password',
      name: 'Password',
      placeholder: '비밀번호를 입력해주세요.',
    },
    {
      id: 'password-check',
      type: 'password',
      name: 'Password Check',
      placeholder: '비밀번호를 확인해주세요.',
    },
    {
      id: 'user-name',
      type: 'text',
      name: 'Name',
      placeholder: '이름을 입력해주세요.',
    },
    {
      id: 'company',
      type: 'search',
      name: 'Company',
      placeholder: '회사를 검색해주세요.',
    },
    {
      id: 'team',
      type: 'search',
      name: 'Team',
      placeholder: '소속 부서를 검색해주세요.',
    },
  ];

  return (
    <div className="sign-up">
      <AuthBar signup={'active'} />
      <div className="input-wrapper">
        {inputFields.map((field) => (
          <Input id={field.id} type={field.type} name={field.name} placeholder={field.placeholder} />
        ))}
      </div>
      <SmallButton name={'Sign Up'} />
    </div>
  );
};

export default SignUp;
