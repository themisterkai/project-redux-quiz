import { useSelector } from "react-redux";
import { Question } from "./Question";
import { AnswerOptions } from "./AnswerOptions";

export const QuestionFeedback = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  // {question[questionIndex]}
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <Question />
      <AnswerOptions /> 
    </div>
  );
};
