import styles from "./style.module.css";
import dodecagon from "../../../public/dodecagon.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Image src={dodecagon} alt="dodecagon" width={25} height={25} />
      <div className={styles.links}>
        <div className="b3">dark</div>
        <div className="b3">español</div>
      </div>
    </div>
  );
}
