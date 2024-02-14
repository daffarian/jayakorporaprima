import GoTo, { GotoDark } from "../GoTo";

export default function About(){
  return (
    <section className="bg-primary">
      <div className="container py-10 px-4">
        <h2 className="py-10 text-white">About Us</h2>
        <p className="text-zinc-200">
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