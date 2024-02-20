import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero"
import Partners from "@/components/home/Partners";
import ProductServices from "@/components/home/ProductServices";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <ProductServices/>
      <Partners/>
      <Contact/>
    </main>
  );
}
