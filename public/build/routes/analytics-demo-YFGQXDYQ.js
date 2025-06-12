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

// app/routes/analytics-demo.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/analytics-demo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/analytics-demo.tsx"
  );
  import.meta.hot.lastModified = "1749658249038.6265";
}
function AnalyticsDemo() {
  _s();
  const [usersTimeframe, setUsersTimeframe] = (0, import_react.useState)("weekly");
  const [savingsTimeframe, setSavingsTimeframe] = (0, import_react.useState)("weekly");
  const weeklyData = [{
    period: "Mon",
    users: 23,
    savings: 92
  }, {
    period: "Tue",
    users: 45,
    savings: 180
  }, {
    period: "Wed",
    users: 31,
    savings: 124
  }, {
    period: "Thu",
    users: 52,
    savings: 208
  }, {
    period: "Fri",
    users: 38,
    savings: 152
  }, {
    period: "Sat",
    users: 29,
    savings: 116
  }, {
    period: "Sun",
    users: 41,
    savings: 164
  }];
  const monthlyData = [{
    period: "Jan",
    users: 890,
    savings: 3560
  }, {
    period: "Feb",
    users: 1205,
    savings: 4820
  }, {
    period: "Mar",
    users: 1156,
    savings: 4624
  }, {
    period: "Apr",
    users: 1389,
    savings: 5556
  }, {
    period: "May",
    users: 1502,
    savings: 6008
  }, {
    period: "Jun",
    users: 1234,
    savings: 4936
  }];
  const LineChart = ({
    data,
    dataKey,
    color
  }) => {
    const maxValue = Math.max(...data.map((d) => d[dataKey]));
    const points = data.map((item, index) => {
      const x = index / (data.length - 1) * 100;
      const y = 100 - item[dataKey] / maxValue * 80;
      return `${x},${y}`;
    }).join(" ");
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      position: "relative",
      height: "300px",
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "100%", height: "100%", viewBox: "0 0 100 100", preserveAspectRatio: "none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pattern", { id: "grid", width: "20", height: "20", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M 20 0 L 0 0 0 20", fill: "none", stroke: "#f3f4f6", strokeWidth: "0.5" }, void 0, false, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { width: "100", height: "100", fill: "url(#grid)" }, void 0, false, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { fill: "none", stroke: color, strokeWidth: "2", points }, void 0, false, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        data.map((item, index) => {
          const x = index / (data.length - 1) * 100;
          const y = 100 - item[dataKey] / maxValue * 80;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: x, cy: y, r: "3", fill: color }, index, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 112,
            columnNumber: 18
          }, this);
        })
      ] }, void 0, true, {
        fileName: "app/routes/analytics-demo.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        position: "absolute",
        left: "-50px",
        top: "0",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "#6d7175"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: maxValue.toLocaleString() }, void 0, false, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: Math.round(maxValue * 0.5).toLocaleString() }, void 0, false, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "0" }, void 0, false, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics-demo.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        position: "absolute",
        bottom: "-30px",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "#6d7175"
      }, children: data.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.period }, index, false, {
        fileName: "app/routes/analytics-demo.tsx",
        lineNumber: 142,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/routes/analytics-demo.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/analytics-demo.tsx",
      lineNumber: 94,
      columnNumber: 12
    }, this);
  };
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
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontWeight: "600",
          fontSize: "16px"
        }, children: "Retarget Blocker" }, void 0, false, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics-demo.tsx",
        lineNumber: 160,
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
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 197,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Home" }, void 0, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 198,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/integrations-demo", style: {
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 20px",
          color: "#b5b5b5",
          textDecoration: "none"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F517}" }, void 0, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Integrations" }, void 0, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 210,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 201,
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F4CA}" }, void 0, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 222,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Analytics" }, void 0, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 223,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 213,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics-demo.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/analytics-demo.tsx",
      lineNumber: 153,
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
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 243,
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
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 261,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              fontSize: "14px",
              fontWeight: "500"
            }, children: "Store Owner" }, void 0, false, {
              fileName: "app/routes/analytics-demo.tsx",
              lineNumber: 276,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              fontSize: "12px",
              color: "#6d7175"
            }, children: "Growth Plan" }, void 0, false, {
              fileName: "app/routes/analytics-demo.tsx",
              lineNumber: 280,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 275,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 251,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics-demo.tsx",
        lineNumber: 234,
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
          }, children: "Analytics Dashboard" }, void 0, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 300,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            fontSize: "16px",
            color: "#6d7175",
            margin: "0"
          }, children: "Track your suppression performance and ad spend savings over time" }, void 0, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 308,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 297,
          columnNumber: 13
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#202223",
                  margin: "0 0 4px 0"
                }, children: "Users Added to Suppression" }, void 0, false, {
                  fileName: "app/routes/analytics-demo.tsx",
                  lineNumber: 337,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
                  fontSize: "14px",
                  color: "#6d7175",
                  margin: "0"
                }, children: "Number of customers suppressed from ads per day" }, void 0, false, {
                  fileName: "app/routes/analytics-demo.tsx",
                  lineNumber: 345,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/analytics-demo.tsx",
                lineNumber: 336,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                display: "flex",
                gap: "8px"
              }, children: ["weekly", "monthly", "yearly"].map((timeframe) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setUsersTimeframe(timeframe), style: {
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid #e1e3e5",
                backgroundColor: usersTimeframe === timeframe ? "#6366f1" : "#ffffff",
                color: usersTimeframe === timeframe ? "#ffffff" : "#374151",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                textTransform: "capitalize"
              }, children: timeframe.slice(0, -2) }, timeframe, false, {
                fileName: "app/routes/analytics-demo.tsx",
                lineNumber: 357,
                columnNumber: 71
              }, this)) }, void 0, false, {
                fileName: "app/routes/analytics-demo.tsx",
                lineNumber: 353,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics-demo.tsx",
              lineNumber: 330,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              position: "relative",
              paddingLeft: "60px",
              paddingBottom: "40px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineChart, { data: usersTimeframe === "weekly" ? weeklyData : monthlyData, dataKey: "users", color: "#6366f1" }, void 0, false, {
              fileName: "app/routes/analytics-demo.tsx",
              lineNumber: 378,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/analytics-demo.tsx",
              lineNumber: 373,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 323,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "24px",
            border: "1px solid #e1e3e5",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#202223",
                  margin: "0 0 4px 0"
                }, children: "Estimated Money Saved" }, void 0, false, {
                  fileName: "app/routes/analytics-demo.tsx",
                  lineNumber: 397,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
                  fontSize: "14px",
                  color: "#6d7175",
                  margin: "0"
                }, children: "Ad spend saved by suppressing customers (estimated at $4 per customer)" }, void 0, false, {
                  fileName: "app/routes/analytics-demo.tsx",
                  lineNumber: 405,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/analytics-demo.tsx",
                lineNumber: 396,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                display: "flex",
                gap: "8px"
              }, children: ["weekly", "monthly", "yearly"].map((timeframe) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSavingsTimeframe(timeframe), style: {
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid #e1e3e5",
                backgroundColor: savingsTimeframe === timeframe ? "#059669" : "#ffffff",
                color: savingsTimeframe === timeframe ? "#ffffff" : "#374151",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                textTransform: "capitalize"
              }, children: timeframe.slice(0, -2) }, timeframe, false, {
                fileName: "app/routes/analytics-demo.tsx",
                lineNumber: 417,
                columnNumber: 71
              }, this)) }, void 0, false, {
                fileName: "app/routes/analytics-demo.tsx",
                lineNumber: 413,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics-demo.tsx",
              lineNumber: 390,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              position: "relative",
              paddingLeft: "60px",
              paddingBottom: "40px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineChart, { data: savingsTimeframe === "weekly" ? weeklyData : monthlyData, dataKey: "savings", color: "#059669" }, void 0, false, {
              fileName: "app/routes/analytics-demo.tsx",
              lineNumber: 438,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/analytics-demo.tsx",
              lineNumber: 433,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 383,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 318,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginTop: "32px"
        }, children: [{
          label: "Total Users Suppressed",
          value: "2,847",
          icon: "\u{1F465}"
        }, {
          label: "Total Savings",
          value: "$11,388",
          icon: "\u{1F4B0}"
        }, {
          label: "Average Daily Savings",
          value: "$127",
          icon: "\u{1F4C8}"
        }, {
          label: "Best Day",
          value: "$284",
          icon: "\u{1F3C6}"
        }].map((stat, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          border: "1px solid #e1e3e5",
          textAlign: "center"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "24px",
            marginBottom: "8px"
          }, children: stat.icon }, void 0, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 473,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "24px",
            fontWeight: "700",
            color: "#202223",
            marginBottom: "4px"
          }, children: stat.value }, void 0, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 477,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            fontSize: "13px",
            color: "#6d7175"
          }, children: stat.label }, void 0, false, {
            fileName: "app/routes/analytics-demo.tsx",
            lineNumber: 485,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 466,
          columnNumber: 37
        }, this)) }, void 0, false, {
          fileName: "app/routes/analytics-demo.tsx",
          lineNumber: 444,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics-demo.tsx",
        lineNumber: 294,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics-demo.tsx",
        lineNumber: 288,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/analytics-demo.tsx",
      lineNumber: 229,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/analytics-demo.tsx",
    lineNumber: 146,
    columnNumber: 10
  }, this);
}
_s(AnalyticsDemo, "Q7iRz6p3JAXjsSO7LZt1dDYjBP4=");
_c = AnalyticsDemo;
var _c;
$RefreshReg$(_c, "AnalyticsDemo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AnalyticsDemo as default
};
//# sourceMappingURL=/build/routes/analytics-demo-YFGQXDYQ.js.map
