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
      <div className="b2" style={fadeInStyle(2)}>I'm on a lifelong journey to enhance the human experience through technology. Startups are the best way to do this quickly and disruptively.</div>
      <div className="b2" style={fadeInStyle(3)}>Recently, I graduated from Columbia University where I studied the beautiful subject of pure mathematics and built a couple of startups. I'm a <a href="https://posthog.com/blog/what-is-a-product-engineer" target="_blank">product engineer</a>.</div>
      <div style={fadeInStyle(4)}><Frame src={volcano} date={<div className="b3">2021</div>} caption={<div className="b3"><a href="https://en.wikipedia.org/wiki/Volc%C3%A1n_Tajumulco" target="_blank">{"Tallest mountain/volcano"}</a> in Central America.</div>}/></div>
      <div className="b2" style={fadeInStyle(5)}>My product-building mentality revolves around intuitive interfaces, extremely fast execution,  and a never-ending cycle of user conversations.</div>
      <div className="b2" style={fadeInStyle(6)}>In case you didn't come from my LinkedIn, here's a summary of my <a href="experience">experience</a>.</div>
      <div style={fadeInStyle(7)}><Spotify/></div>
      <div className="b2" style={fadeInStyle(8)}>I enjoy reading science fiction, playing guitar, and a good podcast. Here's a <a href="favorites">list</a> of some of my favorites.</div>
      <div style={fadeInStyle(9)}><Footer/></div>
    </div>
  );
}
