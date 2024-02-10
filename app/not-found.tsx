import GoTo from '@/components/GoTo';

export default function NotFound() {
  return (
    <main className='w-full flex justify-center flex-col gap-2 items-center h-lvh'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <GoTo link='/'>Home</GoTo>
    </main>
  );
}
