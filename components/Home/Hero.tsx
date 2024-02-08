'use client';
import Button from './Button';
import React from 'react';
export default function Hero() {
  return (
    <div className="hero-section relative w-full h-screen min-h-">
      <video
        className="absolute h-full w-full object-cover"
        autoPlay
        muted
        loop
        src="/video/city-light.mp4"
      ></video>
      <div className="absolute inset-0 bg-black/30 z-[1] flex flex-col lg:items-center  items-start justify-end gap-4 text-white p-5">
        <div className="flex flex-col lg:max-w-2xl lg:justify-center lg:mb-10 gap-4 container mx-auto">
          <h1 className="font-medium lg:text-6xl text-5xl ">
            Security & Access System Solution
          </h1>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
