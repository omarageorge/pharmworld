"use strict";
exports.id = 982;
exports.ids = [982];
exports.modules = {

/***/ 982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AdminLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1440);





function AdminLayout({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_userContext__WEBPACK_IMPORTED_MODULE_4__/* .UserContext */ .S);
    const logout = ()=>{
        router.push("/login");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!user) {
            router.push("/login");
        }
    }, [
        router,
        user
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "w-full h-auto",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                className: "fixed w-2/12 h-screen bg-lime-600",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "block font-medium text-sm text-center text-gray-100 uppercase mt-4 cursor-pointer",
                        children: "Pharmworld"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/admin/products",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `block w-full py-4 px-1 ${router.pathname === "/admin/products" ? "bg-lime-700" : "bg-lime-900"}  hover:bg-lime-700 font-light text-center text-sm text-gray-100 transition-all delay-100 ease-out sm:text-lg cursor-pointer`,
                                    children: "Products"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/admin/products/add",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `block w-full border-y border-lime-700 py-4 px-1 ${router.pathname === "/admin/products/add" ? "bg-lime-700" : "bg-lime-900"}  hover:bg-lime-700 font-light text-center text-sm text-gray-100 transition-all delay-100 ease-out sm:text-lg cursor-pointer`,
                                    children: "Add Products"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/admin/orders",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `block w-full border-b border-lime-700 py-4 px-1 ${router.pathname === "/admin/orders" ? "bg-lime-700" : "bg-lime-900"}  hover:bg-lime-700 font-light text-center text-sm text-gray-100 transition-all delay-100 ease- sm:text-lg cursor-pointer`,
                                    children: "Orders"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                onClick: logout,
                                className: "block w-full py-4 px-1 bg-red-900 hover:bg-red-800 font-light text-center text-sm text-gray-100 transition-all delay-100 ease-out cursor-pointer sm:text-lg",
                                children: "Logout"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "w-10/12 h-auto ml-[16.666667%]",
                children: children
            })
        ]
    });
}


/***/ })

};
;