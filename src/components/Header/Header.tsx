import { FC, useContext, } from "react";

import cn from 'classnames';

import AppContext from 'context/AppContext';
import styles from './Header.module.css';

import { Menu } from "components";
import  logo from  'assets/logo_web.png';

type THeader = {
  scrollToSkils: () => void;
}

const Header: FC<THeader> = ({scrollToSkils}) => {
  const {isLocked, portfolio} = useContext(AppContext);
  return (
    <header className={cn(styles.header, 'gradientBg')}>
      <img className={cn(styles.headerImg)} src={logo} alt="logo" />
      <Menu isLocked={isLocked} portfolioType={portfolio} scrollToSkils={scrollToSkils} />
    </header>
  );
};

export default Header;
