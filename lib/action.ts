'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from './prisma';

export async function submitTodo(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  await prisma.post.create({
    data: {
      title: title,
      content: content
    }
  });

  revalidatePath('/to-do-list/');
  redirect('/to-do-list/');
}

export async function updateTodo(id: string, formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

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

export async function deleteTodo(id: number) {
  await prisma.post.delete({
    where: {
      id
    }
  });
  revalidatePath('/dashboard/invoices');
}
