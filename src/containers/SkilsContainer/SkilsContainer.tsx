import { FC, useCallback, useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import cn from "classnames";

import frontendIcon from "assets/icons/frontendIcon.svg";
import backendIcon from "assets/icons/backendIcon.svg";
import motionIcon from "assets/icons/motionIcon.svg";

import aeIcon from "assets/icons/ae.svg";
import aiIcon from "assets/icons/ai.svg";
import mohoIcon from "assets/icons/moho.svg";

import styles from "./SkilsContainer.module.css";
import useElementOnScreen from "hooks/useElementOnScreen";
import { get } from "http";

type TSkils = {
  onScreen: boolean;
};

const SkilsContainer: FC = () => {
  const lottieContainer = useRef(null);
  const onScreen = useElementOnScreen({
    ref: lottieContainer,
  });
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
    console.log("Lottie", onScreen);
    if (onScreen) {
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
          <h3 className={cn(styles.skilCol_title, "titleGradient")}>
            Motion Design
          </h3>
          <div className={cn(styles.skilCol_content)}>
            <ul className={cn(styles.listSkils)}>
              <li>
                {/* <img className={cn(styles.skilIcon)} src={aiIcon} alt="ai" />{" "} */}
                Adobe Illustrator
              </li>
              <li>Adobe Photoshop</li>
              <li>
                {/* <img className={cn(styles.skilIcon)} src={aeIcon} alt="ae" /> */}
                Adobe After Effects
              </li>
              <li>
                {/* <img
                  className={cn(styles.skilIcon)}
                  src={mohoIcon}
                  alt="moho"
                /> */}
                Moho(Anime Studio)
              </li>
              <li>Characters</li>
              <li>Lottie</li>
              {/* <li>Mongoose</li> */}
            </ul>

            <div className={cn(styles.content_img_wrapper)}>
              <img
                className={cn(styles.content_img)}
                src={motionIcon}
                alt="motionIcon"
              />
            </div>
          </div>
        </div>

        <div
          style={{ marginLeft: "auto" }}
          className={cn(styles.skilsCol, "gradientBg")}
        >
          <h3 className={cn(styles.skilCol_title, "titleGradient")}>Fontend</h3>
          <div className={cn(styles.skilCol_content)}>
            <ul className={cn(styles.listSkils)}>
              <li>Javascript/TS</li>
              <li>Ionic</li>
              <li>Html5</li>
              <li>Css3</li>
              <li>React/Redux</li>
              <li>Angular</li>
            </ul>

            <div className={cn(styles.content_img_wrapper)}>
              <img
                className={cn(styles.content_img)}
                src={frontendIcon}
                alt="frontendIcon"
              />
            </div>
          </div>
        </div>

        <div className={cn(styles.skilsCol, "gradientBg")}>
          <h3 className={cn(styles.skilCol_title, "titleGradient")}>Backend</h3>
          <div className={cn(styles.skilCol_content)}>
            <ul className={cn(styles.listSkils)}>
              <li>Javascript/TS</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
            <div className={cn(styles.content_img_wrapper)}>
              <img
                className={cn(styles.content_img)}
                src={backendIcon}
                alt="backendIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkilsContainer;
