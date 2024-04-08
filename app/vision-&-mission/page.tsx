import { Metadata } from 'next';
import VisionMission from '@/components/home/VisionMission';

export const metadata: Metadata = {
  title: 'Visi & Misi - PT. Jaya Korpora Prima (JKP)',
  description:
    'Menjadi perusahaan yang terus berkembang dan terus berinovasi dalam kemajuan teknologi, didukung oleh sumber daya manusia yang berpengalaman dan kompeten.'
};
export default function Page() {
  return (
    <main className="pt-10">
      <VisionMission />
    </main>
  );
}
