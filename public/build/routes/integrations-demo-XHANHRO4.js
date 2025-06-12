import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-SHWXRFYU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/integrations-demo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/integrations-demo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/integrations-demo.tsx"
  );
  import.meta.hot.lastModified = "1749658232536.7344";
}
function IntegrationsDemo() {
  const platforms = [{
    id: "meta",
    name: "Meta Ads",
    description: "Connect your Facebook and Instagram ad accounts",
    icon: "\u{1F4D8}",
    color: "#1877f2",
    connected: false
  }, {
    id: "google",
    name: "Google Ads",
    description: "Connect your Google Ads account for enhanced conversions",
    icon: "\u{1F50D}",
    color: "#4285f4",
    connected: true,
    accountInfo: "Account: 123-456-7890"
  }, {
    id: "tiktok",
    name: "TikTok Ads",
    description: "Connect your TikTok for Business account",
    icon: "\u{1F3B5}",
    color: "#ff0050",
    connected: false
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fafafa"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      width: "240px",
      backgroundColor: "#202223",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        padding: "20px",
        borderBottom: "1px solid #33363a",
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          width: "32px",
          height: "32px",
          backgroundColor: "#6366f1",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px"
        }, children: "\u{1F6E1}\uFE0F" }, void 0, false, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontWeight: "600",
          fontSize: "16px"
        }, children: "Retarget Blocker" }, void 0, false, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/integrations-demo.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { style: {
        flex: 1,
        padding: "20px 0"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/app-demo", style: {
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 20px",
          color: "#b5b5b5",
          textDecoration: "none"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F3E0}" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Home" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 20px",
          color: "#ffffff",
          backgroundColor: "#6366f1",
          borderRight: "3px solid #ffffff"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F517}" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Integrations" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/analytics-demo", style: {
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 20px",
          color: "#b5b5b5",
          textDecoration: "none"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F4CA}" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Analytics" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/integrations-demo.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/integrations-demo.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { style: {
        height: "60px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e1e3e5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          fontSize: "20px",
          fontWeight: "600",
          color: "#202223"
        }, children: "test-shop.myshopify.com" }, void 0, false, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/account-demo", style: {
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "8px 12px",
          backgroundColor: "#f6f6f7",
          borderRadius: "8px",
          textDecoration: "none",
          color: "#202223"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
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
          }, children: "S" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 160,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              fontSize: "14px",
              fontWeight: "500"
            }, children: "Store Owner" }, void 0, false, {
              fileName: "app/routes/integrations-demo.tsx",
              lineNumber: 175,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              fontSize: "12px",
              color: "#6d7175"
            }, children: "Growth Plan" }, void 0, false, {
              fileName: "app/routes/integrations-demo.tsx",
              lineNumber: 179,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 174,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 150,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/integrations-demo.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: {
        flex: 1,
        padding: "24px",
        backgroundColor: "#fafafa",
        overflow: "auto"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        maxWidth: "1200px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginBottom: "32px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
            fontSize: "28px",
            fontWeight: "600",
            color: "#202223",
            margin: "0 0 8px 0"
          }, children: "Ad Platform Integrations" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 199,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            fontSize: "16px",
            color: "#6d7175",
            margin: "0"
          }, children: "Connect your ad platforms to start suppressing customers who already purchased" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "24px",
          border: "1px solid #e1e3e5",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          marginBottom: "32px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
            fontSize: "18px",
            fontWeight: "600",
            color: "#202223",
            marginBottom: "16px"
          }, children: "Suppression Settings" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 225,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            fontSize: "14px",
            color: "#6d7175",
            marginBottom: "24px"
          }, children: "How long should customers be suppressed from ads after making a purchase?" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 233,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            gap: "12px",
            marginBottom: "16px"
          }, children: [30, 60, 90, 120].map((days) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            padding: "12px 16px",
            backgroundColor: days === 90 ? "#6366f1" : "#f9fafb",
            color: days === 90 ? "#ffffff" : "#374151",
            borderRadius: "8px",
            border: "1px solid #e1e3e5",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer"
          }, children: [
            days,
            " days",
            days === 90 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "12px",
              backgroundColor: "#ffffff",
              color: "#6366f1",
              padding: "2px 6px",
              borderRadius: "4px",
              marginLeft: "8px"
            }, children: "Recommended" }, void 0, false, {
              fileName: "app/routes/integrations-demo.tsx",
              lineNumber: 257,
              columnNumber: 37
            }, this)
          ] }, days, true, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 246,
            columnNumber: 48
          }, this)) }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 241,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
            backgroundColor: "#6366f1",
            color: "#ffffff",
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer"
          }, children: "Update Settings" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 270,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))"
        }, children: platforms.map((platform) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "24px",
          border: "1px solid #e1e3e5",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          position: "relative"
        }, children: [
          platform.connected && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            position: "absolute",
            top: "16px",
            right: "16px",
            backgroundColor: "#10b981",
            color: "#ffffff",
            padding: "4px 8px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "500"
          }, children: "\u2713 Connected" }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 299,
            columnNumber: 42
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "16px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              width: "48px",
              height: "48px",
              backgroundColor: platform.color,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px"
            }, children: platform.icon }, void 0, false, {
              fileName: "app/routes/integrations-demo.tsx",
              lineNumber: 320,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
                fontSize: "18px",
                fontWeight: "600",
                color: "#202223",
                margin: "0 0 4px 0"
              }, children: platform.name }, void 0, false, {
                fileName: "app/routes/integrations-demo.tsx",
                lineNumber: 333,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
                fontSize: "14px",
                color: "#6d7175",
                margin: "0"
              }, children: platform.description }, void 0, false, {
                fileName: "app/routes/integrations-demo.tsx",
                lineNumber: 341,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/integrations-demo.tsx",
              lineNumber: 332,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 314,
            columnNumber: 19
          }, this),
          platform.connected && platform.accountInfo && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            backgroundColor: "#f0f9ff",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "16px",
            fontSize: "14px",
            color: "#0369a1"
          }, children: platform.accountInfo }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 352,
            columnNumber: 66
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
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
          }, children: platform.connected ? "\u2699\uFE0F Manage Connection" : `\u{1F517} Connect ${platform.name}` }, void 0, false, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 364,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            paddingTop: "16px",
            borderTop: "1px solid #e1e3e5"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { style: {
              fontSize: "14px",
              fontWeight: "500",
              color: "#202223",
              marginBottom: "8px"
            }, children: "What this enables:" }, void 0, false, {
              fileName: "app/routes/integrations-demo.tsx",
              lineNumber: 384,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { style: {
              fontSize: "13px",
              color: "#6d7175",
              margin: "0",
              paddingLeft: "16px",
              lineHeight: "1.5"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Automatic customer suppression after purchase" }, void 0, false, {
                fileName: "app/routes/integrations-demo.tsx",
                lineNumber: 399,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Custom audience sync" }, void 0, false, {
                fileName: "app/routes/integrations-demo.tsx",
                lineNumber: 400,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Campaign spend optimization" }, void 0, false, {
                fileName: "app/routes/integrations-demo.tsx",
                lineNumber: 401,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "ROI tracking and reporting" }, void 0, false, {
                fileName: "app/routes/integrations-demo.tsx",
                lineNumber: 402,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/integrations-demo.tsx",
              lineNumber: 392,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/integrations-demo.tsx",
            lineNumber: 380,
            columnNumber: 19
          }, this)
        ] }, platform.id, true, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 290,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/routes/integrations-demo.tsx",
          lineNumber: 285,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/integrations-demo.tsx",
        lineNumber: 193,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/integrations-demo.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/integrations-demo.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/integrations-demo.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_c = IntegrationsDemo;
var _c;
$RefreshReg$(_c, "IntegrationsDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  IntegrationsDemo as default
};
//# sourceMappingURL=/build/routes/integrations-demo-XHANHRO4.js.map
