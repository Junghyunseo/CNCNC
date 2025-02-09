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
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60" /> 
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-backgroundPrimary p-6 rounded-lg border border-white max-w-[500px] w-[90%] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                    <button className="absolute top-[10px] right-[10px] bg-transparent border-none text-[15px] cursor-pointer text-description trainsition colors duration-200" onClick={resetAll}>✖</button>
                </Dialog.Close>
                <Dialog.Title className="text-3xl text-primary font-bold mb-titleBottomMargin">Spindle Control</Dialog.Title>
                <Dialog.Description className="text-sm text-description mb-descriptionBottomMargin">
                    Adjust spindle rotation speed and feed rate.
                </Dialog.Description>

                <div className="text-primary text-sm flex flex-col gap-[15px]">
                    <div className="flex flex-col gap-gridGap">
                        <label>Rotation Speed (RPM): </label>
                        <div className="flex flex-col gap-gridGap">
                            <input
                                type="number"
                                value={rotationSpeed}
                                onChange={(e) => setRotationSpeed(Number(e.target.value))}
                                className="w-full p-[6px] border border-primary rounded text-[14px] bg-gray-800 text-white text-right focus:outline-none focus:border-white focus:border-2 focus:shadow-md"
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
                                className="w-full p-[6px] border border-primary rounded text-[14px] bg-gray-800 text-white text-right focus:outline-none focus:border-white focus:border-2 focus:shadow-md"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="w-full bg-primary text-white px-4 py-2 border-none rounded-md cursor-pointer text-xs font-bold transition-colors duration-200 mt-applyButtonTopMargin hover:bg-buttonHover">Apply</button>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default SpindleControlModal;  // ✅ 컴포넌트 이름 수정
