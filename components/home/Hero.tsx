'use client'
import Button from './Button';
import {useState} from 'react';

export default function Hero() {
  const viewport = window
  const [viewPort, setViewPort] = useState();

  return (
    <section className="hero-section relative w-full h-svh">
      <video
        className="absolute h-full w-full"
        autoPlay
        muted={false}
        loop
        src="/video/hero.mp4"
      ></video>
      <div className="absolute inset-0 z-[1] flex flex-col lg:items-center  items-start justify-end gap-4 pb-8">
        <div className="flex flex-col  lg:max-w-2xl lg:justify-center lg:mb-20 gap-6 container mx-auto">
          {/* <h1 className="lg:text-7xl text-5xl text-white">
            Access Control System
          </h1> */}
          <div>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
