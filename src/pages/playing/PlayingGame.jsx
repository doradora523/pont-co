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
import { membersDummy } from '../../static/membersDummy';
import { questionsDummy } from '../../static/questionsDummy';
import { useAnsweredQuestions } from '../../hooks/useAnsweredQuestions';
import { options } from '../../static/doughnutOptions';

Chart.register(DoughnutController, ArcElement, CategoryScale, Tooltip, Title);

const PlayingGame = () => {
  const totalQuestions = questionsDummy.length;
  const [startMemberIdx, setStartMemberIdx] = useState(0);
  const { answeredQuestions, nextQuestion, isLastQuestion } = useAnsweredQuestions(1, totalQuestions);

  const navigate = useNavigate();

  /** DoughnutGraph Data */
  const data = {
    datasets: [
      {
        data: [answeredQuestions, totalQuestions - answeredQuestions],
        backgroundColor: ['#BE9FE1', '#f4ecf8'],
        borderWidth: 0,
        borderRadius: 50,
      },
    ],
  };

  const handleShuffle = () => {
    // Update the start index to show the next 6 members.
    // If we have reached the end of the array, go back to the start.
    setStartMemberIdx((prevIdx) => {
      if (prevIdx + 6 < membersDummy.length) {
        return prevIdx + 6;
      } else {
        return 0;
      }
    });
  };

  const handleClick = (e) => {
    const selectedMember = JSON.parse(e.currentTarget.value);
    console.log(selectedMember);

    if (isLastQuestion()) {
      /** TODO: 페이지 이동 전, 클릭한 버튼의 데이터를 서버에 저장할 로직 구현 필요 */
      navigate('/done-game');
    } else {
      nextQuestion();
    }
  };

  return (
    <div>
      <TextBar title={'Playing'} back={'back'} />
      <div className="graph-wrapper">
        <div className="question-number">{`${answeredQuestions} of ${totalQuestions}`}</div>
        <Doughnut data={data} options={options} />
        <div className="question-content">{questionsDummy[answeredQuestions - 1]}</div>
      </div>
      <div className="btn-wrapper">
        <button onClick={handleShuffle} className="shuffle-btn">
          <TbRotate />
        </button>
        {membersDummy.slice(startMemberIdx, startMemberIdx + 6).map((member, index) => (
          <MemberButton key={index} member={member} onClick={handleClick} />
        ))}
      </div>
      <TabBar playing={'active'} />
    </div>
  );
};

export default PlayingGame;
