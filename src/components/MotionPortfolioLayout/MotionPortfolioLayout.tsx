import { FC, useEffect } from "react";
import cn from "classnames";

import devsteamGif from "assets/gifs/devsteam.gif";
import devsteamCover from "assets/covers/devsteamCover.png";
import girl from "assets/gifs/girl.gif";
import girlCover from "assets/covers/girlCover.png";
import hockey from "assets/gifs/hockey.gif";
import hockeyCover from "assets/covers/hockeyCover.png";

import styles from "./MotionPortfolioLayout.module.css";
import {MotionItem} from "components";

const MotionPortfolioLayout: FC = () => {
  return (
    <section>
      <div className={cn(styles.motionItemsRow)}>
        <MotionItem cover={devsteamCover} gif={devsteamGif} />
        <MotionItem cover={girlCover} gif={girl} />
        {/* <div className={cn(styles.motionItem)}>
          <img
            className={cn(styles.motionItem_image)}
            src={devsteamCover}
            alt="devsteam"
          />
        </div>
        <div className={cn(styles.motionItem)}>
          <img
            className={cn(styles.motionItem_image)}
            src={hockeyCover}
            alt="devsteam"
          />
        </div> */}
      </div>
    </section>
  );
};

export default MotionPortfolioLayout;
