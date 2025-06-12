export default function AppDemo() {
  const stats = {
    totalCustomers: 1234,
    suppressedCustomers: 456,
    totalRevenue: 125000,
    estimatedSavings: 1824,
  };

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
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            color: "#ffffff",
            backgroundColor: "#6366f1",
            borderRight: "3px solid #ffffff"
          }}>
            <span>🏠</span>
            <span>Home</span>
          </div>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            color: "#b5b5b5"
          }}>
            <span>🔗</span>
            <span>Integrations</span>
          </div>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            color: "#b5b5b5"
          }}>
            <span>📊</span>
            <span>Analytics</span>
          </div>
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
          
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 12px",
            backgroundColor: "#f6f6f7",
            borderRadius: "8px"
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
          </div>
        </header>

        <main style={{
          flex: 1,
          padding: "24px",
          backgroundColor: "#fafafa"
        }}>
          <div style={{ maxWidth: "1200px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#202223", marginBottom: "8px" }}>
              Welcome back! 👋
            </h1>
            <p style={{ fontSize: "16px", color: "#6d7175", marginBottom: "32px" }}>
              Here's how Retarget Blocker is saving you money
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
              marginBottom: "32px"
            }}>
              <div style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #e1e3e5",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
              }}>
                <h3 style={{ fontSize: "14px", color: "#6d7175", margin: "0 0 16px 0" }}>TOTAL CUSTOMERS</h3>
                <div style={{ fontSize: "32px", fontWeight: "700", color: "#202223", marginBottom: "8px" }}>
                  {stats.totalCustomers.toLocaleString()}
                </div>
                <p style={{ fontSize: "14px", color: "#6d7175", margin: "0" }}>Customers tracked</p>
              </div>

              <div style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #e1e3e5",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
              }}>
                <h3 style={{ fontSize: "14px", color: "#6d7175", margin: "0 0 16px 0" }}>SUPPRESSED CUSTOMERS</h3>
                <div style={{ fontSize: "32px", fontWeight: "700", color: "#6366f1", marginBottom: "8px" }}>
                  {stats.suppressedCustomers.toLocaleString()}
                </div>
                <p style={{ fontSize: "14px", color: "#6d7175", margin: "0" }}>Blocked from ads</p>
              </div>

              <div style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #e1e3e5",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
              }}>
                <h3 style={{ fontSize: "14px", color: "#6d7175", margin: "0 0 16px 0" }}>TOTAL REVENUE</h3>
                <div style={{ fontSize: "32px", fontWeight: "700", color: "#059669", marginBottom: "8px" }}>
                  ${stats.totalRevenue.toLocaleString()}
                </div>
                <p style={{ fontSize: "14px", color: "#6d7175", margin: "0" }}>Total sales</p>
              </div>

              <div style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #e1e3e5",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
              }}>
                <h3 style={{ fontSize: "14px", color: "#6d7175", margin: "0 0 16px 0" }}>ESTIMATED SAVINGS</h3>
                <div style={{ fontSize: "32px", fontWeight: "700", color: "#dc2626", marginBottom: "8px" }}>
                  ${stats.estimatedSavings.toLocaleString()}
                </div>
                <p style={{ fontSize: "14px", color: "#6d7175", margin: "0" }}>Ad spend saved</p>
              </div>
            </div>

            <div style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "32px",
              border: "1px solid #e1e3e5",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#202223", marginBottom: "24px" }}>
                🎉 Your Complete Retarget Blocker UI is Working!
              </h2>
              <p style={{ marginBottom: "16px", color: "#6d7175" }}>
                This is exactly what your dashboard will look like. All the navigation, stats, and styling are working perfectly.
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                <a href="/simple" style={{
                  backgroundColor: "#6366f1",
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "500"
                }}>
                  View Simple Version
                </a>
                <a href="/test" style={{
                  backgroundColor: "#059669",
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "500"
                }}>
                  View Test Page
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
