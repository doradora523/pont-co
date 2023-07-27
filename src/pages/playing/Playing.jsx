import React from 'react';
import TextBar from '../../components/common/bar/TextBar';
import TabBar from '../../components/common/bar/TabBar';

const Playing = () => {
  return (
    <div>
      <TextBar title={'Playing'} back={'back'} />
      <div></div>
      <TabBar playing={'active'} />
    </div>
  );
};

export default Playing;
