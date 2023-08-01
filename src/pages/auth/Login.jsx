import React, { useState } from 'react';
import './Login.scss';
import AuthBar from '../../components/common/bar/AuthBar';
import Input from '../../components/common/input/Input';
import SmallButton from '../../components/common/button/SmallButton';

import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { inputFields } from '../../static/InputFields';

const Login = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const onChangeHandler = (id, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const { email, password } = formValues;
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
          {inputFields.slice(0, 2).map((field) => (
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
