'use client';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  let iconMenu;
  if (pathname === '/') {
    iconMenu = Icons.menu;
  } else {
    iconMenu = Icons.menu;
  }
  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <span className="hover:bg-transparent cursor-pointer">
            {iconMenu}
          </span>
        </SheetTrigger>
        <SheetContent>
          <div>
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="text-sm hover:text-primary"
              href="/"
            >
              Home
            </Link>
            <Separator className="mt-4" />
          </div>
          <div className="mt-4">
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="text-sm hover:text-primary"
              href="/about"
            >
              About
            </Link>
            <Separator className="mt-4" />
          </div>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Product & Service</AccordionTrigger>
              <AccordionContent>
                Business Consultant
              </AccordionContent>
              <AccordionContent>Parking Solution</AccordionContent>
              <AccordionContent>Security System Solution</AccordionContent>
              <AccordionContent>Machinery & Equipment</AccordionContent>
            </AccordionItem>

            <div className="mt-4">
              <Link
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="text-sm hover:text-primary"
                href="/contact"
              >
                Contact
              </Link>
              <Separator className="mt-4" />
            </div>
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  );
}
