import React, { useRef, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { db } from '../../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { useSelector } from 'react-redux';
import './Profile.scss';

const Profile = ({ src, name, team, edit }) => {
  const { user } = useSelector((state) => state.auth);
  const [newSrc, setNewSrc] = useState(src);
  const fileInputRef = useRef();

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const result = reader.result;
        setNewSrc(result);

        // 이미지를 Firebase Storage에 저장합니다.
        const storage = getStorage();
        const storageRef = ref(storage, 'profileImages/' + file.name);
        await uploadString(storageRef, result, 'data_url');

        // 다운로드 URL을 가져와 Firestore의 사용자 문서에 저장합니다.
        const downloadURL = await getDownloadURL(storageRef);

        const userDoc = doc(db, 'users', user.uid);
        await updateDoc(userDoc, {
          src: downloadURL,
        });
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
