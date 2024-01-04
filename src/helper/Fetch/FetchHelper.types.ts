export type FetchMethods = "post" | "get" | "put" | "delete";

export type FetchParamaters = {
  url: string;
  data: string;
  method: FetchMethods;
  token?: string;
  fetcher?: any;
};

export type SuccessResponse = {
  success: number;
  message: string;
};

export type ErrorResponse = {
  error: number;
  message: string;
};

export type DataResponse = SuccessResponse | ErrorResponse;

export type FetchHeadersType = {
  "Content-Type"?: string;
  Authorization?: string;
};
