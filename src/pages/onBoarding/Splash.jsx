import React, { useEffect } from 'react';
import './Splash.scss';
import { useNavigate } from 'react-router-dom';

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
      <p>
        누가
        <br />
        너를
        <br />
        인정하고
        <br />
        있는지
        <br />
        알려줄게
      </p>
    </div>
  );
};

export default Splash;
