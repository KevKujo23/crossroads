import React, { useEffect, useState } from 'react';

export function TransitionWrapper({ children, transitionKey }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [currentKey, setCurrentKey] = useState(transitionKey);

  useEffect(() => {
    if (transitionKey !== currentKey) {
      setTransitionStage("fadeOut");
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setCurrentKey(transitionKey);
        setTransitionStage("fadeIn");
      }, 400); // 400ms fade-out

      return () => clearTimeout(timeout);
    } else {
      // If the key is the same, just update the children immediately to allow re-renders of the same component
      setDisplayChildren(children);
    }
  }, [children, transitionKey, currentKey]);

  return (
    <div 
      style={{
        opacity: transitionStage === "fadeIn" ? 1 : 0,
        transition: "opacity 400ms ease"
      }}
    >
      {displayChildren}
    </div>
  );
}
