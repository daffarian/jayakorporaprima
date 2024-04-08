import Image from "next/image";

import ParkingEquipment from "@/components/home/Products/ParkingEquipment"
export default function Page(){
  return (
    <main className="pt-20 h-[35rem] relative">
      <ParkingEquipment />
      <Image
        src={'/images/decoration/pattern/dot.svg'}
        alt="pattern dot"
        width={100}
        height={100}
        className="absolute bottom-8 left-3 rotate-90 z-[0]"
      />
      <Image
        src={'/images/decoration/pattern/dot.svg'}
        alt="pattern dot"
        width={100}
        height={100}
        className="absolute bottom-8 -left-5 rotate-90 z-[0]"
      />
    </main>
  );
}