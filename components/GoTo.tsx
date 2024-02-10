import Link from 'next/link';
import { Icons } from './Icons';

export default function GoTo({
  link,
  children
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={link} className="text-primary my-5 font-semibold inline-flex flex-row group">
      <span>{children}</span>
      <span className="ml-4 group-hover:ml-1 duration-500 ease-out transition-all">
        {Icons.goto}
      </span>
    </Link>
  );
}

export function GotoDark({
  link,
  children
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={link}
      className="text-white my-5 font-semibold inline-flex flex-row group"
    >
      <span>{children}</span>
      <span className="ml-4 group-hover:ml-1 duration-500 ease-out transition-all">
        {Icons.gotoDark}
      </span>
    </Link>
  );
}
