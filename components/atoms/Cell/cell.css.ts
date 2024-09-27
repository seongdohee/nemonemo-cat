import { style } from '@vanilla-extract/css';
import { flexCenter } from '@/styles/utility.css';

export const cell = style([flexCenter, {
  width: 38,
  height: 38,
  cursor: 'pointer',
  borderLeft: '1px dashed #ccc',
  ':first-child': {
    border: 'none'
  }
}]);