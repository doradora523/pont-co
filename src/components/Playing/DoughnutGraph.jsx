import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { options } from '../../static/doughnutOptions';
import './DoughnutGraph.scss';

import { Chart } from 'chart.js';
import { ArcElement, CategoryScale, DoughnutController, Title, Tooltip } from 'chart.js';

Chart.register(DoughnutController, ArcElement, CategoryScale, Tooltip, Title);

const DoughnutGraph = ({ answeredQuestions, totalQuestions, questions }) => {
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

  return (
    <>
      <div className="question-number">{`${answeredQuestions} of ${totalQuestions}`}</div>
      <Doughnut data={data} options={options} />
      <div className="question-content">{questions[answeredQuestions - 1]}</div>
    </>
  );
};

export default DoughnutGraph;
