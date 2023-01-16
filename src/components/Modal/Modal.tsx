import { FC } from 'react';
import cn from 'classnames';
import styles from './Modal.module.css';

type TModal = {
  gif?: string;
  closeModal: () => void;
};

const Modal: FC<TModal> = ({gif, closeModal}) => {
  return (
    <div>
      <div className={cn(styles.bg)} onClick={closeModal}>
      </div>
        <div className={cn(styles.imageContainer)}>
          <span className={cn(styles.close)}>X</span>
          <img className={cn(styles.image )} src={gif} alt="gif" />
        </div>
    </div>
  );
};

export default Modal;
