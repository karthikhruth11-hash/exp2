import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Class Counter heading", () => {
  render(<App />);
  expect(screen.getByText(/Class Counter/i)).toBeInTheDocument();
});

test("renders Increment button", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: /Increment/i })).toBeInTheDocument();
});

test("initial counter value is 0", () => {
  render(<App />);
  expect(screen.getByText("0")).toBeInTheDocument();
});