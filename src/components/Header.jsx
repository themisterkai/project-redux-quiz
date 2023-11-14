import { ProgressBar } from "./ProgressBar"
import { QuizTimer } from "./QuizTimer"




export const Header = () => {
  return (
    <div>
        <QuizTimer />
        <ProgressBar />
    </div>
  )
}
