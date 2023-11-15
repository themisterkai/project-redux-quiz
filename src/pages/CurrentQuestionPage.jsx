import { useSelector } from "react-redux";
import "./currentQuestionPage.css";
import { CurrentQuestion } from "../components/CurrentQuestion";
import { AnswerOptions } from "../components/AnswerOptions";

export const CurrentQuestionPage = () => {
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  const answers = useSelector((state) => state.quiz.answers);
  return answers[currentQuestionIndex] != null ? (
    <></>
  ) : (
    <div className="questionPage">
      <CurrentQuestion />
      <AnswerOptions />
    </div>
  );
};
