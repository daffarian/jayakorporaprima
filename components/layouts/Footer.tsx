import Authors from "../Authors"
import { footerLink } from "@/lib/data-object"
import Link from "next/link"
export default function Footer(){
  return (
    <footer className="bg-secondary">
      <div className="container pt-10 pb-5">
        <Authors />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {footerLink.map((items) => (
            <ul className="" key={items.id}>
              <span className="text-white font-semibold">{items.title}</span>
              {items.links.map((item) => (
                <Link
                  className="text-slate-200 hover:underline"
                  key={item.id}
                  href={item.link}
                >
                  <li className="text-slate-400">{item.name}</li>
                </Link>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-5 text-center">
          <hr className="border-neutral-400" />
          <p className="text-neutral-400 mt-5">Copyright &copy; 2024 | PT Jaya Korpora Prima | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}