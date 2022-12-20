import { FC, useState, useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

import cn from "classnames";
import styles from "./Home.module.css";

type HomeProps = {
  goToPortfolio: (data: string) => void;
};

const Home: FC<HomeProps> = ({ goToPortfolio }) => {
  const lottieContainer = useRef(null);
  const [lottieAnimation, setLottieAnimation] = useState<AnimationItem>();
  const [animDirection, setAnimDirection] = useState<number>(1);
  const [isCatchUp, setIsCatchUp] = useState<boolean>(true);

  function catchUp() {
    if (!lottieAnimation || animDirection === 0) return;
    if (animDirection === 1) {
      setAnimDirection(0);
      lottieAnimation.loop = false;
      lottieAnimation.playSegments([42, 103], true);
      lottieAnimation.addEventListener("complete", () => {
        setAnimDirection(-1);
        setIsCatchUp(false);
      });
    } else {
      setAnimDirection(0);
      lottieAnimation.playSegments([103, 42]);
      lottieAnimation.addEventListener("complete", () => {
        setAnimDirection(1);
        setIsCatchUp(true);
      });
    }
  }

  useEffect(() => {
    if (lottieContainer?.current) {
      const anim = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("lottie/morpheus.json"),
      });
      setLottieAnimation(anim);
    }
  }, []);

  useEffect(() => {
    if (lottieAnimation) {
      lottieAnimation.playSegments([1, 42], true);
    }
  }, [lottieAnimation]);

  return (
    <section className={cn(styles.home)}>
      <div className={cn(styles.contentAlign)}>
        <div className={cn(styles.col_text)}>
          <h1 className={cn(styles.title, "titleGradient")}>
            Welcome To My Personal Portpholio
          </h1>
          <p className={cn(styles.description)}>
            Hi, my name is Anton Fomin. I'm a motion designer, animator who
            switched to web development. So fill free to pick up the handset...
          </p>

          <div>
            <button
              className={cn("btn", styles.catchPhone_btn)}
              onClick={catchUp}
            >
              {isCatchUp ? "Catch Up" : "Hang Up"}
            </button>
          </div>
        </div>
        <div className={cn(styles.col_lottie)}>
          <div className={cn(styles.lottieContainer)}>
            <div className={cn(styles.transparentButtonsRow)}>
              <button
                className={cn("btn", styles.animation_btn)}
                onClick={() => goToPortfolio("animation")}
              >
                Animation
              </button>
              <button className={cn("btn", styles.web_btn)}>Web</button>
            </div>
            <div ref={lottieContainer} className="container"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
