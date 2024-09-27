import Image from "next/image";

import logo from '@/app/assets/images/nemonemo-cat.png';
import Board from '@/components/organisms/Board';
import * as styles from '@/app/page.css';

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        <Image src={logo} width={40} height={40} alt="로고"/>
        NEMO NEMO CAT NONOGRAM
        <Image src={logo} width={40} height={40} alt="로고"/>
      </h1>
      <div  className={styles.content}>
        <Board/>
      </div>
    </>
  );
}
