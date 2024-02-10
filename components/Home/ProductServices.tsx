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
import Image from 'next/image';
import GoTo from '../GoTo';

export default function ProductServices() {
  return (
    <section
      className="bg-cover "
      style={{
        backgroundImage:
          'url("/background/home-product-service-background.svg")'
      }}
    >
      <div className="bg-gradient-to-t from-white via-white py-10">
        <div className="container px-4">
          <h2 className="my-10">Produk & Layanan</h2>
          <p className="max-w-md">
            Kami menyediakan solusi sistem keamanan dan kontrol akses yang andal
            untuk kebutuhan bisnis Anda. Dengan pendekatan inovatif dan
            teknologi terkini, kami menghadirkan solusi terintegrasi untuk
            melindungi aset Anda dan memastikan keamanan maksimal.
          </p>
        <GoTo link='product-&-service'>Selengkapnya</GoTo>
        </div>
        {/* Carousel */}
        <div className="flex justify-center mt-5">
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
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={
                            'https://source.unsplash.com/collection/1163637/480x480'
                          }
                          alt="tes"
                          width={480}
                          height={480}
                        />
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
      </div>
    </section>
  );
}
