import fetchMock from "jest-fetch-mock";
import { render, screen } from "@testing-library/react";
import { useAuthService } from "./useAuthService";
import { Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const MOCK_TOKEN = "MockToken";

const TestComponent = () => {
  const { login } = useAuthService(fetchMock);

  const triggerLogin = () => {
    login({ email: "test", password: "test" });
  };

  return (
    <div>
      <button onClick={triggerLogin}>Go to Dashboard</button>
    </div>
  );
};

describe("useAuthService", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test.skip("should return login function", () => {
    const history = createMemoryHistory();

    render(
      // @ts-ignore
      <Router history={history}>
        <Route path="/todolist">
          <div data-testid="todolist">Todolist</div>
        </Route>
        <Route path="/">
          <TestComponent></TestComponent>
        </Route>
      </Router>
    );

    fetchMock.mockResponseOnce(JSON.stringify({ token: MOCK_TOKEN }));

    const loginButton = screen.getByRole("button");
    loginButton.click();

    const todolist = screen.getByTestId("todolist");
    expect(todolist).toBeInTheDocument();
  });
});
