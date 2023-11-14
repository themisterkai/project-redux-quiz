import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "./reducers/quiz";

import { CurrentQuestionPage } from "./pages/CurrentQuestionPage";
import { StartPage } from "./pages/StartPage";
import { SummaryPage } from "./pages/SummaryPage";
import { Header } from "./components/Header";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <StartPage />
      <CurrentQuestionPage />
      <SummaryPage />
    </Provider>
  );
};
