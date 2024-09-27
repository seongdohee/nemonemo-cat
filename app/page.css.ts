import { style } from '@vanilla-extract/css';

export const title = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  fontSize: 40,
  padding: '40px 0'
});

export const content = style({
  minWidth: 'max-content',
  textAlign: 'center'
});