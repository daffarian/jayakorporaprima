import { CheckList } from "../List";
import Image from "next/image";
export default function VisionMission() {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-primary py-10 px-4 flex justify-end flex-row relative">
          <Image
            src={'/images/decoration/pattern/dot.svg'}
            alt="pattern dot"
            width={100}
            height={100}
            className="absolute top-8 right-3 rotate-90 z-[0]"
          />
          <div className="w-[5%] h-96 bg-accent absolute left-0"></div>
          <div className="flex flex-row-reverse gap-5 w-[90%] z-10">
            <div
              style={{
                backgroundImage: 'url("/images/decoration/decoration-2.webp")'
              }}
              className="h-96 w-1/2 bg-cover bg-right"
            ></div>
            <div
              style={{
                backgroundImage: 'url("/images/decoration/decoration-3.jpg")'
              }}
              className="h-96 w-1/2 bg-cover bg-center"
            ></div>
          </div>
        </div>
        <div className="px-4">
          <h2 className="mt-10 md:mt-0">VISION & MISSION</h2>
          <p className="mt-5">
            Become a growing company and continue to innovate in technological
            advances, supported by experienced and competent human resources.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <div className="flex flex-row items-center gap-5">
              <CheckList />
              <p className="text-logo font-semibold">
                Involving technology in operational activities
              </p>
            </div>
            <div className="flex flex-row items-center gap-5">
              <CheckList />
              <p className="text-logo font-semibold">
                Have experienced and competent humanresources.
              </p>
            </div>
            <div className="flex flex-row items-center gap-5">
              <CheckList />
              <p className="text-logo font-semibold">
                Selling world-class quality goods
              </p>
            </div>
            <div className="flex flex-row items-center gap-5">
              <CheckList />
              <p className="text-logo font-semibold">
                Become a reliable partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
