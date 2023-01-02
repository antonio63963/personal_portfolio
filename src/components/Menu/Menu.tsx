import { FC } from "react";

import cn from "classnames";
import styles from "./Menu.module.css";

import lock from "assets/icons/lock.svg";
import behance from "assets/icons/behance.svg";
import github from "assets/icons/githubLight.svg";
import linkedin from "assets/icons/linkedin.svg";

const Menu: FC = () => {
  return (
    <>
      <div className={cn(styles.menuMobile)}>
        <div className={cn(styles.menuMobile_item)}></div>
        <div className={cn(styles.menuMobile_item)}></div>
        <div className={cn(styles.menuMobile_item)}></div>
      </div>
      <ul className={cn(styles.menuDesk)}>
        <li>
          <img src={lock} alt="projects" className={cn(styles.lockIcon)} />
          Projects
        </li>
        <li>
          <img src={lock} alt="skils" className={cn(styles.lockIcon)} />
          Skils
        </li>
        <li>
          <img src={lock} alt="about" className={cn(styles.lockIcon)} />
          About
        </li>
        <li>
          <div className={cn(styles.socials)}>
            <a
              target="_blank"
              href="https://www.behance.net/shotvideo25"
              rel="noreferrer"
            >
              <img
                src={behance}
                alt="about"
                className={cn(styles.socialIcon)}
              />
            </a>
            <a target="_blank" href="https://github.com/antonio63963" rel="noreferrer">
              <img src={github} alt="about" className={cn(styles.socialIcon)} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/anton-fomin-162330187?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcY04nw2PRNCCsiCT1Ke80w%3D%3D" rel="noreferrer">
              <img src={linkedin} alt="about" className={cn(styles.socialIcon)} />
            </a>
 
          </div>
        </li>
      </ul>
    </>
  );
};

export default Menu;
