const ActionNames = ["rock", "paper", "scissors"];
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
          aria-label={`action_${name}`}
          onClick={() => onAction && onAction(name as ActionName)}
        ></button>
      ))}
    </>
  );
};
