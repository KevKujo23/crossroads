import React from 'react';
import { useGame } from '../context/GameContext';

export function CharacterSelect() {
  const { dispatch } = useGame();

  const handleSelect = (storyline) => {
    dispatch({ type: 'SELECT_STORYLINE', payload: storyline });
  };

  return (
    <div className="dossier-card slide-up">
      <h2>Select Subject Profile</h2>
      <p style={{ marginBottom: '2rem', color: 'var(--color-muted)' }}>
        Accessing central database. Please select a profile to review their encrypted logs.
      </p>

      <div className="character-select-grid">
        <div 
          className="character-card fade-in" 
          onClick={() => handleSelect('iranian')}
          style={{ animationDelay: '0ms' }}
        >
          <div className="character-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h3>Subject 01: The Local</h3>
          <p>Iranian Journalist</p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
            Operating under restrictions. Information is highly unstable.
          </p>
        </div>

        <div 
          className="character-card fade-in" 
          onClick={() => handleSelect('us')}
          style={{ animationDelay: '100ms' }}
        >
          <div className="character-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
          </div>
          <h3>Subject 02: The Correspondent</h3>
          <p>US-Based Journalist</p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
            Relying on institutional access. Balancing credibility with truth.
          </p>
        </div>

        <div 
          className="character-card fade-in" 
          onClick={() => handleSelect('civilian')}
          style={{ animationDelay: '200ms' }}
        >
          <div className="character-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3>Subject 03: The Witness</h3>
          <p>Civilian</p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
            No official protection. Faced with the choice to speak or survive.
          </p>
        </div>
      </div>
    </div>
  );
}
