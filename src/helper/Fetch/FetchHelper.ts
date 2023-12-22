import { FetchHeadersType, FetchParamaters } from "./FetchHelper.types";
import { FetchError } from "./FetchError";
import fetchMock from "jest-fetch-mock";

export const fetchData = async (
  { url, data, method, token, mock }: FetchParamaters = {
    url: "",
    data: {},
    method: "post",
    token: "",
    mock: false,
  }
) => {
  // Default options are marked with *
  try {
    const headers: FetchHeadersType = {
      "Content-Type": "application/json; charset=utf-8",
    };
    if (token) headers.Authorization = `Bearer ${token}`;
    const fetcher = !mock ? fetch : fetchMock;

    const res = await fetcher(
      new URL(url, "http://localhost:3300/").toString(),
      {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers,
        // redirect: "follow", // manual, *follow, error
        // referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    );
    return await res.json();
  } catch (e: any) {
    throw new FetchError(e.message || "Fetch Error", e?.status || 500);
  }
};
