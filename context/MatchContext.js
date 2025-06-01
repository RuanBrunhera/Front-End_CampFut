import React, { createContext, useState, useContext } from 'react';

const MatchContext = createContext();

export function MatchProvider({ children }) {
  const [matches, setMatches] = useState([
    { 
      id: '1', 
      casa: 'Flamengo', 
      visitante: 'Vasco', 
      data: '15/03', 
      hora: '16:00',
      placar: '2x1'
    },
    { 
      id: '2', 
      casa: 'São Paulo', 
      visitante: 'Palmeiras', 
      data: '16/03', 
      hora: '19:00',
      placar: '1x1'
    },
    { 
      id: '3', 
      casa: 'Corinthians', 
      visitante: 'Santos', 
      data: '17/03', 
      hora: '16:00',
      placar: '3x0'
    },
  ]);

  const addMatch = (newMatch) => {
    setMatches(prevMatches => [...prevMatches, { ...newMatch, id: Date.now().toString() }]);
  };

  return (
    <MatchContext.Provider value={{ matches, addMatch }}>
      {children}
    </MatchContext.Provider>
  );
}

export function useMatches() {
  const context = useContext(MatchContext);
  if (!context) {
    throw new Error('useMatches must be used within a MatchProvider');
  }
  return context;
} 