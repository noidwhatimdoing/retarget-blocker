export default function WorkingTest() {
  return (
    <div style={{ padding: "40px", textAlign: "center", backgroundColor: "#f0f9ff" }}>
      <h1 style={{ color: "#1e40af", fontSize: "32px" }}>🎉 SUCCESS!</h1>
      <p style={{ fontSize: "18px", color: "#374151" }}>This route is working perfectly!</p>
      <div style={{ marginTop: "20px" }}>
        <a href="/auth/login" style={{ 
          backgroundColor: "#6366f1", 
          color: "white", 
          padding: "12px 24px", 
          textDecoration: "none", 
          borderRadius: "8px" 
        }}>
          Back to Auth
        </a>
      </div>
    </div>
  );
}
