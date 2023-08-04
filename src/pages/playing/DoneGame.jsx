import React from 'react';
import TextBar from '../../components/common/bar/TextBar';
import { useNavigate } from 'react-router-dom';
import './DoneGame.scss';
import { useInviteMember } from '../../hooks/useInviteMember';

const DoneGame = () => {
  const navigate = useNavigate();
  const inviteMember = useInviteMember();

  return (
    <div className='done-game'>
      <TextBar title={'Done Playing'} />
      <div className='circle-box'>
        <div className='inner-circle' />
        <p className='done-message'>
          칭찬할 동료 선택이
          <br />
          완료되었습니다.
        </p>
      </div>
      <div className="btn-wrapper">
        <button onClick={inviteMember}>내가 칭찬한 동료 초대하기</button>
        <button onClick={() => navigate('/my-profile')}>내가 받은 칭찬 보러가기</button>
      </div>
    </div>
  );
};

export default DoneGame;
