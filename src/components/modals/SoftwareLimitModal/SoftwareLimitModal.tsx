import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { useSoftwareLimitStore } from "../../../store/softwareLimitStore";

const SoftwareLimitModal: React.FC = () => {
    const { limits, setLimit, resetLimits } = useSoftwareLimitStore();

    return (
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-backgroundPrimary p-6 rounded-lg border border-white h-[37vh] w-[25vw] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                    <button className="absolute top-[10px] right-[10px] bg-transparent text-[100%] cursor-pointer text-description trainsition colors duration-200" onClick={resetLimits}><svg
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
                <Dialog.Title className="text-3xl text-primary font-bold mb-titleBottomMargin">
                    Software Limit
                </Dialog.Title>
                <Dialog.Description className="text-sm text-description mb-descriptionBottomMargin">
                    Set software limits for X, Y, and Z axes.
                </Dialog.Description>
                <div className="flex justify-center">
                    <div className="grid" style={{ gridTemplateColumns: "50px 70px 50px 70px 50px", gap: "8px 16px" }}>
                        {/* 테이블 헤더 */}
                        <span className="font-bold text-center text-[#50A5FA] w-[70px] p-2">Axis</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[80px] p-2">Min</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[50px] p-2"></span>
                        <span className="font-bold text-center text-[#50A5FA] w-[80px] p-2">Max</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[50px] p-2"></span>

                        {/* 데이터 행 */}
                        {["X", "Y", "Z"].map((label, index) => (
                            <React.Fragment key={index}>
                                <span className="font-bold text-center w-[70px] p-2 bg-backgroundPrimary rounded text-primary">
                                    {label}
                                </span>
                                <input
                                    type="number"
                                    value={limits[index].min}
                                    onChange={(e) => setLimit(index, "min", e.target.value)}
                                    className="w-[80px] p-[4px] border border-primary rounded text-center text-[14px] bg-gray-800 text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                <span className="font-bold w-[50px] p-2 bg-backgroundPrimary rounded text-gray-400 text-left">
                                    mm
                                </span>
                                <input
                                    type="number"
                                    value={limits[index].max}
                                    onChange={(e) => setLimit(index, "max", e.target.value)}
                                    className="w-[80px] p-[4px] border border-primary rounded text-center text-[14px] bg-gray-800 text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                <span className="font-bold text-center w-[50px] p-2 bg-backgroundPrimary rounded text-gray-400">
                                    mm
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="w-[100%] h-full mx-auto flex flex-col justify-between">
                    <button className="h-[12%] w-full bg-primary text-white px-4 py-2 rounded-md cursor-pointer text-lg font-bold transition-colors duration-200 mt-applyButtonTopMargin hover:bg-buttonHover flex items-center justify-center text-center">Apply</button>
                </div>
            </Dialog.Content>
    );
};

export default SoftwareLimitModal;
