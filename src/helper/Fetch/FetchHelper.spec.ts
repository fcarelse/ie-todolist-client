import fetchMock from "jest-fetch-mock";
import { fetchData } from "./FetchHelper";

const MOCK_TOKEN = "MockToken";

describe("FetchHelper", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("calls fetch function", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ token: MOCK_TOKEN }));

    const res = await fetchData({
      url: "/login",
      data: {},
      method: "post",
      token: "",
      fetcher: fetchMock,
    });

    expect(res).toBeInstanceOf(Object);
    expect(res.token).toEqual(MOCK_TOKEN);
  });
});
