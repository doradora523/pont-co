import React from 'react';
import { PacmanLoader } from 'react-spinners';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <h3 className="loading-title">
        질문을 생성중입니다.
        <br />
        잠시만 기다려주세요!
      </h3>
      <PacmanLoader className="loading-spinner" color="#BE9FE1" />
    </div>
  );
};

export default Loading;
