import { forwardRef } from 'react';

import { IGameFieldProps } from '../types';
import { GAME_FIELD_ID } from '../constants';

import styles from '../styles/GameField.module.scss';

export const GameField = forwardRef<HTMLDivElement, React.PropsWithChildren<IGameFieldProps>>(({ children, onClick }, ref) => {
  return (
    <div
      ref={ref}
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
        <h1 className={styles.title}>game.play – website where you can create and drag different items!</h1>
      {children}
    </div>
  );
});

GameField.displayName = 'GameField';
