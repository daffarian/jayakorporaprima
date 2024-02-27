import * as React from 'react';
import Image from 'next/image';
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
            <h2 className="mt-10">Products & Services</h2>
            <p className="max-w-md mt-5">
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
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 place-items-center lg:px-4">
            <p className="text-center px-4">
              Consult on your business and project problems and find
              comprehensive solutions with us
            </p>
            <Image
              src={'/images/decoration/handshake.jpg'}
              width={500}
              height={100}
              alt="Business Consultant"
              className='mt-10'
            />
          </div>
        </div>
        {/* Parking Solution */}
        <div className="flex flex-col mt-20">
          <h3 className="border-l-2 border-primary mx-auto inline-flex text-center px-4">
            Parking Solution
          </h3>
          <p className="text-center px-4 mt-5">
            Latest tools and technology for effective, efficient and safe
            parking management.
          </p>
          {/* Sub Parking */}
          <div className="px-4 mt-10 grid grid-cols-1 gap-5">
            <div className="p-5 rounded-xl shadow-xl border-[1px] bg-blue-50 border-neutral-200">
              {/* <Icons.service className="w-20" /> */}
              <h4 className="text-primary mt-5">Parking Management Service</h4>
              <p className="mt-5">
                Apart from providing parking solutions, we have an integrated
                parking system network and manage parking in various locations
              </p>
              <Image
                src={'/images/decoration/parking.jpg'}
                width={500}
                height={100}
                alt="Parking Management"
                className="mt-10 rounded-md"
              />
            </div>
            <div className="p-5 rounded-xl shadow-xl mt-10g border-[1px] bg-blue-50 border-neutral-200">
              {/* <Icons.tech className="w-20" /> */}
              <h4 className="text-primary mt-5">
                The Best Parking Equipment & Supplies
              </h4>
              <p className="mt-5">
                Supported by the best equipment made in Europe & Asia, this
                makes us a company that is ready to provide various kinds of
                parking equipment & equipment needs
              </p>
              <Image
                src={'/images/decoration/parking-equipment.jpg'}
                width={500}
                height={100}
                alt="Parking Equiptment"
                className="mt-10 rounded-md"
              />
            </div>
          </div>
        </div>
        {/* Security System */}
        <div className="flex flex-col mt-20">
          <h3 className="border-l-2 border-primary mx-auto inline-flex text-center px-4">
            Security System
          </h3>
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 place-items-center lg:px-4">
            <p className="text-center px-4">
              We have a wide range of security tools & equipment to ensure
              maximum security
            </p>
            <Image
              src={'/images/decoration/security-system.jpg'}
              width={500}
              height={100}
              alt="Security System"
              className='mt-10'
            />
          </div>
        </div>
        {/* Access Control System */}
        <div className="flex flex-col mt-20">
          <h3 className="border-l-2 border-primary mx-auto inline-flex text-center px-4">
            Access Control System
          </h3>
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 place-items-center lg:px-4">
            <p className="text-center px-4">
              Latest & advanced tools & equipment for your access control needs
            </p>
            <Image
              src={'/images/decoration/access-control-system.jpg'}
              width={500}
              height={100}
              alt="Access Control System"
              className='mt-10'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
