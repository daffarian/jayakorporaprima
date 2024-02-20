'use server'
import { unstable_noStore as noStore } from 'next/cache';
import prisma from './prisma';

export async function fetchPosts() {
  noStore();
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    console.error(error);
    console.error('gagal');
  }
}

export async function fetchPostById(id: number) {
  noStore();
  try {
    const postById = await prisma.post.findUnique({
      where: {
        id
      }
    });
    return postById;
  } catch (error) {
    console.error(error);
  }
}


