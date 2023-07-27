import React from 'react';
import './Input.scss';

const Input = ({ type, className, name, value, placeholder, onChange, editClassName }) => {
  return (
    <div className={`input-box ${className}`}>
      <label htmlFor={name}>{name}</label>
      <input type={type} className={editClassName} name={name} value={value} placeholder={placeholder} onChange={onChange} required />
    </div>
  );
};

export default Input;
