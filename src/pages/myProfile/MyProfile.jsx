import React, { useEffect, useState } from 'react';
import { GoPerson } from 'react-icons/go';
import { PiShootingStarLight } from 'react-icons/pi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import TextBar from '../../components/common/bar/TextBar';
import TabBar from '../../components/common/bar/TabBar';
import Profile from '../../components/myProfile/Profile';
import Total from '../../components/myProfile/Total';
import './MyProfile.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectionsData } from '../../redux/slices/authSlice';

import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, selections } = useSelector((state) => state.auth);
  const { membersList } = useSelector((state) => state.members);
  const totalSelections = selections.reduce((sum, entry) => sum + entry.count, 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTogleBtn = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const gotSelections = async () => {
      const selectionsCollectionRef = collection(db, 'selections');
      const snapshot = await getDocs(selectionsCollectionRef);

      const docs = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
      const filteredDocs = docs.filter((doc) => doc.data.userTeamPairs.some((item) => item.userName === user.userName));

      const matchingUserEntries = filteredDocs.map((doc) => {
        const matchedPairs = doc.data.userTeamPairs.filter((item) => item.userName === user.userName);

        return { question: doc.id, count: matchedPairs.length };
      });

      dispatch(getSelectionsData(matchingUserEntries));
    };
    gotSelections();
  }, [user.userName, dispatch]);

  return (
    <div className="profile-wrapper">
      <TextBar title={'My Profile'} setting={'setting'} />
      <Profile src={user.src} name={user.userName} team={user.team} />
      <div className="total-wrapper">
        <Total
          onClick={handleTogleBtn}
          icon={<PiShootingStarLight />}
          number={totalSelections}
          title="Total Selected"
        />
        <Total onClick={() => navigate('/')} icon={<GoPerson />} number={membersList.length} title="Company Members" />
      </div>
      <div className={`selected-list ${isOpen ? 'isOpen' : ''}`}>
        <div className="list-top">
          <h3 className="list-title">{`내가 달성한 [${user.company}] 미션 기여도`}</h3>
          <div className="togle-btn" onClick={handleTogleBtn}>
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
        <ul className="list-items">
          {selections.map((item, i) => (
            <li className="list-item" key={i}>
              <div className="number-box">
                <p>{item.count}</p>
              </div>
              <span className="item-title">{item.question}</span>
            </li>
          ))}
        </ul>
      </div>
      <TabBar myProfile={'active'} />
    </div>
  );
};

export default MyProfile;
