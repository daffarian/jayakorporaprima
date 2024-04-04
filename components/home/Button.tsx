import { Icons } from "../Icons";
export default function Button() {
  return (
    <button className="px-3 py-2 bg-accent shadow-xl rounded-md">
      <a href="https://wa.me/6285771679611" className="text-primary font-bold inline-flex flex-row-reverse items-center gap-2">{<Icons.whatsapp/>}Contact Us</a>
    </button>
  );
}
