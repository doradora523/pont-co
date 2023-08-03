import React from 'react';
import TextBar from '../../components/common/bar/TextBar';
import Member from '../../components/members/Member';
import './Members.scss';
import TabBar from '../../components/common/bar/TabBar';
import { membersDummy } from '../../static/membersDummy';
import { useSelector } from 'react-redux';

const Members = () => {
  const { membersList } = useSelector((state) => state.members);
  
  return (
    <div className="members">
      <TextBar title={'Members'} add={'add'} />
      <div className="member-list">
        {membersList?.map((member, index) => (
          <Member key={index} src={member.src} name={member.userName} team={member.team} />
        ))}
      </div>
      {membersDummy.length === 0 && (
        <p className="noMember">
          가입한 멤버가 없습니다.
          <br />
          멤버를 초대해주세요!
        </p>
      )}
      <TabBar member={'active'} />
    </div>
  );
};

export default Members;
