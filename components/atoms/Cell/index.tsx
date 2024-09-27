import {HTMLAttributes, PropsWithChildren} from 'react';

import * as styles from './cell.css';
import clsx from 'clsx';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>{
  color?: string | undefined;
}

const Cell = ({ color, children, className, style, ...rest }: PropsWithChildren<Props>) => {
  return (
    <div
      className={clsx(styles.cell, className)}
      style={{ background: color, ...style }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Cell;