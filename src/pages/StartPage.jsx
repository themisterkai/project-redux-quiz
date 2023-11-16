import { useDispatch, useSelector } from "react-redux";

import { quizTimerStart } from "../reducers/quiz";
import "./startPage.css";

export const StartPage = () => {
  const dispatch = useDispatch();
  const handleStartQuiz = () => {
    dispatch(quizTimerStart()); //make it true
  };

  const quizState = useSelector((state) => state.quiz);
  const quizOver = quizState.quizOver;
  const quizTimerState = quizState.quizTimerState;

  const showStartPage = !quizOver && !quizTimerState;

  if (!showStartPage) {
    return <></>;
  }

  return (
    <div className="startPage">
      <h1>Welcome to our quiz!</h1>
      <div className="quizInfo">
        <p>Let`s test your knowledge about Sweden!</p>
        <p>
          You get 2 points per question if your answer is correct. If you answer
          incorrectly or don`t answer a question before the timer runs out, you
          loose a point.
        </p>
        <p>Good luck!</p>
        <p></p>
        <p>Number of questions: 10</p>
        <p>Time per question: 10 seconds</p>
        <p>Maximum points: 20 points</p>
        <button onClick={handleStartQuiz}>Start quiz and timer!</button>
      </div>
    </div>
  );
};
