import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
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

// app/routes/app._index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app._index.tsx"
  );
  import.meta.hot.lastModified = "1749662685770.4976";
}
function Index() {
  _s();
  const {
    stats,
    shopDomain
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    maxWidth: "1200px",
    padding: "20px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
      fontSize: "28px",
      fontWeight: "600",
      color: "#202223",
      marginBottom: "8px"
    }, children: "\u{1F389} SUCCESS! App is Working!" }, void 0, false, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      fontSize: "16px",
      color: "#6d7175",
      marginBottom: "32px"
    }, children: [
      "Your Retarget Blocker app is now running properly on ",
      shopDomain
    ] }, void 0, true, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      backgroundColor: "#d1fae5",
      border: "1px solid #10b981",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "24px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { style: {
        color: "#065f46"
      }, children: "\u2705 App Successfully Loaded" }, void 0, false, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        margin: "4px 0 0 0",
        color: "#065f46"
      }, children: "No authentication errors - your basic routing is working!" }, void 0, false, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px",
      marginBottom: "32px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        border: "1px solid #e1e3e5",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
          fontSize: "14px",
          color: "#6d7175",
          margin: "0 0 16px 0"
        }, children: "TOTAL CUSTOMERS" }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          fontSize: "32px",
          fontWeight: "700",
          color: "#202223",
          marginBottom: "8px"
        }, children: stats.totalCustomers.toLocaleString() }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          fontSize: "14px",
          color: "#6d7175",
          margin: "0"
        }, children: "Customers tracked" }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        border: "1px solid #e1e3e5",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
          fontSize: "14px",
          color: "#6d7175",
          margin: "0 0 16px 0"
        }, children: "ESTIMATED SAVINGS" }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          fontSize: "32px",
          fontWeight: "700",
          color: "#dc2626",
          marginBottom: "8px"
        }, children: [
          "$",
          stats.estimatedSavings.toLocaleString()
        ] }, void 0, true, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          fontSize: "14px",
          color: "#6d7175",
          margin: "0"
        }, children: "Ad spend saved" }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(Index, "y/skVmvK6guY4xGakK8wR3npIMo=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/app._index-ZQUSEHXO.js.map
