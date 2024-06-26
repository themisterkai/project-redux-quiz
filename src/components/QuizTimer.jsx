import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuizTimer } from '../reducers/quiz';

export const QuizTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);
  const start = useSelector(state => state.quiz.quizTimerState);
  const dispatch = useDispatch();

  const getTime = () => {
    setTimer(prevTimer => prevTimer + 1000);

    const newMinutes = Math.floor((timer / 1000 / 60) % 60);
    const newSeconds = Math.floor((timer / 1000) % 60);

    setMinutes(newMinutes);
    setSeconds(newSeconds);

    dispatch(setQuizTimer({ minutes: newMinutes, seconds: newSeconds }));
  };

  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => getTime(), 1000);
    }

    return () => clearInterval(interval);
  }, [timer, start]);

  return (
    <>
      {minutes} min {seconds} sec
    </>
  );
};
