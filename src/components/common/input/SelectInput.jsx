import React, { useState, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import './SelectInput.scss';

import useAddCompany from '../../../hooks/useAddCompany';
import useFormValidation from '../../../hooks/useFormValidation';
import { ADD_COMPANY } from '../../../static/constants';

const SelectInput = ({ companies, placeholder }) => {
  const [newCompany, setNewCompany] = useState('');
  /** TODO: 사용자가 추가한 company는 추후 데이터를 모아 기존 companies를 가져오는 AI를 이용해 해당 DB에 포함시켜야 함 */
  const [items, setItems] = useState(companies);
  const fieldId = 'company';
  const inputRef = useRef(null);
  const { handleAddCompany } = useAddCompany();
  const { validateField } = useFormValidation();

  const onNewCompanyChange = (event) => {
    setNewCompany(event.target.value);
  };

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.input.value;

    handleAddCompany(inputValue);
    setItems([...items, inputValue]);
    setNewCompany('');

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const onSelectionChange = (value) => {
    validateField(fieldId, value);
    console.log(value);
  };

  return (
    <Select
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            style={{
              margin: '8px 0',
            }}
          />
          <Space
            style={{
              padding: '0 8px 4px',
            }}
          >
            <Input placeholder="Please enter item" ref={inputRef} value={newCompany} onChange={onNewCompanyChange} />
            <Button type="text" icon={<PlusOutlined />} onClick={handleAddButtonClick}>
              {ADD_COMPANY}
            </Button>
          </Space>
        </>
      )}
      options={items.map((company) => ({
        label: company,
        value: company,
      }))}
      placeholder={placeholder}
      onChange={onSelectionChange}
    />
  );
};
export default SelectInput;
