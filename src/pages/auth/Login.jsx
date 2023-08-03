import React, { useState } from 'react';
import './Login.scss';
import AuthBar from '../../components/common/bar/AuthBar';
import Input from '../../components/common/input/Input';
import SmallButton from '../../components/common/button/SmallButton';

import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { inputFields } from '../../static/InputFields';
import { loginFailure, loginStart, loginSuccess } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { setErrors } from '../../redux/slices/signupSlice';

const Login = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeHandler = (id, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const { email, password } = formValues;
    try {
      dispatch(loginStart());
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginSuccess());
      navigate('/');
    } catch (error) {
      dispatch(setErrors('일치하는 회원정보가 없거나, 비밀번호가 일치하지 않습니다.'));
      dispatch(loginFailure(error.message));
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
