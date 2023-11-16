import { useDispatch, useSelector } from 'react-redux';
import { CurrentQuestion } from '../components/CurrentQuestion';
import { goToNextQuestion } from '../reducers/quiz';
import { SummaryPage } from './SummaryPage';
import './QuestionFeedbackPage.css';

export const QuestionFeedbackPage = () => {
  const quizState = useSelector(state => state.quiz);
  const quizOver = quizState.quizOver;
  const dispatch = useDispatch();
  const currentQuestionIndex = useSelector(
    state => state.quiz.currentQuestionIndex
  );
  const answers = useSelector(
    state => state.quiz.answers[currentQuestionIndex]
  );
  const options = useSelector(
    state => state.quiz.questions[currentQuestionIndex].options
  );
  const correctAnswerIndex = useSelector(
    state => state.quiz.questions[currentQuestionIndex].correctAnswerIndex
  );
  const totalQuestions = useSelector(state => state.quiz.questions.length);

  // const quizStop = useSelector(state => state.quiz.quizTimerState);

  const handleGoToNextQuestion = () => {
    dispatch(goToNextQuestion());
  };

  if (answers == null /*|| !quizStop*/) {
    return <></>;
  }
  if (quizOver) {
    return <SummaryPage />;
  }

  const correct = answers.isCorrect;

  return (
    <div className="feedbackContainer">
      <CurrentQuestion />
      <div className="feedbackOptionContainer">
        <div>
          {correct
            ? 'Correct!'
            : answers.answerIndex === 4
            ? 'Time ran out! You lost a point 😞'
            : 'Incorrect!'}
        </div>
        {options.slice(0, 4).map((option, index) => (
          <div key={index} className="feedbackOptions">
            <button
              className={`feedbackButton ${
                index === correctAnswerIndex
                  ? 'correct'
                  : index === answers.answerIndex
                  ? 'incorrect'
                  : ''
              }`}
              disabled
            >
              {option}
            </button>
          </div>
        ))}
        <div className="nextButtonContainer">
          <button className="nextButton" onClick={handleGoToNextQuestion}>
            {currentQuestionIndex < totalQuestions - 1
              ? 'Next Question'
              : 'Check score'}
          </button>
        </div>
      </div>
    </div>
  );
};
