import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import './SmallButton.scss';

const SmallButton = ({ name }) => {
  return (
    <button className="small-button">
      <p>{name}</p>
      <BiSolidRightArrow />
    </button>
  );
};

export default SmallButton;
