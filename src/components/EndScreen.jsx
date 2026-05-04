import React, { useMemo } from 'react';
import { useGame } from '../context/GameContext';
import { ScoreBar } from './ScoreBar';
import { determineProfile, profiles } from '../data/profiles';
import { FrameworkGlossary } from './FrameworkGlossary';

export function EndScreen() {
  const { state, dispatch } = useGame();
  
  const { profileLabel, reflection, maxScore } = useMemo(() => {
    const pLabel = determineProfile(state.scores.U, state.scores.K, state.scores.P, state.scores.V || 0);
    const pData = profiles[pLabel];
    const reflectionText = pData.reflections[state.storyline];
    
    const mScore = Math.max(state.scores.U, state.scores.K, state.scores.P, state.scores.V || 0, 1);
    
    return {
      profileLabel: pLabel,
      reflection: reflectionText,
      maxScore: mScore
    };
  }, [state.scores, state.storyline]);

  const handleRestart = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  return (
    <div className="dossier-card" style={{ animation: 'fadeInScreen 0.8s ease-out both' }}>
      <h2 style={{ textAlign: 'center', width: '100%', border: 'none', padding: 0, margin: '0 0 2rem 0' }}>Your Crossroads Profile</h2>
      
      <div style={{ margin: '2rem 0' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-ink-faded)' }}>1. Actions Logged</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'var(--font-choice)', fontSize: '0.9rem', color: 'var(--color-ink)' }}>
          {state.choices.map((c, i) => (
            <li key={i} style={{ marginBottom: '0.5rem', borderBottom: '1px dotted var(--color-border-parchment)' }}>
              <span style={{ display: 'inline-block', width: '120px' }}>{c.chapterId.toUpperCase()}</span>
              <span>Selected Option {c.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ margin: '3rem 0' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-ink-faded)' }}>2. Psychological Markers</h3>
        <div className="score-u"><ScoreBar label="Utilitarianism (U)" score={state.scores.U} maxScore={maxScore} /></div>
        <div className="score-k"><ScoreBar label="Kantian Duty (K)" score={state.scores.K} maxScore={maxScore} /></div>
        <div className="score-p"><ScoreBar label="Personalism (P)" score={state.scores.P} maxScore={maxScore} /></div>
        <div className="score-v"><ScoreBar label="Virtue Ethics (V)" score={state.scores.V || 0} maxScore={maxScore} /></div>
      </div>

      {state.reflections && state.reflections.hardestChoice && (
        <div style={{ margin: '3rem 0', padding: '1.5rem', border: '1px dashed var(--color-border-parchment)', background: 'rgba(0,0,0,0.02)' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--color-ink-faded)', textAlign: 'center' }}>3. Personal Reflection</h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>The Hardest Choice</p>
            <p style={{ fontStyle: 'italic', color: 'var(--color-ink)', lineHeight: '1.6' }}>"{state.reflections.hardestChoice}"</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Value Surprise</p>
            <p style={{ fontStyle: 'italic', color: 'var(--color-ink)', lineHeight: '1.6' }}>"{state.reflections.surpriseAndValues}"</p>
          </div>

          {state.reflections.otherThoughts && (
            <div>
              <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Other Thoughts</p>
              <p style={{ fontStyle: 'italic', color: 'var(--color-ink)', lineHeight: '1.6' }}>"{state.reflections.otherThoughts}"</p>
            </div>
          )}
        </div>
      )}

      <div style={{ margin: '3rem 0', background: 'transparent', padding: '1.5rem', border: '1px solid var(--color-border-parchment)', textAlign: 'center', animation: 'borderGlow 4s ease-in-out infinite' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-ink-faded)' }}>{state.reflections && state.reflections.hardestChoice ? '4' : '3'}. Final Classification</h3>
        <div style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)', fontSize: '2.5rem', marginBottom: '1rem' }}>
          {profileLabel}
        </div>
        <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--color-ink-faded)', fontSize: '1.1rem' }}>
          {profiles[profileLabel].description}
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--color-ink)', textAlign: 'left' }}>
          {reflection}
        </p>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <FrameworkGlossary />
        <button 
          className="choice-button" 
          onClick={handleRestart}
          style={{ justifyContent: 'center', width: 'auto', display: 'inline-block' }}
        >
          START NEW FILE
        </button>
      </div>
    </div>
  );
}
