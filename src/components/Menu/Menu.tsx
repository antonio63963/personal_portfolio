import { FC, useCallback, useState, useContext, useEffect } from "react";

import cn from "classnames";
import styles from "./Menu.module.css";

import AppContext from "context/AppContext";

import lock from "assets/icons/lock.svg";
import behance from "assets/icons/behance.svg";
import github from "assets/icons/githubLight.svg";
import linkedin from "assets/icons/linkedin.svg";

import { Portfolio } from "context/AppContext.type";

type TMenu = {
  isLocked: boolean;
  portfolioType: Portfolio;
  setPortfolioType: (data: Portfolio) => void;
  scrollToSkils: () => void;
  scrollToPortfolio: (portfolioType: Portfolio) => void;
  scrollToAbout: () => void;
};

const Menu: FC<TMenu> = ({
  isLocked,
  scrollToSkils,
  scrollToPortfolio,
  scrollToAbout,
}) => {
  const { portfolio } = useContext(AppContext);

  const [otherPortfolio, setOtherPortfolio] = useState<Portfolio>(
    portfolio === Portfolio.motion ? Portfolio.web : Portfolio.motion
  );

  useEffect(() => {
    setOtherPortfolio(
      portfolio === Portfolio.motion ? Portfolio.web : Portfolio.motion
    );
  }, [portfolio]);

  return (
    <>
      <ul className={cn(styles.menu)}>
        <li
          onClick={
            !isLocked
              ? () => {
                  scrollToPortfolio(otherPortfolio);
                }
              : () => {}
          }
        >
          {isLocked && (
            <img src={lock} alt="projects" className={cn(styles.lockIcon)} />
          )}
          {isLocked ? "Projects" : otherPortfolio}
        </li>
        <li onClick={scrollToAbout}>
          {isLocked && (
            <img src={lock} alt="projects" className={cn(styles.lockIcon)} />
          )}
          About
        </li>
        <li onClick={scrollToSkils}>
          {isLocked && (
            <img src={lock} alt="projects" className={cn(styles.lockIcon)} />
          )}
          Skils
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
            <a
              target="_blank"
              href="https://github.com/antonio63963"
              rel="noreferrer"
            >
              <img src={github} alt="about" className={cn(styles.socialIcon)} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anton-fomin-162330187?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcY04nw2PRNCCsiCT1Ke80w%3D%3D"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="about"
                className={cn(styles.socialIcon)}
              />
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Menu;
