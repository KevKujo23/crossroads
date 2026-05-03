import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { TypewriterText } from './TypewriterText';
import { ChoiceButton } from './ChoiceButton';
import { playSound } from '../utils/sound';

export function Chapter({ chapterData, isLastChapter, character }) {
  const { state, dispatch } = useGame();
  const [narrativeComplete, setNarrativeComplete] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [outcomeComplete, setOutcomeComplete] = useState(false);
  const [frameworkOpen, setFrameworkOpen] = useState(false);

  const cumulativeScores = state.scores;

  useEffect(() => {
    setNarrativeComplete(false);
    setSelectedChoice(null);
    setOutcomeComplete(false);
  }, [chapterData]);

  const handleChoice = (choice) => {
    playSound('click');
    setSelectedChoice(choice);
  };

  const handleNext = () => {
    playSound('paper');
    dispatch({
      type: 'MAKE_CHOICE',
      payload: {
        chapterId: chapterData.id,
        label: selectedChoice.label,
        scores: selectedChoice.scores
      }
    });

    if (isLastChapter) {
      dispatch({ type: 'SHOW_REFLECTION' });
    } else {
      dispatch({ type: 'NEXT_CHAPTER', payload: { advance: 1 } });
    }
  };

  return (
    <>
      {/* Fixed "View Frameworks" button — only shown after a choice is made */}
      {selectedChoice && (
        <button
          onClick={() => setFrameworkOpen(!frameworkOpen)}
          style={{
            position: 'fixed',
            top: '68px',
            right: '20px',
            zIndex: 100,
            background: 'rgba(20, 35, 20, 0.8)',
            backdropFilter: 'blur(4px)',
            border: '1px solid var(--color-border-parchment)',
            padding: '0.5rem 1rem',
            fontFamily: 'var(--font-choice)',
            color: 'var(--color-parchment)',
            cursor: 'pointer',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            transition: 'background 0.3s',
          }}
        >
          {frameworkOpen ? 'Close Frameworks' : 'View Frameworks'}
        </button>
      )}

      {/* Flex row: character portrait + dossier card + framework side panel */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '24px', 
        transition: 'all 0.4s ease', 
        marginTop: '60px',
        position: 'relative',
        width: '100%',
        maxWidth: '100%'
      }}>
        {/* Character portrait — left side (Reduced 15% from 3x) */}
        {character && (
          <div className="chapter-portrait-wrapper" style={{
            width: '410px',
            minWidth: '410px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '-85px', // adjusted overlap
            zIndex: 2,
          }}>
            <img
              src={character.image}
              alt={character.name}
              style={{
                width: '408px',
                height: 'auto',
                animation: 'floatPortrait 3.5s ease-in-out infinite',
                animationDelay: '0s',
                filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.7))',
              }}
            />
          </div>
        )}

        <div
          className="dossier-card slide-up"
          style={{
            flex: 1,
            maxWidth: '700px',
            minWidth: '520px',
            boxShadow: `
              inset 0 0 60px rgba(0,0,0,0.25),
              inset 0 0 20px rgba(101,67,33,0.15),
              0 8px 40px rgba(0,0,0,0.5)
            `,
            border: '1px solid rgba(101,67,33,0.4)',
            zIndex: 1,
            position: 'relative',
            overflow: 'hidden',
            padding: '40px 48px',
          }}
        >
          {/* Burnt edge vignette overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse at center, transparent 55%, rgba(30,15,0,0.35) 100%)`,
            pointerEvents: 'none',
            zIndex: 1,
            borderRadius: 'inherit',
          }} />

          <div className="fade-in" style={{ position: 'relative', zIndex: 2 }}>
            {chapterData.title.includes(':') ? (
              <>
                <span className="chapter-number" style={{ marginBottom: '8px' }}>{chapterData.title.split(':')[0]}</span>
                <h2 style={{ marginBottom: '24px' }}>{chapterData.title.split(':')[1].trim()}</h2>
              </>
            ) : (
              <h2 style={{ marginBottom: '24px' }}>{chapterData.title}</h2>
            )}
          </div>

          {!selectedChoice ? (
            <div style={{ position: 'relative', zIndex: 2 }}>
              <TypewriterText
                text={chapterData.narrative}
                onComplete={() => setNarrativeComplete(true)}
              />

              {narrativeComplete && (
                <div style={{ marginTop: '2rem' }}>
                  {chapterData.choices.map((choice, index) => (
                    <ChoiceButton
                      key={choice.label}
                      label={choice.label}
                      text={choice.text}
                      onClick={() => handleChoice(choice)}
                      style={{ 
                        animationDelay: `${index * 150}ms`,
                        padding: '14px 20px',
                        marginBottom: '12px'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div style={{ position: 'relative', zIndex: 2 }}>
              <TypewriterText
                text={selectedChoice.outcome}
                onComplete={() => setOutcomeComplete(true)}
              />

              {outcomeComplete && (
                <div style={{ marginTop: '2rem' }}>
                  <button
                    className="choice-button choice-btn fade-in"
                    onClick={handleNext}
                    style={{ 
                      textAlign: 'center', 
                      justifyContent: 'center',
                      padding: '14px 20px'
                    }}
                  >
                    {isLastChapter ? 'CONCLUDE REPORT' : 'PROCEED TO NEXT FILE'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Framework side panel — slides in from right */}
        {frameworkOpen && selectedChoice && (
          <div className="framework-side-panel">
            <button
              className="fw-close-btn"
              onClick={() => setFrameworkOpen(false)}
            >
              × Close
            </button>

            {/* Cumulative alignment scores section */}
            <div style={{
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(201,168,76,0.3)'
            }}>
              <h4 style={{
                fontFamily: 'Cinzel',
                color: '#c9a84c',
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>Current Alignment</h4>
              {Object.entries(cumulativeScores).map(([key, val]) => (
                <div key={key} style={{ marginBottom: '8px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'Cinzel',
                    fontSize: '12px',
                    color: '#2c1a0e',
                    marginBottom: '3px'
                  }}>
                    <span>{key} Score</span>
                    <span>{val}</span>
                  </div>
                  <div style={{
                    height: '3px',
                    background: 'rgba(0,0,0,0.1)',
                    borderRadius: '2px'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${Math.min(val * 20, 100)}%`,
                      background: '#c9a84c',
                      borderRadius: '2px',
                      transition: 'width 0.4s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontFamily: 'Cinzel Decorative', color: '#c9a84c' }}>Ethical Analysis</h3>
            
            {/* Score badges for current choice */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {Object.entries(selectedChoice.scores).map(([key, val]) => (
                <span key={key} style={{
                  background: val > 0 ? '#c9a84c' : 'rgba(255,255,255,0.1)',
                  color: val > 0 ? '#1a0e00' : '#888',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontFamily: 'Cinzel',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {key}: {val}
                </span>
              ))}
            </div>

            {/* Framework context lines */}
            {selectedChoice.frameworkContext ? (
              selectedChoice.frameworkContext
                .split('\n')
                .filter(line => line.trim())
                .map((line, i) => (
                  <p key={i} style={{
                    fontFamily: 'Crimson Text',
                    fontSize: '15px',
                    color: '#2c1a0e',
                    lineHeight: '1.6',
                    marginBottom: '10px',
                    paddingLeft: '8px',
                    borderLeft: '2px solid #c9a84c'
                  }}>
                    {line.replace(/^-\s*/, '')}
                  </p>
                ))
            ) : (
              <p style={{ fontFamily: 'Crimson Text', color: '#2c1a0e' }}>
                No specific ethical breakdown available for this choice.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
