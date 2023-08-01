import React from 'react';
import './Input.scss';

const Input = ({ type, className, error, name, value, placeholder, autoComplete, onChange, editClassName }) => {
  return (
    <div className={`input-box ${className}`}>
      <label htmlFor={name} className={error}>
        {name}
      </label>
      <input
        type={type}
        className={editClassName}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
