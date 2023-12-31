import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdPeopleAlt } from 'react-icons/md';
import { TiStarFullOutline } from 'react-icons/ti';
import { CgProfile } from 'react-icons/cg';
import './TabBar.scss';

const TabBar = ({ member, playing, myProfile }) => {
  const navigate = useNavigate();

  return (
    <div className="tab-bar">
      <div
        onClick={() => {
          navigate('/member');
        }}
      >
        <MdPeopleAlt className={member} />
      </div>
      <div
        onClick={() => {
          navigate('/playing');
        }}
      >
        <TiStarFullOutline className={playing} />
      </div>
      <div
        onClick={() => {
          navigate('/my-profile');
        }}
      >
        <CgProfile className={myProfile} />
      </div>
    </div>
  );
};

export default TabBar;
