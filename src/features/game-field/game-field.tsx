import { IGameFieldProps } from './types';

import styles from './styles.module.scss';

export const GameField: React.FC<React.PropsWithChildren<IGameFieldProps>> = ({ children, onClick }) => {
  return (
    <div className={styles.container} onClick={(e) => onClick({ top: e.clientY, left: e.clientX })}>
      {children}
    </div>
  );
};
