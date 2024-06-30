import { clsx } from 'clsx';

import { IFormFieldProps } from '../types';

import styles from '../styles/FormInputField.module.scss';

export const FormInputField: React.FC<IFormFieldProps> = ({ field, type, isError, placeholder, testId }) => {
  return <input {...field} className={clsx(styles.input, isError && styles.invalid)} type={type} placeholder={placeholder} data-testid={testId} />;
};
