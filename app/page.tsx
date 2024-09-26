import Image from "next/image";

import logo from '@/app/assets/images/nemonemo-cat.png';
import * as styles from '@/app/page.css';
import data from '@/data/index.json';
import {Data} from '@/types';

const generateRowHints = (data: Data[][]) => {
  return data.map(row => {
    const hints = [];
    let count = 0;

    for (const cell of row) {
      if (cell.filled) {
        count++;
      } else {
        if (count > 0) {
          hints.push(count);
          count = 0;
        }
      }
    }
    if (count > 0) hints.push(count); // 마지막 연속된 색칠된 칸 추가
    return hints;
  });
};

const generateColHints = (data: Data[][]) => {
  const colHints = [];
  const numCols = data[0].length;

  for (let col = 0; col < numCols; col++) {
    const hints = [];
    let count = 0;

    for (let row = 0; row < data.length; row++) {
      if (data[row][col].filled) {
        count++;
      } else {
        if (count > 0) {
          hints.push(count);
          count = 0;
        }
      }
    }
    if (count > 0) hints.push(count); // 마지막 연속된 색칠된 칸 추가
    colHints.push(hints);
  }

  return colHints;
};

export default function Home() {
  const rowHints = generateRowHints(data);
  const colHints = generateColHints(data);

  return (
    <div>
      <h1 className={styles.title}>
        <Image src={logo} width={40} height={40}/>
        NEMO NEMO CAT NONOGRAM
        <Image src={logo} width={40} height={40}/>
      </h1>

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
          <div className={styles.cells}>
            {data.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                {row.map((col, colIndex) => (
                  <div key={colIndex} className={styles.col}/>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
