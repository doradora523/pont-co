const { Kakao } = window;

export default function initialize() {
  if (!Kakao.isInitialized()) {
    Kakao.init(process.env.REACT_APP_KAKAO);
  }
}
