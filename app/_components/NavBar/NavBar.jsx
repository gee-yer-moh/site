"use client";

import styles from "./style.module.css";
import Polygon from "../Polygon";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [sides, setSides] = useState(12);
  const [theme, setTheme] = useState("light");

  // Apply theme class to document body
  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  return (
    <div className={styles.container}>
      <div onClick={() => setSides(Math.floor(Math.random() * 10) + 3)}>
        <Polygon 
          size={25} 
          sides={sides} 
          color={theme === "dark" ? "#ffffff" : "#000000"}
        />
      </div>
      <div className={styles.links}>
        <div className="b3" onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}>{theme === "dark" ? "light" : "dark"}</div>
        <div className="b3">español</div>
      </div>
    </div>
  );
}
