import React from 'react';
import './AuthBar.scss';
import { useNavigate } from 'react-router-dom';

const AuthBar = ({ login, signup }) => {
  const navigate = useNavigate();

  return (
    <div className="auth-bar">
      <div
        className={login}
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </div>
      <div
        className={signup}
        onClick={() => {
          navigate('/sign-up');
        }}
      >
        Sign Up
      </div>
    </div>
  );
};

export default AuthBar;
