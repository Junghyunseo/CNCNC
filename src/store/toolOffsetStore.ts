import { create } from 'zustand';

interface ToolOffsetState {
    offsets: string[][]; // 6x2 배열
    setOffset: (row: number, col: number, value: string) => void;
    resetOffsets: () => void;
}

export const useToolOffsetStore = create<ToolOffsetState>((set) => ({
    offsets: Array.from({ length: 6 }, () => Array(2).fill('0')), // 6x2 초기화
    setOffset: (row, col, value) =>
        set((state) => {
            const newOffsets = state.offsets.map((rowArray) => [...rowArray]);
            newOffsets[row][col] = value;
            return { offsets: newOffsets };
        }),
    resetOffsets: () =>
        set({ offsets: Array.from({ length: 6 }, () => Array(2).fill('0')) }), // 초기화 기능
}));
