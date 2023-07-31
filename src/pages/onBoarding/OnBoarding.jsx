import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnBoarding.scss';
import SmallButton from '../../components/common/button/SmallButton';

const OnBoarding = () => {
  const box1Contents = [
    '책임감이 강한 사람',
    '말을 잘 들어주는 사람',
    '사무실 분위기 메이커',
    '같이 식사하고 싶은 사람',
  ];
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
          <span>동료들이 보는 나</span>는<br />
          어떤 사람일까?
        </div>
        <div className="contents">
          {box1Contents.map((content) => (
            <p>{content}</p>
          ))}
        </div>
      </div>
      <div className={`on-boarding-box_2 ${isBoxVisible ? 'hide' : ''}`}>
        <div className="box_2-img">
          <img src={process.env.PUBLIC_URL + '/images/box2.png'} alt="playing sample" />
        </div>
        <div className="content">
          익명으로 투표해서 <br />
          응원의 마음을 전해요
        </div>
      </div>
      <SmallButton name={`${isBoxVisible ? 'Next' : 'Start Now'}`} className={'on-boarding-btn'} onClick={handleBtn} />
    </div>
  );
};

export default OnBoarding;
