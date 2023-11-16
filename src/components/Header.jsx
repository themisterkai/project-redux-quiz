import './header.css';
import { ProgressBar } from './ProgressBar';
import { QuizTimer } from './QuizTimer';

export const Header = () => {
  return (
    <div className="headerContainer">
      <h1>How Swedish are you? 🇸🇪</h1>
      <div className="keepTrack">
        <QuizTimer />
        <ProgressBar />
      </div>
    </div>
  );
};
