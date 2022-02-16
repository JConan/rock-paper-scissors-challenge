/**
 * Component that contain all possible action
 * To be used as an input to retrieve user choice of action
 *
 */

import "./action_button.scss";

const ActionNames = ["PAPER", "SCISSORS", "ROCK"];
export type ActionName = keyof typeof ActionNames;

interface Props {
  onAction?: (name: ActionName) => void;
}

export const ActionButtons = ({ onAction }: Props) => {
  return (
    <div className="action_buttons">
      {ActionNames.map((name, idx) => (
        <button
          key={idx}
          className={`btn_action ${name}`}
          aria-label={`action button ${name}`}
          onClick={() => onAction && onAction(name as ActionName)}
        ></button>
      ))}
    </div>
  );
};
