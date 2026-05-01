import React, { useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { FrameworkGlossary } from './FrameworkGlossary';
import { gsap } from 'gsap';

import iranCitizenImg from '../assets/irancitizen.png';
import iranJournalistImg from '../assets/iranjournalist.png';
import usJournalistImg from '../assets/usjournalist.png';

const STORYLINES = [
  {
    key: 'iranian',
    name: 'Nasrin',
    role: 'Iranian Journalist',
    description: 'Operating under restrictions. Information is highly unstable.',
    storyTitle: 'To Speak or To Survive',
    image: iranJournalistImg,
    imageAlt: 'Iranian journalist in green hooded jacket with camera',
  },
  {
    key: 'us',
    name: 'David',
    role: 'US Journalist',
    description: 'Relying on institutional access. Balancing credibility with truth.',
    storyTitle: 'The Weight of the Lens',
    image: usJournalistImg,
    imageAlt: 'Blonde male journalist with camera in brown coat',
  },
  {
    key: 'civilian',
    name: 'Parisa',
    role: 'Iranian Citizen',
    description: 'No official protection. Faced with the choice to speak or survive.',
    storyTitle: 'To Speak or To Survive',
    image: iranCitizenImg,
    imageAlt: 'Woman in hijab and blue robe',
  },
];

export function CharacterSelect() {
  const { dispatch } = useGame();
  const cardRefs = useRef([]);
  const charImgRefs = useRef([]);

  const handleSelect = (storyline) => {
    dispatch({ type: 'SELECT_STORYLINE', payload: storyline });
  };

  useEffect(() => {
    // Defer past StrictMode's double-invoke cleanup cycle
    const t = setTimeout(() => {
      // GSAP entrance: characters float + fade in with stagger
      gsap.fromTo(
        charImgRefs.current.filter(Boolean),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out', stagger: 0.2, delay: 0.1 }
      );

      // GSAP entrance: cards slide up
      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.15, delay: 0.05 }
      );
    }, 0);

    return () => clearTimeout(t);
  }, []);

  const handleCardMouseEnter = (index) => {
    gsap.to(charImgRefs.current[index], {
      y: -8,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  const handleCardMouseLeave = (index) => {
    gsap.to(charImgRefs.current[index], {
      y: 0,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  return (
    <div className="dossier-card slide-up">
      <h2>Select Subject Profile</h2>
      <p style={{ marginBottom: '2rem', color: 'var(--color-muted)' }}>
        Accessing central database. Please select a profile to review their encrypted logs.
      </p>

      <div className="character-select-grid">
        {STORYLINES.map((s, i) => (
          <div
            key={s.key}
            id={`character-card-${s.key}`}
            className="character-card"
            ref={(el) => { cardRefs.current[i] = el; }}
            onClick={() => handleSelect(s.key)}
            onMouseEnter={() => handleCardMouseEnter(i)}
            onMouseLeave={() => handleCardMouseLeave(i)}
          >
            {/* Character illustration */}
            <div className="character-illustration-wrapper">
              <img
                ref={(el) => { charImgRefs.current[i] = el; }}
                src={s.image}
                alt={s.imageAlt}
                className="character-illustration"
              />
            </div>

            <h3>{s.name}</h3>
            <p>{s.role}</p>
            <p className="character-story-tag">{s.storyTitle}</p>
            <p style={{ marginTop: '0.75rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
              {s.description}
            </p>
          </div>
        ))}
      </div>

      <FrameworkGlossary />
    </div>
  );
}
