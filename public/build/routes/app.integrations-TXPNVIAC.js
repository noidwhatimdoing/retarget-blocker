import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-4UCUJE2O.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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

// app/routes/app.integrations.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.integrations.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.integrations.tsx"
  );
  import.meta.hot.lastModified = "1749679753730.5347";
}
function Integrations() {
  _s();
  const {
    integrations,
    suppressionWindow
  } = useLoaderData();
  const platforms = [{
    id: "meta",
    name: "Meta Ads",
    description: "Connect your Facebook and Instagram ad accounts",
    icon: "\u{1F4D8}",
    color: "#1877f2",
    connected: integrations.meta.connected,
    accountInfo: integrations.meta.accountId ? `Account: ${integrations.meta.accountId}` : null
  }, {
    id: "google",
    name: "Google Ads",
    description: "Connect your Google Ads account for enhanced conversions",
    icon: "\u{1F50D}",
    color: "#4285f4",
    connected: integrations.google.connected,
    accountInfo: integrations.google.customerId ? `Customer ID: ${integrations.google.customerId}` : null
  }, {
    id: "tiktok",
    name: "TikTok Ads",
    description: "Connect your TikTok for Business account",
    icon: "\u{1F3B5}",
    color: "#ff0050",
    connected: integrations.tiktok.connected,
    accountInfo: integrations.tiktok.advertiserId ? `Advertiser ID: ${integrations.tiktok.advertiserId}` : null
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
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
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        fontSize: "16px",
        color: "#6d7175",
        margin: "0"
      }, children: "Connect your ad platforms to start suppressing customers who already purchased" }, void 0, false, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.integrations.tsx",
      lineNumber: 96,
      columnNumber: 7
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
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        fontSize: "14px",
        color: "#6d7175",
        marginBottom: "24px"
      }, children: "How long should customers be suppressed from ads after making a purchase?" }, void 0, false, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
        display: "flex",
        alignItems: "center",
        gap: "16px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "updateWindow" }, void 0, false, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          gap: "12px"
        }, children: [30, 60, 90, 120].map((days) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 16px",
          backgroundColor: suppressionWindow === days ? "#6366f1" : "#f9fafb",
          color: suppressionWindow === days ? "#ffffff" : "#374151",
          borderRadius: "8px",
          border: "1px solid #e1e3e5",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "days", value: days, defaultChecked: suppressionWindow === days, style: {
            display: "none"
          } }, void 0, false, {
            fileName: "app/routes/app.integrations.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          days,
          " days",
          days === 90 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            fontSize: "12px",
            backgroundColor: suppressionWindow === 90 ? "#ffffff" : "#6366f1",
            color: suppressionWindow === 90 ? "#6366f1" : "#ffffff",
            padding: "2px 6px",
            borderRadius: "4px",
            marginLeft: "4px"
          }, children: "Recommended" }, void 0, false, {
            fileName: "app/routes/app.integrations.tsx",
            lineNumber: 169,
            columnNumber: 33
          }, this)
        ] }, days, true, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 152,
          columnNumber: 44
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: {
          backgroundColor: "#6366f1",
          color: "#ffffff",
          padding: "12px 20px",
          borderRadius: "8px",
          border: "none",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer"
        }, children: "Update Settings" }, void 0, false, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 182,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.integrations.tsx",
      lineNumber: 117,
      columnNumber: 7
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
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        gap: "4px"
      }, children: "\u2713 Connected" }, void 0, false, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 212,
        columnNumber: 36
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
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 236,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
            fontSize: "18px",
            fontWeight: "600",
            color: "#202223",
            margin: "0 0 4px 0"
          }, children: platform.name }, void 0, false, {
            fileName: "app/routes/app.integrations.tsx",
            lineNumber: 249,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            fontSize: "14px",
            color: "#6d7175",
            margin: "0"
          }, children: platform.description }, void 0, false, {
            fileName: "app/routes/app.integrations.tsx",
            lineNumber: 257,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 248,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 230,
        columnNumber: 13
      }, this),
      platform.connected && platform.accountInfo && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "#f0f9ff",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "16px",
        fontSize: "14px",
        color: "#0369a1"
      }, children: platform.accountInfo }, void 0, false, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 268,
        columnNumber: 60
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
        if (platform.connected) {
          alert(`Disconnect ${platform.name}? This will stop suppressing customers on this platform.`);
        } else {
          alert(`Redirecting to ${platform.name} authentication...`);
        }
      }, style: {
        width: "100%",
        backgroundColor: platform.connected ? "#f9fafb" : platform.color,
        color: platform.connected ? "#374151" : "#ffffff",
        padding: "12px",
        borderRadius: "8px",
        border: platform.connected ? "1px solid #e1e3e5" : "none",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px"
      }, children: platform.connected ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2699\uFE0F" }, void 0, false, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 302,
          columnNumber: 19
        }, this),
        "Manage Connection"
      ] }, void 0, true, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 301,
        columnNumber: 37
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F517}" }, void 0, false, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 305,
          columnNumber: 19
        }, this),
        "Connect ",
        platform.name
      ] }, void 0, true, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 304,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 280,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        marginTop: "16px",
        paddingTop: "16px",
        borderTop: "1px solid #e1e3e5"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { style: {
          fontSize: "14px",
          fontWeight: "500",
          color: "#202223",
          marginBottom: "8px"
        }, children: "What this enables:" }, void 0, false, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 316,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { style: {
          fontSize: "13px",
          color: "#6d7175",
          margin: "0",
          paddingLeft: "16px",
          lineHeight: "1.5"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Automatic customer suppression after purchase" }, void 0, false, {
            fileName: "app/routes/app.integrations.tsx",
            lineNumber: 331,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Custom audience sync" }, void 0, false, {
            fileName: "app/routes/app.integrations.tsx",
            lineNumber: 332,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Campaign spend optimization" }, void 0, false, {
            fileName: "app/routes/app.integrations.tsx",
            lineNumber: 333,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "ROI tracking and reporting" }, void 0, false, {
            fileName: "app/routes/app.integrations.tsx",
            lineNumber: 334,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 324,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 311,
        columnNumber: 13
      }, this)
    ] }, platform.id, true, {
      fileName: "app/routes/app.integrations.tsx",
      lineNumber: 203,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/app.integrations.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      backgroundColor: "#f9fafb",
      borderRadius: "12px",
      padding: "24px",
      border: "1px solid #e1e3e5",
      marginTop: "32px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
        fontSize: "16px",
        fontWeight: "600",
        color: "#202223",
        marginBottom: "12px"
      }, children: "Need help connecting your accounts?" }, void 0, false, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 348,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        fontSize: "14px",
        color: "#6d7175",
        marginBottom: "16px"
      }, children: "Our step-by-step guides will walk you through connecting each platform safely and securely." }, void 0, false, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 356,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        gap: "12px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => alert("Setup guides coming soon!"), style: {
          color: "#6366f1",
          background: "none",
          border: "none",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          textDecoration: "underline"
        }, children: "\u{1F4D6} View Setup Guides" }, void 0, false, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 367,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => alert("Contact support at help@retargetblocker.com"), style: {
          color: "#6366f1",
          background: "none",
          border: "none",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          textDecoration: "underline"
        }, children: "\u{1F4AC} Contact Support" }, void 0, false, {
          fileName: "app/routes/app.integrations.tsx",
          lineNumber: 378,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.integrations.tsx",
        lineNumber: 363,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.integrations.tsx",
      lineNumber: 341,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.integrations.tsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
}
_s(Integrations, "6ZJ4CObof0lgoYkGTg+en2+FD24=", false, function() {
  return [useLoaderData];
});
_c = Integrations;
var _c;
$RefreshReg$(_c, "Integrations");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Integrations as default
};
//# sourceMappingURL=/build/routes/app.integrations-TXPNVIAC.js.map
