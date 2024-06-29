import { IGameFieldProps } from './types';
import { GAME_ITEM_SIZE } from '@/constants/gameItem';
import { PAGE_HEADER_HEIGHT } from '@/constants/pageHeader';

import styles from './styles.module.scss';

export const GameField: React.FC<React.PropsWithChildren<IGameFieldProps>> = ({ children, onClick }) => {
  return (
    <div className={styles.container} onClick={(e) => onClick({ top: e.clientY, left: e.clientX })}>
      {children}
    </div>
  );
};
