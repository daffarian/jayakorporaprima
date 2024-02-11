import Image from "next/image"
export default function Partners(){
  return (
    <section>
      <div className="container py-10 place-items-center px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Image src={'/images/partners/magnetic.jpg'} width={300} height={100} alt="Magnetic"/>
        <Image src={'/images/partners/faac-technologies.jpg'} width={300} height={100} alt="Faac Technologies"/>
        <Image src={'/images/partners/parking-hub-technology.jpg'} width={300} height={100} alt="Parking Hub Technology"/>
      </div>
    </section>
  )
}