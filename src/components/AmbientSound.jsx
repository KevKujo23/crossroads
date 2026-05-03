import { useEffect, useRef } from 'react';

export default function AmbientSound() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/ambient.mp3" type="audio/mpeg" />
    </audio>
  );
}
