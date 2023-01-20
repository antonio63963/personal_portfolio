import { FC, ReactNode } from "react";

import cn from "classnames";
import styles from "./Portfolio.module.css";

import { Portfolio } from "context/AppContext.type";
import { WebPortfolioLayout, MotionPortfolioLayout } from "components";

type TPortfolio = {
  portfolio: Portfolio;
  children: ReactNode;
}

const PortfolioContainer: FC<TPortfolio> = ({portfolio, children}) => {
  return (
    <div className={cn(styles.container)}>
      <h1 className={cn(styles.title, "titleGradient")}>{portfolio} Projects</h1>
     {/* {portfolio === Portfolio.web ? <WebPortfolioLayout /> : <MotionPortfolioLayout />} */}
     {children}
    </div>
  );
};

export default PortfolioContainer;
