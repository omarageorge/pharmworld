"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/context/userContext.js + 2 modules
var userContext = __webpack_require__(1440);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/context/constants/cartConstants.js
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

;// CONCATENATED MODULE: ./src/context/reducers/cartReducer.js

const cartReducer = (state, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return addProductToCart(action.payload, state);
        case REMOVE_FROM_CART:
            return removeProductFromCart(action.payload, state);
        default:
            return state;
    }
};
function addProductToCart(product, state) {
    const updatedCart = [
        ...state.products
    ];
    const updatedItemIndex = updatedCart.findIndex((item)=>item.id === product.id);
    if (updatedItemIndex < 0) {
        updatedCart.push({
            ...product,
            quantity: 1
        });
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return {
        ...state,
        products: updatedCart,
        total: state.total + product.price
    };
}
function removeProductFromCart(product, state) {
    const updatedCart = [
        ...state.products
    ];
    const updatedItemIndex = updatedCart.findIndex((item)=>item.id === product.id);
    const updatedItem = {
        ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity === 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return {
        ...state,
        products: updatedCart,
        total: state.total - product.price
    };
}

;// CONCATENATED MODULE: ./src/context/cartContext.js



const INITIAL_STATE = {
    products: JSON.parse(window.localStorage.getItem("cart")) || [],
    total: 0
};
const CartContext = /*#__PURE__*/ (0,external_react_.createContext)(INITIAL_STATE);
function CartProvider({ children  }) {
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(cartReducer, INITIAL_STATE);
    (0,external_react_.useEffect)(()=>{
        window.localStorage.setItem("cart", JSON.stringify(state.products));
    }, [
        state.products
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(CartContext.Provider, {
        value: {
            items: state.products,
            total: state.total,
            dispatch
        },
        children: children
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(userContext/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(CartProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [440], () => (__webpack_exec__(2971)));
module.exports = __webpack_exports__;

})();