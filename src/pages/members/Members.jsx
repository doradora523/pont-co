import React from 'react';
import TextBar from '../../components/common/bar/TextBar';
import Member from '../../components/members/Member';
import './Members.scss';
import TabBar from '../../components/common/bar/TabBar';
import { membersDummy } from '../../static/membersDummy';

const Members = () => {
  return (
    <div className="members">
      <TextBar title={'Members'} add={'add'} />
      <div className="member-list">
        {membersDummy?.map((member, index) => (
          <Member key={index} src={member.src} name={member.name} team={member.team} />
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
