export enum Portfolio {
  'web' = 'web',
  'motion' = 'motion',
  'no' = 'no',
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
