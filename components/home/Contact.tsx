import { Icons } from '../Icons';
import Image from 'next/image';



export default function Contact() {
  return (
    <section className="bg-primary pt-10 relative">
      <div className=" px-4 py-10">
        <h2 className="text-white">GET IN TOUCH</h2>
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <Image
            className="mx-auto"
            src={'/images/decoration/decoration-4.png'}
            alt="Get In Touch"
            width={300}
            height={300}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-xl p-4 relative">
            <address className="grid grid-cols-1 gap-2 not-italic">
              {/* Contact */}

              {/* Wa Business */}
              <div>
                {/* <h3 className="text-xl">Whatsapp Business</h3> */}
                <a
                  className="text-slate-500 mt-2 hover:underline inline-flex flex-row gap-2 items-center"
                  href="tel:6285797845453"
                >
                  <Icons.phone className="text-accent" />
                  +62-85797845453
                </a>
              </div>
              <div>
                {/* <h3 className="text-xl">Email</h3> */}
                <a
                  className="text-slate-500  mt-2 hover:underline inline-flex flex-row gap-2 item-center"
                  href="mailto:lucky@jayakorporaprima.co.id"
                >
                  <Icons.mail className="text-accent" />
                  lucky@jayakorporaprima.co.id
                </a>
              </div>
              {/* Address */}
              <div>
                {/* <h3 className="text-xl">Office Address</h3> */}
                <a
                  className="mt-2 hover:underline text-slate-500 flex flex-row gap-2 item-center"
                  href="https://maps.app.goo.gl/YzyeqtGYVy3FTRvC7"
                  target="_blank"
                >
                  <Icons.location className="text-accent shrink-0" />
                  The Mansion Office Fontana, Lantai 17 Unit BF-17 B2, Jln.
                  Trembesi, Pademangan TImur - Pademangan, Jakarta - 14410
                </a>
              </div>
            </address>
            <div className="">
              <iframe
                className="aspect-square w-full hover:border-accent border-[1px] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.357631479446!2d106.85408488279023!3d-6.1481002459953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59a5e80e0df%3A0x5df08484cfaee4d5!2sThe%20Mansion%20Bougenville%20Fontana!5e0!3m2!1sid!2sid!4v1707643203732!5m2!1sid!2sid"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
