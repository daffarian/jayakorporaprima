/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import ProfitSharing from './Services/ProfitSharing';
import TechnicalAssistance from './Services/TechnicalAssistance';
export default function Services() {
  return (
    <section className="bg-primary px-4 py-10 relative">
      <Image
        src={'/images/decoration/pattern/dot.svg'}
        alt="pattern dot"
        width={100}
        height={100}
        className="absolute top-1 left-3 z-[0]"
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
        <ProfitSharing />
        <TechnicalAssistance />
      </div>
    </section>
  );
}
