import { useSelector } from "react-redux";

export const CurrentQuestion = () => {
  const quizState = useSelector((state) => state.quiz);
  const currentQuestionIndex = quizState.currentQuestionIndex;
  const question = quizState.questions[currentQuestionIndex];
  const answers = quizState.answers;
  const hasAnswers = answers[currentQuestionIndex] != null;

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  let imageURL = `./${question.id}.jpg`;

  if (hasAnswers) {
    if (answers[currentQuestionIndex].isCorrect) {
      imageURL = `./correct/${question.id}.gif`;
    } else {
      if (answers[currentQuestionIndex].answer === "not answered") {
        imageURL = `./timesup/${question.id}.gif`;
      } else {
        imageURL = `./incorrect/${question.id}.gif`;
      }
    }
  }

  return (
    <div className="questionText">
      <h2>{question.questionText}</h2>
      <img src={imageURL} />
    </div>
  );
};
