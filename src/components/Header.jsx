import "./header.css";
import { ProgressBar } from "./ProgressBar";
import { QuizTimer } from "./QuizTimer";
import { ScoreCounter } from "./ScoreCounter";

export const Header = () => {
  return (
    <div className="headerContainer">
      <h1>How Swedish are you? 🇸🇪</h1>
      <div className="keepTrack">
        <QuizTimer />
        <p>
          Points: <ScoreCounter />
        </p>
      </div>
      <ProgressBar />
    </div>
  );
};
