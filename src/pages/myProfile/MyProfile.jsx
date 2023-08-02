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
import { useSelector } from 'react-redux';
import { itemsDummy } from '../../static/itemsDummy';
import { totalDummy } from '../../static/totalDummy';

const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { membersList } = useSelector((state) => state.members);
  const navigate = useNavigate();
  console.log(user);
  const handleTogleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-wrapper">
      <TextBar title={'My Profile'} setting={'setting'} />
      <Profile src={user.src} name={user.userName} team={user.team} />
      <div className="total-wrapper">
        <Total
          onClick={handleTogleBtn}
          icon={<PiShootingStarLight />}
          number={totalDummy[0].number}
          title={totalDummy[0].title}
        />
        <Total
          onClick={() => navigate('/')}
          icon={<GoPerson />}
          number={membersList.length}
          title={totalDummy[1].title}
        />
      </div>
      <div className={`selected-list ${isOpen ? 'isOpen' : ''}`}>
        <div className="list-top">
          <h3 className="list-title">{`내가 달성한 "${user.company}"사 미션 기여도`}</h3>
          <div className="togle-btn" onClick={handleTogleBtn}>
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
        <ul className="list-items">
          {itemsDummy.map((item, i) => (
            <li className="list-item" key={i}>
              <div className="number-box">
                <p>{item.number}</p>
              </div>
              <span className="item-title">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <TabBar myProfile={'active'} />
    </div>
  );
};

export default MyProfile;
