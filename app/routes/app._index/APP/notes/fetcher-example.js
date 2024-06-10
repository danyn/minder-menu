import { redirect } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";


export const action = async ({
  request,
}) => {
  const formData = await request.formData();
  console.log('received the form data : ', formData)
  return redirect(`/thanks`);
};

export default function NewProject() {
  const fetcher = useFetcher();

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    formData.set('hello', 'world');
    fetcher.submit(formData, { method: "post" })
  }

  return (
    <form method="post" onSubmit={submit}>
      <p>
        <label>
          Name: <input name="name" type="text" />
        </label>
      </p>
      <p>
        <label>
          Description:
          <br />
          <textarea name="description" />
        </label>
      </p>
      <p>
        <button type="submit">Create</button>
      </p>
    </form>
  );
}