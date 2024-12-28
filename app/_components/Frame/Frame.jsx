import styles from './style.module.css';
import Image from 'next/image';

export default function Frame({src, caption, date}) {
  
  return <div className={styles.frame}>
    <div className={styles.image}> 
        <Image 
        src={src} 
        alt={caption} 
        fill
        style={{objectFit: 'cover'}}
        priority
        sizes="(max-width: 600px) 100vw, 50vw"
    />
    </div>
    <div className={styles.footer}>
    {caption}
    {date}
    </div>  
  </div>;
}