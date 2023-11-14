// This is the component that will display the progress bar

import { useSelector } from "react-redux";


export const ProgressBar = () => {
  const totalQuestions = useSelector((state) => state.quiz.questions.length);
  const currenQuestion = useSelector((state) => state.quiz.currentQuestionIndex)
  console.log("total lenght",totalQuestions)
  return (
    <div>
      <progress  value={currenQuestion+1} max={totalQuestions}>  </progress>
      <span>{currenQuestion+1}/{totalQuestions}</span>
    </div>
  );
};