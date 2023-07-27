import React from 'react';
import TextBar from '../../components/common/bar/TextBar';
import Member from '../../components/members/Member';
import './Members.scss';
import TabBar from '../../components/common/bar/TabBar';

const Members = () => {
  const membersDummy = [
    {
      src: 'https://file.newswire.co.kr/data/datafile2/thumb_640/2023/05/1893390626_20230503155222_9195618912.jpg',
      name: '박보영',
      team: '경영지원팀',
    },
    {
      src: 'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/05/25/e35e2b3c-8a31-484b-8d1c-7ee15db02c9f.jpg',
      name: '한지민',
      team: '기술개발팀',
    },
    {
      src: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjVfMTAx/MDAxNTg3ODE5MDEzNTA5.p3hCGnZHNY3jPLMhrHy1aXH9t20SLMsdfbnQMAbzY-wg.xfA_E3X5uMPOq3zabKoaITYGZXKkgw5TxEtMjPUmCsAg.PNG.thirdsky30/CropArea0002.png?type=w800',
      name: '공유',
      team: '영업관리팀',
    },
    {
      src: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20211201100412_b0f9d51fd01e217453d0fc901585d99c.jpg',
      name: '이동욱',
      team: '기술지원팀',
    },
  ];

  return (
    <div className="members">
      <TextBar title={'Members'} add={'add'} />
      {membersDummy?.map((member, index) => (
        <Member key={index} src={member.src} name={member.name} team={member.team} />
      ))}
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
