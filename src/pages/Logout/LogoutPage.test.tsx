import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LogoutPage } from "./LogoutPage";
import { test, expect } from "@jest/globals";

test("Is Functional Component", () => {
  render(<LogoutPage />);
  const el = screen.getByText(/Log Out Page/i);
  expect(el).toBeInTheDocument();
});
