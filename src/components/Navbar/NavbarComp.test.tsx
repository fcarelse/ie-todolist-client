import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavbarComp } from "./NavbarComp";
import { test, expect } from "@jest/globals";

test.skip("Is Functional Component", () => {
  // Skipping because cannot render Link outside Router.
  const [theme, setTheme] = useState("light");
  render(<NavbarComp {...{ theme, setTheme }} />);
  const el = screen.getByText(/Todolist IE/i);
  expect(el).toBeInTheDocument();
});
