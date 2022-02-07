export const GameChoices = {
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSORS: "SCISSORS",
} as const;

export type GameChoice = keyof typeof GameChoices;

export const resolveWinningChoice = (
  choice1: GameChoice,
  choice2: GameChoice
): GameChoice | undefined => {
  const choices = [choice1, choice2];

  if (choices.includes(GameChoices.PAPER) && choices.includes(GameChoices.ROCK))
    return GameChoices.PAPER;
  if (
    choices.includes(GameChoices.SCISSORS) &&
    choices.includes(GameChoices.ROCK)
  )
    return GameChoices.ROCK;
  if (
    choices.includes(GameChoices.PAPER) &&
    choices.includes(GameChoices.SCISSORS)
  )
    return GameChoices.SCISSORS;
  return undefined;
};
