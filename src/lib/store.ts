import { create } from 'zustand';

interface GameState {
  points: number;
  incrementPoints: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  points: 0,
  incrementPoints: () => set((state) => ({ points: state.points + 1 })),
}));