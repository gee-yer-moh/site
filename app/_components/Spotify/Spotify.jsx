"use client"

import { useState, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import getItems from './SpotifyAPI';
import Bars from './Bars';


const msToMinutes = (ms) => {
  const minutes = Math.floor(ms / 60000);
  return `${minutes}`;
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
            const response = await getItems(
                process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
                process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
                process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN
            );
            if (response) {
                setRecentlyPlayed(response.recentlyPlayedSong);
                setNowPlaying(response.nowPlayingSong);
            }
        };

        fetchItems();

        // Refresh every 30 seconds
        const interval = setInterval(fetchItems, 30000);

        
        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
      if (nowPlaying && nowPlaying?.is_playing) {
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
              time: msToMinutes(msBetweenTodayAndDate(nonExplicitTrack.played_at)),
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
        <a className="b3" style={{textWrap: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%'}} href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a>
        <div className="b3" style={{color: 'var(--tertiary)'}}>{data.artist}</div>
      </div>
    </div>
    <div className={styles.footer}>
    {<div className="b3">Disclaimer: I share Spotify with my wife.</div>}
    {<div className="b3">{!data?.time ? <Bars /> : `${data.time}m ago`}</div>}
    </div>  
  </div>;
}

