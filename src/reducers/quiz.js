import { createSlice } from '@reduxjs/toolkit';

const questions = [
  {
    id: 1,
    questionText:
      'Which medieval castle in Stockholm is considered one of the most well-preserved castles in Sweden?',
    options: [
      'Kalmar Castle',
      'Vadstena Castle',
      'Örebro Castle',
      'Stockholm Palace',
      'not answered',
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 2,
    questionText:
      "Who is the Swedish author known for the Millennium series, including 'The Girl with the Dragon Tattoo'?",
    options: [
      'Henning Mankell',
      'Stieg Larsson',
      'Camilla Läckberg',
      'Jo Nesbø',
      'not answered',
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    questionText: 'In what year did Sweden join the European Union?',
    options: ['1995', '2000', '2004', '2008', 'not answered'],
    correctAnswerIndex: 0,
  },
  {
    id: 4,
    questionText:
      'Which Swedish company is a leading provider of mobile communication technology?',
    options: ['Volvo', 'Ericsson', 'H&M', 'IKEA', 'not answered'],
    correctAnswerIndex: 1,
  },
  {
    id: 5,
    questionText:
      'What is the traditional Swedish dish made of pickled herring, potatoes, and sour cream?',
    options: [
      'Gravlax',
      'Köttbullar',
      'Surströmming',
      'Sill och potatis',
      'not answered',
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 6,
    questionText:
      'Sweden is located on the Scandinavian Peninsula in Northern Europe and shares land borders with which two countries?',
    options: [
      'Norway and Finland',
      'Denmark and Finland',
      'Norway and Denmark',
      'Norway and Russia',
      'not answered',
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 7,
    questionText:
      'Which Swedish scientist is known as the father of modern taxonomy and binomial nomenclature?',
    options: [
      'Carl Linnaeus',
      'Alfred Nobel',
      'Anders Celsius',
      'Gustav Dalén',
      'not answered',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 8,
    questionText: 'What is the famous ice hotel located in Sweden called?',
    options: [
      'Frosty Lodge',
      'Glacier Palace',
      'Ice Kingdom',
      'ICEHOTEL',
      'not answered',
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 9,
    questionText:
      "Which event is celebrated on June 6th and is considered Sweden's National Day?",
    options: [
      "Midsummer's Day",
      'Christmas',
      'Independence Day',
      'Constitution Day',
      'not answered',
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 10,
    questionText:
      'What is the name of the Swedish traditional celebration involving a maypole, flowers, and dancing around the pole?',
    options: [
      'Walpurgis Night',
      'Midsommar',
      'Lucia Day',
      'Valborgsmässoafton',
      'not answered',
    ],
    correctAnswerIndex: 1,
  },
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  quizTimerState: false,
  quizTimer: { minutes: 0, seconds: 0 },
};

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question (including options)    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer(inputValue)      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find(q => q.id === questionId);

      if (!question) {
        throw new Error(
          'Could not find question! Check to make sure you are passing the question id correctly.'
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
      });
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: state => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
        state.quizTimerState = false;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    quizTimerStart: state => {
      state.quizTimerState = true;
    },

    setQuizTimer: (state, action) => {
      state.quizTimer.minutes = action.payload.minutes;
      state.quizTimer.seconds = action.payload.seconds;
    },

    restart: () => {
      return initialState;
    },
  },
});

export const {
  submitAnswer,
  goToNextQuestion,
  goToQuestionFeedback,
  quizTimerStart,
  setQuizTimer,
  restart,
} = quiz.actions;
