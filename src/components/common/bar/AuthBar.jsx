import React from 'react';
import './AuthBar.scss';

const AuthBar = ({ login,signup }) => {
  return (
    <div className="auth-bar">
      <div className={login}>Login</div>
      <div className={signup}>Sign Up</div>
    </div>
  );
};

export default AuthBar;
