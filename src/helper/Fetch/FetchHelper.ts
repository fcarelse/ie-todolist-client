import { FetchMethods } from "../Types";

export const fetchData = async (
  url: string = "",
  data: object = {},
  method: FetchMethods = "post",
  token: string = ""
) => {
  // Default options are marked with *
  const res = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    // redirect: "follow", // manual, *follow, error
    // referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  try {
    return await res.json();
  } catch (e: any) {
    // throw new Error('Non JSON data returned');
    return { error: 500, message: e.message ? e.message : e };
  }
};
