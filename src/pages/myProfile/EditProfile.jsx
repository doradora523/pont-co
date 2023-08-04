import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './EditProfile.scss';

import TextBar from '../../components/common/bar/TextBar';
import Profile from '../../components/myProfile/Profile';
import Input from '../../components/common/input/Input';

import { logoutFailure, logoutStart, logoutSuccess } from '../../redux/slices/authSlice';
import { LOGOUT, LOGOUT_FAILURE, SAVE } from '../../static/constants';

import { auth } from '../../config/firebase';
import { db } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';

const EditProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const [newName, setNewName] = useState(user.userName);
  const [newTeam, setNewTeam] = useState(user.team);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      dispatch(logoutStart());
      await signOut(auth);
      dispatch(logoutSuccess());
      navigate('/login');
    } catch (error) {
      dispatch(logoutFailure(LOGOUT_FAILURE));
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
          {SAVE}
        </button>
      </form>
      <p className="logout" onClick={handleLogout}>
        {LOGOUT}
      </p>
    </div>
  );
};

export default EditProfile;
