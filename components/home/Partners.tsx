import Image from "next/image"
export default function Partners(){
  return (
    <section>
      <div className="container pt-10 place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Image src={'/images/partners/magnetic.jpg'} width={300} height={100} alt="Magnetic"/>
        <Image src={'/images/partners/faac-technologies.jpg'} width={300} height={100} alt="Faac Technologies"/>
        <Image src={'/images/partners/parking-hub-technology.jpg'} width={300} height={100} alt="Parking Hub Technology"/>
        <Image src={'/images/partners/life.jpg'} width={300} height={100} alt="Life"/>
        <Image src={'/images/partners/tgw.jpg'} width={150} height={100} alt="Tgw"/>
        <Image src={'/images/partners/shanan.jpg'} width={300} height={100} alt="Shanan"/>
        <Image src={'/images/partners/cometa.jpg'} width={300} height={100} alt="Cometa"/>
      </div>
    </section>
  )
}