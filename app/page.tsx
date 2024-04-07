import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import Services from '@/components/home/Services';
import VisionMission from '@/components/home/VisionMission';
import Products from '@/components/home/Products';
import Portofolio from '@/components/home/Portofolio';


export default async function Home() {
  
  return (
    <main>
      <Hero />
      <About />
      <VisionMission/>
      <Products/>
      <Partners />
      <Services/>
      <Portofolio/>
      <Contact />
    </main>
  );
}
