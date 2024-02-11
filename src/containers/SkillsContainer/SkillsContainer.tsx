import { FC, useCallback, useEffect, useRef, useState } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import cn from 'classnames';

import frontendIcon from 'assets/icons/frontendIcon.svg';
import backendIcon from 'assets/icons/backendIcon.svg';
import motionIcon from 'assets/icons/motionIcon.svg';
import mobileIcon from 'assets/icons/mobileIcon.svg';

import styles from './SkilsContainer.module.css';
import useElementOnScreen from 'hooks/useElementOnScreen';

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
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: require('lottie/neo.json'),
      });
      setLottieAnimation(anim);
    }
  }, []);

  useEffect(() => {
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
      <h1 className={cn(styles.title, 'titleGradient')}>Skills</h1>
      <div className={cn(styles.lottieContainer)} ref={lottieContainer}></div>
      <div className={cn(styles.skilsRow)}>
        <div
          style={{ marginLeft: 'auto' }}
          className={cn(styles.skilsCol, 'gradientBg')}
        >
          <h3 className={cn(styles.skilCol_title, 'titleGradient')}>
            Frontend
          </h3>
          <div className={cn(styles.skilCol_content)}>
            <ul className={cn(styles.listSkils)}>
              <li>Javascript/TS</li>
              <li>Ionic</li>
              <li>Html5</li>
              <li>Css3</li>
              <li>React.js/Redux</li>
              <li>Angular.js</li>
            </ul>

            <div className={cn(styles.content_img_wrapper)}>
              <img
                className={cn(styles.content_img)}
                src={frontendIcon}
                alt='frontendIcon'
              />
            </div>
          </div>
        </div>
        <div className={cn(styles.skilsCol, 'gradientBg')}>
          <h3 className={cn(styles.skilCol_title, 'titleGradient')}>Backend</h3>
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
                alt='backendIcon'
              />
            </div>
          </div>
        </div>
      </div>

      {/* OTHER */}
      <h2 className={cn(styles.titleOther, 'titleGradient')}>Other Skills</h2>
      <div className={cn(styles.skilsRow)}>
        <div className={cn(styles.skilsCol, 'gradientBg')}>
          <h3 className={cn(styles.skilCol_title, 'titleGradient')}>Mobile</h3>
          <div className={cn(styles.skilCol_content)}>
            <ul className={cn(styles.listSkils)}>
              <li>Ionic</li>
              <li>Dart</li>
              <li>Flutter</li>
            </ul>
            <div className={cn(styles.content_img_wrapper)}>
              <img
                className={cn(styles.content_img)}
                src={mobileIcon}
                alt='mobileIcon'
              />
            </div>
          </div>
        </div>

        <div className={cn(styles.skilsCol, 'gradientBg')}>
          <h3 className={cn(styles.skilCol_title, 'titleGradient')}>
            Motion Design
          </h3>
          <div className={cn(styles.skilCol_content)}>
            <ul className={cn(styles.listSkils)}>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe After Effects</li>
              <li>Moho(Anime Studio)</li>
              <li>Characters</li>
              <li>Lottie</li>
            </ul>

            <div className={cn(styles.content_img_wrapper)}>
              <img
                className={cn(styles.content_img)}
                src={motionIcon}
                alt='motionIcon'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkilsContainer;
