import { FC, useState } from "react";
import cn from "classnames";


import styles from "./MotionItem.module.css";

type Motion = {
  cover: string;
  gif: string;
};
const MotionItem: FC<Motion> = ({ cover, gif }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  return (
    <div
      className={cn(styles.motionItem)}
      onClick={() => setIsToggled(!isToggled)}
    >
      <img
        className={cn(styles.motionItem_image)}
        src={!isToggled ? cover : gif}
        alt="devsteam"
      />
    </div>
  );
};

export default MotionItem;
