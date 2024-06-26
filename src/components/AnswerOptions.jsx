import { useDispatch, useSelector } from "react-redux";

import { submitAnswer } from "../reducers/quiz";

export const AnswerOptions = () => {
  const dispatch = useDispatch();
  const answerOptions = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const handleSubmitAnswer = (answer) => {
    dispatch(
      submitAnswer({ questionId: answerOptions.id, answerIndex: answer })
    );
  };

  return (
    <>
      <div className="answerOptions">
        {answerOptions.options.slice(0, 4).map((option, idx) => (
          <div key={option}>
            <button onClick={() => handleSubmitAnswer(idx)}>{option}</button>
          </div>
        ))}
      </div>
    </>
  );
};
