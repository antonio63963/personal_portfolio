import { FC } from "react";

import cn from 'classnames';

import styles from './Header.module.css';

import { Menu } from "components";
import  logo from  'assets/logo_web.png';

const Header: FC = () => {
  return (
    <header className={cn(styles.header, 'gradientBg')}>
      <img className={cn(styles.headerImg)} src={logo} alt="logo" />
      <Menu />
    </header>
  );
};

export default Header;
