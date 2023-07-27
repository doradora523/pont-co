import React from 'react';
import './Input.scss';

const Input = ({ type, className, name, value, placeholder, onChange }) => {
  return (
    <div className={`input-box ${className}`}>
      <label for={name}>{name}</label>
      <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
      
    </div>
  );
};

export default Input;
