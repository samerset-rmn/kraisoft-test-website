import styles from '../styles/FormSuccessMessage.module.scss';

export const FormSuccessMessage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Thank you for your feedback! 🎉</h1>
      <p>We will get back to you as soon as possible</p>
    </div>
  );
};
