"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import NavBar from "./_components/NavBar";
import Title from "./_components/Title";
import volcano from "../public/volcano.jpg";
import Frame from "./_components/Frame";
import Footer from "./_components/Footer";
import Spotify from "./_components/Spotify";

export default function Home() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const elements = 10; // Changed from 9 to 10 to include Footer
    
    for (let i = 0; i < elements; i++) {
      setTimeout(() => {
        setIsVisible(prev => ({...prev, [i]: true}));
      }, i * 100);
    }
  }, []);

  const fadeInStyle = (index) => ({
    opacity: isVisible[index] ? 1 : 0,
    transition: 'opacity 0.5s ease-in',
    color: "var(--primary)"
  });

  return (
    <div className={styles.container}>
      <div style={fadeInStyle(0)}><NavBar /></div>
      <div style={fadeInStyle(1)}><Title /></div>
      <div className="b2" style={fadeInStyle(2)}>Lorem ipsum dolor sit amet.</div>
      <div className="b2" style={fadeInStyle(3)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi sit amet dolor rutrum porttitor. Vivamus aliquam hendrerit dolor, vulputate mattis quam tristique non.</div>
      <div className="b2" style={fadeInStyle(4)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi sit amet dolor rutrum porttitor.</div>
      <div style={fadeInStyle(5)}><Frame src={volcano} date={<div className="b3">2021</div>} caption={<div className="b3"><a href="https://en.wikipedia.org/wiki/Volc%C3%A1n_Tajumulco" target="_blank">{"Tallest volcano"}</a> in Central America.</div>}/></div>
      <div className="b2" style={fadeInStyle(6)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi sit amet dolor rutrum porttitor.</div>
      <div className="b2" style={fadeInStyle(7)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi sit amet dolor rutrum porttitor. Vivamus aliquam hendrerit dolor, vulputate mattis quam tristique non.</div>
      <div style={fadeInStyle(8)}><Spotify/></div>
      <div style={fadeInStyle(9)}><Footer/></div>
    </div>
  );
}
