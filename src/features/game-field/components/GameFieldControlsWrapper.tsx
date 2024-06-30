import styles from '../styles/GameFieldControlsWrapper.module.scss';

export const GameFieldControlsWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container} data-testid='game-field-controls-wrapper'>
      {children}
    </div>
  );
};
