/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
export default function Services(){
  return (
    <section className="bg-primary px-4 pb-10 relative">
      <Image
        src={'/images/decoration/pattern/dot.svg'}
        alt="pattern dot"
        width={100}
        height={100}
        className="absolute -top-80 left-3 z-[-1]"
      />
      <p className="text-accent text-2xl font-bold px-10 text-right">
        JK Parking
      </p>
      <div className="mt-5">
        <h2 className="text-white">SERVICES OFFERED</h2>
        <p className="text-slate-300 mt-5">
          We have experience serving parking management services to more than 50
          locations spread throughout Indonesia. We are proud to be a trusted
          partner byprioritizing professional services, responsive
          communication, experienced human resources,coordinating with the
          surrounding community for smoothoperations and we also provide a
          transparent incomeplatform for property owners.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="bg-white pt-10 p-4 relative rounded-xl">
          <h3 className="text-lg bg-accent px-3 py-2 absolute rounded-md -top-5 left-4">
            Profit Sharing
          </h3>
          <p>
            We offer parking management services using the latest tools and
            technology. This cooperation with a profit-sharing system is in
            accordance with mutual agreement and discussion.
          </p>
        </div>
        <div className="bg-white pt-10 p-4 relative rounded-xl">
          <h3 className="text-lg bg-accent px-3 py-2 absolute rounded-md -top-5 left-4">
            Technical Assistance
          </h3>
          <p>
            We offer several well-known brands for parking equipment (software
            or hardware). You'll manage your revenue in full. The tools and
            systems that are guaranteed to be always on
          </p>
        </div>
      </div>
    </section>
  );
}