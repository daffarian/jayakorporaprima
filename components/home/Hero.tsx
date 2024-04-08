'use client';
import Button from './Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}
      className="hero-section relative w-full h-svh bg-top bg-cover"
    >
      {/* Video */}
      {/* <video className="absolute h-full w-full" autoPlay muted loop>
        <source src="/video/hero.mp4" type="video/mp4" />
      </video> */}
      {/* <Image
        alt="hero"
        width={1000}
        height={1000}
        src={'/images/hero-background.jpg'}
      ></Image> */}
      <div className="absolute w-full h-full z-[] bg-gradient-to-t from-black/20"></div>
      {/* <div className="absolute bottom-1/4 p-5  -translate-y-10 h-1/4 bg-white z-[1] flex flex-col items-center justify-center gap-4 pb-8 rounded-r-md">
        <p className="text-logo text-5xl font-bold">
          Company <br className="lg:hidden" /> Profile
        </p>
      </div> */}
      <div className="absolute bottom-0 w-full h-1/5 bg-primary z-[1] flex flex-col lg:items-center  items-start justify-end gap-4 pb-8">
        <Image
          src={'/images/decoration/pattern/item-2.svg'}
          alt="pattern 2"
          width={100}
          height={100}
          className="absolute -top-14 right-10"
        />
        <Image
          src={'/images/decoration/pattern/o.svg'}
          alt="pattern 2"
          width={100}
          height={50}
          className="absolute -bottom-10 right-28 animate-[spin_20s_linear_0s_infinite]"
        />
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
