import { style, keyframes } from '@vanilla-extract/css';

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
  borderTop: '1px dashed #ccc',
  ':last-child': {
    borderBottom: '1px dashed #ccc',
  }
});

export const row = style({
  display: 'flex',
  borderBottom: '1px dashed #ccc',
  ':last-child': {
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
});

export const hover = style({
  background: '#ffdafd4d'
});

const fadeIn = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
})

export const completion = style({
  animation: fadeIn,
  animationDuration: '3s'
});

export const finishText = style({
  fontSize: 60,
  textAlign: 'center',
  marginTop: 40
});

const heartbeat = keyframes({
  from: {
    transform: 'scale(1)',
    transformOrigin: 'center center',
    animationTimingFunction: 'ease-in'
  },
  '10%': {
    transform: 'scale(0.91)',
    animationTimingFunction: 'ease-in'
  },
  '17%': {
    transform: 'scale(0.98)',
    animationTimingFunction: 'ease-out'
  },
  '33%': {
    transform: 'scale(0.87)',
    animationTimingFunction: 'ease-in'
  },
  '45%': {
    transform: 'scale(1)',
    animationTimingFunction: 'ease-out'
  }
});

export const restartButton = style({
  marginTop: 20,
  fontSize: 60,
  textAlign: 'center',
  animation: `${heartbeat} 1.5s ease-in-out infinite both`,
  fontFamily: '"Jersey 10", sans-serif',
  border: 'none',
  padding: '2px 20px',
  color: '#fff',
  background: '#c71773',
  borderRadius: 999,
  boxShadow: '#840045 4px 6px 0px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
  cursor: 'pointer'
})
