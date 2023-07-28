import React from 'react';
import './MemberButton.scss';

const MemberButton = ({ member, onClick }) => {
  return (
    <button onClick={onClick} className="member-select-btn" value={JSON.stringify(member)}>
      <p className="member-name">{member.name}</p>
      <p className="member-team">{member.team}</p>
    </button>
  );
};

export default MemberButton;
