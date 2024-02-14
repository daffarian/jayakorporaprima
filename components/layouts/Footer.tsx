import Authors from "../Authors"
import { footerLink } from "@/lib/data"
import Link from "next/link"
export default function Footer(){
  return (
    <footer className="bg-secondary">
      <div className="container px-4 py-10">
        <Authors />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {footerLink.map((items) => (
            <ul className="" key={items.id}>
              <span className="text-white font-semibold">{items.title}</span>
              {items.links.map((item) => (
                <Link
                  className="text-zinc-200 hover:underline"
                  key={item.id}
                  href={item.link}
                >
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 text-center">
          <hr />
          <p className="text-white mt-10">Copyright &copy; 2024 | PT Jaya Korpora Prima | All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}