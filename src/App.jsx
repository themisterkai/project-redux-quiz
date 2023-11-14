import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from './reducers/quiz';

import { CurrentQuestion } from './components/CurrentQuestion';
import { StartPage } from './components/StartPage';
import { Summary } from './components/Summary';
import {Header} from './components/Header'

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <StartPage />
      <CurrentQuestion />
      <Summary />
    </Provider>
  );
}
