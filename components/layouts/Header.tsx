'use client'
import DesktopNav from './Navbar/DesktopNav';
import MobileNav from './Navbar/MobileNav';
import Authors from '../Authors';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={clsx('w-full static top-0 z-[2]', {'absolute' : pathname === '/'})}>
      <div className="container py-2 px-4 sm:px-0 lg:py-4 w-full flex flex-row justify-between items-center">
        <Authors />
        <nav>
          <DesktopNav />
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
