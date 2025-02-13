import { create } from "zustand";

interface CoordinateState {
  coordinates: string[][];
  setCoordinate: (row: number, col: number, value: string) => void;
  resetCoordinates: () => void;
}

export const useCoordinateSystemStore = create<CoordinateState>((set) => ({
  coordinates: Array.from({ length: 6 }, () => Array(3).fill("0")), // 6x3 초기화
  setCoordinate: (row, col, value) =>
    set((state) => {
      const newCoordinates = state.coordinates.map((rowArray) => [...rowArray]);
      newCoordinates[row][col] = value;
      return { coordinates: newCoordinates };
    }),
  resetCoordinates: () =>
    set({ coordinates: Array.from({ length: 6 }, () => Array(3).fill("0")) }), // 초기화 기능
}));
