import Contact from "@/components/home/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Hubungi Kami - PT. Jaya Korpora Prima (JKP)',
  description:
    'Segera hubungi tim kami di PT. Jaya Korpora Prima (JKP) untuk konsultasi lebih lanjut mengenai layanan manajemen parkir, teknologi parkir, dan sistem keamanan terintegrasi terbaru yang kami tawarkan untuk properti Anda.'
};
export default function Page() {
  return (
    <main className="pt-[4.5rem]">
      <Contact/>
    </main>
  );
}
