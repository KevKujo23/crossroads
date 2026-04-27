import React, { useState, useEffect } from 'react';

export function TypewriterText({ text, onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsSkipped(false);
  }, [text]);

  useEffect(() => {
    if (isSkipped) {
      setDisplayedText(text);
      if (onComplete) onComplete();
      return;
    }

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 35); // ~35ms per character
      return () => clearTimeout(timeout);
    } else {
      if (onComplete) onComplete();
    }
  }, [displayedText, isSkipped, text, onComplete]);

  const handleSkip = () => {
    if (!isSkipped && displayedText.length < text.length) {
      setIsSkipped(true);
    }
  };

  return (
    <div 
      className="narrative-text" 
      onClick={handleSkip} 
      style={{ cursor: displayedText.length < text.length ? 'pointer' : 'default' }}
      aria-live="polite"
    >
      {displayedText}
      {displayedText.length < text.length && <span style={{ opacity: 0.5 }}>█</span>}
    </div>
  );
}
