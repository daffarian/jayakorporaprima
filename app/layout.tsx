import {quicksand } from '../components/fonts';
import './globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title:
    'PT. Jaya Korpora Prima (JKP) - Solusi Terdepan untuk Manajemen Parkir & Keamanan Properti',
  description:
    'PT. Jaya Korpora Prima (JKP) merupakan pilihan utama Anda dalam layanan manajemen parkir, teknologi parkir, kontrol akses, dan sistem keamanan terintegrasi. Sebagai distributor eksklusif peralatan parkir dan sistem keamanan terkemuka dunia, kami mendukung properti Anda dengan kemampuan dan keahlian yang luas.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-[#ffffff]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
