const { Kakao } = window;

export const ShareKakao = (userName, shareImg) => {
  const sharedUrl = 'http://localhost:3000';

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '임직원 블라인드 칭찬 서비스',
      description: `PONT-CO에서 ${userName} 님이 당신을 칭찬했습니다. 확인해 보시겠습니까?`,
      imageUrl: shareImg,
      link: {
        mobileWebUrl: sharedUrl,
        webUrl: sharedUrl,
      },
    },
    buttons: [
      {
        title: '내 칭찬 보러가기',
        link: {
          mobileWebUrl: sharedUrl,
          webUrl: sharedUrl,
        },
      },
    ],
  });
};
