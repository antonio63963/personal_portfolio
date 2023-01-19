import { FC, useEffect, useRef } from "react";

import cn from "classnames";
import styles from "./Portfolio.module.css";

import { Portfolio } from "context/AppContext.type";
import { WebPortfolioLayout, MotionPortfolioLayout } from "components";

type TPortfolio = {
  portfolio: Portfolio;
}

const PortfolioContainer: FC<TPortfolio> = ({portfolio}) => {
  return (
    <div className={cn(styles.container)}>
      <h1 className={cn(styles.title, "titleGradient")}>{portfolio} Projects</h1>
     {portfolio === Portfolio.web ? <WebPortfolioLayout /> : <MotionPortfolioLayout />}
    </div>
  );
};

export default PortfolioContainer;
