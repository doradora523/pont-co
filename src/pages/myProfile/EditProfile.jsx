import React, { useState } from 'react';
import TextBar from '../../components/common/bar/TextBar';
import Profile from '../../components/myProfile/Profile';
import Input from '../../components/common/input/Input';
import { useChangeValue } from '../../hooks/useChangeValue';
import { useNavigate } from 'react-router-dom';
import './EditProfile.scss';

const EditProfile = () => {
  const myProfile = {
    src: 'https://file.newswire.co.kr/data/datafile2/thumb_640/2023/05/1893390626_20230503155222_9195618912.jpg',
    name: '박보영',
    team: '경영지원팀',
  };
  const [name, setName] = useState(myProfile.name);
  const [team, setTeam] = useState(myProfile.team);

  const navigate = useNavigate();

  const handleChangeValue = useChangeValue(setName, setTeam);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, team);
    navigate('/my-profile');
  };
  
  return (
    <div>
      <TextBar title={'Edit Profile'} back={'active'} />
      <div className="profile">
        <Profile src={myProfile.src} name={myProfile.name} team={myProfile.team} edit={'edit'} />
      </div>
      <form onSubmit={handleSubmit} className="edit-form">
        <Input type={'text'} editClassName={'edit-name'} name={'Name'} value={name} onChange={handleChangeValue} />
        <Input type={'text'} editClassName={'edit-team'} name={'Team'} value={team} onChange={handleChangeValue} />
        <button type="submit" className="save-btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
