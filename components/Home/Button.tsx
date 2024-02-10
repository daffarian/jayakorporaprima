import Link from 'next/link';
export default function Button() {
  return (
    <button className="text-white px-2 py-1 border-white border-[1px] hover:text-black  hover:bg-white bg-transparent">
      <Link href={'/contact'}>Hubungi Kami</Link>
    </button>
  );
}
