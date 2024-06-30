import styles from '../styles/GameFieldControlsWrapper.module.scss';

export const GameFieldControlsWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
