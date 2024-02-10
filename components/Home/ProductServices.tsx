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
import GoTo from '../GoTo';
import { productAndService } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export default function ProductServices() {
  return (
    <section
      className="bg-cover "
      style={{
        backgroundImage:
          'url("/background/home-product-service-background.svg")'
      }}
    >
      <div className="bg-gradient-to-t lg:container gap-4 from-white via-white py-10 flex flex-col lg:flex-row">
        <div className="container px-4">
          <h2 className="my-10">Produk & Layanan</h2>
          <p className="max-w-md">
            Kami menyediakan solusi sistem keamanan dan kontrol akses yang andal
            untuk kebutuhan bisnis Anda. Dengan pendekatan inovatif dan
            teknologi terkini, kami menghadirkan solusi terintegrasi untuk
            melindungi aset Anda dan memastikan keamanan maksimal.
          </p>
          <GoTo link="product-&-service">Selengkapnya</GoTo>
        </div>
        {/* Carousel */}
        <div className="flex justify-center mt-5 lg:mt-0 lg:px-4 lg:py-10 max-w-[48rem]">
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 4000,
                loop: true
              })
            ]}
          >
            <CarouselContent className="px-4">
              {productAndService.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="sm:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div className="p-1">
                    <div className={`bg-${item.color}-400 rounded-lg`}>
                      <div className="flex flex-col items-center justify-center p-6">
                        <h3 className='text-zinc-800 text-center text-xl font-bold'>{item.title}</h3>
                        <Separator className='my-3 bg-zinc-600'/>
                        <p className='text-zinc-800'>{item.description}</p>
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
