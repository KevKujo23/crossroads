import React, { useState } from 'react';

const FRAMEWORKS = [
  {
    label: 'Utilitarianism (U)',
    body: 'Associated with John Stuart Mill. An action is right if it produces the greatest good for the greatest number of people. What matters is the outcome, not the intention. In practice, this means weighing the costs and benefits of a decision across everyone it affects.'
  },
  {
    label: 'Kantian Duty Ethics (K)',
    body: 'Associated with Immanuel Kant. An action is right if it follows a universal moral rule, one you could expect everyone to follow. People must always be treated as ends in themselves, never as tools for someone else\'s goal. Honesty is a duty, not a choice.'
  },
  {
    label: 'Personalism (P)',
    body: 'Rooted in the idea that every person has inherent dignity that cannot be taken away. Decisions must protect individuals and communities, not just serve what is convenient. Justice, not utility, is the baseline.'
  },
  {
    label: 'Virtue Ethics (V)',
    body: 'Associated with Aristotle. The focus is on the character of the person acting, not the rules they follow or the results they produce. Good actions come from good habits built over time. Courage, honesty, and integrity matter even when they come at a personal cost. In practice this framework often overlaps with Personalism.'
  }
];

export function FrameworkGlossary() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          background: 'none',
          border: '1px solid var(--color-border-parchment)',
          padding: '0.5rem 1rem',
          fontFamily: 'var(--font-choice)',
          color: 'var(--color-ink)',
          cursor: 'pointer',
          borderRadius: '4px',
          marginTop: '1rem',
          display: 'block',
          margin: '1rem auto'
        }}
      >
        View Framework Glossary
      </button>

      {isOpen && (
        <div
          className="fade-in"
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(10, 18, 8, 0.8)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div
            className="slide-up"
            style={{
              maxWidth: '560px',
              width: '90%',
              maxHeight: '80vh',
              position: 'relative',
              background: 'var(--color-parchment)',
              padding: '2.5rem',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--color-border-parchment)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '2rem',
                cursor: 'pointer',
                color: 'var(--color-gold)',
                lineHeight: 1,
                padding: '0.5rem',
                zIndex: 10
              }}
            >
              &times;
            </button>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-gold)',
              textAlign: 'center',
              fontSize: '2rem',
              margin: '0 0 20px 0',
              paddingBottom: '10px',
              borderBottom: '1px solid var(--color-gold-glow)',
              position: 'relative'
            }}>
              Ethical Frameworks
            </h2>

            <div className="custom-scrollbar" style={{ overflowY: 'auto', paddingRight: '0.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {FRAMEWORKS.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: '#f5e6c8',
                      borderLeft: '3px solid #c9a84c',
                      padding: '16px 20px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                      borderRadius: '6px'
                    }}
                  >
                    <h3 style={{
                      color: 'var(--color-gold)',
                      fontFamily: 'var(--font-chapter)',
                      fontSize: '1.2rem',
                      margin: '0 0 8px 0'
                    }}>
                      {f.label}
                    </h3>
                    <p style={{
                      color: '#2c1a0e',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      margin: 0
                    }}>
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
