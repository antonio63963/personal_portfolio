import { FC } from "react";
import cn from "classnames";

import styles from "./Drawer.module.css";
import { Menu } from "components";
import { Portfolio } from "context/AppContext.type";

type TDrawer = {
  isActive: boolean;
  isLocked: boolean;
  portfolioType: Portfolio;
  setPortfolioType: (data: Portfolio) => void;
  scrollToSkils: () => void;
  scrollToPortfolio: (portfolioType: Portfolio) => void;
  scrollToAbout: () => void;
};

const Drawer: FC<TDrawer> = ({
  isActive,
  isLocked,
  portfolioType,
  setPortfolioType,
  scrollToSkils,
  scrollToPortfolio,
  scrollToAbout,
}) => {
  return (
    <div className={cn(styles.container, `${isActive ? styles.active : null}`)}>
      <Menu
        isLocked={isLocked}
        portfolioType={portfolioType}
        setPortfolioType={setPortfolioType}
        scrollToSkils={scrollToSkils}
        scrollToPortfolio={scrollToPortfolio}
        scrollToAbout={scrollToAbout}
      />
    </div>
  );
};

export default Drawer;