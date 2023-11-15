import { useDispatch } from "react-redux";
import { quizTimerStart } from "../reducers/quiz";
import "./startPage.css";

export const StartPage = () => {
  //const handleQuizTimer
  const dispatch = useDispatch();
 const handleStartQuiz = () =>{
    dispatch(quizTimerStart(true))
  }

  return (
    <div className="startPage">
      <h1>Welcome to our quiz!</h1>
      <div className="quizInfo">
        <p>Some info about the quiz... 🤔</p>
        <p>Number of questions: 10</p>
        <p>Time per question: 10 seconds</p>
        <p>Maximum points: 20 points (2 / question)</p>
      </div>
      <button onClick={handleStartQuiz}>Start quiz and timer!</button>
    </div>
  );
};
