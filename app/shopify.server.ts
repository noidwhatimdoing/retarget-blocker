import "@shopify/shopify-app-remix/adapters/node";
import {
  ApiVersion,
  AppDistribution,
  shopifyApp,
} from "@shopify/shopify-app-remix/server";
import { restResources } from "@shopify/shopify-api/rest/admin/2023-10";

// Safer session storage
const sessions = new Map();

const memoryStorage = {
  async storeSession(session: any) {
    try {
      sessions.set(session.id, session);
      return true;
    } catch (error) {
      console.error("Session store error:", error);
      return false;
    }
  },
  async loadSession(id: string) {
    try {
      return sessions.get(id) || undefined;
    } catch (error) {
      console.error("Session load error:", error);
      return undefined;
    }
  },
  async deleteSession(id: string) {
    try {
      sessions.delete(id);
      return true;
    } catch (error) {
      console.error("Session delete error:", error);
      return false;
    }
  },
  async deleteSessions(ids: string[]) {
    try {
      ids.forEach(id => sessions.delete(id));
      return true;
    } catch (error) {
      console.error("Sessions delete error:", error);
      return false;
    }
  },
  async findSessionsByShop(shop: string) {
    try {
      return Array.from(sessions.values()).filter((session: any) => session.shop === shop);
    } catch (error) {
      console.error("Find sessions error:", error);
      return [];
    }
  }
};

console.log("🔧 Checking environment variables...");
console.log("API Key:", process.env.SHOPIFY_API_KEY ? "✅ Set" : "❌ Missing");
console.log("API Secret:", process.env.SHOPIFY_API_SECRET ? "✅ Set" : "❌ Missing");
console.log("App URL:", process.env.SHOPIFY_APP_URL ? "✅ Set" : "❌ Missing");

// Safer Shopify app initialization
let shopify;

try {
  shopify = shopifyApp({
    apiKey: process.env.SHOPIFY_API_KEY || "dummy-key",
    apiSecretKey: process.env.SHOPIFY_API_SECRET || "dummy-secret",
    apiVersion: ApiVersion.October23,
    scopes: [],
    appUrl: process.env.SHOPIFY_APP_URL || "http://localhost:3000",
    authPathPrefix: "/auth",
    sessionStorage: memoryStorage,
    distribution: AppDistribution.AppStore,
    restResources,
    useOnlineTokens: false,
    isEmbeddedApp: true,
  });
  
  console.log("✅ Shopify app initialized successfully!");
} catch (error) {
  console.error("❌ Failed to initialize Shopify app:", error);
  
  // Create a dummy shopify object to prevent crashes
  shopify = {
    addDocumentResponseHeaders: () => {},
    authenticate: () => ({ admin: null }),
    unauthenticated: () => {},
    login: () => {},
    registerWebhooks: () => {},
    sessionStorage: memoryStorage,
  };
}

export default shopify;
export const apiVersion = ApiVersion.October23;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate = shopify.authenticate;
export const unauthenticated = shopify.unauthenticated;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
export const sessionStorage = shopify.sessionStorage;