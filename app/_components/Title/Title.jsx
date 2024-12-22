import styles from "./style.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <h5>Guillermo Avelar</h5>
      <div className={`b2 ${styles.pronunciation}`}>/gee-YER-moh  ah-veh-LAHR/</div>
    </div>
  );
}
