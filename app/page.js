import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./_components/NavBar";
export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  );
}
