"use client";

import styles from "./style.module.css";

export default function Polygon({ sides = 12, size = 500, color = "#000000" }) {
  // Calculate points of polygon
  const points = [];
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2;

  // Generate points for the polygon
  for (let i = 0; i < sides; i++) {
    const angle = (i * 2 * Math.PI) / sides;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <svg width={size} height={size}>
      <polygon
        points={points.join(' ')}
        fill={color}
        transform={`rotate(-90 ${size/2} ${size/2})`}
        className={styles.polygon}
        suppressHydrationWarning
      />
    </svg>
  );
}
