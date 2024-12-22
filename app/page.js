import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./_components/NavBar";
import Title from "./_components/Title";
export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Title />
    </div>
  );
}
