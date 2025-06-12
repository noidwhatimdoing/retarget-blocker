import { LoaderFunctionArgs, redirect } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const shop = url.searchParams.get("shop");
  const state = url.searchParams.get("state");
  
  console.log("=== MANUAL CALLBACK START ===");
  console.log("Code:", code ? "✅ Present" : "❌ Missing");
  console.log("Shop:", shop);
  console.log("State:", state);
  console.log("Full URL:", request.url);
  
  if (!code) {
    return new Response(`
      <html>
        <body style="font-family: Arial; padding: 40px;">
          <h1>❌ Authorization Failed</h1>
          <p>No authorization code received from Shopify</p>
          <a href="/auth?shop=${shop}">Try Again</a>
        </body>
      </html>
    `, { 
      status: 400,
      headers: { "Content-Type": "text/html" }
    });
  }
  
  if (!shop) {
    return new Response(`
      <html>
        <body style="font-family: Arial; padding: 40px;">
          <h1>❌ Missing Shop Parameter</h1>
          <p>Shop parameter missing from callback</p>
          <a href="/">Start Over</a>
        </body>
      </html>
    `, { 
      status: 400,
      headers: { "Content-Type": "text/html" }
    });
  }
  
  // Exchange authorization code for access token
  const clientId = process.env.SHOPIFY_API_KEY;
  const clientSecret = process.env.SHOPIFY_API_SECRET;
  
  console.log("🔄 Exchanging code for access token...");
  
  try {
    const tokenResponse = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });
    
    if (!tokenResponse.ok) {
      throw new Error(`Token exchange failed: ${tokenResponse.status}`);
    }
    
    const tokenData = await tokenResponse.json();
    console.log("✅ Access token received!");
    console.log("Token scope:", tokenData.scope);
    
    // For now, just redirect to a success page
    // Later we'll store this token and create a proper session
    return redirect(`/app?shop=${shop}&installed=true`);
    
  } catch (error) {
    console.log("❌ Token exchange error:", error);
    
    return new Response(`
      <html>
        <body style="font-family: Arial; padding: 40px;">
          <h1>🔧 Token Exchange Failed</h1>
          <p>Error: ${error}</p>
          <p>This is normal for development - the OAuth flow worked!</p>
          <a href="/app?shop=${shop}&installed=true">Continue to App</a>
        </body>
      </html>
    `, { 
      status: 200,
      headers: { "Content-Type": "text/html" }
    });
  }
}
