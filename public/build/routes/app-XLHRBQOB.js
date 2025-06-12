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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.tsx"
  );
  import.meta.hot.lastModified = "1749686643105.9563";
}
function App() {
  _s();
  const {
    shop,
    installed
  } = useLoaderData();
  const [currentPage, setCurrentPage] = (0, import_react2.useState)("home");
  const [integrations, setIntegrations] = (0, import_react2.useState)({
    meta: {
      connected: true,
      suppressionDays: 90
    },
    google: {
      connected: false,
      suppressionDays: 90
    },
    tiktok: {
      connected: false,
      suppressionDays: 90
    }
  });
  const StatCard = ({
    title,
    value,
    change,
    icon,
    color
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 border-l-4", style: {
    borderLeftColor: color
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: title }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: value }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-green-600", children: change }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl", children: icon }, void 0, false, {
      fileName: "app/routes/app.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this);
  const HomePage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Dashboard Overview" }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: [
        "Connected to: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: shop }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 78,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    installed && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      background: "#d1fae5",
      border: "1px solid #10b981",
      padding: "16px",
      borderRadius: "8px",
      marginBottom: "24px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
        color: "#065f46",
        margin: "0 0 8px 0"
      }, children: "\u{1F389} Installation Successful!" }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        color: "#047857",
        margin: 0
      }, children: "Your app is now connected and ready to save ad spend!" }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 82,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Total Customers Suppressed", value: "2,347", change: "+12% this month", icon: "\u{1F465}", color: "#8b5cf6" }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Ad Spend Saved", value: "$8,429", change: "+18% this month", icon: "\u{1F4B0}", color: "#10b981" }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Active Campaigns", value: "12", change: "3 optimized today", icon: "\u{1F3AF}", color: "#f59e0b" }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Suppression Rate", value: "94.2%", change: "+2.1% this week", icon: "\u{1F4CA}", color: "#ef4444" }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Recent Activity" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-green-500", children: "\u2705" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 115,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: "247 customers added to Meta suppression list" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 116,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-500", children: "2 hours ago" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 117,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-green-500", children: "\u2705" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 120,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: "Google Ads audience updated with 89 new customers" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 121,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-500", children: "4 hours ago" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-blue-500", children: "\u{1F3AF}" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 125,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: 'Campaign "Summer Sale 2025" optimized' }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 126,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-500", children: "6 hours ago" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 127,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Quick Actions" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors", children: "Sync All Platforms" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 135,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors", children: "View Campaign Performance" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 138,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors", children: "Download Reports" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.tsx",
    lineNumber: 74,
    columnNumber: 26
  }, this);
  const IntegrationsPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Platform Integrations" }, void 0, false, {
      fileName: "app/routes/app.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl", children: "\u{1F4D8}" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 156,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Meta (Facebook & Instagram)" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 158,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Sync customer data with Meta Ads Manager" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 159,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.tsx",
              lineNumber: 157,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 155,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: integrations.meta.connected ? "\u2705" : "\u274C" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 162,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Suppression Duration" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 169,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "border border-gray-300 rounded-md px-3 py-2 w-32", value: integrations.meta.suppressionDays, onChange: (e) => setIntegrations((prev) => ({
              ...prev,
              meta: {
                ...prev.meta,
                suppressionDays: parseInt(e.target.value)
              }
            })), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 30, children: "30 days" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 179,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 60, children: "60 days" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 180,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 90, children: "90 days (Recommended)" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 181,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 120, children: "120 days" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 182,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.tsx",
              lineNumber: 172,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 168,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `px-4 py-2 rounded-md ${integrations.meta.connected ? "bg-red-600 hover:bg-red-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`, onClick: () => setIntegrations((prev) => ({
            ...prev,
            meta: {
              ...prev.meta,
              connected: !prev.meta.connected
            }
          })), children: integrations.meta.connected ? "Disconnect" : "Connect Meta" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 186,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl", children: "\u{1F50D}" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 202,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Google Ads" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 204,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Sync with Google Ads Customer Match" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 205,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.tsx",
              lineNumber: 203,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 201,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: integrations.google.connected ? "\u2705" : "\u274C" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Suppression Duration" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 215,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "border border-gray-300 rounded-md px-3 py-2 w-32", value: integrations.google.suppressionDays, onChange: (e) => setIntegrations((prev) => ({
              ...prev,
              google: {
                ...prev.google,
                suppressionDays: parseInt(e.target.value)
              }
            })), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 30, children: "30 days" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 225,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 60, children: "60 days" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 226,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 90, children: "90 days (Recommended)" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 227,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 120, children: "120 days" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 228,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.tsx",
              lineNumber: 218,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 214,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `px-4 py-2 rounded-md ${integrations.google.connected ? "bg-red-600 hover:bg-red-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`, onClick: () => setIntegrations((prev) => ({
            ...prev,
            google: {
              ...prev.google,
              connected: !prev.google.connected
            }
          })), children: integrations.google.connected ? "Disconnect" : "Connect Google Ads" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 232,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 213,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl", children: "\u{1F3B5}" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 248,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "TikTok Ads" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 250,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Sync with TikTok Ads Manager" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 251,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.tsx",
              lineNumber: 249,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 247,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: integrations.tiktok.connected ? "\u2705" : "\u274C" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 254,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 246,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Suppression Duration" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 261,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "border border-gray-300 rounded-md px-3 py-2 w-32", value: integrations.tiktok.suppressionDays, onChange: (e) => setIntegrations((prev) => ({
              ...prev,
              tiktok: {
                ...prev.tiktok,
                suppressionDays: parseInt(e.target.value)
              }
            })), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 30, children: "30 days" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 271,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 60, children: "60 days" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 272,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 90, children: "90 days (Recommended)" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 273,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 120, children: "120 days" }, void 0, false, {
                fileName: "app/routes/app.tsx",
                lineNumber: 274,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.tsx",
              lineNumber: 264,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 260,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `px-4 py-2 rounded-md ${integrations.tiktok.connected ? "bg-red-600 hover:bg-red-700 text-white" : "bg-black hover:bg-gray-800 text-white"}`, onClick: () => setIntegrations((prev) => ({
            ...prev,
            tiktok: {
              ...prev.tiktok,
              connected: !prev.tiktok.connected
            }
          })), children: integrations.tiktok.connected ? "Disconnect" : "Connect TikTok" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 278,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 259,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 245,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.tsx",
    lineNumber: 148,
    columnNumber: 34
  }, this);
  const AnalyticsPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Analytics & Reports" }, void 0, false, {
      fileName: "app/routes/app.tsx",
      lineNumber: 292,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Customers Added to Suppression Lists" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 296,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-3 py-1 bg-purple-600 text-white rounded text-sm", children: "Weekly" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 298,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm", children: "Monthly" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 299,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm", children: "Yearly" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 300,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 297,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 295,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-64 bg-gray-50 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-6xl mb-4", children: "\u{1F4CA}" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 306,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "Chart showing daily customer additions" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 307,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-400", children: "Demo data: 50-200 customers per day" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 308,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 305,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 304,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 294,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Estimated Ad Spend Saved" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 315,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-3 py-1 bg-purple-600 text-white rounded text-sm", children: "Weekly" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 317,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm", children: "Monthly" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 318,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm", children: "Yearly" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 319,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 316,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 314,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-64 bg-gray-50 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-6xl mb-4", children: "\u{1F4B0}" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 325,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "Chart showing daily savings" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 326,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-400", children: "Demo data: $200-800 saved per day" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 327,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 324,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 323,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 313,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.tsx",
    lineNumber: 291,
    columnNumber: 31
  }, this);
  const AccountPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Account Settings" }, void 0, false, {
      fileName: "app/routes/app.tsx",
      lineNumber: 333,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Subscription Details" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 337,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Plan:" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 340,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Professional" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 341,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Monthly Cost:" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 344,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "$99/month" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 345,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 343,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Next Billing:" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 348,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "July 11, 2025" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 349,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 347,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Status:" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 352,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-green-600 font-semibold", children: "Active" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 353,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 351,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 338,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 336,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Store Information" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 359,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Store:" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 362,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: shop }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 363,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 361,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Connected:" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 366,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-green-600 font-semibold", children: "\u2713 Active" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 367,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 365,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Last Sync:" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 370,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "2 minutes ago" }, void 0, false, {
              fileName: "app/routes/app.tsx",
              lineNumber: 371,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.tsx",
            lineNumber: 369,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 360,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 358,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 335,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.tsx",
    lineNumber: 332,
    columnNumber: 29
  }, this);
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HomePage, {}, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 380,
          columnNumber: 16
        }, this);
      case "integrations":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IntegrationsPage, {}, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 382,
          columnNumber: 16
        }, this);
      case "analytics":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnalyticsPage, {}, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 384,
          columnNumber: 16
        }, this);
      case "account":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountPage, {}, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 386,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HomePage, {}, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 388,
          columnNumber: 16
        }, this);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-sm border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: "\u{1F3AF}" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 397,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-bold text-gray-900", children: "Retarget Blocker" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 398,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 396,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-600", children: shop }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 401,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white text-sm font-semibold", children: "TS" }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 403,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/app.tsx",
          lineNumber: 402,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 400,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 395,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app.tsx",
      lineNumber: 394,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app.tsx",
      lineNumber: 393,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-64 bg-white shadow-sm h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "mt-8 space-y-2 px-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentPage("home"), className: `w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${currentPage === "home" ? "bg-purple-100 text-purple-700" : "text-gray-700 hover:bg-gray-100"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F3E0}" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 415,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Home" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 416,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 414,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentPage("integrations"), className: `w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${currentPage === "integrations" ? "bg-purple-100 text-purple-700" : "text-gray-700 hover:bg-gray-100"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F517}" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 420,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Integrations" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 421,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 419,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentPage("analytics"), className: `w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${currentPage === "analytics" ? "bg-purple-100 text-purple-700" : "text-gray-700 hover:bg-gray-100"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F4CA}" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 425,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Analytics" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 426,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 424,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentPage("account"), className: `w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${currentPage === "account" ? "bg-purple-100 text-purple-700" : "text-gray-700 hover:bg-gray-100"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2699\uFE0F" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 430,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Account" }, void 0, false, {
            fileName: "app/routes/app.tsx",
            lineNumber: 431,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.tsx",
          lineNumber: 429,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.tsx",
        lineNumber: 413,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 412,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 p-8", children: renderPage() }, void 0, false, {
        fileName: "app/routes/app.tsx",
        lineNumber: 437,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.tsx",
      lineNumber: 410,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.tsx",
    lineNumber: 391,
    columnNumber: 10
  }, this);
}
_s(App, "Nu11ZN1EsKLF1rXOSkuiPlr9d7g=", false, function() {
  return [useLoaderData];
});
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default
};
//# sourceMappingURL=/build/routes/app-XLHRBQOB.js.map
