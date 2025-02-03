import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import './Modal.css'
import { useState } from 'react';

const CoordinateSystemModal: React.FC = () => {
    // 6x3 (G54~G59) x (X, Y, Z) 입력값을 저장하는 상태
    const [coordinates, setCoordinates] = useState(
        Array.from({ length: 6 }, () => Array(3).fill('')) // 6행 x 3열 초기화
    );

    // 입력값 변경 핸들러
    const handleChange = (row: number, col: number, value: string) => {
        setCoordinates((prevCoordinates) => {
            const newCoordinates = prevCoordinates.map((rowArray) => [...rowArray]);
            newCoordinates[row][col] = value;
            return newCoordinates;
        });
    };

    
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <Dialog.Close asChild>
                    <button className="CloseButton">✖</button>
                </Dialog.Close>
                <Dialog.Title className="DialogTitle">Coordinate System</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Adjust the coordinate system settings for your CNC machine.
                </Dialog.Description>

                {/* 6x3 테이블 */}
                <div className="GridContainer">
                    {/* 테이블 헤더 */}
                    <div className="GridHeader">
                        <span>G</span> {/* G54~G59 라벨 포함 */}
                        <span>X</span>
                        <span>Y</span>
                        <span>Z</span>
                    </div>

                    {/* G54 ~ G59 입력 행 */}
                    {['G54', 'G55', 'G56', 'G57', 'G58', 'G59'].map((label, rowIndex) => (
                        <div className="GridRow" key={rowIndex}>
                            <span className="RowLabel">{label}</span>
                            {['X', 'Y', 'Z'].map((_, colIndex) => (
                                <input
                                    key={`${rowIndex}-${colIndex}`}
                                    type="text"
                                    value={coordinates[rowIndex][colIndex]}
                                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                                    className="GridInput"
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div>
                    <button className="ApplyButton">Apply</button>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default CoordinateSystemModal;
