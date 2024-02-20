import { fetchPosts } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Todo } from '@/lib/definitions';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import { ButtonDelete, ButtonEdit } from '@/components/Button';

function ButtonCreate() {
  return (
    <Link
      href={'/to-do-list/create'}
      className=" bg-primary p-2 rounded-md inline-flex hover:brightness-75"
    >
      {Icons.plus}
    </Link>
  );
}

export default async function Page() {
  const posts = await fetchPosts();

  // posts.map((post: any) => {
  //   post;
  // });
  return (
    <div className="container px-4 pt-20">
      <ButtonCreate />
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 place-items-start gap-5">
        {posts?.length > 0 ? (
          posts?.map((post: Todo) => (
            <Card key={post.id} className="p-5 shadow-xl w-full">
              <div className="flex flex-row justify-between gap-5">
                <div>
                  <h3 className="text-primary text-lg mb-3">{post.title}</h3>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>
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
            <p className="text-center font-semibold">Empty note</p>
          </div>
        )}
      </div>
    </div>
  );
}
