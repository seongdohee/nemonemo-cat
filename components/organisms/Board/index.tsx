"use client"

import { generateColHints, generateRowHints } from '@/libs';
import * as styles from '@/components/organisms/Board/Board.css';
import useNonogramStore, {NonogramStoreState} from '@/stores';
import { useShallow } from 'zustand/shallow'
import Cell from '@/components/atoms/Cell';
import {useEffect, useState} from 'react';
import clsx from 'clsx';

// TODO
// board 컴포넌트 쪼개기
const Board = () => {
  const { data, toggleOpen, reset } = useNonogramStore<NonogramStoreState>(useShallow(state => state));
  const rowHints = generateRowHints(data);
  const colHints = generateColHints(data);
  const [position, setPosition] = useState<[number, number]>();
  const [finish, setFinish] = useState<boolean>(false);

  const handleCellMouseDown = (row: number, col: number) => () => {
    if (finish) {
      return;
    }
    toggleOpen(row, col);
  }

  const handleCellMouseOver = (row: number, col: number) => () => {
    setPosition([row, col]);
  }

  const handleCellMouseOut = () => {
    setPosition(undefined);
  }

  const handleClickRestartButton = () => {
    setFinish(false);
    reset();
  }

  useEffect(() => {
    const finish = data.every((row) => {
      return row.every((col) => {
        return col.filled === col.opened;
      });
    });

    if (finish) {
      setFinish(true);
    }
  }, [data]);

  return (
    <>
      <div className={styles.board}>
        <div className={styles.rowHint}>
          {colHints.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.rowHintRow}>
              {row.map((col, colIndex) => (
                <div key={colIndex} className={styles.hintCol}>
                  {col}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            {rowHints.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.colHint}>
                {row.map((col, colIndex) => (
                  <div key={colIndex} className={styles.hintCol}>
                    {col}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.cells} onMouseOut={handleCellMouseOut}>
            {data.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={clsx({
                  [styles.row]: true,
                  [styles.hover]: position?.[0] === rowIndex && !finish
                })}
              >
                {row.map((col, colIndex) => (
                  <Cell
                    key={colIndex}
                    onClick={handleCellMouseDown(rowIndex, colIndex)}
                    onMouseEnter={handleCellMouseOver(rowIndex, colIndex)}
                    className={clsx({
                      [styles.hover]: position?.[1] === colIndex && !finish,
                      [styles.completion]: finish
                    })}
                    color={finish ? col.color : col.opened ? '#000' : undefined}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {finish && (
        <>
          <div className={styles.finishText}>
            Congratulations!
          </div>
          <button className={styles.restartButton} onClick={handleClickRestartButton}>
            restart
          </button>
        </>
      )}
    </>
  )
}

export default Board;