import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginPage } from "./LoginPage";
import { test, expect } from "@jest/globals";

test.skip("Is Functional Component", () => {
  render(<LoginPage />);
  const el = screen.getByText(/Log In Page/i);
  expect(el).toBeInTheDocument();
});
