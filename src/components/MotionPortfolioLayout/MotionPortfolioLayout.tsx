import { FC, useEffect } from "react";
import cn from "classnames";

import devsteam from "assets/gifs/devsteam.gif";
import girl from "assets/gifs/girl.gif";
import hockey from "assets/gifs/hockey.gif";

import styles from "./SkilsContainer.module.css";

const SkilsContainer: FC = () => {
  return (
    <section>
      <div className={cn(styles.motionItemsRow)}>
        <div className={cn(styles.motionItem)}>
          <img
            className={cn(styles.motionItem_image)}
            src={styles.motion}
            alt="devsteam"
          />
        </div>
      </div>
    </section>
  );
};

export default SkilsContainer;
