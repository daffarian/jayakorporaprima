'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from './db';

export async function submitTodo(titleInput: any, editorContent: any) {
  const title = titleInput;
  const content = editorContent;

  (await db).query(`INSERT INTO todolist (title, content) VALUES ('${title}', '${content}')`);

  revalidatePath('/to-do-list/');
  redirect('/to-do-list/');
}

export async function updateTodo(
  id: string,
  titleInput: any,
  editorContent: any
) {
  const title = titleInput;
  const content = editorContent;

  (await db).query(
    `UPDATE todolist SET title = '${title}', content = '${content}' WHERE id = ${id}`
  );


  revalidatePath('/to-do-list/');
  redirect('/to-do-list/');
}

export async function deleteTodo(id: any) {
  (await db).query(
    `DELETE FROM todolist WHERE id = ${id}`
  );
  revalidatePath('/to-do-list/');
  redirect('/to-do-list/');
}
