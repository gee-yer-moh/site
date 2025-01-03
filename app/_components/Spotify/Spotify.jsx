"use client"

import { useState, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import getItems from './SpotifyAPI';
import Bars from './Bars';
import translation from '../../_internationalization/translation.json';


const msToMinutes = (ms, language) => {
  const minutes = Math.floor(ms / 60000);
  const isSpanish = language === 'es';
  
  if (minutes >= 1440) {
    return isSpanish ? `hace ${Math.floor(minutes / 1440)}d` : `${Math.floor(minutes / 1440)}d ago`;
  }
  if (minutes >= 60) {
    return isSpanish ? `hace ${Math.floor(minutes / 60)}h` : `${Math.floor(minutes / 60)}h ago`;
  }
  return isSpanish ? `hace ${minutes}m` : `${minutes}m ago`;
}

const msBetweenTodayAndDate = (date) => {
  const today = new Date();
  const newDate = new Date(date);
  const ms = today - newDate;
  return ms;
}

const findFirstNonExplicitTrack = (tracks) => {
  if (!tracks?.items) return null;
  
  return tracks.items.find(item => !item?.track?.explicit);
};



export default function Spotify() {


  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (window) {
      const savedLanguage = localStorage.getItem("language") || "en";
      setLanguage(savedLanguage);
    }
  }, []);

  const [recentlyPlayed, setRecentlyPlayed] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [data, setData] = useState({
    title: "Close to the Edge",
    artist: "Yes",
    image: "https://i.scdn.co/image/ab67616d0000b27303e402534d80a4aee949a950",
    time: "12",
    link: "https://open.spotify.com/track/1oJ2a13bVN1RssKIWxKLe2?si=fb2f27c6963c4652"
  });
  
  useEffect(() => {
    const fetchItems = async () => {
        try {
            const response = await fetch('/api/spotify');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text(); // Get response as text first
            
            if (!text) {
                console.log('Empty response received');
                return;
            }
            
            try {
                const data = JSON.parse(text);
                setRecentlyPlayed(data.recentlyPlayedSong);
                setNowPlaying(data.nowPlayingSong);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
            }
        } catch (error) {
            console.error('Error fetching Spotify data:', error);
        }
    };
    fetchItems();
}, []);

    useEffect(() => {
      if (nowPlaying && nowPlaying?.is_playing && nowPlaying?.currently_playing_type === 'track') {
        setData(
          {
            title: nowPlaying.item.name,
            artist: nowPlaying.item.artists[0].name,
            image: nowPlaying.item.album.images[0].url,
            link: nowPlaying.item.external_urls.spotify,
          }
        );
      }
      else if (recentlyPlayed) {
        const nonExplicitTrack = findFirstNonExplicitTrack(recentlyPlayed);
        if (!nonExplicitTrack) {
          setData({
            title: "Close to the Edge",
            artist: "Yes",
            image: "https://i.scdn.co/image/ab67616d0000b27303e402534d80a4aee949a950",
            time: "12",
            link: "https://open.spotify.com/track/1oJ2a13bVN1RssKIWxKLe2?si=fb2f27c6963c4652",
          });
        }
        else {
          setData(
            {
              title: nonExplicitTrack.track.name,
              artist: nonExplicitTrack.track.artists[0].name,
              image: nonExplicitTrack.track.album.images[0].url,
              time: msToMinutes(msBetweenTodayAndDate(nonExplicitTrack.played_at), language),
              link: nonExplicitTrack.track.external_urls.spotify,
          }
        );
      }}
    }, [nowPlaying, recentlyPlayed]);
  
  return <div className={styles.frame}>
    <div className={styles.songContainer}>
      <div className={styles.image}> 
          <Image 
          src={data.image} 
          alt={"Album Art"} 
          fill
          style={{objectFit: 'cover'}}
          sizes="(max-width: 768px) 100vw, 50vw"
      />
      </div>
      <div className={styles.songInfo}>
        <a className="b3" style={{textWrap: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: 'fit-content', maxWidth: '100%'}} href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a>
        <div className="b3" style={{color: 'var(--tertiary)'}}>{data.artist}</div>
      </div>
    </div>
    <div className={styles.footer}>
    {<div className="b3">{translation[language].paragraph_6}</div>}
    {<div className="b3">{!data?.time ? <Bars /> : data.time}</div>}
    </div>  
  </div>;
}

