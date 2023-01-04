import { FC, useCallback, useState, useContext } from "react";

import cn from "classnames";
import styles from "./Menu.module.css";

import lock from "assets/icons/lock.svg";
import behance from "assets/icons/behance.svg";
import github from "assets/icons/githubLight.svg";
import linkedin from "assets/icons/linkedin.svg";

import { Portfolio } from "context/AppContext.type";

type TMenu = {
  isLocked: boolean;
  portfolioType: Portfolio;
  scrollToSkils: () => void;
};

enum TLink {
  "projects" = "projects",
  "about" = "about",
  "skils" = "skils",
}

const Menu: FC<TMenu> = ({ isLocked, portfolioType, scrollToSkils }) => {
  const otherPortfolio =
    portfolioType === Portfolio.no
      ? "projects"
      : portfolioType === Portfolio.motion
      ? Portfolio.web
      : Portfolio.motion;
  console.log(portfolioType, otherPortfolio);
  const [projectsLink, setProjectsLink] = useState<string>(otherPortfolio);
  const [skilsLink, setSkilsLink] = useState<string>("Skils");
  const [aboutLink, setAboutLink] = useState<string>("About");

  const onLinkLeave = useCallback((link: string) => {
    switch (link) {
      case TLink.projects:
        setProjectsLink(otherPortfolio);
        break;
      case TLink.skils:
        setSkilsLink("Skils");
        break;
      case TLink.about:
        setAboutLink("About");
        break;
      default:
        return;
    }
  }, [otherPortfolio]);

  const onLinkEnter = useCallback((link: TLink) => {
    switch (link) {
      case TLink.projects:
        setProjectsLink("Catch it up!");
        break;
      case TLink.skils:
        setSkilsLink("Catch it up!");
        break;
      case TLink.about:
        setAboutLink("Catch it up!");
        break;
      default:
        return;
    }
  }, []);

  return (
    <>
      <div className={cn(styles.menuMobile)}>
        <div className={cn(styles.menuMobile_item)}></div>
        <div className={cn(styles.menuMobile_item)}></div>
        <div className={cn(styles.menuMobile_item)}></div>
      </div>
      <ul className={cn(styles.menuDesk)}>
        <li
          onMouseEnter={() => (isLocked ? onLinkEnter(TLink.projects) : null)}
          onMouseLeave={() => (isLocked ? onLinkLeave(TLink.projects) : null)}
        >
          {isLocked && (
            <img src={lock} alt="projects" className={cn(styles.lockIcon)} />
          )}
          {isLocked ? projectsLink : otherPortfolio}
        </li>
        <li
          onClick={scrollToSkils}
          onMouseEnter={() => (isLocked ? onLinkEnter(TLink.skils) : null)}
          onMouseLeave={() => (isLocked ? onLinkLeave(TLink.skils) : null)}
        >
          {isLocked && (
            <img src={lock} alt="projects" className={cn(styles.lockIcon)} />
          )}
          {skilsLink}
        </li>
        <li
          onMouseEnter={() => (isLocked ? onLinkEnter(TLink.about) : null)}
          onMouseLeave={() => (isLocked ? onLinkLeave(TLink.about) : null)}
        >
          {isLocked && (
            <img src={lock} alt="projects" className={cn(styles.lockIcon)} />
          )}
          {aboutLink}
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
