import React, { useState } from 'react';
import './Login.scss';
import AuthBar from '../../components/common/bar/AuthBar';
import Input from '../../components/common/input/Input';
import SmallButton from '../../components/common/button/SmallButton';

import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onChangeHandler = (id, value) => {
    if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.user.uid);

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <AuthBar login={'active'} />
      <div className="bg-circle"></div>
      <div className="logo">
        PONT
        <br />
        -CO
      </div>
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          {inputFields.map((field) => (
            <Input
              key={field.id}
              label={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              onChange={(event) => onChangeHandler(field.id, event.target.value)}
            />
          ))}
        </div>
        <SmallButton name={'Login'} type="submit" />
      </form>
    </div>
  );
};

export default Login;
