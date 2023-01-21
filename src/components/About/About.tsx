import { FC } from "react";
import cn from "classnames";

import styles from "./About.module.css";
import avatar from "assets/photo2.jpg";

const About: FC = () => {
  return (
    <div className={cn(styles.aboutContainer)}>
      <h1 className={cn("titleSection", "titleGradient")}>About me</h1>
      <div className={cn(styles.avatarContainer)}>
        <img className={cn(styles.avatar)} src={avatar} alt="avatar" />
      </div>
      <p className={cn(styles.aboutText)}>
        Hi! My name is Anton Fomin. I'm a front-end developer who have motion
        design skills. I have an experience with {""}
        <span className={cn(styles.accentText)}>
          Angular.js, React.js, Ionic, Node.js, Express.js, MongoDB, Mongoose
        </span>
        . Currently, when I have time, I write a mobile app for car mechanics
        with Flutter.
      </p>
      <p style={{ marginTop: "10px" }} className={cn(styles.aboutText)}>
        In this site I implemented motion design with{" "}
        <span className={cn(styles.accentText)}>
          {" "}
          After Effects and Lottie player.
        </span>{" "}
        The purpose was creating complex controllable animation with javascript
        and make the site a little bit fun).
      </p>
    </div>
  );
};

export default About;
