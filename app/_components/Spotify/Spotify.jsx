
import styles from './style.module.css';
import Image from 'next/image';
import volcano from '../../../public/volcano.jpg'

export default function Spotify() {
  
  return <div className={styles.frame}>
    <div className={styles.songContainer}>
      <div className={styles.image}> 
          <Image 
          src="https://i.scdn.co/image/ab67616d0000b2730b4444fe9bc1a73ccbb949db" 
          alt={"hey"} 
          fill
          style={{objectFit: 'cover'}}
      />
      </div>
      <div className={styles.songInfo}>
        <a className="b3" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Close to the Edge</a>
        <div className="b3" style={{color: 'var(--tertiary)'}}>Yes</div>
      </div>
    </div>
    <div className={styles.footer}>
    {<div className="b3">Disclaimer: I share Spotify with my wife.</div>}
    {<div className="b3">30m ago</div>}
    </div>  
  </div>;
}