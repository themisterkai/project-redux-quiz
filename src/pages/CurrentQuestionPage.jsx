import { useSelector } from "react-redux";

import { AnswerOptions } from "../components/AnswerOptions";
import { CurrentQuestion } from "../components/CurrentQuestion";
import { QuestionTimer } from "../components/QuestionTimer";
import "./currentQuestionPage.css";

export const CurrentQuestionPage = () => {
  const quizState = useSelector((state) => state.quiz);
  const currentQuestionIndex = quizState.currentQuestionIndex;
  const answers = quizState.answers;
  const quizOver = quizState.quizOver;
  const quizTimerState = quizState.quizTimerState;

  const quizNotStarted = !quizOver && !quizTimerState;
  const hasAnswers = answers[currentQuestionIndex] != null;

  if (hasAnswers || quizNotStarted) {
    return <></>;
  }

  return (
    <div className="questionPage">
      <CurrentQuestion />
      <QuestionTimer />
      <AnswerOptions />
    </div>
  );
};
