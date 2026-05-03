import React, { useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { FrameworkGlossary } from './FrameworkGlossary';
import { gsap } from 'gsap';

import { STORYLINES } from '../data/characters';
import athenaBg from '../assets/Athena.png';
import { playSound } from '../utils/sound';

export function CharacterSelect() {
  const { dispatch } = useGame();
  const cardRefs = useRef([]);
  const charImgRefs = useRef([]);
  const introRefs = useRef([]);

  const handleSelect = (storyline) => {
    playSound('click');
    dispatch({ type: 'SELECT_STORYLINE', payload: storyline });
  };

  useEffect(() => {
    const t = setTimeout(() => {
      // Stagger the intro header + background card in
      gsap.fromTo(
        introRefs.current.filter(Boolean),
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.2, delay: 0.05 }
      );

      // Character cards slide up
      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.15, delay: 0.45 }
      );

      // Character illustrations float in
      gsap.fromTo(
        charImgRefs.current.filter(Boolean),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out', stagger: 0.2, delay: 0.5 }
      );
    }, 0);

    return () => clearTimeout(t);
  }, []);

  const handleCardMouseEnter = (index) => {
    gsap.to(charImgRefs.current[index], { y: -8, duration: 0.35, ease: 'power2.out' });
  };

  const handleCardMouseLeave = (index) => {
    gsap.to(charImgRefs.current[index], { y: 0, duration: 0.35, ease: 'power2.out' });
  };

  return (
    <div
      className="conjoined-page"
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${athenaBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        animation: 'fadeInScreen 0.6s ease-out both',
        position: 'relative'
      }}
    >
      {/* Cinematic depth layers */}
      {/* Vignette overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
        zIndex: 1, pointerEvents: 'none'
      }} />

      {/* Top atmospheric fade */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '200px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
        zIndex: 1, pointerEvents: 'none'
      }} />

      {/* Bottom atmospheric fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
        zIndex: 1, pointerEvents: 'none'
      }} />

      {/* ── INTRO SECTION ─────────────────────────────── */}
      <div className="intro-page" style={{ minHeight: 'unset', position: 'relative' }}>

        <div className="intro-athena-overlay" aria-hidden="true" />

        <div className="intro-content" style={{ paddingBottom: '1rem', position: 'relative', zIndex: 2 }}>

          {/* Title */}
          <div
            className="intro-section intro-title-block"
            ref={(el) => { introRefs.current[0] = el; }}
          >
            <h1 className="intro-main-title">Grey's Anthropology</h1>
          </div>

          {/* Background card */}
          <div
            className="intro-section intro-card"
            ref={(el) => { introRefs.current[1] = el; }}
          >
            <h2 className="intro-section-heading">Background</h2>
            <p className="intro-body-text">
              The U.S.–Iran war (2026) is a conflict where the U.S. and its allies attacked Iran's
              military and nuclear sites, and Iran responded with strikes across the region, causing
              major damage and instability. Journalists covering it face serious risks, reporting
              under bombings, censorship, and threats while trying to show what's really happening.
            </p>
          </div>

        </div>
      </div>

      {/* ── CHARACTER SELECT SECTION ──────────────────── */}
      <div className="dossier-card conjoined-select-card" style={{ backgroundColor: 'rgba(232, 217, 160, 0.78)', position: 'relative', zIndex: 2 }}>
        <h2>Select Subject Profile</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--color-ink-faded)' }}>
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
              <div className="character-illustration-wrapper">
                <img
                  ref={(el) => { charImgRefs.current[i] = el; }}
                  src={s.image}
                  alt={s.imageAlt}
                  className="character-illustration"
                  style={{ 
                    animation: `floatPortrait 3s ease-in-out infinite`,
                    animationDelay: i === 0 ? '0s' : i === 1 ? '0.6s' : '1.2s'
                  }}
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

    </div>
  );
}
