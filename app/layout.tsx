import type { Metadata } from 'next';
import {quicksand } from '../components/fonts';
import './globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export const metadata: Metadata = {
  title: 'Jaya Korpora Prima',
  description: 'Access Control System'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-zinc-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
