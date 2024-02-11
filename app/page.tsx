import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero"
import ProductServices from "@/components/Home/ProductServices";

export default function Home() {
  return (
    <main>
      <Hero/>
      <ProductServices/>
      <About/>
      <Contact/>
    </main>
  );
}
