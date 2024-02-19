import { DarkModeTheme } from "../Defaults/DarkModeTheme";
import { LightModeTheme } from "../Defaults/LightModeTheme";

export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";
export const THEME_STORENAME = "theme";

export const THEMES: Record<string, any> = {
  dark: DarkModeTheme,
  light: LightModeTheme,
};

export const getTheme = () =>
  localStorage?.getItem(THEME_STORENAME) || THEME_LIGHT;

export const setTheme = (newTheme: string) =>
  localStorage.setItem(THEME_STORENAME, newTheme);
