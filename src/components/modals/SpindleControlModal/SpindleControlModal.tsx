import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { useRotationSpeedStore } from '../../../store/RotationSpeedStore';
import { useFeedRateStore } from '../../../store/FeedRateStore';

const SpindleControlModal: React.FC = () => {  // ✅ 컴포넌트 이름 수정
    const { rotationSpeed, setRotationSpeed, resetRotationSpeed } = useRotationSpeedStore();
    const { feedRate, setFeedRate, resetFeedRate } = useFeedRateStore();
    // 전체 초기화
    const resetAll = () => {
        resetRotationSpeed();
        resetFeedRate();
    };

    return (
            <Dialog.Content className="text-[100%] fixed top-1/2 left-1/2 bg-backgroundPrimary p-6 rounded-lg border border-white h-[36vh] w-[20vw] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-inv">
                <Dialog.Close asChild>
                    <button className="absolute top-[2%] right-[2%] bg-transparent border-none text-[100%] cursor-pointer text-description trainsition colors duration-200" onClick={resetAll}>✖</button>
                </Dialog.Close>
                <Dialog.Title className="text-[200%] text-primary font-bold mb-titleBottomMargin">Spindle Control</Dialog.Title>
                <Dialog.Description className="text-sm text-description mb-descriptionBottomMargin">
                    Adjust spindle rotation speed and feed rate.
                </Dialog.Description>

                <div className="text-primary text-sm flex flex-col gap-[15px]">
                    <div className="flex flex-col gap-gridGap h-[20%]">
                        <label>Rotation Speed (RPM): </label>
                        <div className="flex flex-col gap-gridGap h-full">
                            <input
                                type="number"
                                value={rotationSpeed}
                                onChange={(e) => setRotationSpeed(Number(e.target.value))}
                                className="h-[3.5vh] w-full p-2 border border-primary rounded text-[100%] bg-gray-800 text-white text-right focus:outline-none focus:border-white focus:border-2 focus:shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none box-border"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-gridGap">
                        <label>Feed Rate (mm/min): </label>
                        <div>
                            <input
                                type="number"
                                value={feedRate}
                                onChange={(e) => setFeedRate(Number(e.target.value))}
                                className="h-[3.5vh] w-full p-2 border border-primary rounded text-[100%] bg-gray-800 text-white text-right focus:outline-none focus:border-white focus:border-2 focus:shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none box-border"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[100%] h-full mx-auto flex flex-col justify-between">
                    <button className="h-[12%] w-full bg-primary text-white px-4 py-2 rounded-md cursor-pointer text-[1.3em] font-bold transition-colors duration-200 mt-applyButtonTopMargin hover:bg-buttonHover flex items-center justify-center text-center">Apply</button>
                </div>
            </Dialog.Content>
    );
};

export default SpindleControlModal;  // ✅ 컴포넌트 이름 수정
