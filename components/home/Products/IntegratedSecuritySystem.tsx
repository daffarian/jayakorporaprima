import { PartnerSecurity } from "../Partners";
export default function IntegratedSecuritySystem() {
  return (
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
      <PartnerSecurity/>
    </div>  
  );
}
