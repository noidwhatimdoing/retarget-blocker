import { json, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { authenticate } from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { session } = await authenticate.admin(request);
  
  const userData = {
    shop: session.shop,
    email: "owner@" + session.shop,
    name: "Store Owner",
    subscription: {
      plan: "Growth Plan",
      status: "Active",
      nextBilling: "2024-07-15",
      price: "$49/month"
    },
    billing: {
      method: "Visa ending in 4242",
      address: "123 Commerce St, San Francisco, CA 94102"
    }
  };

  return json({ userData });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const action = formData.get("_action");
  console.log("Form action:", action);
  return json({ success: true });
}

export default function Account() {
  const { userData } = useLoaderData<typeof loader>();

  return (
    <div style={{ maxWidth: "800px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#202223", margin: "0 0 8px 0" }}>
          Account Settings
        </h1>
        <p style={{ fontSize: "16px", color: "#6d7175", margin: "0" }}>
          Manage your subscription, billing, and account information
        </p>
      </div>

      <div style={{ display: "grid", gap: "32px" }}>
        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "24px",
          border: "1px solid #e1e3e5",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#202223", marginBottom: "24px" }}>
            Account Information
          </h2>
          
          <Form method="post" style={{ display: "grid", gap: "20px" }}>
            <input type="hidden" name="_action" value="updateAccount" />
            
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#202223", marginBottom: "8px" }}>
                Store Name
              </label>
              <input
                type="text"
                name="storeName"
                defaultValue={userData.shop}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #e1e3e5",
                  borderRadius: "8px",
                  fontSize: "14px",
                  backgroundColor: "#f9fafb"
                }}
                readOnly
              />
            </div>
            
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#202223", marginBottom: "8px" }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                defaultValue={userData.email}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #e1e3e5",
                  borderRadius: "8px",
                  fontSize: "14px"
                }}
              />
            </div>
            
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#202223", marginBottom: "8px" }}>
                Account Owner Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={userData.name}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #e1e3e5",
                  borderRadius: "8px",
                  fontSize: "14px"
                }}
              />
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
                cursor: "pointer",
                justifySelf: "start"
              }}
            >
              Save Changes
            </button>
          </Form>
        </div>

        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "24px",
          border: "1px solid #e1e3e5",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#202223", marginBottom: "24px" }}>
            Subscription Details
          </h2>
          
          <div style={{ display: "grid", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", color: "#6d7175" }}>Current Plan</span>
              <span style={{ fontSize: "14px", fontWeight: "500", color: "#202223" }}>{userData.subscription.plan}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", color: "#6d7175" }}>Status</span>
              <span style={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#059669",
                backgroundColor: "#d1fae5",
                padding: "4px 8px",
                borderRadius: "12px"
              }}>
                {userData.subscription.status}
              </span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", color: "#6d7175" }}>Price</span>
              <span style={{ fontSize: "14px", fontWeight: "500", color: "#202223" }}>{userData.subscription.price}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", color: "#6d7175" }}>Next Billing Date</span>
              <span style={{ fontSize: "14px", fontWeight: "500", color: "#202223" }}>{userData.subscription.nextBilling}</span>
            </div>
          </div>
          
          <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
            <button style={{
              backgroundColor: "#6366f1",
              color: "#ffffff",
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer"
            }}>
              Change Plan
            </button>
            <button style={{
              backgroundColor: "#ffffff",
              color: "#dc2626",
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #e1e3e5",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer"
            }}>
              Cancel Subscription
            </button>
          </div>
        </div>

        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "24px",
          border: "1px solid #e1e3e5",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#202223", marginBottom: "24px" }}>
            Payment Information
          </h2>
          
          <div style={{ display: "grid", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", color: "#6d7175" }}>Payment Method</span>
              <span style={{ fontSize: "14px", fontWeight: "500", color: "#202223" }}>{userData.billing.method}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", color: "#6d7175" }}>Billing Address</span>
              <span style={{ fontSize: "14px", fontWeight: "500", color: "#202223" }}>{userData.billing.address}</span>
            </div>
          </div>
          
          <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
            <button style={{
              backgroundColor: "#ffffff",
              color: "#374151",
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #e1e3e5",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer"
            }}>
              Update Payment Method
            </button>
            <button style={{
              backgroundColor: "#ffffff",
              color: "#374151",
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #e1e3e5",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer"
            }}>
              Update Billing Address
            </button>
          </div>
        </div>

        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "24px",
          border: "1px solid #fca5a5",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#dc2626", marginBottom: "12px" }}>
            Danger Zone
          </h2>
          <p style={{ fontSize: "14px", color: "#6d7175", marginBottom: "16px" }}>
            These actions cannot be undone. Please be careful.
          </p>
          
          <button style={{
            backgroundColor: "#dc2626",
            color: "#ffffff",
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer"
          }}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
