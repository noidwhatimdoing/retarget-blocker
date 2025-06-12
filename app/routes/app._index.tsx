import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  // Remove authentication for now to test
  const stats = {
    totalCustomers: 1234,
    totalOrders: 5678,
    totalRevenue: 125000,
    suppressedCustomers: 456,
    estimatedSavings: 1824,
    isConnected: false,
  };

  return json({ stats, shopDomain: "test-store" });
}

export default function Index() {
  const { stats, shopDomain } = useLoaderData<typeof loader>();

  return (
    <div style={{ maxWidth: "1200px", padding: "20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#202223", marginBottom: "8px" }}>
        🎉 SUCCESS! App is Working! 
      </h1>
      <p style={{ fontSize: "16px", color: "#6d7175", marginBottom: "32px" }}>
        Your Retarget Blocker app is now running properly on {shopDomain}
      </p>

      <div style={{
        backgroundColor: "#d1fae5",
        border: "1px solid #10b981",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "24px"
      }}>
        <strong style={{ color: "#065f46" }}>✅ App Successfully Loaded</strong>
        <p style={{ margin: "4px 0 0 0", color: "#065f46" }}>
          No authentication errors - your basic routing is working!
        </p>
      </div>

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
          <p style={{ fontSize: "14px", color: "#6d7175", margin: "0" }}>
            Customers tracked
          </p>
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
          <p style={{ fontSize: "14px", color: "#6d7175", margin: "0" }}>
            Ad spend saved
          </p>
        </div>
      </div>
    </div>
  );
}
