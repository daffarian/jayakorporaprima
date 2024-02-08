import Authors from '@/components/Authors';

export default function Loading() {
  return (
    <main className="h-svh w-full fixed z-50 bg-white flex item-center justify-center">
      <div className="animate-pulse flex">
        <Authors />
      </div>
    </main>
  );
}
