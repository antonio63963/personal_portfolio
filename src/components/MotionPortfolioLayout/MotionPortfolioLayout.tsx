import { FC, useEffect, useState } from "react";
import cn from "classnames";

import devsteamGif from "assets/gifs/devsteam.gif";
import devsteamCover from "assets/covers/devsteamCover.png";
import girl from "assets/gifs/girl.gif";
import girlCover from "assets/covers/girlCover.png";
import hockey from "assets/gifs/hockey.gif";
import hockeyCover from "assets/covers/hockeyCover.png";
import itaka from "assets/gifs/itaka.gif";
import itakaCover from "assets/covers/itakaCover.png";

import ae from 'assets/icons/ae.svg';
import ai from 'assets/icons/ai.svg';
import moho from 'assets/icons/moho.svg';

import myLogo from 'assets/logo_web.png';

import behance from "assets/icons/behance.svg";


import styles from "./MotionPortfolioLayout.module.css";
import { ButtonLink, PortfolioItem } from "components";

const MotionPortfolioLayout: FC = () => {
  const [isLong, setIsLong] = useState<boolean>(false);
  return (
 <section>
     <div className={cn(styles.projectsRow)}>
       <PortfolioItem
         isLong={!isLong}
         setIsLong={setIsLong}
         description="A sample from ad animation video for hockey merch."
         projectLogo={myLogo}
         bgItem={hockeyCover}
         techList={[ae, ai]}
         gif={hockey}
       />
       <div style={{ width: "50px" }}></div>
       <PortfolioItem
         isLong={isLong}
         setIsLong={setIsLong}
         description="Add video clothes for children"
         projectLogo={myLogo}
         bgItem={girlCover}
         techList={[ai, moho]}
         gif={girl}
       />
     </div>
    <div style={{height: '35px'}}></div>

     <div className={cn(styles.projectsRow)}>
     <PortfolioItem
         isLong={isLong}
         setIsLong={setIsLong}
         description="A logo animation"
         projectLogo={myLogo}
         bgItem={devsteamCover}
         techList={[ae, ai]}
         gif={devsteamGif}
       />
       <div style={{ width: "50px" }}></div>
       <PortfolioItem
         isLong={!isLong}
         setIsLong={setIsLong}
         description="Ad video for beach club"
         projectLogo={myLogo}
         bgItem={itakaCover}
         techList={[ai, moho]}
         gif={itaka}
       />
     </div>
     <ButtonLink
        link="https://www.behance.net/shotvideo25"
        img={behance}
        text="More projects"
      />
 </section>
  );
  // return (
  //   <section>
  //     <div className={cn(styles.motionItemsRow)}>
  //       <MotionItem cover={devsteamCover} gif={devsteamGif} />
  //       <MotionItem cover={girlCover} gif={girl} />
  //       <MotionItem cover={itakaCover} gif={itaka} />
  //       <MotionItem cover={hockeyCover} gif={hockey} />
  //     </div>

  //     <ButtonLink
  //       link="https://www.behance.net/shotvideo25"
  //       img={behance}
  //       text="More projects"
  //     />
  //   </section>
  // );
  
};

export default MotionPortfolioLayout;
