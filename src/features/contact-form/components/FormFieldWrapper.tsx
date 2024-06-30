import { IFormFieldWrapperProps } from '../types';

import styles from '../styles/FormFieldWrapper.module.scss';

export const FormFieldWrapper: React.FC<React.PropsWithChildren<IFormFieldWrapperProps>> = ({ label, error, children }) => {
  return (
    <label className={styles.container}>
      <span className={styles.label}>{label}</span>
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
};
