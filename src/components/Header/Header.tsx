import { FC, useContext } from "react";

import cn from "classnames";

import AppContext from "context/AppContext";
import styles from "./Header.module.css";

import { Menu } from "components";
import logo from "assets/logo_web.png";
import { Portfolio } from "context/AppContext.type";

type THeader = {
  scrollToSkils: () => void;
  scrollToPortfolio: (data: Portfolio) => void;
};

const Header: FC<THeader> = ({ scrollToSkils, scrollToPortfolio }) => {
  const { isLocked, portfolio, setPortfolio } = useContext(AppContext);
  return (
    <header className={cn(styles.header, "gradientBg")}>
      <img className={cn(styles.headerImg)} src={logo} alt="logo" />
      <Menu
        isLocked={isLocked}
        portfolioType={portfolio}
        setPortfolioType={setPortfolio}
        scrollToSkils={scrollToSkils}
        scrollToPortfolio={scrollToPortfolio}
      />
    </header>
  );
};

export default Header;
