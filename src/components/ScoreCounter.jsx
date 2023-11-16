import { useSelector } from 'react-redux';

// This is the component that will display the user's current score
export const ScoreCounter = () => {
  const answers = useSelector(state => state.quiz.answers);

  const score = answers.reduce(
    (acc, curr) => (curr.isCorrect ? (acc += 2) : (acc -= 1)),
    0
  );

  return <>{score}</>;
};
