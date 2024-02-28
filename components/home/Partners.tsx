import Image from "next/image"
export default function Partners(){
  return (
    <section className="container py-10">
      <h2 className="py-10 bg-gradient-to-r from-primary to-red-500 via-indigo-800 rounded-[2rem] px-4 text-transparent bg-clip-text">
        {' '}
        Collaborating with strategic partners to expand market reach and
        increase competitiveness
      </h2>
      <div className="pt-10 place-items-center grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Image
          src={'/images/partners/magnetic.jpg'}
          width={300}
          height={100}
          alt="Magnetic"
        />
        <Image
          src={'/images/partners/faac-technologies.jpg'}
          width={300}
          height={100}
          alt="Faac Technologies"
        />
        <Image
          src={'/images/partners/parking-hub-technology.jpg'}
          width={300}
          height={100}
          alt="Parking Hub Technology"
        />
        <Image
          src={'/images/partners/life.jpg'}
          width={300}
          height={100}
          alt="Life"
        />
        <Image
          src={'/images/partners/shanan.jpg'}
          width={300}
          height={100}
          alt="Shanan"
        />
        <Image
          src={'/images/partners/cometa.jpg'}
          width={300}
          height={100}
          alt="Cometa"
        />
        <Image
          src={'/images/partners/tgw.jpg'}
          width={150}
          height={100}
          alt="Tgw"
        />
      </div>
    </section>
  );
}