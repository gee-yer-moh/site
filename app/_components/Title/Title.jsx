"use client";

import styles from "./style.module.css";
import translation from "../../_internationalization/translation.json";
import { useEffect, useState } from "react";

export default function Title() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (window) {
      const savedLanguage = localStorage.getItem("language") || "en";
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h5 style={{color: "var(--primary)"}}>Guillermo Avelar</h5>
      <div className={`b1 ${styles.pronunciation}`}>{translation[language].title}</div>
    </div>
  );
}
