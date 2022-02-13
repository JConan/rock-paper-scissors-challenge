import "./action_button.scss";

const ActionNames = ["ROCK", "PAPER", "SCISSORS"];
export type ActionName = keyof typeof ActionNames;

interface Props {
  onAction?: (name: ActionName) => void;
}

export const ActionButtons = ({ onAction }: Props) => {
  return (
    <>
      {ActionNames.map((name, idx) => (
        <button
          key={idx}
          className={`btn_action ${name}`}
          aria-label={`action button ${name}`}
          onClick={() => onAction && onAction(name as ActionName)}
        ></button>
      ))}
    </>
  );
};
