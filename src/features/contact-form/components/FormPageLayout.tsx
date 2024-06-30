import { IContactFormPageLayoutProps } from '../types';

import styles from '../styles/ContactFormPageLayout.module.scss';

export const FormPageLayout: React.FC<React.PropsWithChildren<IContactFormPageLayoutProps>> = ({ children, onFormSubmit }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact us</h1>
      <p className={styles.subtitle}>Your feedback will help us improve our game</p>
      <form className={styles.form} onSubmit={onFormSubmit}>
        {children}
      </form>
    </div>
  );
};
