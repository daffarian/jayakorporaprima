import GoTo, { GotoDark } from "../GoTo";

export default function About(){
  return (
    <section className="bg-secondary">
      <div className="container py-10 px-4">
        <h2 className="py-10 text-white">Tentang Kami</h2>
        <p className="text-zinc-200">
          Kami adalah tim berpengalaman dan bersemangat yang berfokus pada
          keamanan, aksesibilitas, dan kenyamanan. Kami memahami bahwa setiap
          bisnis memiliki tantangan dan kebutuhan uniknya sendiri, dan kami siap
          memberikan solusi yang tepat untuk Anda. Dengan pendekatan yang
          kolaboratif dan berorientasi pada pelanggan, kami bertekad untuk
          menciptakan solusi yang memenuhi harapan dan mengatasi tantangan yang
          Anda hadapi.
        </p>
        <GotoDark link="about">Selengkapnya</GotoDark>
      </div>
    </section>
  );
}