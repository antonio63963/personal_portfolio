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

import arrowIcon from "assets/icons/arrow.svg";
import { ButtonLink } from "components";

type HomeProps = {
  scrollToPortfolio: (data: Portfolio) => void;
};

const Home: FC<HomeProps> = ({ scrollToPortfolio }) => {
  const { setIsLocked } = useContext(AppContext);
  const lottieContainer = useRef(null);
  const [lottieAnimation, setLottieAnimation] = useState<AnimationItem>();
  const [animDirection, setAnimDirection] = useState<number>(1);
  const [isCatchUp, setIsCatchUp] = useState<boolean>(true);
  const [isMorpheusBtnActive, setIsMorpheusBtnActive] =
    useState<boolean>(false);

  const catchUpThePhone = useCallback(() => {
    if (!lottieAnimation || animDirection === 0) return;
    if (animDirection === 1) {
      setAnimDirection(0);
      lottieAnimation.loop = false;
      lottieAnimation.playSegments([42, 103], true);
      lottieAnimation.addEventListener("complete", () => {
        setAnimDirection(-1);
        setIsCatchUp(false);
        setIsMorpheusBtnActive(true);
      });
    } else {
      setAnimDirection(0);
      lottieAnimation.playSegments([103, 42]);
      lottieAnimation.addEventListener("complete", () => {
        setAnimDirection(1);
        setIsCatchUp(true);
        setIsMorpheusBtnActive(false);
      });
    }
  }, [animDirection, lottieAnimation]);
  // hover
  const onMotionEnter = useCallback(() => {
    if (lottieAnimation && isMorpheusBtnActive) {
      lottieAnimation.playSegments([112, 122], true);
    }
  }, [isMorpheusBtnActive, lottieAnimation]);
  const onMotionLeave = useCallback(() => {
    if (lottieAnimation && isMorpheusBtnActive) {
      lottieAnimation.playSegments([122, 112], true);
    }
  }, [isMorpheusBtnActive, lottieAnimation]);

  const onWebEnter = useCallback(() => {
    if (lottieAnimation && isMorpheusBtnActive) {
      lottieAnimation.playSegments([101, 111], true);
    }
  }, [isMorpheusBtnActive, lottieAnimation]);
  const onWebLeave = useCallback(() => {
    if (lottieAnimation && isMorpheusBtnActive) {
      lottieAnimation.playSegments([111, 101], true);
    }
  }, [isMorpheusBtnActive, lottieAnimation]);

  // onClick

  const onPortfolioClick = useCallback(
    (portfolio: Portfolio) => {
      if (lottieAnimation && isMorpheusBtnActive) {
        setIsMorpheusBtnActive(false);
        lottieAnimation.playSegments([130, 200], true);
        lottieAnimation.addEventListener("complete", () => {
          setIsMorpheusBtnActive(false); // withot this double code on last second on scroll down the Morpheus will be visible
          setIsLocked(false);
          scrollToPortfolio(portfolio);
        });
      }
    },
    [isMorpheusBtnActive, lottieAnimation, scrollToPortfolio, setIsLocked]
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
            Hi, my name is Anton Fomin. I'm a front-end developer with motion design, animation skills. So fill free to pick up the handset...
          </p>

          <div>
            <ButtonLink
              text={isCatchUp ? "Catch Up" : "Hang Up"}
              img={arrowIcon}
              onClick={catchUpThePhone}
            />
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
