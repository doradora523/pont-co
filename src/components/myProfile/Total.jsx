import React from 'react';
import './Total.scss';

const Total = ({ icon, number, title }) => {
  return (
    <div className="total-box">
      <div className="total-icon">{icon}</div>
      <p className="total-number">{number}</p>
      <p className="total-title">{title}</p>
    </div>
  );
};

export default Total;
