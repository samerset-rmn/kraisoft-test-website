import styles from './styles.module.scss'

export const GameField: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
