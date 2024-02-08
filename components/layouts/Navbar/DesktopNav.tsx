'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
const components: { title: string; href: string }[] = [
  {
    title: 'Bisnis Konsultan',
    href: '/docs/primitives/alert-dialog'
  },
  {
    title: 'Parking Solution',
    href: '/docs/primitives/hover-card'
  },
  {
    title: 'Security System Solution',
    href: '/docs/primitives/progress'
  },
  {
    title: 'Machinery & Equipment',
    href: '/docs/primitives/scroll-area'
  },
  {
    title: 'Tour & Travel',
    href: '/docs/primitives/tabs'
  },
  {
    title: 'Laundry',
    href: '/docs/primitives/tooltip'
  },
];
export default function DesktopNav() {
  return (
    <div className="hidden lg:flex lg:justify-between mx-auto text-slate-600">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className=" text-white">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()}`}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-white">
              Product & Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 p-2 md:w-[300px] md:grid-cols-2 lg:w-[300px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    className="hover:text-primary"
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-white`}
              >
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-white`}
              >
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
