'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { submitTodo } from '@/lib/action';
import { quillFormats, quillModules } from '@/components/Editor';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { useFormStatus } from 'react-dom';
import { ButtonSubmit } from '@/components/Button';

export default function CreateForm() {
  // State RichText
  const [content, setContent] = useState('');
  // State Title
  const [title, setTitle] = useState();
  // Handle Editore Change
  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  return (
    <form
      action={() => submitTodo(title, content)}
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
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="content" className="font-medium">
          Content
        </label>
        {/* Quill Editor */}
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
          <Button variant="destructive" type="submit">
            Cancel
          </Button>
        </Link>
      </div>
    </form>
  );
}
