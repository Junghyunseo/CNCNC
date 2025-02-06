import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { useCoordinateSystemStore } from '../../../store/coordinateSystemStore';

const CoordinateSystemModal: React.FC = () => {
    const { coordinates, setCoordinate, resetCoordinates } = useCoordinateSystemStore();

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60" /> 
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-[#1F2937] p-6 rounded-lg border border-white max-w-[500px] w-[90%] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                    <button className="absolute top-[10px] right-[10px] bg-transparent border-none text-[15px] cursor-pointer text-[#9CA3AF] trainsition colors duration-200 hover: text-gray-500" onClick={resetCoordinates}>✖</button>
                </Dialog.Close>
                <Dialog.Title className="text-3xl text-[#60A5FA] font-bold mb-3">Coordinate System</Dialog.Title>
                <Dialog.Description className="text-sm text-[#9CA3AF] mb-7.5">
                    Adjust the coordinate system settings for your CNC machine.
                </Dialog.Description>

                <div className="grid grid-cols-4 gap-2 mt-[15px]">
                    <div className="contents">
                        <span></span> {/* 빈 칸 */}
                        <span className="font-bold text-center p-2 text-[#50A5FA] w-[70px]">X</span>
                        <span className="font-bold text-center p-2 text-[#50A5FA] w-[70px]">Y</span>
                        <span className="font-bold text-center p-2 text-[#50A5FA] w-[70px]">Z</span>
                    </div>

                    {['G54', 'G55', 'G56', 'G57', 'G58', 'G59'].map((label, rowIndex) => (
                        <div className="contents" key={rowIndex}>
                            <span className="font-bold text-center w-[70px] p-2 bg-[#1F2937] rounded text-[#60A5FA]">{label}</span>
                            {['X', 'Y', 'Z'].map((_, colIndex) => (
                                <input
                                    key={`${rowIndex}-${colIndex}`}
                                    type="text"
                                    value={coordinates[rowIndex][colIndex]}
                                    onChange={(e) => setCoordinate(rowIndex, colIndex, e.target.value)}
                                    className="w-[70px] max-w-[100px] p-[6px] border border-[#60A5FA] rounded text-center text-[14px] bg-gray-800 text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md focus:shadow-[#60A5FA]/50"
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

export default CoordinateSystemModal;
