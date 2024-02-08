'use client';

import React from 'react';
export default function Hero() {
  return (
    <div className="hero-section relative w-full min-h-screen">
      
      <video
        className="absolute h-full w-full object-cover"
        autoPlay
        muted
        loop
        src="/video/city-light.mp4"
      ></video>
      <div className="absolute inset-0 bg-black/10 z-[1] flex flex-col items-center justify-center text-white p-5">
        <h1 className="font-medium translate-y-16 text-5xl">Security & Access System Solution</h1>
      </div>
    </div>
  );
}
