import React from 'react';
import './Member.scss';

const Member = ({ src, name, team }) => {
  return (
    <div className="member">
      <div className="profile">
        <img src={src} alt="User Profile" />
      </div>
      <p className="user-name">{name}</p>
      <p className="team">{team}</p>
    </div>
  );
};

export default Member;
