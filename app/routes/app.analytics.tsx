import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  // Remove authentication temporarily - generate sample data
  const generateChartData = (type: "weekly" | "monthly" | "yearly") => {
    const now = new Date();
    const data = [];
    
    if (type === "weekly") {
      // Last 7 days
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const users = Math.floor(Math.random() * 50) + 10;
        data.push({
          period: date.toLocaleDateString('en-US', { weekday: 'short' }),
          users,
          savings: users * 4
        });
      }
    } else if (type === "monthly") {
      // Last 6 months
      for (let i = 5; i >= 0; i--) {
        const date = new Date(now);
        date.setMonth(date.getMonth() - i);
        const users = Math.floor(Math.random() * 1000) + 200;
        data.push({
          period: date.toLocaleDateString('en-US', { month: 'short' }),
          users,
          savings: users * 4
        });
      }
    } else {
      // Last 3 years
      for (let i = 2; i >= 0; i--) {
        const date = new Date(now);
        date.setFullYear(date.getFullYear() - i);
        const users = Math.floor(Math.random() * 10000) + 2000;
        data.push({
          period: date.getFullYear().toString(),
          users,
          savings: users * 4
        });
      }
    }
    
    return data;
  };

  const weeklyData = generateChartData("weekly");
  const monthlyData = generateChartData("monthly");
  const yearlyData = generateChartData("yearly");

  return json({ weeklyData, monthlyData, yearlyData });
}

export default function Analytics() {
  const { weeklyData, monthlyData, yearlyData } = useLoaderData<typeof loader>();
  const [usersTimeframe, setUsersTimeframe] = useState<"weekly" | "monthly" | "yearly">("weekly");
  const [savingsTimeframe, setSavingsTimeframe] = useState<"weekly" | "monthly" | "yearly">("weekly");

  const getUsersData = () => {
    switch (usersTimeframe) {
      case "weekly": return weeklyData;
      case "monthly": return monthlyData;
      case "yearly": return yearlyData;
    }
  };

  const getSavingsData = () => {
    switch (savingsTimeframe) {
      case "weekly": return weeklyData;
      case "monthly": return monthlyData;
      case "yearly": return yearlyData;
    }
  };

  const LineChart = ({ data, dataKey, color, title }: any) => {
    const maxValue = Math.max(...data.map((d: any) => d[dataKey]));
    const points = data.map((item: any, index: number) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (item[dataKey] / maxValue) * 80;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div style={{ position: "relative", height: "300px", width: "100%" }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          
          {/* Line */}
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={points}
          />
          
          {/* Points */}
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
        
        {/* Y-axis labels */}
        <div style={{ position: "absolute", left: "-50px", top: "0", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", fontSize: "12px", color: "#6d7175" }}>
          <span>{maxValue.toLocaleString()}</span>
          <span>{Math.round(maxValue * 0.5).toLocaleString()}</span>
          <span>0</span>
        </div>
        
        {/* X-axis labels */}
        <div style={{ position: "absolute", bottom: "-30px", left: "0", width: "100%", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6d7175" }}>
          {data.map((item: any, index: number) => (
            <span key={index}>{item.period}</span>
          ))}
        </div>
      </div>
    );
  };

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
          Analytics Dashboard
        </h1>
        <p style={{ 
          fontSize: "16px", 
          color: "#6d7175", 
          margin: "0" 
        }}>
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
                Number of customers suppressed from ads per {usersTimeframe.slice(0, -2)}
              </p>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {["weekly", "monthly", "yearly"].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setUsersTimeframe(timeframe as any)}
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
              data={getUsersData()} 
              dataKey="users" 
              color="#6366f1" 
              title="Users Suppressed"
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
                  onClick={() => setSavingsTimeframe(timeframe as any)}
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
              data={getSavingsData()} 
              dataKey="savings" 
              color="#059669" 
              title="Money Saved"
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
  );
}
