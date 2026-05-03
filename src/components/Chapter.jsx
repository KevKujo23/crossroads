import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { TypewriterText } from './TypewriterText';
import { ChoiceButton } from './ChoiceButton';
import { LiveScoreTracker } from './LiveScoreTracker';
import { FRAMEWORKS } from './FrameworkGlossary';

export function Chapter({ chapterData, isLastChapter }) {
  const { dispatch } = useGame();
  const [narrativeComplete, setNarrativeComplete] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [outcomeComplete, setOutcomeComplete] = useState(false);
  const [frameworkOpen, setFrameworkOpen] = useState(false);

  useEffect(() => {
    setNarrativeComplete(false);
    setSelectedChoice(null);
    setOutcomeComplete(false);
  }, [chapterData]);

  const handleChoice = (choice) => {
    setSelectedChoice(choice);
  };

  const handleNext = () => {
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
      {/* Fixed "View Frameworks" button — sits below "View Alignment" in LiveScoreTracker */}
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

      {/* Flex row: dossier card + framework side panel */}
      <div style={{ display: 'flex', alignItems: 'flex-start', transition: 'all 0.4s ease', marginTop: '60px' }}>
        <div
          className="dossier-card slide-up"
          style={{
            flex: 1,
            minWidth: 0,
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
            border: '1px solid rgba(201, 168, 76, 0.3)',
          }}
        >
          <LiveScoreTracker />
          <div className="fade-in">
            {chapterData.title.includes(':') ? (
              <>
                <span className="chapter-number">{chapterData.title.split(':')[0]}</span>
                <h2>{chapterData.title.split(':')[1].trim()}</h2>
              </>
            ) : (
              <h2>{chapterData.title}</h2>
            )}
          </div>

          {!selectedChoice ? (
            <>
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
                      style={{ animationDelay: `${index * 150}ms` }}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <TypewriterText
                text={selectedChoice.outcome}
                onComplete={() => setOutcomeComplete(true)}
              />

              {outcomeComplete && (
                <div style={{ marginTop: '2rem' }}>
                  <button
                    className="choice-button choice-btn fade-in"
                    onClick={handleNext}
                    style={{ textAlign: 'center', justifyContent: 'center' }}
                  >
                    {isLastChapter ? 'CONCLUDE REPORT' : 'PROCEED TO NEXT FILE'}
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Framework side panel — slides in from right */}
        {frameworkOpen && (
          <div className="framework-side-panel">
            <button
              className="fw-close-btn"
              onClick={() => setFrameworkOpen(false)}
            >
              × Close
            </button>
            <h3>Ethical Frameworks</h3>
            {FRAMEWORKS.map((f, i) => (
              <div key={i} className="fw-card">
                <h4>{f.label}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
