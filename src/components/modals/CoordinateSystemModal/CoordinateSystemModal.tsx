import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { useCoordinateSystemStore } from '../../../store/coordinateSystemStore';

const CoordinateSystemModal: React.FC = () => {
    const { coordinates, setCoordinate, resetCoordinates } = useCoordinateSystemStore();

    return (
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-backgroundPrimary p-6 rounded-lg border border-white h-[53vh] w-[25vw] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                    <button className="absolute top-[2%] right-[2%] bg-transparent text-[100%] cursor-pointer text-description trainsition colors duration-200" onClick={resetCoordinates}>✖</button>
                </Dialog.Close>
                <Dialog.Title className="text-3xl text-primary font-bold mb-titleBottomMargin">Coordinate System</Dialog.Title>
                <Dialog.Description className="text-sm text-description mb-descriptionBottomMargin">
                    Adjust the coordinate system settings for your CNC machine.
                </Dialog.Description>

                <div className="grid grid-cols-4 gap-gridGap pr-12">
                    <div className="contents">
                        <span></span> {/* 빈 칸 */}
                        <span className="font-bold text-center p-2 text-primary w-[100%]">X</span>
                        <span className="font-bold text-center p-2 text-primary w-[100%]">Y</span>
                        <span className="font-bold text-center p-2 text-primary w-[100%]">Z</span>
                    </div>

                    {['G54', 'G55', 'G56', 'G57', 'G58', 'G59'].map((label, rowIndex) => (
                        <div className="contents" key={rowIndex}>
                            <span className="font-bold text-center w-[100%] p-2 bg-backgroundPrimary rounded text-primary">{label}</span>
                            {['X', 'Y', 'Z'].map((_, colIndex) => (
                                <input
                                    key={`${rowIndex}-${colIndex}`}
                                    type="number"
                                    value={coordinates[rowIndex][colIndex]}
                                    onChange={(e) => setCoordinate(rowIndex, colIndex, e.target.value)}
                                    className="w-[100%] max-w-[100%] p-2 border border-primary rounded text-center text-[85%] bg-gray-800 text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <div className="w-[100%] h-[80%] mx-auto flex flex-col justify-between">
                    <button className="h-[10%] w-full bg-primary text-white px-4 py-2 rounded-md cursor-pointer text-[130%] font-bold transition-colors duration-200 mt-applyButtonTopMargin hover:bg-buttonHover flex items-center justify-center text-center">Apply</button>
                </div>
            </Dialog.Content>
    );
};

export default CoordinateSystemModal;
