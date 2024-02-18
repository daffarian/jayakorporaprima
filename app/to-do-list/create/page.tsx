import Tiptap from '@/components/Tiptap';
import { Button } from '@/components/ui/button';
import { submitTodo } from '@/lib/action';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="flex flex-col py-20 px-4 container">
      <form action={submitTodo} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="p-1 border-[1px] border-zinc-500"
            required
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
          ></textarea>
        </div>
        <div>
          <Suspense fallback={<div>Loading..</div>}>
            <Button
              className="bg-primary hover:bg-primary mr-5"
              variant={'default'}
              type="submit"
            >
              Save
            </Button>
          </Suspense>
          <Link href="/to-do-list">
            <Button variant="destructive" type="submit">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
