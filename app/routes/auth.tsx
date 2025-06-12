import { LoaderFunctionArgs, redirect } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");
  
  console.log("=== MANUAL AUTH START ===");
  console.log("Shop:", shop);
  console.log("Request URL:", request.url);
  
  if (!shop) {
    return new Response(`
      <html>
        <body style="font-family: Arial; padding: 40px;">
          <h1>🎯 Retarget Blocker - Missing Shop</h1>
          <p style="color: red;">Missing shop parameter!</p>
          <p>Try: <a href="/auth?shop=test-store-76000.myshopify.com">test-store-76000.myshopify.com</a></p>
        </body>
      </html>
    `, { 
      status: 400,
      headers: { "Content-Type": "text/html" }
    });
  }
  
  // Manual OAuth URL construction
  const clientId = process.env.SHOPIFY_API_KEY;
  const redirectUri = "http://localhost:3000/auth/callback";
  
  const oauthUrl = `https://${shop}/admin/oauth/authorize?` + new URLSearchParams({
    client_id: clientId || '',
    scope: '',
    redirect_uri: redirectUri,
    state: 'test123',
  }).toString();
  
  console.log("🚀 MANUAL OAUTH REDIRECT:", oauthUrl);
  console.log("🔑 Client ID:", clientId);
  
  return redirect(oauthUrl);
}
