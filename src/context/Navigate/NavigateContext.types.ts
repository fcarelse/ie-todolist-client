export type NavigateFunction = (location: string) => void;

export type NavigateContextValue = {
  navigate: NavigateFunction;
};
