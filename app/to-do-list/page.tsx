import { fetchPosts } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Article } from '@/lib/definitions';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import { deleteTodo } from '@/lib/action';

function ButtonCreate() {
  return (
    <Link
      href={'/to-do-list/create'}
      className=" bg-primary p-2 rounded-md inline-flex"
    >
      {Icons.plus}
    </Link>
  );
}

function ButtonEdit({ id }: { id: number }) {
  return (
    <Link href={`/to-do-list/${id}/edit`} className="bg-primary p-2 rounded-md">
      {Icons.pencil}
    </Link>
  );
}

function ButtonDelete({ id }: { id: number }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);

  return (
    <form action={deleteTodoWithId}>
      <button className="bg-red-500 p-2 rounded-md">{Icons.trash}</button>
    </form>
  );
}

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <div className="container px-4 mt-10">
      <ButtonCreate />

      <div className="py-10 flex flex-col flex-wrap sm:flex-row gap-5">
        {posts.length > 0 ? (
          posts.map((post: Article) => (
            <Card key={post.id} className="p-5 shadow-xl">
              <div className="flex flex-row justify-between gap-5">
                <div>
                  <h3 className="text-primary text-lg mb-3">{post.title}</h3>
                  <p>{post.content}</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 items-center justify-center p-2">
                  <ButtonEdit id={post.id} />
                  <ButtonDelete id={post.id} />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div>
            <p className='text-center font-semibold'>Empty note</p>
          </div>
        )}
      </div>
    </div>
  );
}
