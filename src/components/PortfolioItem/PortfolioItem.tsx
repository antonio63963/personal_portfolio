import { FC, useState } from "react";
import cn from "classnames";
import styles from "./PortfolioItem.module.css";

import githubIcon from "assets/icons/github.svg";

import Modal from "../Modal/Modal";

type TItem = {
  isLong: boolean;
  setIsLong: (data: boolean) => void;
  description: string;
  targetLink?: string;
  githubLink?: string;
  projectLogo: string;
  bgItem: string;
  techList: string[];
  onClick?: () => void;
  gif?: string;
};

const PortfolioItem: FC<TItem> = ({
  isLong,
  setIsLong,
  description,
  targetLink,
  githubLink,
  projectLogo,
  bgItem,
  techList,
  onClick,
  gif,
}) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {isModal && <Modal gif={gif} closeModal={() => setIsModal(false)} />}
      <div
        onMouseEnter={() => setIsLong(!isLong)}
        onMouseLeave={() => setIsLong(!isLong)}
        className={cn(
          styles.project,
          isLong ? styles.projectLong : styles.projectShort
        )}
      >
        <div className={cn(styles.projectInfo_wrapper)}>
          <div className={cn(styles.projectWrapper_circleBg)}></div>
          <div className={cn(styles.projectWrapper_circleBg_small)}></div>
          <div className={cn(styles.projectInfo, styles.textInfo)}>
            {targetLink ? (
              <a
                className={cn(styles.linkToSite)}
                target="_blank"
                href={targetLink}
                rel="noreferrer"
              >
                <div className={cn(styles.projectLogo)}>
                  <img
                    src={projectLogo}
                    className={cn(styles.camoLogo)}
                    alt="github"
                  />
                </div>
                www...
              </a>
            ) : (
              <div
                className={cn(styles.linkToSite)}
                onClick={() => setIsModal(true)}
              >
                <div className={cn(styles.projectLogo)}>
                  <img
                    src={projectLogo}
                    className={cn(styles.camoLogo)}
                    alt="github"
                  />
                </div>
                Watch the Gif
              </div>
            )}
            <p>{description}</p>
            {githubLink && (
              <div className={cn(styles.githubRow)}>
                <a target="_blank" href={githubLink} rel="noreferrer">
                  <img
                    src={githubIcon}
                    className={cn(styles.githubIcon)}
                    alt="github"
                  />
                </a>
                <p>Github repo</p>
              </div>
            )}

            <ul className={cn(styles.projectInfo_list)}>
              {techList.map((tech, index) => {
                return (
                  <li key={`${tech}-${index}`}>
                    <img
                      className={cn(styles.icon)}
                      src={tech}
                      alt={`${tech}`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={cn(styles.projectImage)}>
          <img src={bgItem} alt="project" className={cn(styles.image)} />
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
