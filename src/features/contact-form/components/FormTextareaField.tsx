import { clsx } from 'clsx';

import { IFormFieldProps } from '../types';

import styles from '../styles/FormTextareaField.module.scss';

export const FormTextareaField: React.FC<IFormFieldProps> = ({ field, placeholder, isError, testId, inputMode }) => {
  return (
    <div className={styles.textarea_wrapper} data-replicated-value={field.value}>
      <textarea
        {...field}
        className={clsx(styles.textarea, isError && styles.invalid)}
        placeholder={placeholder}
        rows={4}
        data-testid={testId}
        inputMode={inputMode}
      />
    </div>
  );
};
