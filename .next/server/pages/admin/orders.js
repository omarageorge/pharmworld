"use strict";
(() => {
var exports = {};
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 1312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminOrders)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Admin/AdminLayout.jsx
var AdminLayout = __webpack_require__(982);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Admin/TableRow.jsx


function TableRow({ order , client , date  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/admin/orders/${order}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: "odd:bg-lime-200 even:bg-white hover:bg-lime-300 font-light cursor-pointer transition-all delay-150 ease-out",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "p-4 text-center",
                    children: order
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "p-4",
                    children: client
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "p-4",
                    children: date
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/admin/orders/index.jsx



function AdminOrders() {
    const orders = [
        {
            order: 1,
            client: "Philip",
            date: "4/11/22"
        },
        {
            order: 2,
            client: "John",
            date: "3/11/22"
        },
        {
            order: 3,
            client: "Jane",
            date: "2/11/22"
        },
        {
            order: 4,
            client: "Bridget",
            date: "3/11/22"
        },
        {
            order: 5,
            client: "Agnes",
            date: "1/11/22"
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(AdminLayout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "px-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "block font-light text-xl py-4",
                    children: "Orders"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "w-full table-auto text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                className: "bg-lime-600 text-gray-100",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "w-1/12 p-4 text-center border-r-2",
                                            children: "#"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "w-8/12 p-4 border-r-2",
                                            children: "Client"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "w-3/12 p-4",
                                            children: "Date"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                className: "",
                                children: orders.map((order, index)=>/*#__PURE__*/ jsx_runtime_.jsx(TableRow, {
                                        order: order.order,
                                        client: order.client,
                                        date: order.date
                                    }, index))
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,440,982], () => (__webpack_exec__(1312)));
module.exports = __webpack_exports__;

})();