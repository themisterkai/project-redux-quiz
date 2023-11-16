import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { Header } from './components/Header';
import { CurrentQuestionPage } from './pages/CurrentQuestionPage';
import { QuestionFeedbackPage } from './pages/QuestionFeedbackPage';
import { StartPage } from './pages/StartPage';
import { quiz } from './reducers/quiz';
import { Footer } from './components/Footer';

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <Header />
        <StartPage />
        <CurrentQuestionPage />
        <QuestionFeedbackPage />
        <Footer />
      </div>
    </Provider>
  );
};
