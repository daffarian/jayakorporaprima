import { fetchPostById } from '@/lib/data';
import EditForm from '@/components/form/form-article/edit-form';
export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const [postById]:any = await fetchPostById(id);
  return (
    <div className="flex flex-col py-20 container">
      <EditForm postById={postById}></EditForm>
    </div>
  );
}
