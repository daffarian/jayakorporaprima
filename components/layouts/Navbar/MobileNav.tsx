'use client';
import Authors from '../../Authors';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
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
  return (
    <div className="lg:hidden flex justify-between items-center">
      <Authors />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Icons.menu />
          </Button>
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
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Product & Service</AccordionTrigger>
              <AccordionContent>Bisnis Konsultan</AccordionContent>
              <AccordionContent>Parking Solution</AccordionContent>
              <AccordionContent>Security System Solution</AccordionContent>
              <AccordionContent>Machinery & Equipment</AccordionContent>
              <AccordionContent>Tour & Travel</AccordionContent>
              <AccordionContent>Laundry</AccordionContent>
              <AccordionContent>Product & Service</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>About us</AccordionTrigger>
              <AccordionContent>Sejarah</AccordionContent>
              <AccordionContent>Visi & Misi</AccordionContent>
              <AccordionContent>Boc & BoD</AccordionContent>
              <AccordionContent>Company Profile</AccordionContent>
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
