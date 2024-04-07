'use client';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Authors from '@/components/Authors';

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
        <SheetContent
          side={'top'}
          className="flex flex-col justify-center text-center"
        >
          <Authors />
          <hr />
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
          </div>
          <hr />
          <div className="">
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="text-sm hover:text-primary"
              href="/about"
            >
              About
            </Link>
          </div>
          <hr />
          <div className="">
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="text-sm hover:text-primary"
              href="/products&services"
            >
              Products & Services
            </Link>
          </div>
          <hr />
          <div className="">
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="text-sm hover:text-primary"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
