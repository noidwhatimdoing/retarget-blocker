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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.analytics.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.analytics.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.analytics.tsx"
  );
  import.meta.hot.lastModified = "1749679646946.768";
}
function Analytics() {
  _s();
  const {
    weeklyData,
    monthlyData,
    yearlyData
  } = useLoaderData();
  const [usersTimeframe, setUsersTimeframe] = (0, import_react2.useState)("weekly");
  const [savingsTimeframe, setSavingsTimeframe] = (0, import_react2.useState)("weekly");
  const getUsersData = () => {
    switch (usersTimeframe) {
      case "weekly":
        return weeklyData;
      case "monthly":
        return monthlyData;
      case "yearly":
        return yearlyData;
    }
  };
  const getSavingsData = () => {
    switch (savingsTimeframe) {
      case "weekly":
        return weeklyData;
      case "monthly":
        return monthlyData;
      case "yearly":
        return yearlyData;
    }
  };
  const LineChart = ({
    data,
    dataKey,
    color,
    title
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
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { width: "100", height: "100", fill: "url(#grid)" }, void 0, false, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { fill: "none", stroke: color, strokeWidth: "2", points }, void 0, false, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        data.map((item, index) => {
          const x = index / (data.length - 1) * 100;
          const y = 100 - item[dataKey] / maxValue * 80;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: x, cy: y, r: "3", fill: color }, index, false, {
            fileName: "app/routes/app.analytics.tsx",
            lineNumber: 146,
            columnNumber: 18
          }, this);
        })
      ] }, void 0, true, {
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 130,
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
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: Math.round(maxValue * 0.5).toLocaleString() }, void 0, false, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "0" }, void 0, false, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 164,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 151,
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
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 178,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.analytics.tsx",
      lineNumber: 125,
      columnNumber: 12
    }, this);
  };
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
      }, children: "Analytics Dashboard" }, void 0, false, {
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        fontSize: "16px",
        color: "#6d7175",
        margin: "0"
      }, children: "Track your suppression performance and ad spend savings over time" }, void 0, false, {
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.analytics.tsx",
      lineNumber: 186,
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
              fileName: "app/routes/app.analytics.tsx",
              lineNumber: 226,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              fontSize: "14px",
              color: "#6d7175",
              margin: "0"
            }, children: [
              "Number of customers suppressed from ads per ",
              usersTimeframe.slice(0, -2)
            ] }, void 0, true, {
              fileName: "app/routes/app.analytics.tsx",
              lineNumber: 234,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.analytics.tsx",
            lineNumber: 225,
            columnNumber: 13
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
            fileName: "app/routes/app.analytics.tsx",
            lineNumber: 246,
            columnNumber: 65
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.analytics.tsx",
            lineNumber: 242,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 219,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          position: "relative",
          paddingLeft: "60px",
          paddingBottom: "40px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineChart, { data: getUsersData(), dataKey: "users", color: "#6366f1", title: "Users Suppressed" }, void 0, false, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 267,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 262,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 212,
        columnNumber: 9
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
              fileName: "app/routes/app.analytics.tsx",
              lineNumber: 286,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              fontSize: "14px",
              color: "#6d7175",
              margin: "0"
            }, children: "Ad spend saved by suppressing customers (estimated at $4 per customer)" }, void 0, false, {
              fileName: "app/routes/app.analytics.tsx",
              lineNumber: 294,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.analytics.tsx",
            lineNumber: 285,
            columnNumber: 13
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
            fileName: "app/routes/app.analytics.tsx",
            lineNumber: 306,
            columnNumber: 65
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.analytics.tsx",
            lineNumber: 302,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 279,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          position: "relative",
          paddingLeft: "60px",
          paddingBottom: "40px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineChart, { data: getSavingsData(), dataKey: "savings", color: "#059669", title: "Money Saved" }, void 0, false, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 327,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/app.analytics.tsx",
          lineNumber: 322,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.analytics.tsx",
      lineNumber: 207,
      columnNumber: 7
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
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 362,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        fontSize: "24px",
        fontWeight: "700",
        color: "#202223",
        marginBottom: "4px"
      }, children: stat.value }, void 0, false, {
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 366,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        fontSize: "13px",
        color: "#6d7175"
      }, children: stat.label }, void 0, false, {
        fileName: "app/routes/app.analytics.tsx",
        lineNumber: 374,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/routes/app.analytics.tsx",
      lineNumber: 355,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/routes/app.analytics.tsx",
      lineNumber: 333,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.analytics.tsx",
    lineNumber: 182,
    columnNumber: 10
  }, this);
}
_s(Analytics, "22lVhL4dFRucOjD9Q9DxiM9trW8=", false, function() {
  return [useLoaderData];
});
_c = Analytics;
var _c;
$RefreshReg$(_c, "Analytics");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Analytics as default
};
//# sourceMappingURL=/build/routes/app.analytics-RNW64FT6.js.map
