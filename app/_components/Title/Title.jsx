import styles from "./style.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <h5 style={{color: "var(--primary)"}}>Guillermo Avelar</h5>
      <div className={`b1 ${styles.pronunciation}`}>/gee-YER-moh  ah-veh-LAHR/</div>
    </div>
  );
}
