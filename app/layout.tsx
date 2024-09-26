import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEMO NEMO CAT',
  description: 'NEMO NEMO CAT nonogram puzzle'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
