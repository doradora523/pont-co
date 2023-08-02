import React from 'react';
import './Input.scss';
import SelectInput from './SelectInput';

const Input = ({ id, type, className, error, name, placeholder, autoComplete, onChange, companies, editClassName }) => {
  return (
    <div className={`input-box ${className}`}>
      <label htmlFor={name} className={error}>
        {name}
      </label>
      {id === 'company' ? (
        <SelectInput companies={companies} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input
          type={type}
          className={editClassName}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          required
        />
      )}
    </div>
  );
};

export default Input;
