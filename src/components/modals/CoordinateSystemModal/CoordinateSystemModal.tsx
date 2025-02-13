import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { useCoordinateSystemStore } from '../../../store/coordinateSystemStore';

const CoordinateSystemModal: React.FC = () => {
    const { coordinates, setCoordinate, resetCoordinates } = useCoordinateSystemStore();

    return (
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-backgroundPrimary p-6 rounded-lg border border-white h-[53vh] w-[25vw] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                    <button className="absolute top-[10px] right-[10px] bg-transparent text-[100%] cursor-pointer text-description trainsition colors duration-200" onClick={resetCoordinates}><svg
                        width="20"
                        height="20"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                </Dialog.Close>
                <Dialog.Title className="text-3xl text-primary font-bold mb-titleBottomMargin">Coordinate System</Dialog.Title>
                <Dialog.Description className="text-sm text-description mb-descriptionBottomMargin">
                    Adjust the coordinate system settings for your CNC machine.
                </Dialog.Description>

                <div className="grid grid-cols-4 gap-x-3 gap-y-2 pr-10">
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
                <div className="w-[100%] h-full mx-auto flex flex-col justify-between">
                    <button className="h-[8%] w-full bg-primary text-white px-4 py-2 rounded-md cursor-pointer text-lg font-bold transition-colors duration-200 mt-applyButtonTopMargin hover:bg-buttonHover flex items-center justify-center text-center">Apply</button>
                </div>
            </Dialog.Content>
    );
};

export default CoordinateSystemModal;
