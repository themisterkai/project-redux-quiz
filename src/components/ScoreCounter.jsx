import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// This is the component that will display the user's current score
export const ScoreCounter = () => {
  const [score, setScore] = useState(0);
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const answers = useSelector((state) => state.quiz.answers);

  useEffect(() => {
    if (answers && currentQuestionIndex !== undefined) {
      const answer = answers[currentQuestionIndex];

      if (answer !== undefined) {
        if (answer.isCorrect) {
          setScore((prevScore) => prevScore + 2);
          console.log("score added",score);

        } else {
          setScore((prevScore) => prevScore - 1);
          console.log("score subtracted",score);
        }
      }
    }
  }, [answers, currentQuestionIndex]);

  return <> {score}</>;
};
