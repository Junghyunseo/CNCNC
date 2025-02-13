import { create } from "zustand";

interface FeedRateState {
  feedRate: number; // 이송 속도 값
  setFeedRate: (value: number) => void;
  resetFeedRate: () => void;
}

export const useFeedRateStore = create<FeedRateState>((set) => ({
  feedRate: 500, // 기본값 (예: 500 mm/min)
  setFeedRate: (value) => set({ feedRate: value }),
  resetFeedRate: () => set({ feedRate: 500 }), // 기본값으로 초기화
}));
