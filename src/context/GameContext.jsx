import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  storyline: null,
  currentChapterIndex: 0,
  choices: [],
  scores: { U: 0, K: 0, P: 0, V: 0 },
  phase: "select"
};

function gameReducer(state, action) {
  switch (action.type) {
    case 'GO_TO_SELECT':
      return {
        ...initialState,
        phase: "select"
      };
    case 'SELECT_STORYLINE':
      return {
        ...initialState,
        storyline: action.payload,
        phase: "playing"
      };
    case 'MAKE_CHOICE': {
      const { chapterId, label, scores } = action.payload;
      return {
        ...state,
        choices: [...state.choices, { chapterId, label, scores }],
        scores: {
          U: state.scores.U + scores.U,
          K: state.scores.K + scores.K,
          P: state.scores.P + scores.P,
          V: state.scores.V + (scores.V || 0)
        }
      };
    }
    case 'NEXT_CHAPTER':
      return {
        ...state,
        currentChapterIndex: state.currentChapterIndex + action.payload.advance
      };
    case 'END_GAME':
      // Transition through reflection phase first, then to end
      return {
        ...state,
        phase: "end"
      };
    case 'SHOW_REFLECTION':
      return {
        ...state,
        phase: "reflection"
      };
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
}

const GameContext = createContext();

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
