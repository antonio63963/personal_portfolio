import { FC, useEffect, useRef, useState } from "react";
import cn from "classnames";

import useElementOnScreen from "hooks/useElementOnScreen";

import styles from "./Novohoodonosor.module.css";

import novohood from "assets/gifs/novohoodonosor.gif";

const Novohoodonosor: FC = () => {
  const [isImage, setIsImage] = useState<Boolean>(false);
  const novohoodSection = useRef(null);
  const onScreen = useElementOnScreen({
    ref: novohoodSection,
    rootMargin: '-140px'
  });

  useEffect(() => {
    if (onScreen) {
      setIsImage(true);
    } else {
      setIsImage(false);
    }
    console.log(onScreen);
  }, [onScreen]);

  return (
    <div ref={novohoodSection} className={cn(styles.containerNovo)}>
      {isImage && <img className={cn(styles.imgNovo)} src={novohood} alt="Novohoodonosor" />}
    </div>
  );
};

export default Novohoodonosor;
