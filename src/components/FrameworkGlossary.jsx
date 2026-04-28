import React, { useState } from 'react';

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
          <div className="dossier-card slide-up" style={{ 
            maxWidth: '600px', 
            width: '90%', 
            position: 'relative', 
            background: 'var(--color-parchment)', 
            padding: '2.5rem 2rem 2.5rem 2.5rem',
            borderRadius: 'var(--radius-card)',
            border: '1px solid var(--color-border-parchment)'
          }}>
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
            <div className="custom-scrollbar" style={{ maxHeight: '75vh', overflowY: 'auto', paddingRight: '1rem' }}>
              <h2 style={{ borderBottom: '1px solid var(--color-border-parchment)', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: 0 }}>Ethical Frameworks</h2>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Utilitarianism (U)</h3>
                <p style={{ color: 'var(--color-ink)', fontSize: '0.95rem', lineHeight: '1.5' }}>Originates with Bentham. Focuses on the consequences of actions, aiming for the greatest aggregate good for the greatest number. (Calculus of impact).</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Kantian Duty Ethics (K)</h3>
                <p style={{ color: 'var(--color-ink)', fontSize: '0.95rem', lineHeight: '1.5' }}>Immanuel Kant. Ethics based on categorical imperatives—universal duties. Humans must be treated as ends in themselves, never merely as means. Truth is a non-negotiable duty.</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Personalism (P)</h3>
                <p style={{ color: 'var(--color-ink)', fontSize: '0.95rem', lineHeight: '1.5' }}>Emphasizes the inherent, inviolable dignity of the human person. Decisions circle back to protecting individuals and communities, motivated by justice rather than mere convenience.</p>
              </div>

              <div style={{ marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Virtue Ethics (V)</h3>
                <p style={{ color: 'var(--color-ink)', fontSize: '0.95rem', lineHeight: '1.5' }}>Traced back to Aristotle. Focuses on the moral character of the actor rather than rules or consequences. Emphasizes moral habituation, integrity, and acting with courage even at personal cost. Note: Frequently overlaps with Personalism in practice.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
