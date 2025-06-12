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

// app/routes/account-demo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account-demo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account-demo.tsx"
  );
  import.meta.hot.lastModified = "1749658382309.6992";
}
function AccountDemo() {
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
      padding: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "30px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          width: "32px",
          height: "32px",
          backgroundColor: "#6366f1",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: "\u{1F6E1}\uFE0F" }, void 0, false, {
          fileName: "app/routes/account-demo.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontWeight: "600"
        }, children: "Retarget Blocker" }, void 0, false, {
          fileName: "app/routes/account-demo.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account-demo.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/app-demo", style: {
          display: "block",
          padding: "12px",
          color: "#b5b5b5",
          textDecoration: "none",
          marginBottom: "8px"
        }, children: "\u{1F3E0} Home" }, void 0, false, {
          fileName: "app/routes/account-demo.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/integrations-demo", style: {
          display: "block",
          padding: "12px",
          color: "#b5b5b5",
          textDecoration: "none",
          marginBottom: "8px"
        }, children: "\u{1F517} Integrations" }, void 0, false, {
          fileName: "app/routes/account-demo.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/analytics-demo", style: {
          display: "block",
          padding: "12px",
          color: "#b5b5b5",
          textDecoration: "none",
          marginBottom: "8px"
        }, children: "\u{1F4CA} Analytics" }, void 0, false, {
          fileName: "app/routes/account-demo.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account-demo.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account-demo.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      flex: 1,
      padding: "40px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
        fontSize: "28px",
        marginBottom: "20px"
      }, children: "Account Settings" }, void 0, false, {
        fileName: "app/routes/account-demo.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "grid",
        gap: "30px",
        maxWidth: "600px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          border: "1px solid #e1e3e5"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
            marginBottom: "20px"
          }, children: "Account Information" }, void 0, false, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "16px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
              display: "block",
              marginBottom: "8px",
              fontWeight: "500"
            }, children: "Store Name" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 116,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", defaultValue: "test-shop.myshopify.com", style: {
              width: "100%",
              padding: "12px",
              border: "1px solid #e1e3e5",
              borderRadius: "8px"
            } }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 121,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginBottom: "16px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
              display: "block",
              marginBottom: "8px",
              fontWeight: "500"
            }, children: "Email" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", defaultValue: "owner@test-shop.myshopify.com", style: {
              width: "100%",
              padding: "12px",
              border: "1px solid #e1e3e5",
              borderRadius: "8px"
            } }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 136,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
            backgroundColor: "#6366f1",
            color: "#ffffff",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }, children: "Save Changes" }, void 0, false, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 143,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account-demo.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          border: "1px solid #e1e3e5"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
            marginBottom: "20px"
          }, children: "Subscription" }, void 0, false, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 162,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Current Plan:" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 170,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Growth Plan" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 171,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 165,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Status:" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 178,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: "#059669"
            }, children: "Active" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 179,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 173,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Price:" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "$49/month" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 189,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 183,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
            backgroundColor: "#6366f1",
            color: "#ffffff",
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginRight: "10px"
          }, children: "Change Plan" }, void 0, false, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 191,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
            backgroundColor: "#ffffff",
            color: "#dc2626",
            padding: "10px 16px",
            border: "1px solid #e1e3e5",
            borderRadius: "8px",
            cursor: "pointer"
          }, children: "Cancel" }, void 0, false, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account-demo.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          border: "1px solid #e1e3e5"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
            marginBottom: "16px"
          }, children: "\u{1F389} Demo Complete!" }, void 0, false, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 221,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            marginBottom: "20px",
            color: "#6d7175"
          }, children: "Navigate between all demo pages:" }, void 0, false, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 224,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            gap: "12px",
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/app-demo", style: {
              backgroundColor: "#6366f1",
              color: "#ffffff",
              padding: "10px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px"
            }, children: "\u{1F3E0} Home" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 235,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/integrations-demo", style: {
              backgroundColor: "#059669",
              color: "#ffffff",
              padding: "10px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px"
            }, children: "\u{1F517} Integrations" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 245,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/analytics-demo", style: {
              backgroundColor: "#dc2626",
              color: "#ffffff",
              padding: "10px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px"
            }, children: "\u{1F4CA} Analytics" }, void 0, false, {
              fileName: "app/routes/account-demo.tsx",
              lineNumber: 255,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account-demo.tsx",
            lineNumber: 230,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account-demo.tsx",
          lineNumber: 215,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account-demo.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account-demo.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account-demo.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = AccountDemo;
var _c;
$RefreshReg$(_c, "AccountDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AccountDemo as default
};
//# sourceMappingURL=/build/routes/account-demo-GRVETXFE.js.map
