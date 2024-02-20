import { useState } from "react";
import { STORE_THEME_ID, THEMES } from "../../helper/Constants/Constants";
import { DarkModeTheme } from "../../themes/Defaults/DarkModeTheme";
import { LightModeTheme } from "../../themes/Defaults/LightModeTheme";

export const Themes: Record<string, any> = {
  [THEMES.dark]: DarkModeTheme,
  [THEMES.light]: LightModeTheme,
};

export const getThemeStore = () => {
  const theme = localStorage.getItem(STORE_THEME_ID) || THEMES.default;
  return Object.keys(Themes).includes(theme) ? theme : THEMES.default;
};

export const setThemeStore = (newTheme: string) =>
  localStorage.setItem(STORE_THEME_ID, newTheme);

export const useTheme = () => {
  const [theme, setThemeState] = useState<string>(THEMES.default);
  if (theme !== getThemeStore()) {
    setThemeStore(theme);
  }
  const setTheme = (newTheme: string) => {
    setThemeStore(newTheme);
    setThemeState(newTheme);
  };

  return { theme, setTheme };
};
