import * as React from 'react';
import Image from 'next/image';
import GoTo from '../GoTo';

export default function ProductServices() {
  return (
    <section>
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            'url("/background/home-product-service-background.svg")'
        }}
      >
        <div className="bg-gradient-to-t lg:container gap-4 from-white via-white py-10 flex flex-col md:flex-row">
          <div className="container min-w-[20rem]">
            <h2 className="my-10">Products & Services</h2>
            <p className="max-w-md">
              We provide reliable security and access control system solutions
              for your business needs. With an innovative approach and the
              latest technology, we present integrated solutions for protect
              your assets and ensure maximum security.
            </p>
            <GoTo link="product-&-service">More</GoTo>
          </div>
        </div>
      </div>
      {/* Products And Services */}
      <div className="">
        <div className="flex flex-col">
          <h3 className="border-l-2 border-primary mx-auto inline-flex text-center px-4">Business Consultant</h3>
          <Image
            src={'/images/decoration/handshake.png'}
            width={500}
            height={100}
            alt="Business Consultant"
          />
          <p className='px-4 text-center'>
            Consult on your business and project problems and find comprehensive
            solutions with us
          </p>
        </div>
      </div>
    </section>
  );
}
