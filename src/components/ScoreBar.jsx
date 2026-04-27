import React, { useEffect, useState } from 'react';

export function ScoreBar({ label, score, maxScore }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Small delay to allow the bar to render before animating
    const timeout = setTimeout(() => {
      const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
      setWidth(percentage);
    }, 100);
    return () => clearTimeout(timeout);
  }, [score, maxScore]);

  return (
    <div className="score-bar-container">
      <div className="score-bar-label">
        <span>{label}</span>
        <span>{score}</span>
      </div>
      <div className="score-bar-track">
        <div 
          className="score-bar-fill" 
          style={{ width: `${width}%` }} 
        />
      </div>
    </div>
  );
}
