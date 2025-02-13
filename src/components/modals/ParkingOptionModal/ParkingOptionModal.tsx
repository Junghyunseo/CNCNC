import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { useParkingOptionsStore } from "../../../store/parkingOptionStore";

const parkingOptionModal: React.FC = () => {
  const { x, y, z, setX, setY, setZ } = useParkingOptionsStore();
  return (
    <Dialog.Content className="fixed top-1/2 left-1/2 bg-backgroundPrimary p-6 rounded-lg border border-white w-[20vw] shadow-xl transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
      <Dialog.Close asChild>
        <button
          className="absolute top-[10px] right-[10px] bg-transparent text-[100%] cursor-pointer text-description trainsition colors duration-200"
          onClick={() => {
            setX(0), setY(0), setZ(0);
          }}
        >
          <svg
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
        Parking Options
      </Dialog.Title>
      <Dialog.Description className="text-sm text-description mb-descriptionBottomMargin">
        Set the parking coordinates for your CNC machine.
      </Dialog.Description>
      <div className="text-primary text-sm flex flex-col gap-[8px] pr-6">
        {[
          { label: "X", value: x, setValue: setX },
          { label: "Y", value: y, setValue: setY },
          { label: "Z", value: z, setValue: setZ },
        ].map(({ label, value, setValue }) => (
          <div
            key={label}
            className="flex flex-row items-center justify-center gap-[10px]"
          >
            <div className="w-[40px] font-bold text-center">{label}</div>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="h-[35px] w-[150px] p-[6px] px-2.5 border border-gray-500 rounded text-[14px] bg-gray-800 text-white text-right focus:outline-none focus:border-white focus:border-1 focus:shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        ))}
      </div>
      <div className="w-[100%] h-full mx-auto flex flex-col justify-between">
        <button className="h-[14%] w-full bg-primary text-white px-4 py-2 rounded-md cursor-pointer text-lg font-bold transition-colors duration-200 mt-applyButtonTopMargin hover:bg-buttonHover flex items-center justify-center text-center">
          Apply
        </button>
      </div>
    </Dialog.Content>
  );
};

export default parkingOptionModal; // ✅ 컴포넌트 이름 수정
