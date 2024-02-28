import GoTo, { GotoDark } from "../GoTo";
import Image from "next/image";
export default function About(){
  return (
    <section className="pt-10 container ">
      <div className=" bg-primary py-10 grid rounded-[2rem] roun grid-cols-1 md:grid-cols-2 place-items-center px-4">
        <Image
          className=""
          src={'/background/home-about-background.svg'}
          width={500}
          height={200}
          alt="id"
        />
        <div>
          <h2 className="pt-10 text-white">About Us</h2>
          <p className="text-slate-200 mt-5">
            We are an experienced and passionate team focused on security,
            accessibility and convenience. We understand that every businesses
            have their own unique challenges and needs, and we are ready provide
            the right solution for you. With that approach collaborative and
            customer-oriented, we are determined to create solutions that meet
            expectations and overcome challenges you face.
          </p>
          <GotoDark link="about">More</GotoDark>{' '}
        </div>
      </div>
    </section>
  );
}