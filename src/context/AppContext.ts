import { createContext } from 'react';

import { TAppContext, Portfolio } from './AppContext.type';

const authContext = createContext<TAppContext>({
  isLocked: false,
  setIsLocked: () => {},
  portfolio: Portfolio.no,
  setPortfolio: () => {}
});

export default authContext;
