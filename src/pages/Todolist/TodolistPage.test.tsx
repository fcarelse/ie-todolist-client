import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodolistPage } from "./TodolistPage";
import { test, expect } from "@jest/globals";
// import { TodoListComp } from "../../components/TodoList/TodoListComp";

test.skip("Is Functional Component", () => {
  render(<TodolistPage />);
  expect(screen).toContain("TodoListComp");
});
