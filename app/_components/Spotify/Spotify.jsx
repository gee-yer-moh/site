import styles from './style.module.css';
import Image from 'next/image';
import volcano from '../../../public/volcano.jpg'

export default function Spotify() {
  return <div className={styles.frame}>
    <div className={styles.songContainer}>
      <div className={styles.image}> 
          <Image 
          src={volcano} 
          alt={"hey"} 
          fill
          style={{objectFit: 'cover'}}
      />
      </div>
      <div className={styles.songInfo}>
        <div className="b3">Song Name</div>
        <div className="b3" style={{color: '#808080'}}>Artist Name</div>
      </div>
    </div>
    <div className={styles.footer}>
    {<div className="b3">Disclaimer: I share Spotify with my wife.</div>}
    {<div className="b3">30m ago</div>}
    </div>  
  </div>;
}