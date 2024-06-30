import Image from 'next/image';

import { IGameFieldControlButtonProps } from '../types';

import styles from '../styles/GameFieldControlButton.module.scss';

export const GameFieldControlButton: React.FC<IGameFieldControlButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button type='button' className={styles.button} aria-label={label} title={label} onClick={onClick}>
      <Image src={icon} width={20} height={20} alt='' />
    </button>
  );
};
