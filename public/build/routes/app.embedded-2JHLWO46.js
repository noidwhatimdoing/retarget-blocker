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

// app/routes/app.embedded.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.embedded.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.embedded.tsx"
  );
  import.meta.hot.lastModified = "1749687492871.08";
}
function EmbeddedApp() {
  _s();
  const {
    shop
  } = useLoaderData();
  if (typeof window !== "undefined") {
    window.location.href = `http://localhost:3000/app?shop=${shop}&installed=true`;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    padding: "20px",
    fontFamily: "Arial",
    background: "white",
    minHeight: "100vh",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
      color: "#6b46c1"
    }, children: "\u{1F3AF} Redirecting to Retarget Blocker..." }, void 0, false, {
      fileName: "app/routes/app.embedded.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "If you're not redirected automatically, ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `http://localhost:3000/app?shop=${shop}&installed=true`, children: "click here" }, void 0, false, {
        fileName: "app/routes/app.embedded.tsx",
        lineNumber: 52,
        columnNumber: 50
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.embedded.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { dangerouslySetInnerHTML: {
      __html: `
          setTimeout(function() {
            window.location.href = 'http://localhost:3000/app?shop=${shop}&installed=true';
          }, 2000);
        `
    } }, void 0, false, {
      fileName: "app/routes/app.embedded.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.embedded.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(EmbeddedApp, "lm4Whnw6YilzZ9CoytChGNuM7r0=", false, function() {
  return [useLoaderData];
});
_c = EmbeddedApp;
var _c;
$RefreshReg$(_c, "EmbeddedApp");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EmbeddedApp as default
};
//# sourceMappingURL=/build/routes/app.embedded-2JHLWO46.js.map
