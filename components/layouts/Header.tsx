'use client';
import { useEffect, useState } from 'react';
import DesktopNav from './Navbar/DesktopNav';
import MobileNav from './Navbar/MobileNav';
import Authors from '../Authors';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [style, setStyle] = useState('');
  const pathname = usePathname();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    if (clientWindowHeight > 300) {
      setStyle('bg-white shadow-xl fixed animate-slide-down text-neutral-800');
    } else {
      setStyle(`bg-transparent shadow-none absolute top-0 left-0 text-white`);
    }
  }, [clientWindowHeight]);

  return (
    <header
      className={`w-full top-0 z-[10] ${style} transition-all`}
    >
      <div className="container py-4 lg:py-4 w-full flex flex-row justify-between items-center">
        <Authors />
        <nav>
          <DesktopNav />
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
