import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlay } from 'react-icons/fa';
import './Playing.scss';

import { START_TEXT } from '../../static/constants';
import { getQuestions } from '../../apis/getQuestions';
import TextBar from '../../components/common/bar/TextBar';
import TabBar from '../../components/common/bar/TabBar';

const Playing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { factualInfo } = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(getQuestions(factualInfo));
  }, []);

  const onStartBtnClick = () => {
    navigate('/playing-game');
  };

  return (
    <div className="playing-wrapper">
      <TextBar title={'Playing'} back={'back'} />
      <div className="start-box">
        <p className="start-text">{START_TEXT}</p>
        <div className="start-btn" onClick={onStartBtnClick}>
          <FaPlay />
        </div>
      </div>
      <TabBar playing={'active'} />
    </div>
  );
};

export default Playing;
