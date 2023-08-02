import React from 'react';
import TextBar from '../../components/common/bar/TextBar';
import TabBar from '../../components/common/bar/TabBar';
import { FaPlay } from 'react-icons/fa';
import './Playing.scss';
import { useNavigate } from 'react-router-dom';
import useFactualInfo from '../../apis/useFactualInfo';

const Playing = () => {
  const navigate = useNavigate();

  // const { factualInfo } = useFactualInfo();

  return (
    <div className="playing-wrapper">
      <TextBar title={'Playing'} back={'back'} />
      <div className="start-box">
        <p className="start-text">Start Compliments</p>
        <div
          className="start-btn"
          onClick={() => {
            navigate('/playing-game');
          }}
        >
          <FaPlay />
        </div>
      </div>
      <TabBar playing={'active'} />
    </div>
  );
};

export default Playing;
