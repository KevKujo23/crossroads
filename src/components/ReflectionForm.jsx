import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { gsap } from 'gsap';
import { useForm, ValidationError } from '@formspree/react';

const STORYLINE_LABELS = {
  iranian: 'Iranian Journalist — To Speak or To Survive',
  us: 'US Journalist — The Weight of the Lens',
  civilian: 'Iranian Citizen — To Speak or To Survive',
};

export function ReflectionForm() {
  const { state, dispatch } = useGame();
  const [formState, handleSubmit] = useForm('xgodogor');

  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');

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

  const handleContinue = () => {
    dispatch({ type: 'END_GAME' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  // Success view when form is submitted
  if (formState.succeeded) {
    return (
      <div className="dossier-card slide-up reflection-card" ref={cardRef}>
        <div className="reflection-confirmation fade-in">
          <div className="reflection-confirm-icon" aria-hidden="true">✧</div>
          <h3 className="reflection-confirm-title">Reflection Recorded.</h3>
          <p className="reflection-confirm-body" style={{ color: '#2c1a0e', fontStyle: 'normal' }}>
            Your response has been logged securely. Thank you for engaging with the story.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={handleReset}
              style={{
                marginTop: '24px',
                fontFamily: 'Cinzel',
                background: '#2c1a0e',
                color: '#c9a84c',
                border: '1px solid #c9a84c',
                padding: '12px 28px',
                cursor: 'pointer',
                letterSpacing: '1px',
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              Return to Start
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dossier-card slide-up reflection-card" ref={cardRef}>
      <h2 className="reflection-heading">Reflect</h2>

      <form onSubmit={handleSubmit} className="reflection-form">
        <p className="reflection-intro">
          Before we reveal your ethical profile, take a moment to reflect on the choices you
          made.
        </p>

        {/* Hidden context fields for Formspree */}
        <input type="hidden" name="character" value={STORYLINE_LABELS[state.storyline] || state.storyline} />
        <input type="hidden" name="finalScores" value={JSON.stringify(state.scores)} />

          <div className="reflection-field">
            <label htmlFor="reflection-field-1" className="reflection-label">
              What was the hardest choice you made, and why?
            </label>
            <textarea
              id="reflection-field-1"
              name="hardestChoice"
              className="reflection-textarea"
              value={field1}
              onChange={(e) => setField1(e.target.value)}
              rows={4}
              required
              placeholder="Describe the decision and what made it difficult…"
            />
            <ValidationError prefix="Question 1" field="hardestChoice" errors={formState.errors} />
          </div>

          <div className="reflection-field">
            <label htmlFor="reflection-field-2" className="reflection-label">
              Did your choices surprise you? What do they say about your values?
            </label>
            <textarea
              id="reflection-field-2"
              name="surpriseAndValues"
              className="reflection-textarea"
              value={field2}
              onChange={(e) => setField2(e.target.value)}
              rows={4}
              required
              placeholder="Reflect on what your decisions reveal…"
            />
            <ValidationError prefix="Question 2" field="surpriseAndValues" errors={formState.errors} />
          </div>

          <div className="reflection-field">
            <label htmlFor="reflection-field-3" className="reflection-label">
              Any other thoughts or reflections?{' '}
              <span className="reflection-optional">(optional)</span>
            </label>
            <textarea
              id="reflection-field-3"
              name="otherThoughts"
              className="reflection-textarea"
              value={field3}
              onChange={(e) => setField3(e.target.value)}
              rows={3}
              placeholder="Open-ended — anything else on your mind…"
            />
            <ValidationError prefix="Other Thoughts" field="otherThoughts" errors={formState.errors} />
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              id="reflection-submit-btn"
              type="submit"
              className="choice-button"
              disabled={formState.submitting}
              style={{ justifyContent: 'center', width: 'auto', display: 'inline-flex' }}
            >
              <span className="choice-label">{formState.submitting ? '...' : '→'}</span>
              <span>{formState.submitting ? 'Logging...' : 'Submit Reflection'}</span>
            </button>
            <ValidationError errors={formState.errors} style={{ color: '#8b0000', marginTop: '1rem', display: 'block', fontFamily: 'Crimson Text' }} />
          </div>
        </form>
    </div>
  );
}
