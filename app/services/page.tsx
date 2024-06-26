import Products from "@/components/home/Products"
import Services from "@/components/home/Services"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Produk & Layanan - Solusi Parkir & Keamanan Terkemuka dari JKP',
  description:
    'Jelajahi rangkaian produk dan layanan unggulan PT. Jaya Korpora Prima (JKP), mulai dari peralatan parkir canggih hingga sistem keamanan terintegrasi, yang dirancang untuk memberikan solusi komprehensif bagi kebutuhan parkir dan keamanan properti Anda.'
};

export default function Page(){
  return(
    <main className="pt-[4.5rem] ">
      <Services/>
    </main>
  )
}