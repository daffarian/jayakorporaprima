import { writeFile } from 'fs/promises';
import { join } from 'path';
import { ButtonSubmit } from '@/components/Button';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Image from 'next/image';
export default function Page() {
  async function upload(data: FormData) {
    'use server';

    const file: File | null = data.get('file') as unknown as File;
    if (!file) {
      throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = join(
      '/coding/nextjs/jayakorporaprima/public/images',
      file.name
    );
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);
    revalidatePath('/to-do-list/upload');
    redirect('/to-do-list/upload');
  }

  return (
    <section className="pt-20 container min-h-svh">
      <h1>Upload File</h1>
      <form action={upload} className="mt-10 flex flex-col gap-10 p-5">
        {/* <Image alt={'tes'} width={50} height={50} src={`${path}`}/> */}
        <input type="file" name="file" required className='border-[1px] border-neutral-300  rounded-xl' />
        <ButtonSubmit>Submit</ButtonSubmit>
      </form>
    </section>
  );
}
