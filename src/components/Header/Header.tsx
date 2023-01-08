import { FC, useContext, useState } from "react";

import cn from "classnames";

import AppContext from "context/AppContext";
import styles from "./Header.module.css";

import { Drawer, Menu } from "components";
import logo from "assets/logo_web.png";
import { Portfolio } from "context/AppContext.type";

type THeader = {
  scrollToSkils: () => void;
  scrollToPortfolio: (data: Portfolio) => void;
  scrollToAbout: () => void;
};

const Header: FC<THeader> = ({
  scrollToSkils,
  scrollToPortfolio,
  scrollToAbout,
}) => {
  const { isLocked, portfolio, setPortfolio } = useContext(AppContext);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <header className={cn(styles.header, "gradientBg")}>
      <img className={cn(styles.headerImg)} src={logo} alt="logo" />

      <div className={cn(styles.burger)} onClick={() => setIsActive(!isActive)}>
        <div className={cn(styles.burger_item, `${isActive && styles.active}`)}></div>
        {/* <div className={cn(styles.burger_item, styles.burger_item_middle)}></div>
        <div className={cn(styles.burger_item, styles.burger_item_bottom)}></div> */}
      </div>
      <div className={cn(styles.desktop)}>
        <Menu
          isLocked={isLocked}
          portfolioType={portfolio}
          setPortfolioType={setPortfolio}
          scrollToSkils={scrollToSkils}
          scrollToPortfolio={scrollToPortfolio}
          scrollToAbout={scrollToAbout}
        />
      </div>
      <Drawer
        isActive={isActive}
        isLocked={isLocked}
        portfolioType={portfolio}
        setPortfolioType={setPortfolio}
        scrollToSkils={scrollToSkils}
        scrollToPortfolio={scrollToPortfolio}
        scrollToAbout={scrollToAbout}
      />
    </header>
  );
};

export default Header;
