import { create } from 'zustand';
import defaultData from '@/data/index.json';
import { Data } from '@/types';

export interface NonogramStoreState {
  data: Data[][];
  toggleOpen: (row: number, col: number) => void;
  reset: () => void;
}

// TODO
// 1. json은 api로 옮기자
// 2. 기능이 작으니 스토어 자체를 다른 라이브러리를 써보자
const useNonogramStore = create<NonogramStoreState>((set, get) => ({
  data: JSON.parse(JSON.stringify(defaultData)),
  toggleOpen (row, col) {
    const newData = JSON.parse(JSON.stringify(get().data));
    const opened = newData[row][col].opened;
    newData[row][col].opened = !opened;
    set({ data: newData });
  },
  reset () {
    set({ data: JSON.parse(JSON.stringify(defaultData)) });
  }
}));

export default useNonogramStore;