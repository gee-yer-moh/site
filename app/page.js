import styles from "./page.module.css";
import NavBar from "./_components/NavBar";
import Title from "./_components/Title";
import volcano from "../public/volcano.jpg";
import Frame from "./_components/Frame";
import Footer from "./_components/Footer";
import Spotify from "./_components/Spotify";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Title />
      <div className="b2">Lorem ipsum dolor sit amet.</div>
      <div className="b2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi sit amet dolor rutrum porttitor. Vivamus aliquam hendrerit dolor, vulputate mattis quam tristique non.</div>
      <div className="b2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi sit amet dolor rutrum porttitor.</div>
      <Frame src={volcano} date={<div className="b3">2021</div>} caption={<div className="b3"><a href="https://en.wikipedia.org/wiki/Volc%C3%A1n_Tajumulco">{"Tallest volcano"}</a> in Central America.</div>}/>
      <div className="b2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi sit amet dolor rutrum porttitor.</div>
      <div className="b2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi sit amet dolor rutrum porttitor. Vivamus aliquam hendrerit dolor, vulputate mattis quam tristique non.</div>
      <Spotify/>
      <Footer/>
    </div>
  );
}
