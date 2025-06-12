import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader() {
  return json({
    message: "Test route working!",
    timestamp: new Date().toISOString(),
  });
}

export default function Test() {
  const data = useLoaderData<typeof loader>();
  
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Test Page</h1>
      <p>Message: {data.message}</p>
      <p>Time: {data.timestamp}</p>
      <p>If you can see this, the basic Remix app is working!</p>
    </div>
  );
}
