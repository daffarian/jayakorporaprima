import Authors from './Authors';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function MobileNav() {
  return (
    <div className='flex justify-between items-center'>
      <Authors></Authors>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost"><Icons.menu/></Button>
        </SheetTrigger>
        <SheetContent>
          <div className='bg-white'>hai</div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
