import Products from "@/components/home/Products"
import Services from "@/components/home/Services"
import Partners from "@/components/home/Partners"
export default function Page(){
  return(
    <main className="mt-10">
      <Products/>
      <Partners/>
      <Services/>
    </main>
  )
}