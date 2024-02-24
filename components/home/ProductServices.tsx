import * as React from 'react';
import Image from 'next/image';
import { Icons } from '../Icons';
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
            {/* <GoTo link="product-&-service">More</GoTo> */}
          </div>
        </div>
      </div>
      {/* Products And Services */}
      <div className="mt-20">
        {/* Business Consultant */}
        <div className="flex flex-col">
          <h3 className="border-l-2 border-primary mx-auto inline-flex text-center px-4">
            Business Consultant
          </h3>
          <div className="grid grid-cols-2 mt-10">
            <Image
              src={'/images/decoration/handshake.png'}
              width={200}
              height={100}
              alt="Business Consultant"
            />
            <p className="text-center bg-secondary text-neutral-200 rounded-l-md p-4">
              Consult on your business and project problems and find
              comprehensive solutions with us
            </p>
          </div>
        </div>
        {/* Parking Solution */}
        <div className="flex flex-col mt-20">
          <h3 className="border-l-2 border-primary mx-auto inline-flex text-center px-4">
            Parking Solution
          </h3>
          <p className="text-center px-4 mt-10">
            Latest tools and technology for effective, efficient and safe
            parking management.
          </p>
          {/* Sub Parking */}
          <div className="px-4 mt-5">
            <div className="p-5 rounded-xl shadow-xl">
              <Icons.service className='w-20'/>
              <h4 className="text-primary mt-5">Parking Management Service</h4>
              <p className='mt-5'>
                Apart from providing parking solutions, we have an integrated
                parking system network and manage parking in various locations
              </p>
            </div>
            <div className="p-5 rounded-xl shadow-xl mt-10">
              <Icons.tech className='w-20'/>
              <h4 className="text-primary mt-5">
                The Best Parking Equipment & Supplies
              </h4>
              <p className='mt-5'>
                Supported by the best equipment made in Europe & Asia, this
                makes us a company that is ready to provide various kinds of
                parking equipment & equipment needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
