import { useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';

export default function AmbientSound() {
  const { state } = useGame();
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    // Set initial volume
    audioRef.current.volume = 0.15;

    // If we are in 'select' phase, try to play
    if (state.phase === 'select') {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented. 
          // We'll rely on the user's first click to trigger audio globally.
          // This is handled in AppContent usually, but we can also add a global listener here once.
          const startAudio = () => {
            if (audioRef.current && state.phase === 'select') {
              audioRef.current.play().catch(() => {});
            }
            window.removeEventListener('click', startAudio);
          };
          window.addEventListener('click', startAudio);
        });
      }
    } else {
      // If we are not in 'select' phase anymore, fade out or just stop
      // User asked: "when should it end, after clicking a character?"
      // So we stop it when phase is no longer 'select'
      audioRef.current.pause();
    }
  }, [state.phase]);

  return (
    <audio ref={audioRef} loop>
      <source src="/ambient.mp3" type="audio/mpeg" />
    </audio>
  );
}
