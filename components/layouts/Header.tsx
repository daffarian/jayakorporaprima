import DesktopNav from './Navbar/DesktopNav';
import MobileNav from './Navbar/MobileNav';

export default function Header() {
  return (
    <header className='py-2 px-4'>
      <nav>
        <DesktopNav/>
        <MobileNav />
      </nav>
    </header>
  );
}
