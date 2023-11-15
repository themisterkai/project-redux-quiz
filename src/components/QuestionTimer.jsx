import { useEffect, useRef, useState } from "react";
import { submitAnswer } from "../reducers/quiz";
import { useDispatch, useSelector } from "react-redux";

// This is the component that will display the timer for each question
export const QuestionTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const index = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  // const answer = useSelector(
  //   (state) =>
  //     state.quiz.questions[state.quiz.currentQuestionIndex].correctAnswerIndex
  // );
  const notAnswered = 4;

  const dispatch = useDispatch();
  let intervalRef = useRef();

  const decreaseTimeLeft = () => {
    setTimeLeft((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const loosePoint = () => {
    setTimeIsUp(true);
    clearInterval(intervalRef.current);
    //handleTimeRanOut();
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      decreaseTimeLeft();
      if (timeLeft === 0) {
        loosePoint();
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timeLeft]);

  // const selectAnswer = () => {
  //   if (answer >= 0 && answer < 3) {
  //     // console.log("return index answer", answer + 1);
  //     return answer + 1;
  //   } else return answer - 1;
  // };

  //let incorrect;
  useEffect(() => {
    if (timeIsUp) {
      //incorrect = selectAnswer();
      dispatch(
        submitAnswer({
          questionId: index.id,
          answerIndex: 4,
        })
      );
    }
  }, [timeIsUp]);

  return (
    <div>
      <p>Time left: {timeLeft} seconds</p>
    </div>
  );
};
