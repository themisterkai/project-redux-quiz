import { useSelector } from 'react-redux';

export const CurrentQuestion = () => {
  const question = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="questionText">
      <h1>{question.questionText}</h1>
      <img src={`./` + question.id + `.jpg`} />
    </div>
  );
};
