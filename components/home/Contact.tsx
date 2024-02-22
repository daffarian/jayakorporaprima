import { Icons } from '../Icons';

export default function Contact() {
  return (
    <section>
      <div className="container py-10">
        <h2 className="my-10">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <address className="grid grid-cols-1 gap-5 order-last lg:order-1 not-italic">
            <div>
              <h3>Operational hour </h3>
              <ul className="list-disc pl-5 text-neutral-800 mt-2 font-medium">
                <li>Monday - Friday : 8:00 AM - 5:00 PM</li>
                <li>Saturday & Sunday : Closed</li>
              </ul>
            </div>
            {/* Contact */}

            {/* Address */}
            <div>
              <h3>Office Address</h3>
              <a
                className="text-neutral-800 mt-2 font-medium hover:underline"
                href="https://maps.app.goo.gl/YzyeqtGYVy3FTRvC7"
                target='_blank'
              >
                The Mansion Office Fontana, Lantai 17 Unit BF-17 B2, Jln.
                Trembesi, Pademangan TImur - Pademangan, Jakarta - 14410
              </a>
            </div>
            {/* Wa Business */}
            <div>
              <h3>Whatsapp Business</h3>
              <a
                className="text-blue-600 font-medium mt-2 hover:underline inline-flex flex-row gap-2 items-center"
                href="https://wa.me/6285771679611"
              >
                <Icons.whatsapp className="" />
                62-8577-1679-611
              </a>
            </div>
            <div>
              <h3>Email</h3>
              <a
                className="text-blue-600 font-medium mt-2 hover:underline inline-flex flex-row gap-2 item-center"
                href="mailto:info@jayakorporaprima.co.id"
              >
                {Icons.mail}info@jayakorporaprima.co.id
              </a>
            </div>
          </address>
          <div className="order-1">
            <iframe
              className="aspect-square w-full border-blue-400 border-[1px] rounded-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.357631479446!2d106.85408488279023!3d-6.1481002459953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59a5e80e0df%3A0x5df08484cfaee4d5!2sThe%20Mansion%20Bougenville%20Fontana!5e0!3m2!1sid!2sid!4v1707643203732!5m2!1sid!2sid"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
