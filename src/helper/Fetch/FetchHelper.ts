import { FetchHeadersType, FetchParamaters } from "../Types";

export class FetchError extends Error {
  status: number = 0;
  constructor(message: string, status: number) {
    super();
    this.message = message;
    this.status = status;
  }
}

export const fetchData = async (
  { url, data, method, token }: FetchParamaters = {
    url: "",
    data: {},
    method: "post",
    token: "",
  }
) => {
  // Default options are marked with *
  try {
    const headers: FetchHeadersType = {
      "Content-Type": "application/json; charset=utf-8",
    };
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers,
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return await res.json();
  } catch (e: any) {
    // throw new Error('Non JSON data returned');
    throw new FetchError(e.message || "Fetch Error", e?.status || 500);
    // return {
    //   error: e.status ? e.status : 500,
    //   message: e.message ? e.message : e,
    // };
  }
};
