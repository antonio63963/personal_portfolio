import { FC, useState } from "react";

import cn from "classnames";
import styles from "./Portfolio.module.css";

import { Portfolio } from "context/AppContext.type";
import { WebPortfolioLayout, MotionPortfolioLayout } from "components";

type TPortfolio = {
  portfolio: Portfolio;
};

const PortfolioContainer: FC<TPortfolio> = ({ portfolio }) => {
  return (
    <div className={cn(styles.sliderContainer)}>
      <div className={cn(styles.container, `${portfolio === Portfolio.motion && styles.motionPortfolio}`)}>
        <h1 className={cn(styles.title, "titleGradient")}>
          Web Projects
        </h1>
        {/* {portfolio === Portfolio.web ? <WebPortfolioLayout /> : <MotionPortfolioLayout />} */}
        <WebPortfolioLayout />
      </div>
      {portfolio === Portfolio.motion ? (
        <div className={cn(styles.container)}>
          <h1 className={cn(styles.title, "titleGradient")}>Motion Projects</h1>
          <MotionPortfolioLayout />
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioContainer;
