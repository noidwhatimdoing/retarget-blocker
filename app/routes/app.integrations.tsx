import { json, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  // Remove authentication temporarily - use mock data
  const integrations = {
    meta: {
      connected: false,
      accountId: null,
      suppressionDays: 90,
    },
    google: {
      connected: false,
      customerId: null,
      suppressionDays: 90,
    },
    tiktok: {
      connected: false,
      advertiserId: null,
      suppressionDays: 90,
    },
  };

  const suppressionWindow = 90;

  return json({ integrations, suppressionWindow });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const action = formData.get("_action");

  if (action === "updateWindow") {
    const days = parseInt(formData.get("days") as string);
    console.log("Suppression window updated to:", days);
  }

  return json({ success: true });
}

export default function Integrations() {
  const { integrations, suppressionWindow } = useLoaderData<typeof loader>();

  const platforms = [
    {
      id: "meta" as const,
      name: "Meta Ads",
      description: "Connect your Facebook and Instagram ad accounts",
      icon: "📘",
      color: "#1877f2",
      connected: integrations.meta.connected,
      accountInfo: integrations.meta.accountId ? `Account: ${integrations.meta.accountId}` : null,
    },
    {
      id: "google" as const,
      name: "Google Ads",
      description: "Connect your Google Ads account for enhanced conversions",
      icon: "🔍",
      color: "#4285f4",
      connected: integrations.google.connected,
      accountInfo: integrations.google.customerId ? `Customer ID: ${integrations.google.customerId}` : null,
    },
    {
      id: "tiktok" as const,
      name: "TikTok Ads",
      description: "Connect your TikTok for Business account",
      icon: "🎵",
      color: "#ff0050",
      connected: integrations.tiktok.connected,
      accountInfo: integrations.tiktok.advertiserId ? `Advertiser ID: ${integrations.tiktok.advertiserId}` : null,
    },
  ];

  return (
    <div style={{ maxWidth: "1200px" }}>
      {/* Page Header */}
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ 
          fontSize: "28px", 
          fontWeight: "600", 
          color: "#202223", 
          margin: "0 0 8px 0" 
        }}>
          Ad Platform Integrations
        </h1>
        <p style={{ 
          fontSize: "16px", 
          color: "#6d7175", 
          margin: "0" 
        }}>
          Connect your ad platforms to start suppressing customers who already purchased
        </p>
      </div>

      {/* Suppression Window Settings */}
      <div style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        border: "1px solid #e1e3e5",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        marginBottom: "32px"
      }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#202223", marginBottom: "16px" }}>
          Suppression Settings
        </h2>
        <p style={{ fontSize: "14px", color: "#6d7175", marginBottom: "24px" }}>
          How long should customers be suppressed from ads after making a purchase?
        </p>
        
        <Form method="post" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <input type="hidden" name="_action" value="updateWindow" />
          
          <div style={{ display: "flex", gap: "12px" }}>
            {[30, 60, 90, 120].map((days) => (
              <label key={days} style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 16px",
                backgroundColor: suppressionWindow === days ? "#6366f1" : "#f9fafb",
                color: suppressionWindow === days ? "#ffffff" : "#374151",
                borderRadius: "8px",
                border: "1px solid #e1e3e5",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500"
              }}>
                <input
                  type="radio"
                  name="days"
                  value={days}
                  defaultChecked={suppressionWindow === days}
                  style={{ display: "none" }}
                />
                {days} days
                {days === 90 && (
                  <span style={{ 
                    fontSize: "12px", 
                    backgroundColor: suppressionWindow === 90 ? "#ffffff" : "#6366f1",
                    color: suppressionWindow === 90 ? "#6366f1" : "#ffffff",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    marginLeft: "4px"
                  }}>
                    Recommended
                  </span>
                )}
              </label>
            ))}
          </div>
          
          <button
            type="submit"
            style={{
              backgroundColor: "#6366f1",
              color: "#ffffff",
              padding: "12px 20px",
              borderRadius: "8px",
              border: "none",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer"
            }}
          >
            Update Settings
          </button>
        </Form>
      </div>

      {/* Platforms Grid */}
      <div style={{
        display: "grid",
        gap: "24px",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))"
      }}>
        {platforms.map((platform) => {
          // Type-safe way to get the integration data
          const platformIntegration = integrations[platform.id];
          
          return (
            <div
              key={platform.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #e1e3e5",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                position: "relative"
              }}
            >
              {/* Connection Status Badge */}
              {platform.connected && (
                <div style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                  padding: "4px 12px",
                  borderRadius: "16px",
                  fontSize: "12px",
                  fontWeight: "600"
                }}>
                  Active
                </div>
              )}

              {/* Platform Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: platform.color,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px"
                }}>
                  {platform.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#202223", margin: "0 0 4px 0" }}>
                    {platform.name}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6d7175", margin: "0" }}>
                    {platform.description}
                  </p>
                </div>
              </div>

              {/* Account Info */}
              {platform.connected && platform.accountInfo && (
                <div style={{
                  backgroundColor: "#f0f9ff",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  fontSize: "14px",
                  color: "#0369a1"
                }}>
                  {platform.accountInfo}
                </div>
              )}

              {/* Individual Suppression Settings */}
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "14px", fontWeight: "600", color: "#202223", marginBottom: "8px" }}>
                  Suppression Duration
                </h4>
                <p style={{ fontSize: "13px", color: "#6d7175", marginBottom: "12px" }}>
                  How long should customers be excluded from ads after purchase?
                </p>
                
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                  {[30, 60, 90, 120].map((days) => (
                    <label key={`${platform.id}-${days}`} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 12px",
                      backgroundColor: days === platformIntegration.suppressionDays ? platform.color : "#f9fafb",
                      color: days === platformIntegration.suppressionDays ? "#ffffff" : "#374151",
                      borderRadius: "6px",
                      border: "1px solid #e1e3e5",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: "500",
                      minWidth: "fit-content"
                    }}>
                      <input
                        type="radio"
                        name={`${platform.id}-suppression`}
                        value={days}
                        defaultChecked={days === platformIntegration.suppressionDays}
                        style={{ display: "none" }}
                      />
                      {days} days
                      {days === 90 && (
                        <span style={{ 
                          fontSize: "10px", 
                          backgroundColor: days === platformIntegration.suppressionDays ? "#ffffff" : platform.color,
                          color: days === platformIntegration.suppressionDays ? platform.color : "#ffffff",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          marginLeft: "4px"
                        }}>
                          Rec
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* View Audience Button */}
              <div style={{ marginBottom: "16px" }}>
                <button
                  onClick={() => {
                    if (platform.connected) {
                      // These would be real URLs once connected
                      const audienceUrls: Record<string, string> = {
                        meta: "https://business.facebook.com/adsmanager/audiences/",
                        google: "https://ads.google.com/aw/audiences/",
                        tiktok: "https://ads.tiktok.com/i18n/audiences/"
                      };
                      window.open(audienceUrls[platform.id], '_blank');
                    } else {
                      alert(`Connect ${platform.name} first to view suppression audience`);
                    }
                  }}
                  style={{
                    width: "100%",
                    backgroundColor: platform.connected ? "#f8fafc" : "#f1f5f9",
                    color: platform.connected ? "#374151" : "#94a3b8",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    border: "1px solid #e2e8f0",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: platform.connected ? "pointer" : "not-allowed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.2s ease"
                  }}
                  disabled={!platform.connected}
                >
                  <span>{platform.connected ? "🔗" : "⏳"}</span>
                  {platform.connected ? "View Suppression Audience" : "Audience will appear after connection"}
                </button>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  if (platform.connected) {
                    alert(`Disconnect ${platform.name}? This will stop suppressing customers on this platform.`);
                  } else {
                    alert(`Redirecting to ${platform.name} authentication...`);
                  }
                }}
                style={{
                  width: "100%",
                  backgroundColor: platform.connected ? "#f9fafb" : platform.color,
                  color: platform.connected ? "#374151" : "#ffffff",
                  padding: "12px",
                  borderRadius: "8px",
                  border: platform.connected ? "1px solid #e1e3e5" : "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginBottom: "16px"
                }}
              >
                {platform.connected ? (
                  <>
                    <span>⚙️</span>
                    Manage Connection
                  </>
                ) : (
                  <>
                    <span>🔗</span>
                    Connect {platform.name}
                  </>
                )}
              </button>

              {/* Features List */}
              <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #e1e3e5" }}>
                <h4 style={{ fontSize: "14px", fontWeight: "500", color: "#202223", marginBottom: "8px" }}>
                  What this enables:
                </h4>
                <ul style={{ 
                  fontSize: "13px", 
                  color: "#6d7175", 
                  margin: "0", 
                  paddingLeft: "16px",
                  lineHeight: "1.5"
                }}>
                  <li>Automatic customer suppression after purchase</li>
                  <li>Custom audience sync</li>
                  <li>Campaign spend optimization</li>
                  <li>ROI tracking and reporting</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Help Section */}
      <div style={{
        backgroundColor: "#f9fafb",
        borderRadius: "12px",
        padding: "24px",
        border: "1px solid #e1e3e5",
        marginTop: "32px"
      }}>
        <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#202223", marginBottom: "12px" }}>
          Need help connecting your accounts?
        </h3>
        <p style={{ fontSize: "14px", color: "#6d7175", marginBottom: "16px" }}>
          Our step-by-step guides will walk you through connecting each platform safely and securely.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => alert("Setup guides coming soon!")}
            style={{
              color: "#6366f1",
              background: "none",
              border: "none",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              textDecoration: "underline"
            }}
          >
            📖 View Setup Guides
          </button>
          <button
            onClick={() => alert("Contact support at help@retargetblocker.com")}
            style={{
              color: "#6366f1",
              background: "none", 
              border: "none",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              textDecoration: "underline"
            }}
          >
            💬 Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}