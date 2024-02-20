import { STORE_TOKEN_ID } from "../../helper/Constants/Constants";

export const getToken = () => localStorage.getItem(STORE_TOKEN_ID) || "";
export const setToken = (newToken: string) =>
  localStorage.setItem(STORE_TOKEN_ID, newToken);
