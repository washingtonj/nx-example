import styles from './Alert.module.css'

interface AlertProps {
  title: string;
}

export function Alert(props: AlertProps) {
  return (
    <div className={styles.alert}>
      <p>{props.title}</p>
    </div>
  );
}
