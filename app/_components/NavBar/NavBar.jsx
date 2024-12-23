"use client";

import styles from "./style.module.css";
import Polygon from "../Polygon";
import { useState } from "react";

export default function NavBar() {
  const [sides, setSides] = useState(12);

  return (
    <div className={styles.container}>
      <div onClick={() => setSides(Math.floor(Math.random() * 10) + 3)}>
        <Polygon size={25} sides={sides} color="#000000"/>
      </div>
      <div className={styles.links}>
        <div className="b3">dark</div>
        <div className="b3">español</div>
      </div>
    </div>
  );
}
