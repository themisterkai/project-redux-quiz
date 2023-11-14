import { useSelector } from "react-redux";
import { CurrentQuestion } from "../components/CurrentQuestion";
import { AnswerOptions } from "../components/AnswerOptions";

export const CurrentQuestionPage = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  // {question[questionIndex]}
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <CurrentQuestion />
      <AnswerOptions />
    </div>
  );
};
