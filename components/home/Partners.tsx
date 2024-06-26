'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';
export function PartnerParkingEquipment() {
  return (
    <section className="py-10 px-4 w-full overflow-hidden">
      {/* <h2 className="py-10 bg-gradient-to-r from-logo to-red-500 via-indigo-500 rounded-[2rem] px-4 text-transparent bg-clip-text">
        {' '}
        Collaborating with strategic partners to expand market reach and
        increase competitiveness
      </h2> */}
      {/* <div className="pt-10 place-items-center grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5"> */}
      <Swiper
        modules={[Autoplay, FreeMode, Pagination]}
        loop={true}
        spaceBetween={50}
        centeredSlides={false}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true, waitForTransition:true}}
        freeMode={{momentum:true, momentumBounce:false}}
        className=''
      >
        <SwiperSlide className='flex items-center'>
          <Image
            src={'/images/partners/magnetic.jpg'}
            width={300}
            height={100}
            alt="Magnetic"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/partners/faac-technologies.jpg'}
            width={300}
            height={100}
            alt="Faac Technologies"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/partners/parking-hub-technology.jpg'}
            width={300}
            height={100}
            alt="Parking Hub Technology"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/partners/life.jpg'}
            width={300}
            height={100}
            alt="Life"
          />
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
    </section>
  );
}

export function PartnerSecurity() {
  return (
    <section className="py-10 px-4 w-full overflow-hidden">
      {/* <h2 className="py-10 bg-gradient-to-r from-logo to-red-500 via-indigo-500 rounded-[2rem] px-4 text-transparent bg-clip-text">
        {' '}
        Collaborating with strategic partners to expand market reach and
        increase competitiveness
      </h2> */}
      {/* <div className="pt-10 place-items-center grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5"> */}
      <Swiper
        modules={[Autoplay, FreeMode, Pagination]}
        loop={true}
        spaceBetween={50}
        centeredSlides={false}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          waitForTransition: true
        }}
        freeMode={{ momentum: true, momentumBounce: false }}
        className=""
      >
        <SwiperSlide>
          <Image
            src={'/images/partners/shanan.jpg'}
            width={300}
            height={100}
            alt="Shanan"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/partners/cometa.png'}
            width={300}
            height={100}
            alt="Cometa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/partners/tgw.jpg'}
            width={150}
            height={100}
            alt="Tgw"
          />
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
    </section>
  );
}