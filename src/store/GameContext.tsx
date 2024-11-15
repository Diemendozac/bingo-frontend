
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { BehaviorSubject } from 'rxjs';

interface GameContextType {
  gameId: string | null;
  setGameId: (id: string) => void;
  gameState$: BehaviorSubject<string>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameId, setGameId] = useState<string | null>(null);
  const gameState$ = new BehaviorSubject<string>('waiting');

  return (
    <GameContext.Provider value={{ gameId, setGameId, gameState$ }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
