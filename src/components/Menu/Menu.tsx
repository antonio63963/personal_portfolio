import { FC } from "react";

import cn from 'classnames';
import styles from './Menu.module.css';

const Menu: FC = () => {
  return (
    <ul className={cn(styles.menu)}>
      <li>Projects</li>
      <li>Skils</li>
      <li>About</li>
      <li>My T-Shape</li>
    </ul>
  );
};

export default Menu;
