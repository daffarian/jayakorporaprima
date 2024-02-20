'use client';
import { updateTodo } from '@/lib/action';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { quillFormats, quillModules } from '@/components/Editor';
import { ButtonSubmit } from '@/components/Button';

export default function EditForm(postById: any) {
  // State RichText
  const [content, setContent] = useState(postById.postById.content);
  // State Title
  const [title, setTitle] = useState(postById.postById.title);
  // Handle Editore Change
  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  const updateTodoWithId = updateTodo.bind(null, postById.postById.id);
  return (
    <form
      action={() => updateTodoWithId(title, content)}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="font-medium">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="p-1 border-[1px] border-zinc-500"
          onChange={(event: any) => setTitle(event.target.value)}
          required
          defaultValue={title}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="content" className="font-medium">
          Content
        </label>
        <QuillEditor
          value={content}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          className="w-full h-[70%] bg-white block"
        />
      </div>
      <div className="inline-flex gap-5">
        <ButtonSubmit />
        <Link href="/to-do-list">
          <Button variant="destructive" className="hover:brightness-75">
            Cancel
          </Button>
        </Link>
      </div>
    </form>
  );
}
