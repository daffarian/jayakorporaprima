import IntegratedSecurity from "@/components/home/Products/IntegratedSecurity"
import Image from "next/image";
export default function Page(){
  return (
    <main className="pt-20 h-[35rem] relative">
      <IntegratedSecurity />
      <Image
        src={'/images/decoration/pattern/item-1.png'}
        alt="pattern 2"
        width={100}
        height={100}
        className="absolute bottom-0 right-0 rotate-180 z-[0]"
      />
    </main>
  );
}