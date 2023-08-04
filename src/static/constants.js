/** components */
// AuthBar
const LOGIN = 'Login';
const SIGN_UP = 'Sign-up';

// SelectInput
const ADD_COMPANY = 'Add Company';

// ShareKakao
const SHARE_URL = 'http://localhost:3000/splash';
const OBJECT_TYPE = 'feed';
const CONTENT_TITLE = '임직원 블라인드 칭찬 서비스';
const CONTENT_DESCRIPTION_1 = 'PONT-CO에서';
const CONTENT_DESCRIPTION_2 = '님이 당신을 칭찬했습니다. 확인해 보시겠습니까?';
const BUTTON_TITLE = '내 칭찬 보러가기';

// Loading
const LOADING_TITLE = '질문을 생성중입니다.\n잠시만 기다려주세요!';

/** hooks */
// useFormValidation & authSlice
const INFORM_EMAIL = '이메일을 입력해주세요.';
const ERROR_EMAIL = '유효한 이메일 형식이 아닙니다.';
const USED_EMAIL = '이미 사용중인 이메일입니다.';
const INFORM_PASSWORD = '숫자와 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.';
const INFORM_PASSWORD_PLACEHOLDER = '비밀번호를 입력해주세요.';
const INFORM_PASSWORD_CHECK_PLACEHOLDER = '비밀번호를 확인해주세요.';
const CHECK_PASSWORD = '확인을 위하여 위와 동일하게 입력해주세요.';
const WRONG_PASSWORD = '비밀번호가 틀렸습니다. 다시 입력해주세요.';
const INFORM_USERNAME = '이름을 입력해주세요.';
const INFORM_COMPANY = '회사를 선택해주세요.';
const INFORM_TEAM = '부서를 입력해주세요.';

/** pages */
// Login
const ERROR_LOGIN = '일치하는 회원정보가 없거나, 비밀번호가 일치하지 않습니다.';
const LOGO = 'PONT\nCO';

// SignUp
const DEFAULT_PROFILE_URL = 'https://i.pinimg.com/originals/68/b1/77/68b177feaf7970250997c89ac56c13ca.jpg';
const INFORM_ALERT = '회원가입 양식에 맞게 작성해주세요.';

// Members
const NO_MEMBER = '가입한 멤버가 없습니다.\n멤버를 초대해주세요!';

// EditProfile
const LOGOUT_FAILURE = '로그아웃에 실패했습니다.';
const SAVE = 'Save';
const LOGOUT = 'Logout';

// OnBoarding
const BOX_1_CONTENTS = [
  '책임감이 강한 사람',
  '말을 잘 들어주는 사람',
  '사무실 분위기 메이커',
  '같이 식사하고 싶은 사람',
];
const ON_BOARDING_TITLE_1 = '동료들이 보는 나';
const ON_BOARDING_TITLE_2 = '는\n어떤 사람일까?';
const ON_BOARDING_CONTENT = '익명으로 투표해서\n응원의 마음을 전해요';

// Splash
const SPLASH = '누가\n너를\n인정하고\n있는지\n알려줄게';

// DoneGame
const DONE_MESSAGE = '칭찬할 동료 선택이\n완료되었습니다.';
const INVITE_BTN = '내가 칭찬한 동료 초대하기';
const NAVIGATE_BTN = '내가 받은 칭찬 보러가기';

// Playing
const START_TEXT = 'Start Compliments';

export {
  LOGIN,
  SIGN_UP,
  ADD_COMPANY,
  SHARE_URL,
  OBJECT_TYPE,
  CONTENT_TITLE,
  CONTENT_DESCRIPTION_1,
  CONTENT_DESCRIPTION_2,
  BUTTON_TITLE,
  LOADING_TITLE,
  INFORM_EMAIL,
  ERROR_EMAIL,
  USED_EMAIL,
  INFORM_PASSWORD,
  CHECK_PASSWORD,
  WRONG_PASSWORD,
  INFORM_USERNAME,
  INFORM_COMPANY,
  INFORM_TEAM,
  INFORM_PASSWORD_PLACEHOLDER,
  INFORM_PASSWORD_CHECK_PLACEHOLDER,
  ERROR_LOGIN,
  LOGO,
  DEFAULT_PROFILE_URL,
  INFORM_ALERT,
  NO_MEMBER,
  LOGOUT_FAILURE,
  SAVE,
  LOGOUT,
  BOX_1_CONTENTS,
  ON_BOARDING_TITLE_1,
  ON_BOARDING_TITLE_2,
  ON_BOARDING_CONTENT,
  SPLASH,
  DONE_MESSAGE,
  INVITE_BTN,
  NAVIGATE_BTN,
  START_TEXT,
};
