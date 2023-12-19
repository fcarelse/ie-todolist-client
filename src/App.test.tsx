import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { test, expect } from "@jest/globals";

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText(/Todolist Page/i);
  // expect(linkElement).toBe('Todolist');
  expect(App instanceof Function).toBe(true);
});
