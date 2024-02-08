import DesktopNav from './Navbar/DesktopNav';
import MobileNav from './Navbar/MobileNav';

export default function Header() {
  return (
    <header className='py-2 px-4 fixed z-10 w-full'>
      <nav>
        <DesktopNav/>
        <MobileNav />
      </nav>
    </header>
  );
}
