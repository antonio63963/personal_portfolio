import { FC, useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import cn from "classnames";

import devsteam from "assets/gifs/devsteam.gif";
import girl from "assets/gifs/girl.gif";
import hockey from "assets/gifs/hockey.gif";

import styles from "./SkilsContainer.module.css";

const SkilsContainer: FC = () => {
  const lottieContainer = useRef(null);
  const [lottieAnimation, setLottieAnimation] = useState<AnimationItem>();

  useEffect(() => {
    if (lottieContainer?.current) {
      const anim = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: require("lottie/neo.json"),
      });
      setLottieAnimation(anim);
    }
  }, []);

  return (
    <section>
      <div className={cn(styles.lottieContainer)} ref={lottieContainer}></div>
    </section>
  );
};

export default SkilsContainer;
