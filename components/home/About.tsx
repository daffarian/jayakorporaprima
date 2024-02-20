import GoTo, { GotoDark } from "../GoTo";
import Image from "next/image";
export default function About(){
  return (
    <section className="bg-primary pt-10 grid grid-cols-1 md:grid-cols-2 place-items-center">
      <Image className="" src={'/background/home-about-background.svg'} width={500} height={200} alt="id"/>
      <div className="container py-10 px-4">
        <h2 className="py-10 text-white">About Us</h2>
        <p className="text-neutral-200">
          We are an experienced and passionate team focused on security,
          accessibility and convenience. We understand that every businesses
          have their own unique challenges and needs, and we are ready provide
          the right solution for you. With that approach collaborative and
          customer-oriented, we are determined to create solutions that meet
          expectations and overcome challenges you face.
        </p>
        <GotoDark link="about">More</GotoDark>
      </div>
    </section>
  );
}