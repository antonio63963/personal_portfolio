import { createContext } from 'react';

import { TAppContext, Portfolio } from './AppContext.type';

const authContext = createContext<TAppContext>({
  isLocked: true,
  setIsLocked: () => {},
  portfolio: Portfolio.motion,
  setPortfolio: () => {}
});

export default authContext;
