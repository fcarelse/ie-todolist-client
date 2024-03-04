import { render, screen } from "@testing-library/react";
import App from "./App";
import { test, expect } from "@jest/globals";

test.skip("renders learn react link", () => {
  render(<App />);
  const el = screen.getByText(/Todolist IE/i);
  expect(el).toBeInTheDocument();
});
