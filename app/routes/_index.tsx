import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop") || "";
  
  return json({ shop });
}

export default function Index() {
  const { shop } = useLoaderData<typeof loader>();
  
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎯 Retarget Blocker</h1>
      <p>Stop wasting ad spend on customers who already bought!</p>
      
      <Form method="get" action="/auth">
        <input 
          type="text" 
          name="shop" 
          placeholder="your-store.myshopify.com"
          defaultValue={shop}
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Install App
        </button>
      </Form>
      
      <p style={{ marginTop: "20px", color: "#666" }}>
        <strong>For testing:</strong> Use "test-store-76000.myshopify.com"
      </p>
    </div>
  );
}
