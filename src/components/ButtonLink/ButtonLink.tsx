import {FC} from 'react';
import cn from 'classnames';

import styles from './ButtonLink.module.css';

type TButton = {
  link: string;
  img: string;
  text: string;
}

const ButtonLink:FC<TButton> = ({link, img, text}) => {
  return ( <a
    target="_blank"
    href={link}
    rel="noreferrer"
  >
    <button className={cn("btn", styles.button)}>
      <p>{text}</p>
      <img src={img} alt="behance" />
    </button>
  </a>)
};

export default ButtonLink;