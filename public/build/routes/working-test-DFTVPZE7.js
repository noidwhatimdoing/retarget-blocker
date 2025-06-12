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

// app/routes/working-test.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/working-test.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/working-test.tsx"
  );
  import.meta.hot.lastModified = "1749664746926.7808";
}
function WorkingTest() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#f0f9ff"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
      color: "#1e40af",
      fontSize: "32px"
    }, children: "\u{1F389} SUCCESS!" }, void 0, false, {
      fileName: "app/routes/working-test.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      fontSize: "18px",
      color: "#374151"
    }, children: "This route is working perfectly!" }, void 0, false, {
      fileName: "app/routes/working-test.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      marginTop: "20px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/auth/login", style: {
      backgroundColor: "#6366f1",
      color: "white",
      padding: "12px 24px",
      textDecoration: "none",
      borderRadius: "8px"
    }, children: "Back to Auth" }, void 0, false, {
      fileName: "app/routes/working-test.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/working-test.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/working-test.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = WorkingTest;
var _c;
$RefreshReg$(_c, "WorkingTest");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WorkingTest as default
};
//# sourceMappingURL=/build/routes/working-test-DFTVPZE7.js.map
