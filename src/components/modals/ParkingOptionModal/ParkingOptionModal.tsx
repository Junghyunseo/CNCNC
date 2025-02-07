import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import styles from './parkingOptionModal.module.css';
import { useParkingOptionsStore } from '../../../store/parkingOptionStore';

const parkingOptionModal: React.FC = () => {
    const { x, y, z, setX, setY, setZ } = useParkingOptionsStore();
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60" />
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-[#1F2937] p-6 rounded-lg border border-white max-w-[500px] w-[90%] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                <Dialog.Close asChild>
                    <button
                        className="absolute top-[10px] right-[10px] bg-transparent border-none text-[15px] cursor-pointer text-[#9CA3AF] trainsition colors duration-200"
                        onClick={()=>{
                            setX(0);
                            setY(0);
                            setZ(0);
                        }}>
                        ✖
                    </button>
                </Dialog.Close>
                <Dialog.Title className="text-3xl text-primary font-bold mb-3">Parking Options</Dialog.Title>
                <Dialog.Description className="text-sm text-[#9CA3AF]">
                    Set the parking coordinates for your CNC machine.
                </Dialog.Description>

                <div className="text-[#60A5FA] text-sm flex flex-col gap-[15px] mt-[25px]">
                    <div className="flex flex-row items-center gap-[10px]">
                        <div className="w-[30px] font-bold text-right">X</div>
                        <input
                            type="number"
                            value={x}
                            onChange={(e) => setX(Number(e.target.value))}
                            className="w-full p-[6px] border border-[#60A5FA] rounded text-[14px] bg-gray-800 text-white text-right focus:outline-none focus:border-white focus:border-2 focus:shadow-md focus:shadow-[#60A5FA]/50"
                        />
                    </div>
                                    
                    <div className="flex flex-row items-center gap-[10px]">
                        <div className="w-[30px] font-bold text-right">Y</div>
                        <input
                            type="number"
                            value={y}
                            onChange={(e) => setY(Number(e.target.value))}
                            className="w-full p-[6px] border border-[#60A5FA] rounded text-[14px] bg-gray-800 text-white text-right focus:outline-none focus:border-white focus:border-2 focus:shadow-md focus:shadow-[#60A5FA]/50"
                        />
                    </div>
                                    
                    <div className="flex flex-row items-center gap-[10px]">
                        <div className="w-[30px] font-bold text-right">Z</div>
                        <input
                            type="number"
                            value={z}
                            onChange={(e) => setZ(Number(e.target.value))}
                            className="w-full p-[6px] border border-[#60A5FA] rounded text-[14px] bg-gray-800 text-white text-right focus:outline-none focus:border-white focus:border-2 focus:shadow-md focus:shadow-[#60A5FA]/50"
                        />
                    </div>
                </div>
                <div>
                    <button className="w-full bg-[#60A5FA] text-white px-4 py-2 border-none rounded-md cursor-pointer text-xs font-bold transition-colors duration-200 mt-7 hover:bg-[#3A7BD5]">Apply</button>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default parkingOptionModal;  // ✅ 컴포넌트 이름 수정
