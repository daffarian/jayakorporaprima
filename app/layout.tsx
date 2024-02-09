import type { Metadata } from 'next';
import { montserrat } from '../components/fonts';
import './globals.css';
import Header from '@/components/layouts/Header';

export const metadata: Metadata = {
  title: 'Jayakorporaprima',
  description: 'Securiry & Access System Solution'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
