import React, { useRef, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import './Profile.scss';

const Profile = ({ src, name, team, edit }) => {
  const [newSrc, setNewSrc] = useState(src);
  const fileInputRef = useRef();

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-info">
      <div className="profile-img-box">
        <img src={newSrc} alt="My Profile" />
      </div>
      {edit && (
        <div className="edit" onClick={handleEditClick}>
          <FaPen />
          <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
        </div>
      )}
      <p className="profile-name">{name}</p>
      <p className="profile-team">{team}</p>
    </div>
  );
};

export default Profile;
