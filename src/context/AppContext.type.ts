export enum Portfolio {
  'web' = 'Web',
  'motion' = 'Motion',
}
type TAppContext = {
  isLocked: boolean;
  setIsLocked(value: boolean): void;
  portfolio: Portfolio;
  setPortfolio(value: Portfolio): void;
};

export type {
  TAppContext,
};
