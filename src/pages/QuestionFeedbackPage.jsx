import { useDispatch, useSelector } from "react-redux";
import { CurrentQuestion } from "../components/CurrentQuestion";
import { goToNextQuestion } from "../reducers/quiz";
import "./QuestionFeedbackPage.css";

export const QuestionFeedbackPage = () => {
  const dispatch = useDispatch();
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const answers = useSelector((state) => state.quiz.answers[currentQuestionIndex]);
  const options = useSelector((state) => state.quiz.questions[currentQuestionIndex].options);
  const correctAnswerIndex = useSelector((state) => state.quiz.questions[currentQuestionIndex].correctAnswerIndex);
  const totalQuestions = useSelector((state) => state.quiz.questions.length);

  const handleGoToNextQuestion = () => {
    dispatch(goToNextQuestion());
  };

  if (answers == null) {
    return <></>;
  }

  const correct = answers.isCorrect;

  return (
    <div className="feedbackContainer">
      <CurrentQuestion />
      <div className="feedbackOptionContainer">
        <div>{correct ? "Correct!" : "Incorrect!"}</div>
        {options.map((option, index) => (
          <div key={index} className="feedbackOptions">
            <button
              className={`feedbackBtn ${index === correctAnswerIndex ? "correct" : index === answers.answerIndex ? "incorrect" : ""}`}
              disabled
            >
              {option}
            </button>
          </div>
        ))}
        <button className="nextButton" onClick={handleGoToNextQuestion}>
          {currentQuestionIndex < totalQuestions - 1 ? "Next Question" : "Check score"}
        </button>
      </div>
    </div>
  );
};
