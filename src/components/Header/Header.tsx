import { FC, useContext, useState } from "react";

import cn from "classnames";

import AppContext from "context/AppContext";
import styles from "./Header.module.css";

import { Drawer, Menu } from "components";
import logo from "assets/logo_web.png";
import { Portfolio } from "context/AppContext.type";

type THeader = {
  scrollToHome: () => void;
  scrollToSkils: () => void;
  scrollToPortfolio: (data: Portfolio) => void;
  scrollToAbout: () => void;
};

const Header: FC<THeader> = ({
  scrollToHome,
  scrollToSkils,
  scrollToPortfolio,
  scrollToAbout,
}) => {
  const { isLocked, portfolio, setPortfolio } = useContext(AppContext);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <header className={cn(styles.header, "gradientBg")}>
      <div className={cn(styles.contentSize)}>
        <img onClick={scrollToHome} className={cn(styles.headerImg)} src={logo} alt="logo" />

        <div
          className={cn(styles.burger)}
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className={cn(styles.burger_item, `${isActive && styles.active}`)}
          ></div>
        </div>
        <div className={cn(styles.desktop)}>
          <Menu
            setPortfolioType={setPortfolio}
            scrollToSkils={scrollToSkils}
            scrollToPortfolio={scrollToPortfolio}
            scrollToAbout={scrollToAbout}
            onClose={() => setIsActive(false)}
          />
        </div>
        <Drawer
          onClose={() => setIsActive(false)}
          isActive={isActive}
          isLocked={isLocked}
          portfolioType={portfolio}
          setPortfolioType={setPortfolio}
          scrollToSkils={scrollToSkils}
          scrollToPortfolio={scrollToPortfolio}
          scrollToAbout={scrollToAbout}
        />
      </div>
    </header>
  );
};

export default Header;
