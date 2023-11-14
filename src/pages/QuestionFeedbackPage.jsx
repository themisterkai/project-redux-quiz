import { useDispatch, useSelector } from 'react-redux';

import { CurrentQuestion } from '../components/CurrentQuestion';
import { goToNextQuestion } from '../reducers/quiz';


export const QuestionFeedbackPage = () => {
  const dispatch = useDispatch();

  const currentQuestionIndex = useSelector(
    state => state.quiz.currentQuestionIndex
  );
  const answers = useSelector(state => state.quiz.answers[currentQuestionIndex]);


  const options = useSelector((state) => state.quiz.questions[currentQuestionIndex].options);
  console.log("option in feedback" ,options);


  const handleGoToNextQuestion = () => {
    dispatch(goToNextQuestion());
  };

  if (answers == null) {
    return <></>;
  }

  const correct = answers.isCorrect;


  return (
    <div>
      <CurrentQuestion />
      <div>
        <div>{correct ? 'Correct!' : 'Incorrect!'}</div>
        {options.map((option,index)=>(
          <div key={index}>
          <button disabled> {option}</button>
          </div>
        ))}

        <button onClick={handleGoToNextQuestion}>Next Question</button>
      </div>
    </div>
  );
};
