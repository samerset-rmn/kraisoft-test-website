import { IGameFieldProps } from './types';
import { GAME_ITEM_SIZE } from '@/constants/gameItem';
import { PAGE_HEADER_HEIGHT } from '@/constants/pageHeader';

import styles from './styles.module.scss';

export const GameField: React.FC<React.PropsWithChildren<IGameFieldProps>> = ({ children, onClick }) => {
  return (
    <div
      className={styles.container}
      onClick={(e) => {
        console.log('GameField onClick');
        onClick({
          /* NOTE clientY includes page header's height, subtract it */
          top: e.clientY - PAGE_HEADER_HEIGHT - GAME_ITEM_SIZE / 2,
          /* NOTE Use GAME_ITEM_SIZE to spawn an item right at the center of the cursor */
          left: e.clientX - GAME_ITEM_SIZE / 2
        });
      }}
      onClickCapture={() => {
        console.log('GameField onClickCapture');
      }}>
      {children}
    </div>
  );
};
