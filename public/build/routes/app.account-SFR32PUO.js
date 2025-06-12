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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:../shopify.server
var require_shopify = __commonJS({
  "empty-module:../shopify.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/app.account.tsx
var import_node = __toESM(require_node(), 1);
var import_shopify = __toESM(require_shopify(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.account.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.account.tsx"
  );
  import.meta.hot.lastModified = "1749657555874.9675";
}
function Account() {
  _s();
  const {
    userData
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    maxWidth: "800px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      marginBottom: "32px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
        fontSize: "28px",
        fontWeight: "600",
        color: "#202223",
        margin: "0 0 8px 0"
      }, children: "Account Settings" }, void 0, false, {
        fileName: "app/routes/app.account.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        fontSize: "16px",
        color: "#6d7175",
        margin: "0"
      }, children: "Manage your subscription, billing, and account information" }, void 0, false, {
        fileName: "app/routes/app.account.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.account.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "grid",
      gap: "32px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        border: "1px solid #e1e3e5",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
          fontSize: "18px",
          fontWeight: "600",
          color: "#202223",
          marginBottom: "24px"
        }, children: "Account Information" }, void 0, false, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
          display: "grid",
          gap: "20px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "updateAccount" }, void 0, false, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#202223",
              marginBottom: "8px"
            }, children: "Store Name" }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 115,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "storeName", defaultValue: userData.shop, style: {
              width: "100%",
              padding: "12px",
              border: "1px solid #e1e3e5",
              borderRadius: "8px",
              fontSize: "14px",
              backgroundColor: "#f9fafb"
            }, readOnly: true }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 124,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#202223",
              marginBottom: "8px"
            }, children: "Email Address" }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 135,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", defaultValue: userData.email, style: {
              width: "100%",
              padding: "12px",
              border: "1px solid #e1e3e5",
              borderRadius: "8px",
              fontSize: "14px"
            } }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 144,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#202223",
              marginBottom: "8px"
            }, children: "Account Owner Name" }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 154,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", defaultValue: userData.name, style: {
              width: "100%",
              padding: "12px",
              border: "1px solid #e1e3e5",
              borderRadius: "8px",
              fontSize: "14px"
            } }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 163,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 153,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: {
            backgroundColor: "#6366f1",
            color: "#ffffff",
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            justifySelf: "start"
          }, children: "Save Changes" }, void 0, false, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.account.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        border: "1px solid #e1e3e5",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
          fontSize: "18px",
          fontWeight: "600",
          color: "#202223",
          marginBottom: "24px"
        }, children: "Subscription Details" }, void 0, false, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "grid",
          gap: "16px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              color: "#6d7175"
            }, children: "Current Plan" }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 213,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              fontWeight: "500",
              color: "#202223"
            }, children: userData.subscription.plan }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 217,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              color: "#6d7175"
            }, children: "Status" }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 229,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "12px",
              fontWeight: "500",
              color: "#059669",
              backgroundColor: "#d1fae5",
              padding: "4px 8px",
              borderRadius: "12px"
            }, children: userData.subscription.status }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 233,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 224,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              color: "#6d7175"
            }, children: "Price" }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 250,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              fontWeight: "500",
              color: "#202223"
            }, children: userData.subscription.price }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 254,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 245,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              color: "#6d7175"
            }, children: "Next Billing Date" }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 266,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              fontWeight: "500",
              color: "#202223"
            }, children: userData.subscription.nextBilling }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 270,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 261,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginTop: "24px",
          display: "flex",
          gap: "12px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
            backgroundColor: "#6366f1",
            color: "#ffffff",
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer"
          }, children: "Change Plan" }, void 0, false, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 283,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
            backgroundColor: "#ffffff",
            color: "#dc2626",
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #e1e3e5",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer"
          }, children: "Cancel Subscription" }, void 0, false, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 295,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 278,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.account.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        border: "1px solid #e1e3e5",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
          fontSize: "18px",
          fontWeight: "600",
          color: "#202223",
          marginBottom: "24px"
        }, children: "Payment Information" }, void 0, false, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 317,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "grid",
          gap: "16px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              color: "#6d7175"
            }, children: "Payment Method" }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 335,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              fontWeight: "500",
              color: "#202223"
            }, children: userData.billing.method }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 339,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 330,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              color: "#6d7175"
            }, children: "Billing Address" }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 351,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "14px",
              fontWeight: "500",
              color: "#202223"
            }, children: userData.billing.address }, void 0, false, {
              fileName: "app/routes/app.account.tsx",
              lineNumber: 355,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 346,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 326,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginTop: "24px",
          display: "flex",
          gap: "12px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
            backgroundColor: "#ffffff",
            color: "#374151",
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #e1e3e5",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer"
          }, children: "Update Payment Method" }, void 0, false, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 368,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
            backgroundColor: "#ffffff",
            color: "#374151",
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #e1e3e5",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer"
          }, children: "Update Billing Address" }, void 0, false, {
            fileName: "app/routes/app.account.tsx",
            lineNumber: 380,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 363,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.account.tsx",
        lineNumber: 310,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        border: "1px solid #fca5a5",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
          fontSize: "18px",
          fontWeight: "600",
          color: "#dc2626",
          marginBottom: "12px"
        }, children: "Danger Zone" }, void 0, false, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 402,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          fontSize: "14px",
          color: "#6d7175",
          marginBottom: "16px"
        }, children: "These actions cannot be undone. Please be careful." }, void 0, false, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 410,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
          backgroundColor: "#dc2626",
          color: "#ffffff",
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer"
        }, children: "Delete Account" }, void 0, false, {
          fileName: "app/routes/app.account.tsx",
          lineNumber: 418,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.account.tsx",
        lineNumber: 395,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.account.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.account.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_s(Account, "o1QU1z92kk31J53zntMPKV5FHZQ=", false, function() {
  return [useLoaderData];
});
_c = Account;
var _c;
$RefreshReg$(_c, "Account");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Account as default
};
//# sourceMappingURL=/build/routes/app.account-SFR32PUO.js.map
