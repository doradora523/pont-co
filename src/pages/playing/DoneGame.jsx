import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DoneGame.scss';

import { useInviteMember } from '../../hooks/useInviteMember';
import { DONE_MESSAGE, INVITE_BTN, NAVIGATE_BTN } from '../../static/constants';
import TextBar from '../../components/common/bar/TextBar';

const DoneGame = () => {
  const navigate = useNavigate();
  const inviteMember = useInviteMember();

  return (
    <div className="done-game">
      <TextBar title={'Done Playing'} />
      <div className="circle-box">
        <div className="inner-circle" />
        <p className="done-message">{DONE_MESSAGE}</p>
      </div>
      <div className="btn-wrapper">
        <button onClick={inviteMember}>{INVITE_BTN}</button>
        <button onClick={() => navigate('/my-profile')}>{NAVIGATE_BTN}</button>
      </div>
    </div>
  );
};

export default DoneGame;
