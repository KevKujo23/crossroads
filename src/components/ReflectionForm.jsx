import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { gsap } from 'gsap';

const STORYLINE_LABELS = {
  iranian: 'Iranian Journalist — To Speak or To Survive',
  us: 'US Journalist — The Weight of the Lens',
  civilian: 'Iranian Citizen — To Speak or To Survive',
};

export function ReflectionForm() {
  const { state, dispatch } = useGame();

  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const timestamp = new Date().toISOString();
    const key = `greys_anthropology_reflection_${timestamp}`;

    const payload = {
      meta: {
        timestamp,
        storyline: state.storyline,
        storylineLabel: STORYLINE_LABELS[state.storyline] || state.storyline,
      },
      choices: state.choices.map((c) => ({
        chapterId: c.chapterId,
        selectedLabel: c.label,
        scores: c.scores,
      })),
      reflection: {
        hardestChoice: field1.trim(),
        surpriseAndValues: field2.trim(),
        otherThoughts: field3.trim() || null,
      },
    };

    try {
      localStorage.setItem(key, JSON.stringify(payload));
    } catch {
      // localStorage quota exceeded or unavailable — silent fail, still show confirmation
    }

    setSubmitted(true);
  };

  const handleContinue = () => {
    dispatch({ type: 'END_GAME' });
  };

  return (
    <div className="dossier-card slide-up reflection-card" ref={cardRef}>
      <h2 className="reflection-heading">Reflect</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="reflection-form">
          <p className="reflection-intro">
            Before we reveal your ethical profile, take a moment to reflect on the choices you
            made.
          </p>

          <div className="reflection-field">
            <label htmlFor="reflection-field-1" className="reflection-label">
              What was the hardest choice you made, and why?
            </label>
            <textarea
              id="reflection-field-1"
              className="reflection-textarea"
              value={field1}
              onChange={(e) => setField1(e.target.value)}
              rows={4}
              required
              placeholder="Describe the decision and what made it difficult…"
            />
          </div>

          <div className="reflection-field">
            <label htmlFor="reflection-field-2" className="reflection-label">
              Did your choices surprise you? What do they say about your values?
            </label>
            <textarea
              id="reflection-field-2"
              className="reflection-textarea"
              value={field2}
              onChange={(e) => setField2(e.target.value)}
              rows={4}
              required
              placeholder="Reflect on what your decisions reveal…"
            />
          </div>

          <div className="reflection-field">
            <label htmlFor="reflection-field-3" className="reflection-label">
              Any other thoughts or reflections?{' '}
              <span className="reflection-optional">(optional)</span>
            </label>
            <textarea
              id="reflection-field-3"
              className="reflection-textarea"
              value={field3}
              onChange={(e) => setField3(e.target.value)}
              rows={3}
              placeholder="Open-ended — anything else on your mind…"
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              id="reflection-submit-btn"
              type="submit"
              className="choice-button"
              style={{ justifyContent: 'center', width: 'auto', display: 'inline-flex' }}
            >
              <span className="choice-label">→</span>
              <span>Submit Reflection</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="reflection-confirmation fade-in">
          <div className="reflection-confirm-icon" aria-hidden="true">✧</div>
          <h3 className="reflection-confirm-title">Thank you for reflecting.</h3>
          <p className="reflection-confirm-body">
            Your thoughts have been recorded. Now see how your choices map to ethical frameworks.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              id="reflection-continue-btn"
              className="choice-button"
              onClick={handleContinue}
              style={{ justifyContent: 'center', width: 'auto', display: 'inline-flex' }}
            >
              <span className="choice-label">→</span>
              <span>View Your Profile</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
