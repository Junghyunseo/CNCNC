import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import styles from './ToolOffsetPositionTableModal.module.css'; // ✅ CSS Modules 사용
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
            <Dialog.Overlay className={styles.DialogOverlay} />
            <Dialog.Content className={styles.DialogContent}>
                <Dialog.Close asChild>
                    <button className={styles.CloseButton} onClick={resetAll}>✖</button>
                </Dialog.Close>
                <Dialog.Title className={styles.DialogTitle}>Tool Offset & Position Table</Dialog.Title>
                <Dialog.Description className={styles.DialogDescription}>
                    Adjust the tool offset and position settings for your CNC machine.
                </Dialog.Description>

                <div className={styles.GridContainer}>
                    {/* 테이블 헤더 (Offset 2개 + Position 4개) */}
                    <div className={styles.GridHeader}>
                        <span>Tool Index</span>
                        <span>Tool Length</span>
                        <span>Tool Radius</span>
                        <span>X</span>
                        <span>Y</span>
                        <span>Zh</span>
                        <span>Rl</span>
                    </div>

                    {/* 각 행 (6개의 Tool) */}
                    {[...Array(6)].map((_, rowIndex) => (
                        <div className={styles.GridRow} key={rowIndex}>
                            <span className={styles.RowLabel}>{`${rowIndex + 1}`}</span>
                            {/* Offset 2개 */}
                            {[0, 1].map((colIndex) => (
                                <input
                                    key={`offset-${rowIndex}-${colIndex}`}
                                    type="text"
                                    value={offsets[rowIndex][colIndex]}
                                    onChange={(e) => setOffset(rowIndex, colIndex, e.target.value)}
                                    className={styles.GridInput}
                                />
                            ))}

                            {/* Position 4개 */}
                            {[0, 1, 2, 3].map((colIndex) => (
                                <input
                                    key={`position-${rowIndex}-${colIndex}`}
                                    type="text"
                                    value={positions[rowIndex][colIndex]}
                                    onChange={(e) => setPosition(rowIndex, colIndex, e.target.value)}
                                    className={styles.GridInput}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div>
                    <button className={styles.ApplyButton}>Apply</button>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default ToolOffsetPositionTableModal;
