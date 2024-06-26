import { useEffect, useRef, useState } from 'react';
import { submitAnswer } from '../reducers/quiz';
import { useDispatch, useSelector } from 'react-redux';

// This is the component that will display the timer for each question
export const QuestionTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const index = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();
  let intervalRef = useRef();

  const decreaseTimeLeft = () => {
    setTimeLeft(prev => (prev > 0 ? prev - 1 : prev));
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

  useEffect(() => {
    if (timeIsUp) {
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
      <p>
        Time left: {timeLeft} {timeLeft === 1 ? 'second' : 'seconds'}
      </p>
    </div>
  );
};
