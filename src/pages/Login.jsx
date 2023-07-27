import React from 'react';
import './Login.scss';
import AuthBar from '../components/common/bar/AuthBar';
import Input from '../components/common/bar/Input';
import SmallButton from '../components/common/button/SmallButton';

const Login = () => {
  const inputFields = [
    { id: 'email', type: 'email', name: 'Email', placeholder: '이메일을 입력해주세요.' },
    {
      id: 'password',
      type: 'password',
      name: 'Password',
      placeholder: '비밀번호를 입력해주세요.',
    },
  ];
  return (
    <div className="login">
      <AuthBar login={'active'} />
      <div className="bg-circle"></div>
      <div className="logo">
        PONT
        <br />
        -CO
      </div>
      {inputFields.map((field) => (
        <Input
          key={field.id}
          className={'login'}
          label={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
        />
      ))}
      <SmallButton name={'Login'} />
    </div>
  );
};

export default Login;
