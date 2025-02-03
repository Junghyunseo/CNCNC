import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import './HomeOptions.css'; 

interface HomeOptionsProps {
  icon: React.ReactNode;
  title: string;
  ModalComponent: React.FC;
}

const HomeOptions: React.FC<HomeOptionsProps> = ({ icon, title, ModalComponent }) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="Button">
                    <div className="ButtonContent">
                        <div className="Icon">{icon}</div>
                        <div className="Title">{title}</div>
                    </div>
                </button>
            </Dialog.Trigger>

            <ModalComponent />
    
        </Dialog.Root>
    );
};

export default HomeOptions;