import { FC } from 'react';
import cn from 'classnames';
import styles from './PortfolioItem.module.css';

import githubIcon from 'assets/icons/github.svg';

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
}) => {
  // const [isModal, setIsModal] = useState(false);

  return (
    <>
      {/* {isModal && <Modal gif={gif} closeModal={() => setIsModal(false)} />} */}
      <div
        onMouseEnter={() => setIsLong(!isLong)}
        onMouseLeave={() => setIsLong(!isLong)}
        className={cn(
          styles.project,
          isLong ? styles.projectLong : styles.projectShort
        )}
      >
        {/* {gif && (
          <button
            onClick={() => setIsModal(true)}
            className={cn(styles.openBtn)}
          >
            Open
          </button>
        )} */}
        <div className={cn(styles.projectInfo_wrapper)}>
          <div className={cn(styles.projectWrapper_circleBg)}></div>
          <div className={cn(styles.projectWrapper_circleBg_small)}></div>
          <div className={cn(styles.projectInfo, styles.textInfo)}>
            {targetLink ? (
              <a
                className={cn(styles.linkToSite)}
                target='_blank'
                href={targetLink}
                rel='noreferrer'
              >
                <div className={cn(styles.projectLogo)}>
                  <img
                    src={projectLogo}
                    className={cn(styles.camoLogo)}
                    alt='github'
                  />
                </div>
                www...
              </a>
            ) : (
              <div
                className={cn(styles.linkToSite)}
                onClick={() => window.open(targetLink, '_blank')}
              >
                <div className={cn(styles.projectLogo)}>
                  <img
                    src={projectLogo}
                    className={cn(styles.myLogo)}
                    alt='github'
                  />
                </div>
                Watch the Gif
              </div>
            )}
            <p>{description}</p>
            {githubLink && (
              <a target='_blank' href={githubLink} rel='noreferrer'>
                <div className={cn(styles.githubRow)}>
                  <img
                    src={githubIcon}
                    className={cn(styles.githubIcon)}
                    alt='github'
                  />
                  <p>Github repo</p>
                </div>
              </a>
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
        <div
          className={cn(styles.projectImage)}
          onClick={() => {
            window.open(targetLink, '_blank');
          }}
        >
          <img src={bgItem} alt='project' className={cn(styles.image)} />
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
