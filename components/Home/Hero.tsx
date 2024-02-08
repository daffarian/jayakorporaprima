'use client';

import React from 'react';
// import ReactPlayer from 'react-player';
export default function Hero() {
  return (
    <div className="hero-section relative w-full min-h-screen">
      {/* <ReactPlayer // atau Video
        url="/video/city-light.mp4" // Set to true for autoplay
        muted // Set to true for muted
        loop // Set to true for looping
        className="absolute inset-0 w-full h-full object-cover"
      >
      </ReactPlayer> */}
      <video
        className="absolute h-full w-full object-cover"
        autoPlay
        muted
        loop
        src="/video/city-light.mp4"
      ></video>
      <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-white p-5">
        <h1 className="font-bold text-4xl">Security & Access System Solution</h1>
      </div>
    </div>
  );
}
