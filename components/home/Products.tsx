import ParkingEquipment from './Products/ParkingEquipment';
import IntegratedSecurity from './Products/IntegratedSecuritySystem';
export default function Products() {
  return (
    <section className="relative">
      <div className="mt-20">
        <h2 className="text-center">PRODUCTS OFFERED</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 pb-5 h-full">
          {/* Parking Equipment */}
          <ParkingEquipment />
          {/* Integrated Security */}
          <IntegratedSecurity />
          {/* <div className="absolute w-full h-1/5 lg:h-1/2 bg-primary bottom-0 z-[-1]"></div> */}
        </div>
      </div>
    </section>
  );
}
