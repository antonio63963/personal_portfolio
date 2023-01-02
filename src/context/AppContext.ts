import { createContext } from 'react';

import { TAppContext, Portfolio } from './AppContext.type';

const authContext = createContext<TAppContext>({
  isAccessible: false,
  setIsAccessible: () => {},
  portfolio: Portfolio.no,
  setPortfolio: () => {}
});

export default authContext;
