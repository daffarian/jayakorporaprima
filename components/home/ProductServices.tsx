import * as React from 'react';

import GoTo from '../GoTo';

export default function ProductServices() {
  return (
    <section
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
            We provide reliable security and access control system solutions for
            your business needs. With an innovative approach and the latest
            technology, we present integrated solutions for protect your assets
            and ensure maximum security.
          </p>
          <GoTo link="product-&-service">More</GoTo>
        </div>
        
      </div>
    </section>
  );
}
