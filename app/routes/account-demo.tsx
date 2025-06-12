export default function AccountDemo() {
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
        padding: "20px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "30px" }}>
          <div style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#6366f1",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            🛡️
          </div>
          <span style={{ fontWeight: "600" }}>Retarget Blocker</span>
        </div>

        <nav>
          <a href="/app-demo" style={{
            display: "block",
            padding: "12px",
            color: "#b5b5b5",
            textDecoration: "none",
            marginBottom: "8px"
          }}>
            🏠 Home
          </a>
          <a href="/integrations-demo" style={{
            display: "block",
            padding: "12px",
            color: "#b5b5b5",
            textDecoration: "none",
            marginBottom: "8px"
          }}>
            🔗 Integrations
          </a>
          <a href="/analytics-demo" style={{
            display: "block",
            padding: "12px",
            color: "#b5b5b5",
            textDecoration: "none",
            marginBottom: "8px"
          }}>
            📊 Analytics
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Account Settings</h1>
        
        <div style={{ display: "grid", gap: "30px", maxWidth: "600px" }}>
          {/* Account Info */}
          <div style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #e1e3e5"
          }}>
            <h2 style={{ marginBottom: "20px" }}>Account Information</h2>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Store Name</label>
              <input 
                type="text" 
                defaultValue="test-shop.myshopify.com"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #e1e3e5",
                  borderRadius: "8px"
                }}
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Email</label>
              <input 
                type="email" 
                defaultValue="owner@test-shop.myshopify.com"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #e1e3e5",
                  borderRadius: "8px"
                }}
              />
            </div>
            <button style={{
              backgroundColor: "#6366f1",
              color: "#ffffff",
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}>
              Save Changes
            </button>
          </div>

          {/* Subscription */}
          <div style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #e1e3e5"
          }}>
            <h2 style={{ marginBottom: "20px" }}>Subscription</h2>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <span>Current Plan:</span>
              <strong>Growth Plan</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <span>Status:</span>
              <span style={{ color: "#059669" }}>Active</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <span>Price:</span>
              <strong>$49/month</strong>
            </div>
            <button style={{
              backgroundColor: "#6366f1",
              color: "#ffffff",
              padding: "10px 16px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginRight: "10px"
            }}>
              Change Plan
            </button>
            <button style={{
              backgroundColor: "#ffffff",
              color: "#dc2626",
              padding: "10px 16px",
              border: "1px solid #e1e3e5",
              borderRadius: "8px",
              cursor: "pointer"
            }}>
              Cancel
            </button>
          </div>

          {/* Navigation */}
          <div style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #e1e3e5"
          }}>
            <h2 style={{ marginBottom: "16px" }}>🎉 Demo Complete!</h2>
            <p style={{ marginBottom: "20px", color: "#6d7175" }}>
              Navigate between all demo pages:
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/app-demo" style={{
                backgroundColor: "#6366f1",
                color: "#ffffff",
                padding: "10px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px"
              }}>
                🏠 Home
              </a>
              <a href="/integrations-demo" style={{
                backgroundColor: "#059669",
                color: "#ffffff",
                padding: "10px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px"
              }}>
                🔗 Integrations
              </a>
              <a href="/analytics-demo" style={{
                backgroundColor: "#dc2626",
                color: "#ffffff",
                padding: "10px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px"
              }}>
                📊 Analytics
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

