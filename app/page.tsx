import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero"
import Partners from "@/components/Home/Partners";
import ProductServices from "@/components/Home/ProductServices";

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
