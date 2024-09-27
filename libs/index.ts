import { Data } from '@/types';

export const generateRowHints = (data: Data[][]) => {
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

export const generateColHints = (data: Data[][]) => {
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