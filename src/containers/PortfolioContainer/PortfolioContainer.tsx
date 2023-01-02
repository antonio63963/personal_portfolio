import { FC, useState } from "react";

import cn from "classnames";
import styles from "./Portfolio.module.css";

import camoBg from "assets/camo.png";

import tailwindIcon from "assets/icons/tailwind.svg";
import tsIcon from "assets/icons/ts.svg";
import reactIcon from "assets/icons/react.svg";
import nodeIcon from "assets/icons/nodejs.svg";
import expressIcon from "assets/icons/express.svg";
import mongoIcon from "assets/icons/mongodb.svg";
import cssIcon from "assets/icons/css3.svg";
import htmlIcon from "assets/icons/html5.svg";
import sassIcon from "assets/icons/sass.svg";
import jsIcon from "assets/icons/js.svg";

import githubIcon from "assets/icons/github.svg";
import camoLogo from "assets/icons/camoLogo.png";
import eyeTrackerLogo from "assets/eyeTrackerLogo.svg";

import eyeTrackerBg from "assets/eyeTracker.png";

import { PortfolioItem } from "components";

const PortpholioContainer: FC = () => {
  const [isLong, setIsLong] = useState<boolean>(false);
  return (
    <div className={cn(styles.container)}>
      <h1 className={cn(styles.title, "titleGradient")}>Projects</h1>
      <div className={cn(styles.projectsRow)}>
        <PortfolioItem
          isLong={!isLong}
          setIsLong={setIsLong}
          description="Social app that allows to share photos, takes comments and
        likes."
          targetLink="#"
          githubLink="https://github.com/antonio63963/camo"
          projectLogo={camoLogo}
          bgItem={camoBg}
          techList={[tailwindIcon, tsIcon, reactIcon, expressIcon, mongoIcon]}
        />
        <div style={{ width: "50px" }}></div>
        <PortfolioItem
          isLong={isLong}
          setIsLong={setIsLong}
          description="Landing page was made by pure java script without any library."
          targetLink="https://antonio63963.github.io/eyeTracker/"
          githubLink="https://github.com/antonio63963/eyeTracker"
          projectLogo={eyeTrackerLogo}
          bgItem={eyeTrackerBg}
          techList={[htmlIcon, jsIcon, cssIcon, sassIcon]}
        />
      </div>
    </div>
  );
};

export default PortpholioContainer;
