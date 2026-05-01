import React, { useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { gsap } from 'gsap';

export function IntroPage() {
  const { dispatch } = useGame();
  const sectionRefs = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => {
      gsap.fromTo(
        sectionRefs.current.filter(Boolean),
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          stagger: 0.22,
          delay: 0.1,
        }
      );
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const addRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const handleBegin = () => {
    dispatch({ type: 'GO_TO_SELECT' });
  };

  return (
    <div className="intro-page">
      {/* Athena decorative overlay — low opacity */}
      <div className="intro-athena-overlay" aria-hidden="true" />

      <div className="intro-content">

        {/* Section 1 — Title Block */}
        <div className="intro-section intro-title-block" ref={addRef}>
          <h1 className="intro-main-title">Grey's Anthropology</h1>
          <p className="intro-subtitle">Fighting for the Missing Peace</p>
        </div>

        {/* Section 2 — Background Context */}
        <div className="intro-section intro-card" ref={addRef}>
          <h2 className="intro-section-heading">Background</h2>
          <p className="intro-body-text">
            The U.S.–Iran war (2026) is a conflict where the U.S. and its allies attacked Iran's
            military and nuclear sites, and Iran responded with strikes across the region, causing
            major damage and instability. Journalists covering it face serious risks, reporting under
            bombings, censorship, and threats while trying to show what's really happening.
          </p>
        </div>

        {/* Section 3 — What This Is */}
        <div className="intro-section intro-card" ref={addRef}>
          <h2 className="intro-section-heading">What Is This?</h2>
          <p className="intro-body-text">
            This is an interactive ethical story game. You will step into the shoes of one of three
            characters caught in the conflict and navigate a series of high-stakes decisions across
            multiple chapters. Each choice you make is tracked against three ethical frameworks —{' '}
            <strong>Utilitarianism</strong>, <strong>Kantian Ethics</strong>, and{' '}
            <strong>Personalism</strong> — and at the end, you will see which framework most closely
            reflects your values.
          </p>
        </div>

        {/* Section 4 — Dissemination Note */}
        <div className="intro-section intro-card intro-card--muted" ref={addRef}>
          <p className="intro-dissemination-text">
            <span className="intro-dissemination-label">Research Note</span>
            This experience was pre-tested with participants outside a classroom setting, with no
            prior explanation given, to simulate authentic decision-making under pressure.
          </p>
        </div>

        {/* CTA */}
        <div className="intro-section intro-cta" ref={addRef}>
          <button
            id="intro-begin-btn"
            className="choice-button intro-begin-btn"
            onClick={handleBegin}
          >
            <span className="choice-label">→</span>
            <span>Begin</span>
          </button>
        </div>

      </div>
    </div>
  );
}
