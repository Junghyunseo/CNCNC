import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

interface HomeOptionsProps {
  icon: React.ReactNode;
  title: string;
  ModalComponent: React.FC;
}

const HomeOptions: React.FC<HomeOptionsProps> = ({
  icon,
  title,
  ModalComponent,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="p-[15px] text-[12px] h-[10vh] w-[15vh] rounded-lg bg-[#1E293B] text-white border border-[#374151] hover:bg-[#2A3649] cursor-pointer focus:outline-none ">
          <div className="flex flex-col items-center gap-[10px]">
            <div className="text-[24px]">{icon}</div>
            <div className="text-[13px]">{title}</div>
          </div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <ModalComponent />
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default HomeOptions;
