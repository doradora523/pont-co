import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TbRotate } from 'react-icons/tb';
import './PlayingGame.scss';

import { useAnsweredQuestions } from '../../hooks/useAnsweredQuestions';
import useSaveAnswerQuestion from '../../hooks/useSaveAnswerQuestion';
import DoughnutGraph from '../../components/playing/DoughnutGraph';
import TextBar from '../../components/common/bar/TextBar';
import TabBar from '../../components/common/bar/TabBar';
import MemberButton from '../../components/playing/MemberButton';
import Loading from '../../components/common/loading/Loading';

const PlayingGame = () => {
  const [startMemberIdx, setStartMemberIdx] = useState(0);
  const members = useSelector((state) => state.members.membersList.map((member) => [member.userName, member.team]));
  const { questions, loading } = useSelector((state) => state.questions);

  const endIndex = Math.min(startMemberIdx + 6, members.length);
  const totalQuestions = questions.length;
  const { answeredQuestions, nextQuestion, isLastQuestion } = useAnsweredQuestions(1, totalQuestions);
  const currentQuestion = questions[answeredQuestions - 1];

  const shuffleMembers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleShuffle = () => {
    setStartMemberIdx((prevIdx) => (prevIdx + 6 < members.length ? prevIdx + 6 : 0));
  };
  const handleAnswerQuestion = useSaveAnswerQuestion(nextQuestion, isLastQuestion);

  const handleClick = (e) => {
    const selectedMember = JSON.parse(e.currentTarget.value);
    handleAnswerQuestion(selectedMember, currentQuestion);
  };

  return loading ? (
    <Loading state="playing" />
  ) : (
    <div>
      <TextBar title={'Playing'} back={'back'} />
      <div className="graph-wrapper">
        <DoughnutGraph answeredQuestions={answeredQuestions} totalQuestions={totalQuestions} questions={questions} />
      </div>
      <div className="btn-wrapper">
        <button onClick={handleShuffle} className="shuffle-btn">
          <TbRotate />
        </button>
        {/* members 배열을 랜덤하게 섞은 후, startMemberIdx부터 endIndex까지의 요소를 선택 */}
        {(() => {
          const shuffledMembers = [...members];
          shuffleMembers(shuffledMembers);
          return shuffledMembers
            .slice(startMemberIdx, endIndex)
            .map((member, index) => <MemberButton key={index} member={member} onClick={handleClick} />);
        })()}
      </div>
      <TabBar playing={'active'} />
    </div>
  );
};

export default PlayingGame;
