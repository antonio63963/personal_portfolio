import {
  FC,
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import lottie, { AnimationItem } from "lottie-web";
import cn from "classnames";

import AppContext from "context/AppContext";
import styles from "./Home.module.css";
import { Portfolio } from "context/AppContext.type";

type HomeProps = {
  scrollToPortfolio: (data: Portfolio) => void;
};

const Home: FC<HomeProps> = ({ scrollToPortfolio }) => {
  const { setIsLocked } = useContext(AppContext);
  const lottieContainer = useRef(null);
  const [lottieAnimation, setLottieAnimation] = useState<AnimationItem>();
  const [animDirection, setAnimDirection] = useState<number>(1);
  const [isCatchUp, setIsCatchUp] = useState<boolean>(true);

  const catchUpThePhone = useCallback(() => {
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
  }, [animDirection, lottieAnimation]);
  // hover
  const onMotionEnter = useCallback(() => {
    if (lottieAnimation) {
      lottieAnimation.playSegments([112, 122], true);
    }
  }, [lottieAnimation]);
  const onMotionLeave = useCallback(() => {
    if (lottieAnimation) {
      lottieAnimation.playSegments([122, 112], true);
    }
  }, [lottieAnimation]);

  const onWebEnter = useCallback(() => {
    if (lottieAnimation) {
      lottieAnimation.playSegments([101, 111], true);
    }
  }, [lottieAnimation]);
  const onWebLeave = useCallback(() => {
    if (lottieAnimation) {
      lottieAnimation.playSegments([111, 101], true);
    }
  }, [lottieAnimation]);

  // onClick
  const onPortfolioClick = useCallback(
    (portfolio: Portfolio) => {
      if (lottieAnimation) {
        lottieAnimation.playSegments([130, 200], true);
      }

      let markerInterval: boolean = false;
      const timerId = setInterval(() => {
        if (!markerInterval) {
          markerInterval = true;
          scrollToPortfolio(portfolio);
          setIsLocked(false);
        } else {
          clearInterval(timerId);
        }
      }, 2200);
    },
    [lottieAnimation, scrollToPortfolio, setIsLocked]
  );

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
              onClick={catchUpThePhone}
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
                onClick={() => onPortfolioClick(Portfolio.motion)}
                onMouseEnter={onWebEnter}
                onMouseLeave={onWebLeave}
              >
                Animation
              </button>
              <button
                onMouseEnter={onMotionEnter}
                onMouseLeave={onMotionLeave}
                className={cn("btn", styles.web_btn)}
                onClick={() => onPortfolioClick(Portfolio.web)}
              >
                Web
              </button>
            </div>
            <div
              ref={lottieContainer}
              className={cn(styles.lottieContainer)}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
