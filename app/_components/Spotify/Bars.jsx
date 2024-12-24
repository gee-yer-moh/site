"use client"

import { useState, useEffect } from 'react';

const Bars = () => {
  const [heights, setHeights] = useState([0.3, 0.6, 0.4, 0.8]);

  useEffect(() => {
    const interval = setInterval(() => {
        const seed = Math.random();
        const newHeights = heights.map((_, index) => {
            const value = seed + (index * 0.4);
            return value > 1 ? value - 1 : value; // Loop back when exceeding 1
          })
        const newOrder = newHeights.sort(() => Math.random() - 0.5);
        setHeights(newOrder);
    }, 200); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      display: 'flex',
      alignItems: 'flex-end',
      gap: '2px',
      height: '15px'
    }}>
      {heights.map((height, index) => (
        <div
          key={index}
          style={{
            width: '2px',
            height: `${height * 100}%`,
            backgroundColor: 'var(--tertiary)',
            transition: 'height 0.4s ease',
          }}
        />
      ))}
    </div>
  );
};

export default Bars;
