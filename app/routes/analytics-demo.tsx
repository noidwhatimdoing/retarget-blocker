import { useState } from "react";

export default function AnalyticsDemo() {
  const [usersTimeframe, setUsersTimeframe] = useState("weekly");
  const [savingsTimeframe, setSavingsTimeframe] = useState("weekly");

  // Sample data for charts
  const weeklyData = [
    { period: "Mon", users: 23, savings: 92 },
    { period: "Tue", users: 45, savings: 180 },
    { period: "Wed", users: 31, savings: 124 },
    { period: "Thu", users: 52, savings: 208 },
    { period: "Fri", users: 38, savings: 152 },
    { period: "Sat", users: 29, savings: 116 },
    { period: "Sun", users: 41, savings: 164 },
  ];

  const monthlyData = [
    { period: "Jan", users: 890, savings: 3560 },
    { period: "Feb", users: 1205, savings: 4820 },
    { period: "Mar", users: 1156, savings: 4624 },
    { period: "Apr", users: 1389, savings: 5556 },
    { period: "May", users: 1502, savings: 6008 },
    { period: "Jun", users: 1234, savings: 4936 },
  ];

  const LineChart = ({ data, dataKey, color }: any) => {
    const maxValue = Math.max(...data.map((d: any) => d[dataKey]));
    const points = data.map((item: any, index: number) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (item[dataKey] / maxValue) * 80;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div style={{ position: "relative", height: "300px", width: "100%" }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={points}
          />
          
          {data.map((item: any, index: number) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - (item[dataKey] / maxValue) * 80;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill={color}
              />
            );
          })}
        </svg>
        
        <div style={{ position: "absolute", left: "-50px", top: "0", height: "100%", display: "flex", flexDirection: "column", 
justifyContent: "space-between", fontSize: "12px", color: "#6d7175" }}>
          <span>{maxValue.toLocaleString()}</span>
          <span>{Math.round(maxValue * 0.5).toLocaleString()}</span>
          <span>0</span>
        </div>
        
        <div style={{ position: "absolute", bottom: "-30px", left: "0", width: "100%", display: "flex", justifyContent: 
"space-between", fontSize: "12px", color: "#6d7175" }}>
          {data.map((item: any, index: number) => (
            <span key={index}>{item.period}</span>
          ))}
        </div>
      </div>
    );
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
          
          <a href="/integrations-demo" style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            color: "#b5b5b5",
            textDecoration: "none"
          }}>
            <span>🔗</span>
            <span>Integrations</span>
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
                Analytics Dashboard
              </h1>
              <p style={{ fontSize: "16px", color: "#6d7175", margin: "0" }}>
                Track your suppression performance and ad spend savings over time
              </p>
            </div>

            {/* Charts Grid */}
            <div style={{ display: "grid", gap: "32px" }}>
              {/* Users Added Chart */}
              <div style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #e1e3e5",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <div>
                    <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#202223", margin: "0 0 4px 0" }}>
                      Users Added to Suppression
                    </h2>
                    <p style={{ fontSize: "14px", color: "#6d7175", margin: "0" }}>
                      Number of customers suppressed from ads per day
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {["weekly", "monthly", "yearly"].map((timeframe) => (
                      <button
                        key={timeframe}
                        onClick={() => setUsersTimeframe(timeframe)}
                        style={{
                          padding: "8px 16px",
                          borderRadius: "6px",
                          border: "1px solid #e1e3e5",
                          backgroundColor: usersTimeframe === timeframe ? "#6366f1" : "#ffffff",
                          color: usersTimeframe === timeframe ? "#ffffff" : "#374151",
                          fontSize: "14px",
                          fontWeight: "500",
                          cursor: "pointer",
                          textTransform: "capitalize"
                        }}
                      >
                        {timeframe.slice(0, -2)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div style={{ position: "relative", paddingLeft: "60px", paddingBottom: "40px" }}>
                  <LineChart 
                    data={usersTimeframe === "weekly" ? weeklyData : monthlyData} 
                    dataKey="users" 
                    color="#6366f1"
                  />
                </div>
              </div>

              {/* Money Saved Chart */}
              <div style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #e1e3e5",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <div>
                    <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#202223", margin: "0 0 4px 0" }}>
                      Estimated Money Saved
                    </h2>
                    <p style={{ fontSize: "14px", color: "#6d7175", margin: "0" }}>
                      Ad spend saved by suppressing customers (estimated at $4 per customer)
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {["weekly", "monthly", "yearly"].map((timeframe) => (
                      <button
                        key={timeframe}
                        onClick={() => setSavingsTimeframe(timeframe)}
                        style={{
                          padding: "8px 16px",
                          borderRadius: "6px",
                          border: "1px solid #e1e3e5",
                          backgroundColor: savingsTimeframe === timeframe ? "#059669" : "#ffffff",
                          color: savingsTimeframe === timeframe ? "#ffffff" : "#374151",
                          fontSize: "14px",
                          fontWeight: "500",
                          cursor: "pointer",
                          textTransform: "capitalize"
                        }}
                      >
                        {timeframe.slice(0, -2)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div style={{ position: "relative", paddingLeft: "60px", paddingBottom: "40px" }}>
                  <LineChart 
                    data={savingsTimeframe === "weekly" ? weeklyData : monthlyData} 
                    dataKey="savings" 
                    color="#059669"
                  />
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginTop: "32px"
            }}>
              {[
                { label: "Total Users Suppressed", value: "2,847", icon: "👥" },
                { label: "Total Savings", value: "$11,388", icon: "💰" },
                { label: "Average Daily Savings", value: "$127", icon: "📈" },
                { label: "Best Day", value: "$284", icon: "🏆" },
              ].map((stat, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    padding: "20px",
                    border: "1px solid #e1e3e5",
                    textAlign: "center"
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>{stat.icon}</div>
                  <div style={{ fontSize: "24px", fontWeight: "700", color: "#202223", marginBottom: "4px" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "13px", color: "#6d7175" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
