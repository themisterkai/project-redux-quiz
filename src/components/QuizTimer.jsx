import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const QuizTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);
  const start = useSelector((state)=> state.quiz.currentQuestionIndex);
  const stop =  useSelector((state) => state.quiz.questions.length);

  const getTime = () => {
    setTimer((prevTimer) => prevTimer + 1000); // Increment by 1000 milliseconds

    const newMinutes = Math.floor((timer / 1000 / 60) % 60);
    const newSeconds = Math.floor((timer / 1000) % 60);

    setMinutes(newMinutes);
    setSeconds(newSeconds);
  };

  useEffect(() => {
    let interval;

    if (start >= 0 && start < stop-1) {
      interval = setInterval(() => getTime(), 1000);
    }

    return () => clearInterval(interval);
  }, [timer, start, stop]);

  return (
    <div>
      Timer: {minutes} minutes {seconds} seconds
    </div>
  );
};
