import { create } from 'zustand';

interface RotationSpeedState {
    rotationSpeed: number; // 회전 속도 값
    setRotationSpeed: (value: number) => void;
    resetRotationSpeed: () => void;
}

export const useRotationSpeedStore = create<RotationSpeedState>((set) => ({
    rotationSpeed: 1000, // 기본값 (예: 1000 RPM)
    setRotationSpeed: (value) => set({ rotationSpeed: value }),
    resetRotationSpeed: () => set({ rotationSpeed: 1000 }), // 기본값으로 초기화
}));
