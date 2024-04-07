import Image from "next/image";
export default function Portofolio() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="px-4 mt-10">
        <h2>OUR PORTOFOLIO</h2>
        <ol className="list-decimal list-inside mt-5">
          <li>Susu Murni Lembang, Bandung</li>
          <li>Ruko Sektor 7, BSD</li>
          <li>Sutra Niaga 1-3, Serpong</li>
          <li>RSUD Kab. Bekasi</li>
          <li>RSU Artha Medica, Binjai</li>
          <li>RSUD Majalengka</li>
          <li>RSUD Pelabuhan Ratu, Sukabumi</li>
          <li>RS Jantung, Bandung</li>
          <li>RSU Citra Sari Husada, Karawang</li>
          <li>Prama Toserba Ciparay,Bandung</li>
          <li>Gedung Alumni IPB, Bogor</li>
          <li>Hotel El-Royal, Bandung</li>
          <li>Hotel Savoy Homan, Bandung</li>
          <li>Apartemen Puncak Kertajaya, Surabaya</li>
          <li>Grutty Mall Cibaduyut, Bandung</li>
        </ol>
        <p className="text-logo font-bold mt-5">
          and more than 30 locations and client has been provided services
        </p>
      </div>
      <div className="bg-primary py-10">
        <Image src={'/images/decoration/decoration-3.png'} alt="Our Portofolio" width={500} height={500}/>
      </div>
    </section>
  );
}
