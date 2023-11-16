import { useDispatch, useSelector } from "react-redux";

import { ScoreCounter } from "../components/ScoreCounter";
import { restart } from "../reducers/quiz";
import "./summaryPage.css";

export const SummaryPage = () => {
  const dispatch = useDispatch();

  const answers = useSelector((state) => state.quiz.answers);

  const questions = useSelector((state) => state.quiz.questions);

  const handleRestart = () => {
    dispatch(restart());
  };
  return (
    <div className="summaryContainer">
      <h2>You finished the quiz, well done! 🏆</h2>
      <h3>
        Total points: <ScoreCounter />{" "}
      </h3>
      <ul>
        {answers.map(({ questionId, isCorrect, answerIndex }) => (
          <li key={questionId}>
            <p>
              {`
              ${questionId}: 
              ${
                questions.filter(({ id }) => id === questionId)[0].questionText
              } - 
  
              ${answerIndex === 4 ? "❌ ⏰" : isCorrect ? "✅" : "❌"}
              `}
            </p>
          </li>
        ))}
      </ul>

      <button onClick={handleRestart}>Try again?</button>
    </div>
    
  );
};
