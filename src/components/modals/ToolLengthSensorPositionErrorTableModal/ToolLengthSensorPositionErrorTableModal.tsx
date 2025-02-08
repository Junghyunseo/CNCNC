import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { useToolOffsetStore } from '../../../store/toolOffsetStore';
import { usePositionStore } from '../../../store/positionStore';

const ToolLengthSensorPositionErrorTableModal: React.FC = () => {
    // Zustand 상태 사용 (각 store에서 가져오기)
    const { offsets, setOffset, resetOffsets } = useToolOffsetStore();
    const { positions, setPosition, resetPositions } = usePositionStore();

    // 전체 초기화
    const resetAll = () => {
        resetOffsets();
        resetPositions();
    };

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60" /> 
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-backgroundPrimary p-6 rounded-lg border border-white max-w-[1000px] w-[90%] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                    <button className="absolute top-[10px] right-[10px] bg-transparent border-none text-[15px] cursor-pointer text-description trainsition colors duration-200" onClick={resetAll}>✖</button>
                </Dialog.Close>
                <Dialog.Title className="text-3xl text-primary font-bold mb-3">Tool Length Sensor Position/Error Table</Dialog.Title>
                <Dialog.Description className="text-sm text-description mb-7.5">
                    Adjust the tool length senseor position and error for your CNC machine.
                </Dialog.Description>

                <div className="grid grid-cols-7 gap-4 mt-[15px]">
                    <div className="contents">
                        <span className="font-bold text-right text-[#50A5FA] w-[70px]">Tool Index</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[70px]">X</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[70px]">Y</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[70px]">Zh</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[70px]">Zl</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[70px]">Error(+)</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[70px]">Error(-)</span>
                    </div>

                    {[...Array(6)].map((_, rowIndex) => (
                        <div className="contents" key={rowIndex}>
                            <span className="font-bold text-center w-[100px] p-2 bg-backgroundPrimary rounded text-primary">
                              {rowIndex + 1}
                            </span>
                            {[0, 1, 2, 3].map((colIndex) => (
                                <input
                                    key={`position-${rowIndex}-${colIndex}`}
                                    type="text"
                                    value={positions[rowIndex][colIndex]}
                                    onChange={(e) => setPosition(rowIndex, colIndex, e.target.value)}
                                    className="w-[70px] max-w-[100px] p-[6px] border border-primary rounded text-center text-[14px] bg-gray-800 text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md focus:shadow-primary/50"
                                />
                            ))}

                            {[0, 1].map((colIndex) => (
                                <input
                                    key={`offset-${rowIndex}-${colIndex}`}
                                    type="text"
                                    value={offsets[rowIndex][colIndex]}
                                    onChange={(e) => setOffset(rowIndex, colIndex, e.target.value)}
                                    className="w-[70px] max-w-[100px] p-[6px] border border-primary rounded text-center text-[14px] bg-gray-800 text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md focus:shadow-primary/50"
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div>
                    <button className="w-full bg-primary text-white px-4 py-2 border-none rounded-md cursor-pointer text-xs font-bold transition-colors duration-200 mt-7 hover:bg-buttonHover">Apply</button>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default ToolLengthSensorPositionErrorTableModal;
