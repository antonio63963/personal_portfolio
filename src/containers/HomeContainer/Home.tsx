import {
  FC,
  useState,
  useEffect,
  useLayoutEffect,
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
  const { isLocked } = useContext(AppContext);
  const lottieContainer = useRef(null);
  const [lottieAnimation, setLottieAnimation] = useState<AnimationItem>();
  const [animDirection, setAnimDirection] = useState<number>(1);
  const [isCatchUp, setIsCatchUp] = useState<boolean>(true);
  const [isMorpheusBtnActive, setIsMorpheusBtnActive] =
    useState<boolean>(false);
  const [isPagesUploaded, setIsPagesUploaded] = useState<boolean>(false);

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
      console.log("Click");
      if (lottieAnimation && isMorpheusBtnActive) {
        if (isLocked) {
          setIsMorpheusBtnActive(false);
          lottieAnimation.playSegments([130, 200], true);
          const onScroll = () => {
            scrollToPortfolio(portfolio);
            const timerId = setTimeout(() => {
              lottieAnimation.playSegments([42, 103], true);
              setIsMorpheusBtnActive(true);
              lottieAnimation.removeEventListener("complete", onScroll);
              setIsPagesUploaded(true);
              clearTimeout(timerId);
            }, 2500);
          };
          lottieAnimation.addEventListener("complete", onScroll);
        } else {
          scrollToPortfolio(portfolio);
        }
      }
    },
    [isLocked, isMorpheusBtnActive, lottieAnimation, scrollToPortfolio]
  );

  useLayoutEffect(() => {
    if (!lottieContainer?.current) return;

    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("lottie/morpheus.json"),
    });
    setLottieAnimation(anim);
    
    return () => anim.destroy();
  }, []);

  useEffect(() => {
    if (lottieAnimation) {
      lottieAnimation.playSegments([1, 42], true);
    }
  }, [lottieAnimation]);

  return (
    <section
      className={cn(styles.home, `${isPagesUploaded && styles.notLockedApp}`)}
    >
      <div className={cn(styles.contentAlign)}>
        <div className={cn(styles.col_text)}>
          <h1 className={cn(styles.title, "titleGradient")}>
            Welcome To My Personal Portfolio
          </h1>
          <p className={cn(styles.description)}>
            Hi, my name is Anton Fomin. I'm a front-end developer with motion
            design, animation skills. So fill free to pick up the handset...
          </p>

          <div>
            <ButtonLink
              text={isCatchUp ? "Catch Up" : "Back"}
              img={arrowIcon}
              onClick={catchUpThePhone}
            />
          </div>
        </div>
        <div className={cn(styles.col_lottie)}>
          <div className={cn(styles.lottieContainer)}>
            {isCatchUp && (
              <div
                onClick={catchUpThePhone}
                className={cn(styles.transparantLayer)}
              ></div>
            )}
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
