import { Metadata } from 'next';
import About from '@/components/home/About';
import VisionMission from '@/components/home/VisionMission';
export const metadata: Metadata = {
  title:
    'Tentang PT. Jaya Korpora Prima (JKP) - Inovasi Teknologi untuk Keamanan Properti Anda',
  description:
    ' PT. Jaya Korpora Prima (JKP), perusahaan yang terus tumbuh dan berinovasi dalam teknologi untuk memenuhi kebutuhan manajemen parkir, peralatan parkir, dan sistem keamanan terintegrasi.'
};
export default function Page() {
  return (
    <main className="pt-10">
      <About />
      <VisionMission />
    </main>
  );
}
