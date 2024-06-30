import { forwardRef } from 'react';

import { IGameFieldProps } from '../types';
import { GAME_FIELD_ID } from '../constants';

import styles from '../styles/GameField.module.scss';

export const GameField = forwardRef<HTMLDivElement, React.PropsWithChildren<IGameFieldProps>>(({ children, onClick }, ref) => {
  return (
    <div data-testid='game-field' ref={ref} id={GAME_FIELD_ID} className={styles.container} onClick={onClick}>
      <h1 className={styles.title}>game.play – website where you can create and drag different items!</h1>
      {children}
    </div>
  );
});

GameField.displayName = 'GameField';
