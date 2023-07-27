import React from 'react';
import TextBar from '../../components/common/bar/TextBar';
import TabBar from '../../components/common/bar/TabBar';

const MyProfile = () => {
  return (
    <div>
      <TextBar title={'My Profile'} setting={'setting'} />
      <div></div>
      <TabBar myProfile={'active'} />
    </div>
  );
};

export default MyProfile;
