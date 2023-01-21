import { FC, useState } from "react";
import * as rdd from "react-device-detect";
import cn from "classnames";

import styles from "./ButtonLink.module.css";

type TButton = {
  link?: string;
  img: string;
  text: string;
  isPressed?: boolean;
  onClick?: () => void;
};

const ButtonLink: FC<TButton> = ({ link, img, text, isPressed, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a target="_blank" href={link} rel="noreferrer">
      <button
        className={cn(
          "btn",
          styles.button,
          `${isHovered && !rdd.isMobile ? styles.hover : null}`
        )}
        onClick={onClick}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <p>{text}</p>
        <img className={cn(styles.btnIcon)} src={img} alt="behance" />
      </button>
    </a>
  );
};

export default ButtonLink;
