import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./_components/NavBar";
import Title from "./_components/Title";
export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Title />
      <div className="b2">Lorem ipsum dolor sit amet.</div>
      <div className="b2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi sit amet dolor rutrum porttitor. Vivamus aliquam hendrerit dolor, vulputate mattis quam tristique non.</div>
      <div className="b2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi sit amet dolor rutrum porttitor.</div>
    </div>
  );
}
