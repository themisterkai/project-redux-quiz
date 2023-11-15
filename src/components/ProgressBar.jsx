// This is the component that will display the progress bar

import { useSelector } from "react-redux";
import "./ProgressBar.css";

export const ProgressBar = () => {
  const totalQuestions = useSelector((state) => state.quiz.questions.length);
  const currenQuestion = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  return (
    <>
      <div className="progressBarContainer">
        <progress
          value={currenQuestion}
          max={totalQuestions - 1}
          className="progressBar"
        >
          {" "}
        </progress>
        <span>
          {currenQuestion + 1}/{totalQuestions}
        </span>
      </div>
    </>
  );
};
