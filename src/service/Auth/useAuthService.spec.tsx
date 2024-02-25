import fetchMock from "jest-fetch-mock";
import { render, screen } from "@testing-library/react";
import { useAuthService } from "./useAuthService";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { TOKEN_BLANK } from "../../helper/Constants/Constants";
import { getToken, setToken } from "../../store/Token/TokenStore";

const MOCK_TOKEN = "MockToken";

const TestComponent = () => {
  const { login } = useAuthService(fetchMock);

  const triggerLogin = async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ token: MOCK_TOKEN }));
    const newToken = await login({ email: "test", password: "test" });

    if (newToken && newToken !== TOKEN_BLANK) setToken(newToken);

    // setToken(MOCK_TOKEN);
  };

  return (
    <div>
      <button onClick={triggerLogin}>Login</button>
    </div>
  );
};

const TestTodolist = () => {
  return <div data-testid="todolist">Todolist</div>;
};

describe("useAuthService", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("should return login function", async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<TestComponent></TestComponent>}></Route>
            <Route path="todolist" element={<TestTodolist />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
    await act(async () => {
      await loginButton.click();
    });

    const token = getToken();
    expect(token).toBe(MOCK_TOKEN);

    // const todolist = screen.getByTestId("todolist");
    // expect(todolist).toBeInTheDocument();
  });
});
