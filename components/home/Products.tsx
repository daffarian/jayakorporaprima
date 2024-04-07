export default function Products() {
  return (
    <section>
      <div className="mt-20">
        <h2 className="text-center">PRODUCTS OFFERED</h2>
        <div className="mt-10 flex flex-col relative gap-10 md:flex-row justify-center pb-5 h-full">
          <div className="justify-center flex items-center flex-col gap-5 px-4">
            <h3 className="text-center leading-none text-lg bg-accent p-2 text-logo inline-flex">
              Parking <br /> Equipment
            </h3>
            <ul className="list-disc list-inside bg-gray-200 p-4">
              <li>Barrier gate (Italy & China)</li>
              <li>Pos Parkir</li>
              <li>Vehicle Detector</li>
              <li>Tiket Dispenser</li>
              <li>Rambu - rambu</li>
              <li>Tiang Kamera</li>
              <li>Software Parkir</li>
              <li>Jasa Instalasi Peralatan Parkir</li>
            </ul>
          </div>
          <div className="justify-center flex items-center flex-col gap-5">
            <h3 className="text-center leading-none text-lg bg-accent p-2 text-logo inline-flex">
              Integrated Security <br /> System
            </h3>
            <ul className="list-disc list-inside bg-gray-200 p-4">
              <li>Security Portals</li>
              <li>Swing Gates</li>
              <li>Security Turnstile Gates</li>
              <li>Revolving Doors</li>
              <li>Boarding Gate</li>
              <li>Metal Detectors</li>
              <li>Walk Through Metal Detector</li>
              <li>X-Tray Machine for Security</li>
            </ul>
          </div>
          <div className="absolute w-full h-1/5 lg:h-1/2 bg-primary bottom-0 z-[-1]"></div>
        </div>
      </div>
    </section>
  );
}
