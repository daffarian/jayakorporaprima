import TechnicalAssistance from "@/components/home/Services/TechnicalAssistance";
import Image from "next/image";
export default function Page() {
  return (
    <main className="pt-[4.5rem] h-svh">
      <div className="bg-primary px-4 pt-10 h-full">
        <TechnicalAssistance />
        <Image
          src={'/images/decoration/pattern/item-1.png'}
          alt="pattern 2"
          width={100}
          height={100}
          className="absolute bottom-0 right-0 rotate-180 z-[0]"
        />
      </div>
    </main>
  );
}
