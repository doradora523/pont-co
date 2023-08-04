import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnBoarding.scss';

import { BOX_1_CONTENTS, ON_BOARDING_CONTENT, ON_BOARDING_TITLE_1, ON_BOARDING_TITLE_2 } from '../../static/constants';
import SmallButton from '../../components/common/button/SmallButton';

const OnBoarding = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(true);

  const navigate = useNavigate();
  
  const handleBtn = () => {
    if (!isBoxVisible) {
      navigate('/login');
    } else {
      setIsBoxVisible(false);
    }
  };
  return (
    <div className="on-boarding-wrapper">
      <div className={`on-boarding-box_1 ${isBoxVisible ? '' : 'hide'}`}>
        <div className="title">
          <span>{ON_BOARDING_TITLE_1}</span>{ON_BOARDING_TITLE_2}
        </div>
        <div className="contents">
          {BOX_1_CONTENTS.map((content) => (
            <p>{content}</p>
          ))}
        </div>
      </div>
      <div className={`on-boarding-box_2 ${isBoxVisible ? 'hide' : ''}`}>
        <div className="box_2-img">
          <img src={process.env.PUBLIC_URL + '/images/box2.png'} alt="playing sample" />
        </div>
        <div className="content">
          {ON_BOARDING_CONTENT}
        </div>
      </div>
      <SmallButton name={`${isBoxVisible ? 'Next' : 'Start Now'}`} className={'on-boarding-btn'} onClick={handleBtn} />
    </div>
  );
};

export default OnBoarding;
