'use client';
import { useFormStatus } from 'react-dom';
import { Icons } from './Icons';
import { deleteTodo } from '@/lib/action';
import Link from 'next/link';
import { useState } from 'react';

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
  const [load, setLoad] = useState(false);
  const deleteTodoWithId = deleteTodo.bind(null, id);
  return (
    <form action={deleteTodoWithId}>
      <button
        onClick={() => setLoad(true)}
        className="bg-red-500 p-2 rounded-md hover:brightness-75"
      >
        {load === true ? (
          <Icons.loader className="animate-spin" color="white" />
        ) : (
          <Icons.trash color="white" />
        )}
      </button>
    </form>
  );
}

// Button Edit
export function ButtonEdit({ id }: { id: any }) {
  const [load, setLoad] = useState(false);
  return (
    <button onClick={() => setLoad(true)}>
      <Link
        href={`/to-do-list/${id}/edit`}
        className="bg-primary p-2 rounded-md inline-flex hover:brightness-75"
      >
        {load === true ? (
          <Icons.loader className="animate-spin" color="white" />
        ) : (
          <Icons.pencil color="white" />
        )}
      </Link>
    </button>
  );
}

// Button Create
export function ButtonCreate() {
  const [load, setLoad] = useState(false);
  return (
    <button onClick={() => setLoad(true)}>
      <Link
        href={'/to-do-list/create'}
        className=" bg-primary p-2 rounded-md inline-flex hover:brightness-75"
      >
        {load === true ? (
          <Icons.loader className="animate-spin" color="white" />
        ) : (
          <Icons.plus color="white" />
        )}
      </Link>
    </button>
  );
}
