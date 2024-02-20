'use client';
import { useFormStatus } from 'react-dom';
import { Icons } from './Icons';
import { deleteTodo } from '@/lib/action';
import Link from 'next/link';
// Button submit form
export function ButtonSubmit() {
  const status = useFormStatus();
  return (
    <button
      className="bg-primary rounded-md px-4 py-1 font-semibold text-white hover:text-white hover:bg-primary/90"
      type="submit"
      disabled={status.pending}
    >
      {status.pending === true ? (
        <Icons.loader className="animate-spin" />
      ) : (
        'Save'
      )}
    </button>
  );
}

// Button Delete
export function ButtonDelete({ id }: { id: number }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);
  const status = useFormStatus();
  return (
    <form action={deleteTodoWithId}>
      <button className="bg-red-500 p-2 rounded-md hover:brightness-75">
        {status.pending === true ? (
          <Icons.loader className="animate-spin" color='white' />
        ) : (
          <Icons.trash color="white" />
        )}
      </button>
    </form>
  );
}

// Button Edit
export function ButtonEdit({ id }: { id: any }) {
  const status = useFormStatus();
  return (
    <Link
      href={`/to-do-list/${id}/edit`}
      className="bg-primary p-2 rounded-md hover:brightness-75"
    >
      {status.pending === true ? (
        <Icons.loader className="animate-spin" />
      ) : (
        <Icons.pencil color="white" />
      )}
    </Link>
  );
}
