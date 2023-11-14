import { useDispatch, useSelector } from 'react-redux';

import { CurrentQuestion } from '../components/CurrentQuestion';
import { goToNextQuestion } from '../reducers/quiz';

export const QuestionFeedbackPage = () => {
  const dispatch = useDispatch();

  const currentQuestionIndex = useSelector(
    state => state.quiz.currentQuestionIndex
  );
  const answers = useSelector(state => state.quiz.answers);

  const handleGoToNextQuestion = () => {
    dispatch(goToNextQuestion());
  };

  if (answers[currentQuestionIndex] == null) {
    return <></>;
  }

  const correct = answers[currentQuestionIndex].isCorrect;

  return (
    <div>
      <CurrentQuestion />
      <div>
        <div>{correct ? 'Correct!' : 'Incorrect!'}</div>
        <button onClick={handleGoToNextQuestion}>Next Question</button>
      </div>
    </div>
  );
};
