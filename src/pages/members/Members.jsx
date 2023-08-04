import React from 'react';
import { useSelector } from 'react-redux';
import './Members.scss';

import { NO_MEMBER } from '../../static/constants';
import TextBar from '../../components/common/bar/TextBar';
import Member from '../../components/members/Member';
import TabBar from '../../components/common/bar/TabBar';
import Loading from '../../components/common/loading/Loading';

const Members = () => {
  const { membersList } = useSelector((state) => state.members);
  const { isLoading } = useSelector((state) => state.auth);

  return isLoading ? (
    <Loading state={'login'} />
  ) : (
    <div className="members">
      <TextBar title={'Members'} add={'add'} />
      <div className="member-list">
        {membersList?.map((member, index) => (
          <Member key={index} src={member.src} name={member.userName} team={member.team} />
        ))}
      </div>
      {membersList.length === 0 && (
        <p className="noMember">
         {NO_MEMBER}
        </p>
      )}
      <TabBar member={'active'} />
    </div>
  );
};

export default Members;
