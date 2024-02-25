import { FetchHeadersType, FetchParamaters } from "./FetchHelper.types";
import { FetchError } from "./FetchError";
import { getToken, setToken } from "../../store/Token/TokenStore";

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
    fetcher = fetcher || fetch;

    const res = await fetcher(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers,
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).catch((e: any) => {
      setToken("");
    });
    if (res.status === 403) setToken("");
    return await res.json();
  } catch (e: any) {
    throw new FetchError(e.message || "Fetch Error", e?.status || 500);
  }
};
