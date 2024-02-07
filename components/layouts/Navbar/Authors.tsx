import Image from "next/image"
export default function Authors(){
  return (
    <div className="flex flex-row items-center gap-2">
      <Image src={'/images/jkp-logo.png'} alt="Logo JKP" width={40} height={40}></Image>
      <h1 className="text-primary font-bold text-xl">Jayakorporaprima</h1>
    </div>
  )
}