"use strict";
exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 1440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ UserContext),
  "Z": () => (/* binding */ UserProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/context/constants/userConstants.js
const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
const USER_LOGOUT = "USER_LOGOUT";
const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

;// CONCATENATED MODULE: ./src/context/reducers/userReducer.js

const userReducer = (state, action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
                error: false
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case USER_LOGOUT:
            return {
                ...state,
                user: null
            };
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
                error: false
            };
        case USER_REGISTER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/context/userContext.js



const INITIAL_STATE = {
    user: JSON.parse(window.localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
};
const UserContext = /*#__PURE__*/ (0,external_react_.createContext)(INITIAL_STATE);
function UserProvider({ children  }) {
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(userReducer, INITIAL_STATE);
    (0,external_react_.useEffect)(()=>{
        window.localStorage.setItem("user", JSON.stringify(state.user));
    }, [
        state.user
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(UserContext.Provider, {
        value: {
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        },
        children: children
    });
}


/***/ })

};
;