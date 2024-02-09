import { inter } from '../components/fonts';
import Image from 'next/image';
export default function Authors() {
  return (
    <span className="flex flex-row items-center gap-1">
      <Image
        src={'/images/jkp-logo.png'}
        alt="Logo JKP"
        width={40}
        height={40}
      ></Image>
      <span className={`text-primary font-bold text-xl ${inter.className}`}>
        JAYAKORPORAPRIMA
      </span>
    </span>
  );
}
