import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { fetchPostById } from '@/lib/data';
import { updateTodo } from '@/lib/action';

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const postById = await fetchPostById(id);
  const updateTodoWithId = updateTodo.bind(null, postById.id)

  return (
    <div className="flex flex-col py-20 px-4 container">
      <form action={updateTodoWithId} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="p-1 border-[1px] border-zinc-500"
            defaultValue={postById.title}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="content" className="font-medium">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="p-1 border-[1px] border-zinc-500"
            defaultValue={postById.content}
          ></textarea>
        </div>
        <div>
          <Button
            className="bg-primary hover:bg-primary mr-5 hover:brightness-75"
            variant={'default'}
            type="submit"
          >
            Save
          </Button>
          <Link href="/to-do-list">
            <Button variant="destructive" className="hover:brightness-75">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
