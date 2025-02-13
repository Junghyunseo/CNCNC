import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { useParkingOptionsStore } from '../../../store/parkingOptionStore';

const parkingOptionModal: React.FC = () => {
    const { x, y, z, setX, setY, setZ } = useParkingOptionsStore();
    return (
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-backgroundPrimary p-6 rounded-lg border border-white h-[31vh] w-[20vw] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                    <button
                        className="absolute top-[2%] right-[2%] bg-transparent border-none text-[100%] cursor-pointer text-description trainsition colors duration-200"
                        onClick={()=>{
                            setX(0);
                            setY(0);
                            setZ(0);
                        }}>
                        ✖
                    </button>
                </Dialog.Close>
                <Dialog.Title className="text-3xl text-primary font-bold mb-titleBottomMargin">Parking Options</Dialog.Title>
                <Dialog.Description className="text-sm text-description mb-descriptionBottomMargin">
                    Set the parking coordinates for your CNC machine.
                </Dialog.Description>
                <div className="text-primary text-sm flex flex-col gap-[8px] pr-6">
                    {[
                        { label: "X", value: x, setValue: setX },
                        { label: "Y", value: y, setValue: setY },
                        { label: "Z", value: z, setValue: setZ },
                    ].map(({ label, value, setValue }) => (
                        <div key={label} className="flex flex-row items-center justify-center gap-[10px]">
                            <div className="w-[40px] font-bold text-center">{label}</div>
                            <input
                                type="number"
                                value={value}
                                onChange={(e) => setValue(Number(e.target.value))}
                                className="h-[35px] w-[250px] p-[6px] border border-primary rounded text-[14px] bg-gray-800 text-white text-right focus:outline-none focus:border-white focus:border-2 focus:shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </div>
                    ))}
                </div>
                <div className="w-[100%] h-[140%] mx-auto flex flex-col justify-between">
                    <button className="h-[10%] w-full bg-primary text-white px-4 py-2 rounded-md cursor-pointer text-[130%] font-bold transition-colors duration-200 mt-applyButtonTopMargin hover:bg-buttonHover flex items-center justify-center text-center">Apply</button>
                </div>
            </Dialog.Content>
    );
};

export default parkingOptionModal;  // ✅ 컴포넌트 이름 수정
