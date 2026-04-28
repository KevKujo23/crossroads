import React, { useState } from 'react';
import { useGame } from '../context/GameContext';

export function LiveScoreTracker() {
  const { state } = useGame();
  const [isOpen, setIsOpen] = useState(false);

  const maxScore = Math.max(state.scores.U, state.scores.K, state.scores.P, state.scores.V || 0, 1);

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'rgba(20, 35, 20, 0.8)',
          backdropFilter: 'blur(4px)',
          border: '1px solid var(--color-border-parchment)',
          padding: '0.5rem 1rem',
          fontFamily: 'var(--font-choice)',
          color: 'var(--color-parchment)',
          cursor: 'pointer',
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          marginBottom: '0.5rem',
          transition: 'background 0.3s'
        }}
      >
        {isOpen ? 'Close Alignment' : 'View Alignment'}
      </button>

      <div style={{
        background: 'rgba(20, 35, 20, 0.85)',
        backdropFilter: 'blur(6px)',
        border: '1px solid var(--color-border-parchment)',
        padding: isOpen ? '1rem' : '0 1rem',
        borderRadius: '4px',
        width: '200px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
        color: 'var(--color-parchment)',
        maxHeight: isOpen ? '300px' : '0',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        transformOrigin: 'top right',
        transform: isOpen ? 'scaleY(1)' : 'scaleY(0.9)'
      }}>
        <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', fontFamily: 'var(--font-display)', color: 'var(--color-gold)' }}>Current Alignment</h4>
        
        {['U', 'K', 'P', 'V'].map(fw => (
          <div key={fw} style={{ marginBottom: '0.8rem' }}>
            <div style={{ fontSize: '0.75rem', marginBottom: '0.2rem', fontFamily: 'var(--font-choice)' }}>{fw} Score: {state.scores[fw] || 0}</div>
            <div style={{ width: '100%', height: '4px', background: 'var(--color-bg-deep)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ 
                width: `${((state.scores[fw] || 0) / maxScore) * 100}%`, 
                height: '100%', 
                background: 'var(--color-gold)',
                transition: 'width 0.5s ease-out'
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
