import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { useToolOffsetStore } from '../../../store/toolOffsetStore';
import { usePositionStore } from '../../../store/positionStore';

const ToolOffsetPositionTableModal: React.FC = () => {
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
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-[#1F2937] p-6 rounded-lg border border-white max-w-[1000px] w-[90%] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                <button className="absolute top-[10px] right-[10px] bg-transparent border-none text-[15px] cursor-pointer text-[#9CA3AF] trainsition colors duration-200" onClick={resetAll}>✖</button>
                </Dialog.Close>
                <Dialog.Title className="text-3xl text-primary font-bold mb-3">Coordinate System</Dialog.Title>
                <Dialog.Description className="text-sm text-[#9CA3AF] mb-7.5">
                    Adjust the tool offset and position settings for your CNC machine.
                </Dialog.Description>

                <div className="grid grid-cols-7 gap-4 mt-[15px]">
                    {/* 테이블 헤더 (Offset 2개 + Position 4개) */}
                    <div className="contents">
                      <span className="font-bold text-center p-2 text-[#60A5FA] w-[100px] border-b-2 border-gray-600">Tool Index</span>
                      <span className="font-bold text-center p-2 text-[#60A5FA] w-[100px] border-b-2 border-gray-600">Tool Length</span>
                      <span className="font-bold text-center p-2 text-[#60A5FA] w-[100px] border-b-2 border-gray-600">Tool Radius</span>
                      <span className="font-bold text-center p-2 text-[#60A5FA] w-[100px] border-b-2 border-gray-600">X</span>
                      <span className="font-bold text-center p-2 text-[#60A5FA] w-[100px] border-b-2 border-gray-600">Y</span>
                      <span className="font-bold text-center p-2 text-[#60A5FA] w-[100px] border-b-2 border-gray-600">Zh</span>
                      <span className="font-bold text-center p-2 text-[#60A5FA] w-[100px] border-b-2 border-gray-600">Rl</span>
                    </div>


                    {/* 각 행 (6개의 Tool) */}
                    {[...Array(6)].map((_, rowIndex) => (
                      <div className="contents" key={rowIndex}>
                        {/* 행 라벨 */}
                        <span className="font-bold text-center w-[100px] p-2 bg-[#1F2937] rounded text-[#60A5FA]">
                          {rowIndex + 1}
                        </span>

                        {/* Offset 2개 */}
                        {[0, 1].map((colIndex) => (
                          <input
                            key={`offset-${rowIndex}-${colIndex}`}
                            type="text"
                            value={offsets[rowIndex][colIndex]}
                            onChange={(e) => setOffset(rowIndex, colIndex, e.target.value)}
                            className="w-[100px] p-[6px] border border-[#60A5FA] rounded text-center text-[14px] bg-[#1F2937] text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md focus:shadow-[#60A5FA]/50"
                          />
                        ))}

                        {/* Position 4개 */}
                        {[0, 1, 2, 3].map((colIndex) => (
                          <input
                            key={`position-${rowIndex}-${colIndex}`}
                            type="text"
                            value={positions[rowIndex][colIndex]}
                            onChange={(e) => setPosition(rowIndex, colIndex, e.target.value)}
                            className="w-[100px] p-[6px] border border-[#60A5FA] rounded text-center text-[14px] bg-[#1F2937] text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md focus:shadow-[#60A5FA]/50"
                          />
                        ))}
                      </div>
                    ))}

                </div>

                <div>
                    <button className="w-full bg-[#60A5FA] text-white px-4 py-2 border-none rounded-md cursor-pointer text-xs font-bold transition-colors duration-200 mt-7 hover:bg-[#3A7BD5]">Apply</button>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default ToolOffsetPositionTableModal;
