import { style } from '@vanilla-extract/css';

export const title = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  fontSize: 40,
  padding: '40px 0'
});

export const board = style({
  width: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  margin: 'auto'
})

export const cells = style({
  width: 'max-content',
  border: '1px solid #ccc',
});

export const row = style({
  display: 'flex',
  borderBottom: '1px dashed #ccc',
  ':last-child': {
    border: 'none'
  }
});

export const col = style({
  display: 'flex',
  width: 38,
  height: 38,
  cursor: 'pointer',
  borderLeft: '1px dashed #ccc',
  ':first-child': {
    border: 'none'
  }
});

export const rowHint = style({
  display: 'flex',
  width: 'max-content',
  justifyContent: 'revert',
  borderLeft: '1px dashed #ccc',
});

export const rowHintRow = style({
  display: 'flex',
  alignContent: 'baseline',
  flexWrap: 'wrap-reverse',
  width: 38,
  borderRight: '1px dashed #ccc',
});

export const hintCol = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38
});

export const colHint = style({
  display: 'flex',
  justifyContent: 'flex-end',
  borderTop: '1px dashed #ccc',
  ':last-child': {
    borderBottom: '1px dashed #ccc',
  }
})
