import { FC } from "react";
import cn from "classnames";

import styles from "./Novohoodonosor.module.css";

import novohood from "assets/gifs/novohoodonosor.gif";

const Novohoodonosor: FC = () => {
  return (
    <div className={cn(styles.containerNovo)}>
      <img className={cn(styles.imgNovo)} src={novohood} alt="Novohoodonosor" />
    </div>
  );
};

export default Novohoodonosor;
