import { FC, useEffect, useRef } from "react";
import lottie from "lottie-web";

import cn from 'classnames';
import styles from './Home.module.css';

const Home: FC = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    if (lottieContainer?.current) {
      lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("lottie/morpheus.json"),
      });
    }
  }, []);
  return (
    <section className={cn(styles.home)}>
      {/* <div className="headline"> */}
        <div className={cn(styles.headline_textBlock)}>
          <h1 className={cn(styles.headlineTitle, 'gradientText')}>
            Welcome To My Personal Portpholio
          </h1>
          <p className="header-description">
            Hi, my name is Anton Fomin. I'm a motion designer, animator who
            switched to web development. So fill free to pick up the handset...
          </p>

          <div>
            <button className="btn hangUp-btn">Catch Up</button>
          </div>
        </div>
        <div className="col-lottie">
          <div className="lottie-container">
            <div className="buttons-row">
              <button className="btn btn-animation">Animation</button>
              <button className="btn btn-web">Web</button>
            </div>
            <div ref={lottieContainer} className="container"></div>
          </div>
          <div></div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Home;
