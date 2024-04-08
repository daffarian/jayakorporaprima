/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
export default function About() {
  return (
    <section className="pt-10 container relative">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 place-items-center">
        <Image
          className=""
          src={'/images/decoration/decoration-1.jpg'}
          width={500}
          height={200}
          alt="id"
        />
        <div className="relative">
          <Image
            src={'/images/decoration/pattern/dot.svg'}
            alt="pattern dot"
            width={100}
            height={100}
            className="absolute top-5 right-8"
          />
          <h2 className="pt-10">ABOUT US</h2>
          <p className="mt-5">
            PT. Jaya Korpora Prima (JKP) is a company engaged in parking
            management services, parking equipment & technology, access control,
            and integrated security system for your property. We are also an
            exclusive distributor of several parking equipment, access control
            and security systems from theworld's leading group. Wherever your
            property is located, you will be supported by our extensive
            capability and expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
