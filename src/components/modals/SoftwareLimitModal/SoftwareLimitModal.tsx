import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { useSoftwareLimitStore } from "../../../store/softwareLimitStore";

const SoftwareLimitModal: React.FC = () => {
    const { limits, setLimit, resetLimits } = useSoftwareLimitStore();

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60" />
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-backgroundPrimary p-6 rounded-lg border border-white max-w-[400px] w-[90%] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                    <button className="absolute top-[10px] right-[10px] text-gray-400 hover:text-gray-300 transition-colors duration-200" onClick={resetLimits}>
                        ✖
                    </button>
                </Dialog.Close>
                <Dialog.Title className="text-3xl text-primary font-bold mb-titleBottomMargin">
                    Software Limit
                </Dialog.Title>
                <Dialog.Description className="text-sm text-description mb-descriptionBottomMargin">
                    Set software limits for X, Y, and Z axes.
                </Dialog.Description>
                <div className="grid grid-cols-4 gap-gridGap">
                    <div className="contents">
                        <span className="font-bold text-center text-[#50A5FA] w-[70px]">Axis</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[70px]">Min</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[70px]">Max</span>
                        <span className="font-bold text-center text-[#50A5FA] w-[70px]">Unit</span>
                    </div>
                    {["X", "Y", "Z"].map((label, index) => (
                        <div className="contents" key={index}>
                            <span className="font-bold text-center w-[70px] p-2 bg-backgroundPrimary rounded text-primary">
                                {label}
                            </span>
                            <input
                                type="text"
                                value={limits[index].min}
                                onChange={(e) => setLimit(index, "min", e.target.value)}
                                className="w-[70px] max-w-[100px] p-[6px] border border-primary rounded text-center text-[14px] bg-gray-800 text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md focus:shadow-primary/50"
                            />
                            <input
                                type="text"
                                value={limits[index].max}
                                onChange={(e) => setLimit(index, "max", e.target.value)}
                                className="w-[70px] max-w-[100px] p-[6px] border border-primary rounded text-center text-[14px] bg-gray-800 text-white focus:outline-none focus:border-white focus:border-2 focus:shadow-md focus:shadow-primary/50"
                            />
                            <span className="font-bold text-center w-[70px] p-2 bg-backgroundPrimary rounded text-gray-400">
                                mm
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    <button className="w-full bg-primary text-white px-4 py-2 border-none rounded-md cursor-pointer text-xs font-bold transition-colors duration-200 mt-applyButtonTopMargin hover:bg-buttonHover">
                        Apply
                    </button>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default SoftwareLimitModal;
