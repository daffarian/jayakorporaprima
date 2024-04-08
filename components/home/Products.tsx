import ParkingEquipment from './Products/ParkingEquipment';
import IntegratedSecurity from './Products/IntegratedSecurity';
export default function Products() {
  return (
    <section className="relative">
      <div className="mt-20">
        <h2 className="text-center">PRODUCTS OFFERED</h2>
        <div className="mt-10 flex flex-col relative gap-10 md:flex-row justify-center pb-5 h-full">
          {/* Parking Equipment */}
          <ParkingEquipment />
          {/* Integrated Security */}
          <IntegratedSecurity />
          <div className="absolute w-full h-1/5 lg:h-1/2 bg-primary bottom-0 z-[-1]"></div>
        </div>
      </div>
    </section>
  );
}
