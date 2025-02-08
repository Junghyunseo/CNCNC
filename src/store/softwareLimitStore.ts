import { create } from "zustand";

interface SoftwareLimitState {
    limits: { min: string; max: string }[]; // X, Y, Z 각 최소/최대 값 저장
    setLimit: (axis: number, type: "min" | "max", value: string) => void;
    resetLimits: () => void;
}

export const useSoftwareLimitStore = create<SoftwareLimitState>((set) => ({
    limits: Array(3).fill({ min: "0", max: "0" }), // X, Y, Z 초기화
    setLimit: (axis, type, value) =>
        set((state) => {
            const newLimits = [...state.limits];
            newLimits[axis] = { ...newLimits[axis], [type]: value };
            return { limits: newLimits };
        }),
    resetLimits: () =>
        set({ limits: Array(3).fill({ min: "0", max: "0" }) }), // 초기화 기능
}));
