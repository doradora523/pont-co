import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbRotate } from 'react-icons/tb';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { ArcElement, CategoryScale, DoughnutController, Title, Tooltip } from 'chart.js';
import './PlayingGame.scss';
import TextBar from '../../components/common/bar/TextBar';
import TabBar from '../../components/common/bar/TabBar';
import MemberButton from '../../components/playing/MemberButton';
import { useAnsweredQuestions } from '../../hooks/useAnsweredQuestions';
import { options } from '../../static/doughnutOptions';
import { useSelector } from 'react-redux';
import Loading from '../../components/common/loading/Loading';

Chart.register(DoughnutController, ArcElement, CategoryScale, Tooltip, Title);

const PlayingGame = () => {
  const [startMemberIdx, setStartMemberIdx] = useState(0);
  const members = useSelector((state) => state.members.membersList.map((member) => [member.userName, member.team]));
  const { questions, loading } = useSelector((state) => state.questions);
  const endIndex = Math.min(startMemberIdx + 6, members.length);
  const { answeredQuestions, nextQuestion, isLastQuestion } = useAnsweredQuestions(1, questions);
  const tatalQuestions = questions.length;
  const currentQuestion = questions[answeredQuestions - 1];

  const navigate = useNavigate();

  /** DoughnutGraph Data */
  const data = {
    datasets: [
      {
        data: [answeredQuestions, tatalQuestions - answeredQuestions],
        backgroundColor: ['#BE9FE1', '#f4ecf8'],
        borderWidth: 0,
        borderRadius: 50,
      },
    ],
  };

  const shuffleMembers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleShuffle = () => {
    setStartMemberIdx((prevIdx) => (prevIdx + 6 < members.length ? prevIdx + 6 : 0));
  };

  const handleClick = (e) => {
    const selectedMember = JSON.parse(e.currentTarget.value);
    const saveData = { question: currentQuestion, userName: selectedMember[0], team: selectedMember[1] };
    console.log(saveData);

    if (isLastQuestion()) {
      navigate('/done-game');
    } else {
      nextQuestion();
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <TextBar title={'Playing'} back={'back'} />
      <div className="graph-wrapper">
        <div className="question-number">{`${answeredQuestions} of ${tatalQuestions}`}</div>
        <Doughnut data={data} options={options} />
        <div className="question-content">{questions[answeredQuestions - 1]}</div>
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
