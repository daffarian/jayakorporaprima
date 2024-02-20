'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from './prisma';

export async function submitTodo(titleInput: any, editorContent: any) {
  const title = titleInput;
  const content = editorContent;

  await prisma.post.create({
    data: {
      title: title,
      content: content
    }
  });

  

  revalidatePath('/to-do-list/');
  redirect('/to-do-list/');
}

export async function updateTodo(id:string, titleInput: any, editorContent: any) {
  const title = titleInput;
  const content = editorContent;

  await prisma.post.update({
    where: {
      id
    },
    data: {
      title: title,
      content: content
    }
  });

  revalidatePath('/to-do-list/');
  redirect('/to-do-list/');
}

export async function deleteTodo(id: any) {
  await prisma.post.delete({
    where: {
      id
    }
  });
  revalidatePath('/dashboard/invoices');
}
