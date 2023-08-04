import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.scss';
import { SPLASH } from '../../static/constants';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const moveToOnBoarding = setTimeout(() => {
      navigate('/on-boarding');
    }, 1500);
    return () => clearTimeout(moveToOnBoarding);
  }, [navigate]);

  return (
    <div className="splash">
      <p>{SPLASH}</p>
    </div>
  );
};

export default Splash;
