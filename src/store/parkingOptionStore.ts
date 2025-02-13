import { create } from "zustand";

interface ParkingOptionsState {
  x: number;
  y: number;
  z: number;
  setX: (value: number) => void;
  setY: (value: number) => void;
  setZ: (value: number) => void;
  reset: () => void; // 초기화 함수
}

export const useParkingOptionsStore = create<ParkingOptionsState>((set) => ({
  x: 0,
  y: 0,
  z: 0,
  setX: (value) => set((state) => ({ ...state, x: value })),
  setY: (value) => set((state) => ({ ...state, y: value })),
  setZ: (value) => set((state) => ({ ...state, z: value })),
  reset: () => set({ x: 0, y: 0, z: 0 }),
}));
