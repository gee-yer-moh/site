import styles from "./style.module.css";
import dodecagon from "../../../public/dodecagon.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Image src={dodecagon} alt="dodecagon" width={20} height={20} />
      <div className={styles.links}>
        <div className="b2">dark</div>
        <div className="b2">español</div>
      </div>
    </div>
  );
}
