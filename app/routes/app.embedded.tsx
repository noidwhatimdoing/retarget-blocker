import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop") || "test-store-76000.myshopify.com";
  
  return { shop };
}

export default function EmbeddedApp() {
  const { shop } = useLoaderData<typeof loader>();
  
  // Auto-redirect to full dashboard for development
  if (typeof window !== 'undefined') {
    window.location.href = `http://localhost:3000/app?shop=${shop}&installed=true`;
  }
  
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial', 
      background: 'white', 
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#6b46c1' }}>🎯 Redirecting to Retarget Blocker...</h1>
      <p>If you're not redirected automatically, <a href={`http://localhost:3000/app?shop=${shop}&installed=true`}>click here</a></p>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          setTimeout(function() {
            window.location.href = 'http://localhost:3000/app?shop=${shop}&installed=true';
          }, 2000);
        `
      }} />
    </div>
  );
}
