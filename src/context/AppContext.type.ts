export enum Portfolio {
  'web' = 'web',
  'motion' = 'motion',
  'no' = 'no',
}
type TAppContext = {
  isAccessible: boolean;
  setIsAccessible(value: boolean): void;
  portfolio: Portfolio;
  setPortfolio(value: Portfolio): void;
};

export type {
  TAppContext,
};
