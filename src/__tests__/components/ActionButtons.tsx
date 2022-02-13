import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ActionButtons } from "../../components/ActionButtons";

describe("test apps", () => {
  it("should have actions buttons", () => {
    const clickAction = jest.fn();
    render(<ActionButtons onAction={clickAction} />);
    const buttons = screen.queryAllByRole("button", { name: /action/i });
    expect(buttons).toHaveLength(3);

    buttons.forEach((button) => userEvent.click(button));

    expect(clickAction).toHaveBeenNthCalledWith(1, "ROCK");
    expect(clickAction).toHaveBeenNthCalledWith(2, "PAPER");
    expect(clickAction).toHaveBeenNthCalledWith(3, "SCISSORS");
  });
});
