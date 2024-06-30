import { IGameFieldProps } from './types';
import { GAME_FIELD_ID } from './constants';

import styles from './styles.module.scss';

export const GameField: React.FC<React.PropsWithChildren<IGameFieldProps>> = ({ children, onClick }) => {
  return (
    <div
      id={GAME_FIELD_ID}
      className={styles.container}
      onClick={(e) => {
        /**
         * NOTE Spawn new items only when clicked on an empty space.
         * But if later we need to react to clicks on any item, this solution should be overwritten.
         * For current requirements it's enough.
         */
        if ((e.target as HTMLDivElement).id === GAME_FIELD_ID) {
          onClick({ top: e.clientY, left: e.clientX });
        }
      }}>
      {children}
    </div>
  );
};
