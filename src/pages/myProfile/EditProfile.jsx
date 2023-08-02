import React, { useState } from 'react';
import TextBar from '../../components/common/bar/TextBar';
import Profile from '../../components/myProfile/Profile';
import Input from '../../components/common/input/Input';
import { useNavigate } from 'react-router-dom';
import './EditProfile.scss';

import { auth } from '../../config/firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';

import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const EditProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const [newName, setNewName] = useState(user.userName);
  const [newTeam, setNewTeam] = useState(user.team);

  const navigate = useNavigate();

  const handleSubmitUpdate = async (event, id) => {
    event.preventDefault();

    const userDoc = doc(db, 'users', id);
    await updateDoc(userDoc, {
      userName: newName,
      team: newTeam,
    });

    navigate('/my-profile');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TextBar title={'Edit Profile'} back={'active'} />
      <div className="profile">
        <Profile src={user.src} name={user.userName} team={user.team} edit={'edit'} />
      </div>
      <form
        onSubmit={(event) => {
          handleSubmitUpdate(event, user.uid);
        }}
        className="edit-form"
      >
        <Input
          type={'text'}
          editClassName={'edit-name'}
          name={'Name'}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          type={'text'}
          editClassName={'edit-team'}
          name={'Team'}
          value={newTeam}
          onChange={(e) => setNewTeam(e.target.value)}
        />
        <button type="submit" className="save-btn">
          Save
        </button>
      </form>
      <p className="logout" onClick={handleLogout}>
        Logout
      </p>
    </div>
  );
};

export default EditProfile;
