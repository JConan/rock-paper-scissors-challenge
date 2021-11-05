import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "../App";

describe("test apps", () => {
  it("should have a header with titles and scores", () => {
    const scoreValue = Math.floor(Math.random() * 100);
    render(<App score={scoreValue} />);

    screen.getByText("ROCK");
    screen.getByText("PAPER");
    screen.getByText("SCISSORS");

    const score = screen.getByRole("status", { name: /score/i });
    expect(score).toHaveTextContent(`Score${scoreValue}`);
  });

  it("should have button Rules", () => {
    const clickRules = jest.fn();
    render(<App score={0} onClickRules={clickRules} />);

    const button = screen.getByRole("button", { name: /rules/i });
    userEvent.click(button);
    expect(clickRules).toBeCalled();
  });
});
