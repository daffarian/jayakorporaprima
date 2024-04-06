import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import ProductServices from '@/components/home/ProductServices';
import VisionMission from '@/components/home/VisionMission';
import Products from '@/components/home/Products';
export default async function Home() {
  
  return (
    <main>
      <Hero />
      <About />
      <VisionMission/>
      <Products/>
      <ProductServices />
      <Partners />
      <Contact />
    </main>
  );
}
