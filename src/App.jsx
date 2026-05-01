import React, { useMemo } from 'react';
import { useGame } from './context/GameContext';
import { IntroPage } from './components/IntroPage';
import { CharacterSelect } from './components/CharacterSelect';
import { Chapter } from './components/Chapter';
import { EndScreen } from './components/EndScreen';
import { ReflectionForm } from './components/ReflectionForm';
import { TransitionWrapper } from './components/TransitionWrapper';
import { storyline1 } from './data/storyline1';
import { storyline2 } from './data/storyline2';
import { storyline3 } from './data/storyline3';

function AppContent() {
  const { state } = useGame();

  const currentData = useMemo(() => {
    if (state.storyline === 'iranian') return storyline1;
    if (state.storyline === 'us') return storyline2;
    if (state.storyline === 'civilian') return storyline3;
    return [];
  }, [state.storyline]);

  const renderPhase = () => {
    if (state.phase === 'intro') {
      return (
        <TransitionWrapper transitionKey="intro">
          <IntroPage />
        </TransitionWrapper>
      );
    }

    if (state.phase === 'select') {
      return (
        <TransitionWrapper transitionKey="select">
          <CharacterSelect />
        </TransitionWrapper>
      );
    }

    if (state.phase === 'playing') {
      const chapterData = currentData[state.currentChapterIndex];
      const isLastChapter = state.currentChapterIndex === currentData.length - 1;

      return (
        <TransitionWrapper transitionKey={`chapter-${state.currentChapterIndex}`}>
          <Chapter chapterData={chapterData} isLastChapter={isLastChapter} />
        </TransitionWrapper>
      );
    }

    if (state.phase === 'reflection') {
      return (
        <TransitionWrapper transitionKey="reflection">
          <ReflectionForm />
        </TransitionWrapper>
      );
    }

    if (state.phase === 'end') {
      return (
        <TransitionWrapper transitionKey="end">
          <EndScreen />
        </TransitionWrapper>
      );
    }

    return null;
  };

  // Generate particles once
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * 3 + 3}px`,
      animationDuration: `${Math.random() * 6 + 8}s`,
      animationDelay: `${Math.random() * 10}s`
    }));
  }, []);

  // On the intro page, render full-bleed without the app-container header
  if (state.phase === 'intro') {
    return (
      <>
        <div className="particles-container">
          {particles.map(p => (
            <div
              key={p.id}
              className="particle"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: p.animationDuration,
                animationDelay: p.animationDelay
              }}
            />
          ))}
        </div>
        <div className="app-container" style={{ maxWidth: '100%', padding: 0 }}>
          <main style={{ flex: 1 }}>
            {renderPhase()}
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="particles-container">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay
            }}
          />
        ))}
      </div>

      <div className="app-container">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 className="game-title">GREY'S ANTHROPOLOGY</h1>
        </header>

        <main style={{ flex: 1 }}>
          {renderPhase()}
        </main>
      </div>
    </>
  );
}

export default AppContent;
