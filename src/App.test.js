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
