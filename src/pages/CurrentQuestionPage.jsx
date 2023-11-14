import { useSelector } from 'react-redux';

import { CurrentQuestion } from '../components/CurrentQuestion';
import { AnswerOptions } from '../components/AnswerOptions';

export const CurrentQuestionPage = () => {
  const showQuestionFeedback = useSelector(
    state => state.quiz.showQuestionFeedback
  );
  return showQuestionFeedback ? (
    <></>
  ) : (
    <div>
      <CurrentQuestion />
      <AnswerOptions />
    </div>
  );
};
