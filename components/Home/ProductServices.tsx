'use client'
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

export default function ProductServices() {
  return (
    <section>
      <div className="container px-4 lg:px-0">
        <h2 className='my-10'>Product & Services</h2>
        {/* Carousel */}
        <div className='flex justify-center'>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className='bg-primary'>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl text-white font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
