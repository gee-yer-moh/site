import Frame from "../Frame";
import styles from "./style.module.css";
import volcano from "../../../public/volcano.jpg";

export default function Pictures() {
  return <div className={styles.pictures}>
    <Frame src={volcano} caption={<div className="b3"><a href="https://en.wikipedia.org/wiki/Volc%C3%A1n_Tajumulco">{"Tallest point"}</a> in Central America.</div>}/>
    <Frame src={volcano} caption={<div className="b3"><a href="https://en.wikipedia.org/wiki/Volc%C3%A1n_Tajumulco">{"I was born 510 years after America."}</a></div>}/>
  </div>;
}