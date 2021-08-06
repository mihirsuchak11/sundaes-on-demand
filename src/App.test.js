// Color App

// import { render, screen, fireEvent } from "@testing-library/react";
// import App, { replaceCamelWithSpaces } from "./App";

// test("button has correct initial correct", () => {
//   render(<App />);
//   // Find an element with a role of button and text of 'Change to Midnight Blue'
//   const colorButton = screen.getByRole("button", {
//     name: "Change to MidnightBlue",
//   });

//   expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

//   fireEvent.click(colorButton);
//   expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
//   expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
// });

// test("Checkbox", () => {
//   render(<App />);

//   // Check that button starts unable
//   const colorButton = screen.getByRole("button", {
//     name: "Change to MidnightBlue",
//   });
//   expect(colorButton).toBeEnabled();

//   // Checkbox start out unchecked
//   const checkbox = screen.getByRole("checkbox");
//   expect(checkbox).not.toBeChecked();
// });

// test("Checkbox disables button on first click and enables on second click", () => {
//   render(<App />);

//   // Check that button starts unable
//   const checkbox = screen.getByRole("checkbox", { name: "Disabled button" });
//   const colorButton = screen.getByRole("button", {
//     name: "Change to MidnightBlue",
//   });

//   fireEvent.click(checkbox);
//   expect(checkbox).toBeChecked();
//   expect(colorButton).toBeDisabled();

//   fireEvent.click(checkbox);
//   expect(colorButton).toBeEnabled();
//   expect(checkbox).not.toBeChecked();
// });

// test("Clicked disabled button has gray bg and reverts to MediumVioletRed", () => {
//   render(<App />);
//   const checkbox = screen.getByRole("checkbox", { name: "Disabled button" });
//   const colorButton = screen.getByRole("button", {
//     name: "Change to MidnightBlue",
//   });

//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle("background-color: gray");
//   // Disabled Button
//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle("background-color: MediumVioletRed");
// });

// test("Clicked disabled button has gray bg and reverts to MidnightBlue", () => {
//   render(<App />);
//   const checkbox = screen.getByRole("checkbox", { name: "Disabled button" });
//   const colorButton = screen.getByRole("button", {
//     name: "Change to MidnightBlue",
//   });

//   fireEvent.click(colorButton);

//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle("background-color: gray");
//   // Disabled Button
//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle("background-color: MidnightBlue");
// });

// describe("Spacing because camel-case letters", () => {
//   test("Works for no inner capital letters", () => {
//     expect(replaceCamelWithSpaces("Red")).toBe("Red");
//   });
//   test("Works for one inner capital letter", () => {
//     expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
//   });
//   test("Works for multiple inner capital letters", () => {
//     expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
//   });
// });
