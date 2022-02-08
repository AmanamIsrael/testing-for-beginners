import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has the correct initial color", () => {
  render(<App />);
  //find an element with a role of button and text of "change to blue"
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});
test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  //to click a button we use a method from testing library called "fire event"
  fireEvent.click(colorButton);
  //expect the button to have background color blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  //expect the button text to be "change to red"
  expect(colorButton.textContent).toBe("Change to MediumVioletRed");
});

test("check for the color button initial conditions", () => {
  render(<App />);
  //check if the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();
});

test("Check checkbox's starts out unchecked", () => {
  //check if the button starts out unchecked
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  //click the checkbox, this should check if the button is disabled while the button is disabled
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  //second click, this should check if the button is enabled.
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("Clicked disabled button has gray background and reverts to MidnightBlue", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  //change the button to midnight blue
  fireEvent.click(colorButton);

  //disable the button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("backgroundColor: gray");

  //enable the button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("backgroundColor: MidnightBlue");
});

describe("spaces before camel-case letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
