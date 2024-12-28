import styles from "./style.module.css";
import translation from "../../_internationalization/translation.json";

export default function Title() {
  const language = localStorage.getItem("language") || "en";

  return (
    <div className={styles.container}>
      <h5 style={{color: "var(--primary)"}}>Guillermo Avelar</h5>
      <div className={`b1 ${styles.pronunciation}`}>{translation[language].title}</div>
    </div>
  );
}
