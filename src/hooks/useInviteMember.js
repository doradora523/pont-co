import { useSelector } from 'react-redux';
import { ShareKakao } from '../components/common/kakao/ShareKakao';

export const useInviteMember = () => {
  const { user } = useSelector((state) => state.auth);
  const shareImg = 'https://color-hex.org/colors/be9fe0.png';

  return () => {
    ShareKakao(user.userName, shareImg);
  };
};
