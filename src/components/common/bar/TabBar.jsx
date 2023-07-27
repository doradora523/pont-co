import React from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import { TiStarFullOutline } from 'react-icons/ti';
import { CgProfile } from 'react-icons/cg';
import './TabBar.scss';
import { useNavigate } from 'react-router-dom';

const TabBar = ({ member, playing, myProfile }) => {
  const navigate = useNavigate();

  return (
    <div className="tab-bar">
      <div>
        <MdPeopleAlt
          className={member}
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
      <div>
        <TiStarFullOutline
          className={playing}
          onClick={() => {
            navigate('/playing');
          }}
        />
      </div>
      <div>
        <CgProfile
          className={myProfile}
          onClick={() => {
            navigate('/my-profile');
          }}
        />
      </div>
    </div>
  );
};

export default TabBar;
