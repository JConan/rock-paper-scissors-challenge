import {
  GameChoices,
  resolveWinningChoice,
} from "../../tools/resolveWinningChoice";

describe("Game API for knowing which is winning", () => {
  it.each([
    ["ROCK", "PAPER", "PAPER"] as const,
    ["ROCK", "SCISSORS", "ROCK"] as const,
    ["PAPER", "SCISSORS", "SCISSORS"] as const,
  ])("%s vs %s winning choice is %s", (choice1, choice2, winner) => {
    expect(
      resolveWinningChoice(GameChoices[choice1], GameChoices[choice2])
    ).toBe(GameChoices[winner]);
  });
});
