import React from 'react';
import { PacmanLoader, PuffLoader } from 'react-spinners';
import './Loading.scss';
import { LOADING_TITLE } from '../../../static/constants';

const Loading = ({ state }) => {
  const title = LOADING_TITLE;
  const getLoader = () => {
    if (state === 'login') {
      return <PuffLoader className="loading-spinner" color="#BE9FE1" />;
    } else if (state === 'playing') {
      return (
        <>
          <h3 className="loading-title">{title}</h3>
          <PacmanLoader className="loading-spinner" color="#BE9FE1" />
        </>
      );
    }
  };

  return <div className={`loading-wrapper ${state}`}>{getLoader()}</div>;
};

export default Loading;
