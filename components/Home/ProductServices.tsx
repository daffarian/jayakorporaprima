'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
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
      <div className="container px-4">
        <h2 className="my-10">Product & Services</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem maiores aliquam eveniet saepe, similique fugiat ut eaque dolore distinctio porro beatae aliquid vero reprehenderit aperiam suscipit pariatur? Aliquam, consectetur amet.</p>
      </div>
      {/* Carousel */}
      <div className="flex justify-center mt-5">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
              loop: true
            })
          ]}
        >
          <CarouselContent className="px-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:inline-flex" />
          <CarouselNext className="hidden lg:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
