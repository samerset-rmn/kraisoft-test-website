import { IFormSubmitButtonProps } from '../types';

import styles from '../styles/FormSubmitButton.module.scss';

export const FormSubmitButton: React.FC<IFormSubmitButtonProps> = ({ isFormSubmitting }) => {
  return (
    <button type='submit' className={styles.submit_button} disabled={isFormSubmitting} data-testid='contact-us-submit-button'>
      Send
    </button>
  );
};
