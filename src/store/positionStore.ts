import { create } from "zustand";

interface PositionState {
  positions: string[][]; // 6x4 배열
  setPosition: (row: number, col: number, value: string) => void;
  resetPositions: () => void;
}

export const usePositionStore = create<PositionState>((set) => ({
  positions: Array.from({ length: 6 }, () => Array(4).fill("0")), // 6x4 초기화
  setPosition: (row, col, value) =>
    set((state) => {
      const newPositions = state.positions.map((rowArray) => [...rowArray]);
      newPositions[row][col] = value;
      return { positions: newPositions };
    }),
  resetPositions: () =>
    set({ positions: Array.from({ length: 6 }, () => Array(4).fill("0")) }), // 초기화 기능
}));
