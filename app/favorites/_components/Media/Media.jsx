import styles from './style.module.css';
import Image from 'next/image';

export default function Media({src, url}) {
  
  return <div className={styles.frame} onClick={() => window.open(url, '_blank')}>
    <div className={styles.image}> 
        <Image 
        src={src} 
        alt='Favorite'
        fill
        style={{objectFit: "contain"}}
        priority
        sizes="(max-width: 600px) 100vw, 30vw"
    />
    </div>  
  </div>;
}