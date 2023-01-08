import { FC } from "react";
import cn from "classnames";

import styles from "./About.module.css";
import avatar from "assets/photo2.jpg";

const About: FC = () => {
  return (
    <div className={cn(styles.aboutContainer)}>
      <h1 className={cn("titleSection", "titleGradient")}>About</h1>
      <div className={cn(styles.avatarContainer)}>
        <img className={cn(styles.avatar)} src={avatar} alt="avatar" />
      </div>
      <p className={cn(styles.aboutText)}>
        Hi! My name is Anton Fomin.
        I'm a web developer who switched from Motion Design. I have an
        experience with {''}  
        {/* <br /> */}
        <span className={cn(styles.accentText)}>
         fixing bugs on Angular and writing fullstack app on Ionic, React.js, Node.js,
          Express.js, MongoDB, Mongoose
        </span>
        .
        {/* <br />  */}
        Currently, when I have time, I write a mobile app for car
        mechanics with Flutter.
      </p>
    </div>
  );
};

export default About;
