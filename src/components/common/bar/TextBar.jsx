import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RiSettings4Line } from 'react-icons/ri';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import './TextBar.scss';
import { useNavigate } from 'react-router-dom';

const TextBar = ({ title, back, setting, add }) => {
  const navigate = useNavigate();

  const inviteMember = () => {
    console.log('invite');
  };

  return (
    <div className="text-bar">
      {back && (
        <div
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack />
        </div>
      )}
      <h2 className="title">{title}</h2>
      {setting && (
        <div
          className="setting"
          onClick={() => {
            navigate('/edit-profile');
          }}
        >
          <RiSettings4Line />
        </div>
      )}
      {add && (
        <div className="add" onClick={inviteMember}>
          <AiOutlineUsergroupAdd />
        </div>
      )}
    </div>
  );
};

export default TextBar;
