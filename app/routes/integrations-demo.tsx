export default function IntegrationsDemo() {
  const platforms = [
    {
      id: "meta",
      name: "Meta Ads",
      description: "Connect your Facebook and Instagram ad accounts",
      icon: "📘",
      color: "#1877f2",
      connected: false,
    },
    {
      id: "google",
      name: "Google Ads",
      description: "Connect your Google Ads account for enhanced conversions",
      icon: "🔍",
      color: "#4285f4",
      connected: true,
      accountInfo: "Account: 123-456-7890",
    },
    {
      id: "tiktok",
      name: "TikTok Ads",
      description: "Connect your TikTok for Business account",
      icon: "🎵",
      color: "#ff0050",
      connected: false,
    },
  ];

  return (
    <div style={{ 
      display: "flex", 
      height: "100vh", 
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fafafa"
    }}>
      {/* Left Sidebar */}
      <div style={{
        width: "240px",
        backgroundColor: "#202223",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{
          padding: "20px",
          borderBottom: "1px solid #33363a",
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}>
          <div style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#6366f1",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px"
          }}>
            🛡️
          </div>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>Retarget Blocker</span>
        </div>

        <nav style={{ flex: 1, padding: "20px 0" }}>
          <a href="/app-demo" style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            color: "#b5b5b5",
            textDecoration: "none"
          }}>
            <span>🏠</span>
            <span>Home</span>
          </a>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            color: "#ffffff",
            backgroundColor: "#6366f1",
            borderRight: "3px solid #ffffff"
          }}>
            <span>🔗</span>
            <span>Integrations</span>
          </div>
          
          <a href="/analytics-demo" style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            color: "#b5b5b5",
            textDecoration: "none"
          }}>
            <span>📊</span>
            <span>Analytics</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header style={{
          height: "60px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e1e3e5",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px"
        }}>
          <div style={{ fontSize: "20px", fontWeight: "600", color: "#202223" }}>
            test-shop.myshopify.com
          </div>
          
          <a href="/account-demo" style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 12px",
            backgroundColor: "#f6f6f7",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#202223"
          }}>
            <div style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#6366f1",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: "600",
              fontSize: "14px"
            }}>
              S
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: "500" }}>Store Owner</div>
              <div style={{ fontSize: "12px", color: "#6d7175" }}>Growth Plan</div>
            </div>
          </a>
        </header>

        <main style={{
          flex: 1,
          padding: "24px",
          backgroundColor: "#fafafa",
          overflow: "auto"
        }}>
          <div style={{ maxWidth: "1200px" }}>
            <div style={{ marginBottom: "32px" }}>
              <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#202223", margin: "0 0 8px 0" }}>
                Ad Platform Integrations
              </h1>
              <p style={{ fontSize: "16px", color: "#6d7175", margin: "0" }}>
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
              
              <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                {[30, 60, 90, 120].map((days) => (
                  <div key={days} style={{
                    padding: "12px 16px",
                    backgroundColor: days === 90 ? "#6366f1" : "#f9fafb",
                    color: days === 90 ? "#ffffff" : "#374151",
                    borderRadius: "8px",
                    border: "1px solid #e1e3e5",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer"
                  }}>
                    {days} days
                    {days === 90 && (
                      <span style={{ 
                        fontSize: "12px", 
                        backgroundColor: "#ffffff",
                        color: "#6366f1",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        marginLeft: "8px"
                      }}>
                        Recommended
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              <button style={{
                backgroundColor: "#6366f1",
                color: "#ffffff",
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer"
              }}>
                Update Settings
              </button>
            </div>

            {/* Platforms Grid */}
            <div style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))"
            }}>
              {platforms.map((platform) => (
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
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "500"
                    }}>
                      ✓ Connected
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

                  {/* Action Button */}
                  <button style={{
                    width: "100%",
                    backgroundColor: platform.connected ? "#f9fafb" : platform.color,
                    color: platform.connected ? "#374151" : "#ffffff",
                    padding: "12px",
                    borderRadius: "8px",
                    border: platform.connected ? "1px solid #e1e3e5" : "none",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    marginBottom: "16px"
                  }}>
                    {platform.connected ? "⚙️ Manage Connection" : `🔗 Connect ${platform.name}`}
                  </button>

                  {/* Features List */}
                  <div style={{ paddingTop: "16px", borderTop: "1px solid #e1e3e5" }}>
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
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
