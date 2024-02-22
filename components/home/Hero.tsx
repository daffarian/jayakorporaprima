import Button from './Button';
import React from 'react';
export default function Hero() {
  return (
    <section className="hero-section relative w-full h-svh">
      <video
        className="absolute h-full w-full object-cover"
        autoPlay
        muted
        loop
        src="/video/city-light.mp4"
      ></video>
      <div className="absolute inset-0 bg-black/30 z-[1] flex flex-col lg:items-center  items-start justify-end gap-4 p-5">
        <div className="flex flex-col  lg:max-w-2xl lg:justify-center lg:mb-20 gap-6 container mx-auto">
          <h1 className="lg:text-7xl text-5xl text-white">
            Access Control System
          </h1>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
