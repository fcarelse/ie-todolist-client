import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodoComp } from "./TodoComp";
import { test, expect } from "@jest/globals";

test("Is Functional Component", () => {
  render(<TodoComp />);
  const el = screen.getByText(/Todo Component/i);
  expect(el).toBeInTheDocument();
});
