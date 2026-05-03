import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContent from './App.jsx'
import './index.css'
import './animations.css'
import { GameProvider } from './context/GameContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameProvider>
      <AppContent />
    </GameProvider>
  </React.StrictMode>,
)
