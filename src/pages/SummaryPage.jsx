import { useSelector } from "react-redux";
import { ScoreCounter } from "../components/ScoreCounter";

export const SummaryPage = () => {
  const quizStop = useSelector((state) => state.quiz.quizTimerState);

    if (quizStop)
    {
      return <></>;
    }
  return (
    <div>
      <ScoreCounter />
    </div>
  );
};
