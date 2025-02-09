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
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-backgroundPrimary p-6 rounded-lg border border-white max-w-[40%] w-[90%] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                <button className="absolute top-[2%] right-[2%] bg-transparent border-none text-[100%] cursor-pointer text-description trainsition colors duration-200" onClick={resetAll}>✖</button>
                </Dialog.Close>
                <Dialog.Title className="text-3xl text-primary font-bold mb-titleBottomMargin">Tool Offset & Position Table</Dialog.Title>
                <Dialog.Description className="text-sm text-description mb-descriptionBottomMargin">
                    Adjust the tool offset and position settings for your CNC machine.
                </Dialog.Description>

                <div className="flex justify-center">
                  <div className="grid" style={{ gridTemplateColumns: "9% repeat(6, 12.5%)", gap: "8px 12px" }}>
                      {/* 테이블 헤더 */}
                      <span className="font-bold text-center p-2 text-primary w-[100%] flex items-end justify-center">Tool Index</span>
                      <span className="font-bold text-center p-2 text-primary w-[100%] flex items-end justify-center">Tool Length</span>
                      <span className="font-bold text-center p-2 text-primary w-[100%] flex items-end justify-center">Tool Radius</span>
                      <span className="font-bold text-center p-2 text-primary w-[100%] flex items-end justify-center">X</span>
                      <span className="font-bold text-center p-2 text-primary w-[100%] flex items-end justify-center">Y</span>
                      <span className="font-bold text-center p-2 text-primary w-[100%] flex items-end justify-center">Zh</span>
                      <span className="font-bold text-center p-2 text-primary w-[100%] flex items-end justify-center">Zl</span>

                      {/* 각 행 (6개의 Tool) */}
                      {[...Array(6)].map((_, rowIndex) => (
                          <React.Fragment key={rowIndex}>
                              <span className="font-bold text-center p-2 bg-backgroundPrimary rounded text-primary">
                                  {rowIndex + 1}
                              </span>
                      
                              {/* Offset 2개 */}
                              {[0, 1].map((colIndex) => (
                                  <input
                                      key={`offset-${rowIndex}-${colIndex}`}
                                      type="number"
                                      value={offsets[rowIndex][colIndex]}
                                      onChange={(e) => {
                                          setOffset(rowIndex, colIndex, e.target.value);
                                      }}
                                      className="w-[100%] p-2 border border-primary rounded text-center text-[85%] bg-backgroundPrimary text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                  />
                              ))}

                              {/* Position 4개 */}
                              {[0, 1, 2, 3].map((colIndex) => (
                                  <input
                                      key={`position-${rowIndex}-${colIndex}`}
                                      type="number"
                                      value={positions[rowIndex][colIndex]}
                                      onChange={(e) => {
                                          setPosition(rowIndex, colIndex, e.target.value);
                                      }}
                                      className="w-[100%] p-2 border border-primary rounded text-center text-[85%] bg-backgroundPrimary text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                  />
                              ))}
                          </React.Fragment>
                      ))}
                  </div>
              </div>


                <div>
                    <button className="w-full bg-primary text-white px-4 py-2 border-none rounded-md cursor-pointer text-xs font-bold transition-colors duration-200 mt-applyButtonTopMargin hover:bg-buttonHover">Apply</button>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default ToolOffsetPositionTableModal;
