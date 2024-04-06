/* eslint-disable react/no-unescaped-entities */
'use client';
import GoTo, { GotoDark } from '../GoTo';
import Image from 'next/image';
export default function About() {
  return (
    <section className="pt-10 container ">
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 md:gap-10 place-items-center">
        <Image
          className=""
          src={'/images/decoration/decoration-1.jpg'}
          width={500}
          height={200}
          alt="id"
        />
        <div>
          <h2 className="pt-10">ABOUT US</h2>
          <Image
            src={'/images/jkp-logo-2.png'}
            alt="logo jkp"
            width={200}
            height={100}
            className='mt-5'
          />
          <p className="mt-5">
            PT. Jaya Korpora Prima (JKP) is a company engaged inparking
            management services, parking equipment &technology, access control,
            and integrated security system foryour property. We are also an
            exclusive distributor of several parkingequipment, access control
            and security systems from theworld's leading group. Wherever your
            property is located, you will be supported by our extensive
            capability and expertise.
          </p>
          <GotoDark link="about">More</GotoDark>{' '}
        </div>
      </div>
    </section>
  );
}
