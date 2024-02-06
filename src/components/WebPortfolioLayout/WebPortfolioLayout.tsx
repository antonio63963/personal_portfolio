import { FC, useState } from 'react';
import cn from 'classnames';

import styles from './WebPortfolioLayout.module.css';

import camoBg from 'assets/camo.png';
import tailwindIcon from 'assets/icons/tailwind.svg';
import tsIcon from 'assets/icons/ts.svg';
import reactIcon from 'assets/icons/react.svg';
import nodeIcon from 'assets/icons/nodejs.svg';
import expressIcon from 'assets/icons/express.svg';
import mongoIcon from 'assets/icons/mongodb.svg';
import cssIcon from 'assets/icons/css3.svg';
import htmlIcon from 'assets/icons/html5.svg';
import sassIcon from 'assets/icons/sass.svg';
import jsIcon from 'assets/icons/js.svg';
import githubIcon from 'assets/icons/githubLight.svg';
import aeIcon from 'assets/icons/ae.svg';
import aiIcon from 'assets/icons/ai.svg';

import camoLogo from 'assets/icons/camoLogo.png';
import eyeTrackerLogo from 'assets/eyeTrackerLogo.svg';
import eyeTrackerBg from 'assets/eyeTracker.png';
import ninjaGame from 'assets/splash_screen.jpg';

import myLogo from 'assets/logo_web.png';
import slidersUiBg from 'assets/slidersUI.png';

import { ButtonLink, PortfolioItem } from 'components';

const WebPortfolioLayout: FC = () => {
  const [isLong, setIsLong] = useState<boolean>(false);
  return (
    <section>
      <div className={cn(styles.projectsRow)}>
        <PortfolioItem
          isLong={!isLong}
          setIsLong={setIsLong}
          description='Social app that allows to share photos, takes comments and
   likes.'
          targetLink='https://github.com/antonio63963/camo'
          githubLink='https://github.com/antonio63963/camo'
          projectLogo={camoLogo}
          bgItem={camoBg}
          techList={[
            tailwindIcon,
            tsIcon,
            reactIcon,
            nodeIcon,
            expressIcon,
            mongoIcon,
          ]}
        />
        <div style={{ width: '50px' }}></div>
        <PortfolioItem
          isLong={isLong}
          setIsLong={setIsLong}
          description='Landing page was made by pure java script without any library.'
          targetLink='https://antonio63963.github.io/eyeTracker/'
          githubLink='https://github.com/antonio63963/eyeTracker'
          projectLogo={eyeTrackerLogo}
          bgItem={eyeTrackerBg}
          techList={[htmlIcon, jsIcon, cssIcon, sassIcon]}
        />
      </div>
      <div style={{ height: '35px' }}></div>
      <div className={cn(styles.projectsRow)}>
        <PortfolioItem
          isLong={isLong}
          setIsLong={setIsLong}
          description='Adaptive sliders UI. Get best rate by some parameters.'
          targetLink='https://antonio63963.github.io/sliders-ui/'
          githubLink='https://github.com/antonio63963/sliders-ui'
          projectLogo={myLogo}
          bgItem={slidersUiBg}
          techList={[htmlIcon, cssIcon, jsIcon]}
        />
        <div style={{ width: '50px' }}></div>
        <PortfolioItem
          isLong={!isLong}
          setIsLong={setIsLong}
          description='The Ninja. Rubilovo!!! Game in process with fun bugs.'
          targetLink='https://antonio63963.github.io/ninja-game/'
          githubLink='https://github.com/antonio63963/ninja-game'
          projectLogo={myLogo}
          bgItem={ninjaGame}
          techList={[htmlIcon, cssIcon, jsIcon, aeIcon, aiIcon]}
        />
      </div>
      <ButtonLink
        link='https://github.com/antonio63963'
        img={githubIcon}
        text='More projects'
      />
    </section>
  );
};

export default WebPortfolioLayout;
