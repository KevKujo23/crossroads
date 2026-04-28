import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { TypewriterText } from './TypewriterText';
import { ChoiceButton } from './ChoiceButton';
import { LiveScoreTracker } from './LiveScoreTracker';

export function Chapter({ chapterData, isLastChapter }) {
  const { dispatch } = useGame();
  const [narrativeComplete, setNarrativeComplete] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [outcomeComplete, setOutcomeComplete] = useState(false);

  // Reset state when chapter data changes
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
      dispatch({ type: 'END_GAME' });
    } else {
      dispatch({ type: 'NEXT_CHAPTER', payload: { advance: 1 } });
    }
  };

  return (
    <div className="dossier-card slide-up" style={{ marginTop: '60px' }}>
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
                className="choice-button fade-in" 
                onClick={handleNext}
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                {isLastChapter ? "CONCLUDE REPORT" : "PROCEED TO NEXT FILE"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
