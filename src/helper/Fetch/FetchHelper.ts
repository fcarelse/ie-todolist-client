import { FetchHeadersType, FetchParamaters } from "./FetchHelper.types";
import { FetchError } from "./FetchError";

export const getToken = () => window.localStorage.getItem("token") || "";
export const setToken = (newToken: string) =>
  window.localStorage.setItem("token", newToken);

export const fetchData = async (
  { url, data, method, fetcher }: FetchParamaters = {
    url: "",
    data: {},
    method: "get",
  }
) => {
  // Default options are marked with *
  try {
    const headers: FetchHeadersType = {
      "Content-Type": "application/json; charset=utf-8",
    };
    if (getToken()) headers.Authorization = `Bearer ${getToken()}`;
    const mock = !!fetcher;
    fetcher = fetcher || fetch;

    const res = await fetcher(
      // mock ? new URL(url, "http://localhost:3300/").toString() :
      url,
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
