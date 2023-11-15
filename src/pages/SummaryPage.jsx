import { useSelector } from "react-redux";
import { ScoreCounter } from "../components/ScoreCounter";

export const SummaryPage = () => {
  const quizStop = useSelector((state) => state.quiz.quizTimerState);
  const quizOver = useSelector((state) => state.quiz.quizOver)

 
    if (quizStop   || !quizOver)
    {
      return <></>;
    }
  return (
    <div>
      <ScoreCounter />
    </div>
  );
};
