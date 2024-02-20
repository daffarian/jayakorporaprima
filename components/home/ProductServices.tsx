'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import GoTo from '../GoTo';
import { productAndService } from '@/lib/data-object';
import { Separator } from '@/components/ui/separator';

export default function ProductServices() {
  return (
    <section
      className="bg-cover"
      style={{
        backgroundImage:
          'url("/background/home-product-service-background.svg")'
      }}
    >
      <div className="bg-gradient-to-t lg:container gap-4 from-white via-white py-10 flex flex-col md:flex-row">
        <div className="container px-4 min-w-[20rem]">
          <h2 className="my-10">Products & Services</h2>
          <p className="max-w-md">
            We provide reliable security and access control system solutions for
            your business needs. With an innovative approach and the latest
            technology, we present integrated solutions for protect your assets
            and ensure maximum security.
          </p>
          <GoTo link="product-&-service">More</GoTo>
        </div>
        {/* Carousel */}
        <div className="flex justify-center mt-5 lg:mt-0 lg:px-4 lg:py-10 md:max-w-[25rem] lg:max-w-[48rem]">
          <Carousel
            className="w-full flex items-center"
            plugins={[
              Autoplay({
                delay: 4000,
                loop: true
              })
            ]}
          >
            <CarouselContent className="p-4">
              {productAndService.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="lg:basis-1/3 sm:1/2 pl-4"
                >
                  <div
                    className={`p-1 border-primary border-[1px] px-5 rounded-sm shadow-md lg:aspect-square ${item.color}`}
                  >
                    <div className={``}>
                      <div className="flex flex-col items-center justify-center p-2">
                        <h3 className="text-neutral-800 text-center text-lg font-bold">
                          {item.title}
                        </h3>
                        <Separator className="my-3 bg-zinc-600" />
                        <p className="text-neutral-800">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:inline-flex" />
            <CarouselNext className="hidden lg:inline-flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
