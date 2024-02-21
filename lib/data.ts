'use server';
import { unstable_noStore as noStore } from 'next/cache';
import { db } from './db';

// Fetch all posts
export async function fetchPosts() {
  noStore();
  try {
    const [posts, fields] = await (await db).execute(`SELECT * FROM todolist`);
    return posts;
  } catch (error) {
    console.error(error);
    console.error('Failed to fetch');
  }
}

// Fetch Posts by id
export async function fetchPostById(id: number) {
  noStore();
  try {
    const [postById, fields] = await (
      await db
    ).execute(`SELECT * FROM todolist WHERE id = "${id}"`);
    return postById;
  } catch (error) {
    console.error(error);
    console.error('Failed to fetch by id');
  }
}
