import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
export default function Navbar() {
  return (
    <header className='py-2 px-4'>
      <nav>
        <DesktopNav/>
        <MobileNav />
      </nav>
    </header>
  );
}
