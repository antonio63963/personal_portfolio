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

  const handleScroll = (event: any) => {
    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  };

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
    <section className={cn(styles.skilsSection)}>
      <h1 className={cn(styles.title, "titleGradient")}>Skils</h1>
        <div onScroll={handleScroll} className={cn(styles.lottieContainer)} ref={lottieContainer}></div>
      <div className={cn(styles.skilsRow)}>
        <div className={cn(styles.skilsCol, "gradientBg")}>
          <h3 className={cn(styles.skilCol_title, "titleGradient")}>Motion Design</h3>
          <ul className={cn(styles.listSkils)}>
            <li>Adobe Illustrator</li>
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
            <li>Ionic</li>
            <li>Typescript</li>
            <li>Html5</li>
            <li>Css3</li>
            <li>React</li>
            <li>Angular</li>
          </ul>
        </div>

        <div className={cn(styles.skilsCol, "gradientBg")}>
          <h3 className={cn(styles.skilCol_title, "titleGradient")}>Backend</h3>
          <ul className={cn(styles.listSkils)}>
            <li>Javascript</li>
            <li>Typescript</li>
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
