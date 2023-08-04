import { BUTTON_TITLE, CONTENT_DESCRIPTION_1, CONTENT_DESCRIPTION_2, CONTENT_TITLE, OBJECT_TYPE, SHARE_URL } from "../../../static/constants";

const { Kakao } = window;

export const ShareKakao = (userName, shareImg) => {
  Kakao.Share.sendDefault({
    objectType: OBJECT_TYPE,
    content: {
      title: CONTENT_TITLE,
      description: `${CONTENT_DESCRIPTION_1} ${userName} ${CONTENT_DESCRIPTION_2}`,
      imageUrl: shareImg,
      link: {
        mobileWebUrl: SHARE_URL,
        webUrl: SHARE_URL,
      },
    },
    buttons: [
      {
        title: BUTTON_TITLE,
        link: {
          mobileWebUrl: SHARE_URL,
          webUrl: SHARE_URL,
        },
      },
    ],
  });
};
