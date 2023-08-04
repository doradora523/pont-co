import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthBar.scss';
import { LOGIN, SIGN_UP } from '../../../static/constants';

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
        {LOGIN}
      </div>
      <div
        className={signup}
        onClick={() => {
          navigate('/sign-up');
        }}
      >
        {SIGN_UP}
      </div>
    </div>
  );
};

export default AuthBar;
