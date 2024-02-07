import Authors from './Authors';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export default function MobileNav() {
  return (
    <div className="lg:hidden flex justify-between items-center">
      <Authors></Authors>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Icons.menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <Accordion type="multiple" className="w-full mt-5">
            <AccordionItem value="item-1">
              <AccordionTrigger>About us</AccordionTrigger>
              <AccordionContent>
                Sejarah
              </AccordionContent>
              <AccordionContent>
                Visi & Misi
              </AccordionContent>
              <AccordionContent>
                Boc & BoD
              </AccordionContent>
              <AccordionContent>
                Company Profile
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Bussinnes</AccordionTrigger>
              <AccordionContent>
                Bisnis Konsultan
              </AccordionContent>
              <AccordionContent>
                Parking Solution
              </AccordionContent>
              <AccordionContent>
                Security System Solution
              </AccordionContent>
              <AccordionContent>
                Machinery & Equipment
              </AccordionContent>
              <AccordionContent>
                Tour & Travel
              </AccordionContent>
              <AccordionContent>
                Laundry
              </AccordionContent>
              <AccordionContent>
                Product & Service
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Contact Us</AccordionTrigger>
              <AccordionContent>
                Office Addres
              </AccordionContent>
              <AccordionContent>
                Wa Bisnis
              </AccordionContent>
              <AccordionContent>
                Email
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  );
}
