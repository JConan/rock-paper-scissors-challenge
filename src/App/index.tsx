import "./index.scss";
import { ActionButtons, ActionName } from "../components/ActionButtons";

interface Props {
  score: number;
  onClickRules?: () => void;
  onAction?: (name: ActionName) => void;
}

export const App = ({ score, onClickRules, onAction }: Props) => {
  return (
    <div className="App">
      <p>ROCK</p>
      <p>PAPER</p>
      <p>SCISSORS</p>
      <div role="status" aria-label="score">
        <span>Score</span>
        <span>{score}</span>
      </div>

      <ActionButtons {...{ onAction }} />

      <button onClick={onClickRules}>Rules</button>
    </div>
  );
};
