import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AboutPage } from "./AboutPage";
import { test, expect } from "@jest/globals";

test.skip("Is Functional Component", () => {
  render(<AboutPage />);
  const el = screen.getByText(/About Page/i);
  expect(el).toBeInTheDocument();
});
