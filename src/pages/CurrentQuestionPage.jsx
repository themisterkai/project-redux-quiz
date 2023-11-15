import { useSelector } from "react-redux";
import "./currentQuestionPage.css";
import { CurrentQuestion } from "../components/CurrentQuestion";
import { AnswerOptions } from "../components/AnswerOptions";
import { QuestionTimer } from "../components/QuestionTimer";

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
      <QuestionTimer />
      <AnswerOptions />
    </div>
  );
};
