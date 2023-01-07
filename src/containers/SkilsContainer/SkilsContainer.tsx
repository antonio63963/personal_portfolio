import { FC, useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import cn from "classnames";

import devsteam from "assets/gifs/devsteam.gif";
import girl from "assets/gifs/girl.gif";
import hockey from "assets/gifs/hockey.gif";

import styles from "./SkilsContainer.module.css";
import useElementOnScreen from "hooks/useElementOnScreen";

type TSkils = {
  onScreen: boolean;
}

const SkilsContainer: FC = () => {
  const lottieContainer = useRef(null);
  const onScreen = useElementOnScreen({ref: lottieContainer, rootMargin: '-300px'});
  const [lottieAnimation, setLottieAnimation] = useState<AnimationItem>();

  useEffect(() => {
    if (lottieContainer?.current) {
      const anim = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: require("lottie/neo.json"),
      });
      setLottieAnimation(anim);
    }
  }, []);

  useEffect(() => {
    console.log('Lottie', onScreen);
    if(onScreen) {
      lottieAnimation?.setDirection(1);
      lottieAnimation?.play();
    } else {
      lottieAnimation?.setDirection(-1);
      lottieAnimation?.play();
    }
  }, [lottieAnimation, onScreen]);

  return (
    <section className={cn(styles.skilsSection)}>
      <h1 className={cn(styles.title, "titleGradient")}>Skils</h1>
        <div className={cn(styles.lottieContainer)} ref={lottieContainer}></div>
      <div className={cn(styles.skilsRow)}>
        <div className={cn(styles.skilsCol, "gradientBg")}>
          <h3 className={cn(styles.skilCol_title, "titleGradient")}>Motion Design</h3>
          <ul className={cn(styles.listSkils)}>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>After Effects</li>
            <li>Moho(Anime Studio)</li>
            <li>Characters</li>
            <li>Lottie</li>
            {/* <li>Mongoose</li> */}
          </ul>
        </div>

        <div style={{marginLeft: 'auto'}} className={cn(styles.skilsCol, "gradientBg")}>
          <h3 className={cn(styles.skilCol_title, "titleGradient")}>Fontend</h3>
          <ul className={cn(styles.listSkils)}>
            <li>Javascript/TS</li>
            <li>Ionic</li>
            <li>Html5</li>
            <li>Css3</li>
            <li>React/Redux</li>
            <li>Angular</li>
          </ul>
        </div>

        <div className={cn(styles.skilsCol, "gradientBg")}>
          <h3 className={cn(styles.skilCol_title, "titleGradient")}>Backend</h3>
          <ul className={cn(styles.listSkils)}>
            <li>Javascript/TS</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default SkilsContainer;
