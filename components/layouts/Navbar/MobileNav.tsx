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
    <div className="lg:hidden ">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <span className="hover:bg-transparent cursor-pointer">
            {iconMenu}
          </span>
        </SheetTrigger>
        <SheetContent
          side={'top'}
          className="flex flex-col justify-center text-center text-lg font-medium"
        >
          <Authors />

          <hr />
          <div>
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="hover:text-logo"
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
              className="hover:text-logo"
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
              className="hover:text-logo"
              href="/vision-&-mission"
            >
              Vison & Mission
            </Link>
          </div>

          {/* Products */}
          <hr />
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">Products</AccordionTrigger>
              <AccordionContent>
                <div className="">
                  <Link
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className="hover:text-logo text-base"
                    href="/products/parking-equipment"
                  >
                    Parking Equipment
                  </Link>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="">
                  <Link
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className="hover:text-logo text-base"
                    href="/products/integrated-security"
                  >
                    Integrated Security System
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Services */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">Services</AccordionTrigger>
              <AccordionContent>
                <div className="">
                  <Link
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className="hover:text-logo text-base"
                    href="/services/profit-sharing"
                  >
                    Profit Sharing
                  </Link>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="">
                  <Link
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className="hover:text-logo text-base"
                    href="/services/technical-assistance"
                  >
                    Technical Assistance
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="">
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="hover:text-logo"
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
