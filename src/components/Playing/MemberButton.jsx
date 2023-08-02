import React from 'react';
import './MemberButton.scss';

const MemberButton = ({ member, onClick }) => {
  const [name, team] = member;

  return (
    <button onClick={onClick} className="member-select-btn" value={JSON.stringify(member)}>
      <p className="member-name">{name}</p>
      <p className="member-team">{team}</p>
    </button>
  );
};

export default MemberButton;
