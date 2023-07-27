import React from 'react';
import TextBar from '../../components/common/bar/TextBar';
import TabBar from '../../components/common/bar/TabBar';
import Profile from '../../components/myProfile/Profile';

const MyProfile = () => {
  const myProfile = {
    src: 'https://file.newswire.co.kr/data/datafile2/thumb_640/2023/05/1893390626_20230503155222_9195618912.jpg',
    name: '박보영',
    team: '경영지원팀',
  };
  return (
    <div className='profile-wrapper'>
      <TextBar title={'My Profile'} setting={'setting'} />
      <div className='profile'>
        <Profile src={myProfile.src} name={myProfile.name} team={myProfile.team} />
      </div>
      <TabBar myProfile={'active'} />
    </div>
  );
};

export default MyProfile;
