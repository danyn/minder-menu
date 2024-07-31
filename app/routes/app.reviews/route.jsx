import { authenticate } from "../../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function Review() {
  return (
    <div className="Review">
      <p>Add a Review Metaobject to your store</p>
      <p>OK</p>
    </div>
  );
}