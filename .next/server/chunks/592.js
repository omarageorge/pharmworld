"use strict";
exports.id = 592;
exports.ids = [592];
exports.modules = {

/***/ 1592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/Navbar.jsx




function Navbar() {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "fixed z-50 w-full bg-lime-700 py-5 shadow-2xl",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-[80%] mx-auto flex justify-between items-center text-gray-100",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-bold text-gray-800 text-xl cursor-pointer",
                        children: "Pharmworld"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "font-light space-x-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `cursor-pointer ${router.pathname === "/" && "text-orange-400 font-normal"}`,
                                children: "Products"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "cursor-pointer",
                                children: "Login"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/register",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "cursor-pointer",
                                children: "Register"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/cart",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: `flex items-center cursor-pointer ${router.pathname === "/cart" && "text-orange-400 font-normal"}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "(0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaShoppingCart, {})
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Layout.jsx


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "w-full h-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "pt-24 pb-6",
                children: children
            })
        ]
    });
}


/***/ })

};
;