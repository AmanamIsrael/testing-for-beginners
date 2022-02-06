import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has the correct initial color", () => {
  render(<App />);
  // find an element with a role of button and text of "change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  //to click a button we use a method from testing library called "fire event"
  fireEvent.click(colorButton);
  //expect the button to have background color blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //ecpect the button text to be "change to red"
  expect(colorButton.textContent).toBe("Change to red");
});

test("check for the color button initial conditions", () => {
  render(<App />);
  //check if the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
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
