import { doc, runTransaction } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useSaveAnswerQuestion = (nextQuestion, isLastQuestion) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return async (selectedMember, currentQuestion) => {
    const saveData = {
      question: currentQuestion,
      userName: selectedMember[0],
      company: user.company,
      team: selectedMember[1],
    };
    const questionRef = doc(db, 'selections', currentQuestion);

    try {
      await runTransaction(db, async (transaction) => {
        const questionDoc = await transaction.get(questionRef);

        let userTeamPairs;
        if (!questionDoc.exists()) {
          userTeamPairs = [saveData];
        } else {
          userTeamPairs = [...questionDoc.data().userTeamPairs, saveData];
        }

        transaction.set(questionRef, { userTeamPairs });
      });
    } catch (error) {
      console.error('Error updating document: ', error);
    }

    if (isLastQuestion()) {
      navigate('/done-game');
    } else {
      nextQuestion();
    }
  };
};

export default useSaveAnswerQuestion;
