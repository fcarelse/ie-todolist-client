export type FetchMethods = "post" | "get" | "put" | "delete";

export type TokenSetter = (token: string) => {};

export type Credentials = { username: string; password: string };

export type LoginHandlerType = ({
  username,
  password,
}: Credentials) => Promise<{ token: string }>;

export type AuthContextValue = { token: string };

export type FetchParamaters = {
  url: string;
  data: object;
  method: FetchMethods;
  token: string;
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
