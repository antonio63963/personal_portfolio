import { FC, useEffect } from "react";
import cn from "classnames";

import devsteamGif from "assets/gifs/devsteam.gif";
import devsteamCover from "assets/covers/devsteamCover.png";
import girl from "assets/gifs/girl.gif";
import girlCover from "assets/covers/girlCover.png";
import hockey from "assets/gifs/hockey.gif";
import hockeyCover from "assets/covers/hockeyCover.png";
import itaka from "assets/gifs/itaka.gif";
import itakaCover from "assets/covers/itakaCover.png";

import behance from "assets/icons/behance.svg";

import styles from "./MotionPortfolioLayout.module.css";
import { ButtonLink, MotionItem } from "components";

const MotionPortfolioLayout: FC = () => {
  return (
    <section>
      <div className={cn(styles.motionItemsRow)}>
        <MotionItem cover={devsteamCover} gif={devsteamGif} />
        <MotionItem cover={girlCover} gif={girl} />
        <MotionItem cover={itakaCover} gif={itaka} />
        <MotionItem cover={hockeyCover} gif={hockey} />
      </div>

      <ButtonLink
        link="https://www.behance.net/shotvideo25"
        img={behance}
        text="More projects"
      />
    </section>
  );
};

export default MotionPortfolioLayout;
