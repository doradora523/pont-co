import React, { useState } from 'react';
import { GoPerson } from 'react-icons/go';
import { PiShootingStarLight } from 'react-icons/pi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import TextBar from '../../components/common/bar/TextBar';
import TabBar from '../../components/common/bar/TabBar';
import Profile from '../../components/myProfile/Profile';
import Total from '../../components/myProfile/Total';
import './MyProfile.scss';

const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const myProfile = {
    src: 'https://file.newswire.co.kr/data/datafile2/thumb_640/2023/05/1893390626_20230503155222_9195618912.jpg',
    name: '박보영',
    team: '경영지원팀',
  };
  const totalDummy = [
    {
      title: 'Total Selected',
      number: 246,
    },
    {
      title: 'Our Team',
      number: 35,
    },
  ];
  const company = 'A사';
  const itemDummy = [
    {
      number: 3,
      title: '조화롭게 소통하는 사람',
    },
    {
      number: 7,
      title: '동료들을 배려하는 배려왕',
    },
    {
      number: 10,
      title: '꾸준히 성장하는 사람',
    },
    {
      number: 15,
      title: '리더쉽이 뛰어난 사람',
    },
    {
      number: 3,
      title: '조화롭게 소통하는 사람',
    },
    {
      number: 7,
      title: '동료들을 배려하는 배려왕',
    },
    {
      number: 10,
      title: '꾸준히 성장하는 사람',
    },
    {
      number: 15,
      title: '리더쉽이 뛰어난 사람',
    },
    {
      number: 3,
      title: '조화롭게 소통하는 사람',
    },
    {
      number: 7,
      title: '동료들을 배려하는 배려왕',
    },
    {
      number: 10,
      title: '꾸준히 성장하는 사람',
    },
    {
      number: 15,
      title: '리더쉽이 뛰어난 사람',
    },
  ];

  const handleTogleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-wrapper">
      <TextBar title={'My Profile'} setting={'setting'} />
      <Profile src={myProfile.src} name={myProfile.name} team={myProfile.team} />
      <div className="total-wrapper">
        <Total icon={<PiShootingStarLight />} number={totalDummy[0].number} title={totalDummy[0].title} />
        <Total icon={<GoPerson />} number={totalDummy[1].number} title={totalDummy[1].title} />
      </div>
      <div className={`selected-list ${isOpen ? 'isOpen' : ''}`}>
        <div className="list-top">
          <h3 className="list-title">{`내가 달성한 ${company} 미션 기여도`}</h3>
          <div className="togle-btn" onClick={handleTogleBtn}>
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
        <ul className="list-items">
          {itemDummy.map((item) => (
            <li className="list-item">
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
