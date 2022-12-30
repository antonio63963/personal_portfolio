import { FC } from "react";

import cn from "classnames";
import styles from "./Portfolio.module.css";

import camoBg from "assets/camo.png";

import tailwindIcon from "assets/icons/tailwind.svg";
import reactIcon from "assets/icons/react.svg";
import nodeIcon from "assets/icons/nodejs.svg";
import expressIcon from "assets/icons/express.svg";
import mongoIcon from "assets/icons/mongodb.svg";
import githubIcon from "assets/icons/github.svg";
import camoLogo from "assets/icons/camoLogo.png";

const PortpholioContainer: FC = () => {
  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.project)}>
        <div className={cn(styles.projectInfo, styles.textInfo)}>
          <h3>Camo</h3>
          <p>Social app that allows to share photos, takes comments and likes. </p>
          <div className={cn(styles.githubRow)}>
          <a href="https://github.com/antonio63963/camo"><img src={githubIcon} className={cn(styles.githubIcon)} alt="github" /></a>
          <p>Github repo</p>
          </div>
          <div className={cn(styles.githubRow)}>
          <a href="https://github.com/antonio63963/camo"><img src={camoLogo} className={cn()} alt="github" /></a>
          <p>Go to site</p>
          </div>
          <ul className={cn(styles.projectInfo_list)}>
            <li>
              <img
                className={cn(styles.icon)}
                src={tailwindIcon}
                alt="tailwind"
              />
            </li>
            <li>
              <img className={cn(styles.icon)} src={reactIcon} alt="react" />
            </li>
            <li>
              <img className={cn(styles.icon)} src={nodeIcon} alt="react" />
            </li>
            <li>
              <img
                className={cn(styles.icon)}
                src={expressIcon}
                alt="expressjs"
              />
            </li>
            <li>
              <img className={cn(styles.icon)} src={mongoIcon} alt="mongo" />
            </li>
          </ul>
        </div>
        <div className={cn(styles.projectImage)}>
          <img src={camoBg} alt="project" className={cn(styles.image)} />
        </div>
        {/* <div className={cn(styles.pojectImage)} style={
            {backgroundImage: `url(${camoBg})`,
            width: '',
            height: '100%', borderRadius: '5px',
            backgroundSize: 'cover',
          }
            }>
          
          </div> */}
      </div>
    </div>
  );
};

export default PortpholioContainer;
