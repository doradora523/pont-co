import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import './SmallButton.scss';

const SmallButton = ({ name, className, onClick }) => {
  return (
    <button className={`small-button ${className}`} onClick={onClick}>
      <p>{name}</p>
      <BiSolidRightArrow />
    </button>
  );
};

export default SmallButton;
