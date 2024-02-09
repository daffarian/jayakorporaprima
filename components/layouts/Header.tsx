import DesktopNav from './Navbar/DesktopNav';
import MobileNav from './Navbar/MobileNav';
import Authors from '../Authors';

export default function Header() {
  return (
    <header className="w-full absolute top-0 z-[2]">
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
