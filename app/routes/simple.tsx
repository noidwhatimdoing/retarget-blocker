export default function Simple() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "blue", fontSize: "2em" }}>🎯 Retarget Blocker Dashboard</h1>
      <p style={{ fontSize: "1.2em", marginBottom: "30px" }}>Stop wasting ad spend on existing customers!</p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: "20px",
        marginBottom: "30px"
      }}>
        <div style={{ 
          background: "lightblue", 
          padding: "20px", 
          borderRadius: "8px",
          textAlign: "center"
        }}>
          <h3>Total Customers</h3>
          <div style={{ fontSize: "2em", fontWeight: "bold" }}>1,234</div>
        </div>
        
        <div style={{ 
          background: "lightgreen", 
          padding: "20px", 
          borderRadius: "8px",
          textAlign: "center"
        }}>
          <h3>Total Orders</h3>
          <div style={{ fontSize: "2em", fontWeight: "bold" }}>5,678</div>
        </div>
        
        <div style={{ 
          background: "lightcoral", 
          padding: "20px", 
          borderRadius: "8px",
          textAlign: "center"
        }}>
          <h3>Revenue Saved</h3>
          <div style={{ fontSize: "2em", fontWeight: "bold" }}>$12,345</div>
        </div>
      </div>
      
      <div style={{ background: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
        <h3>Ad Platform Status</h3>
        <p>✅ If you can see this colorful dashboard, your app is working!</p>
        <p>❌ Meta Ads: Not Connected</p>
        <p>❌ Google Ads: Not Connected</p>
        <p>❌ TikTok Ads: Not Connected</p>
      </div>
    </div>
  );
}
