import React from 'react';

export function ChoiceButton({ label, text, onClick, disabled, style }) {
  return (
    <button 
      className="choice-button choice-btn fade-in"
      onClick={onClick} 
      disabled={disabled}
      style={style}
    >
      <span className="choice-label">{label}</span>
      <span>{text}</span>
    </button>
  );
}
