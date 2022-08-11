"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./context/LayoutProvider.js


const LayoutContext = /*#__PURE__*/ (0,external_react_.createContext)();
const initialState = {
    searchVisibility: false
};
function reducer(state, action) {
    switch(action.type){
        case "SHOW_TOP_SEARCHBAR":
            return {
                ...state,
                searchVisibility: true
            };
        case "HIDE_TOP_SEARCHBAR":
            return {
                ...state,
                searchVisibility: false
            };
        default:
            return state;
    }
}
function LayoutProvider({ children  }) {
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, initialState);
    return /*#__PURE__*/ jsx_runtime_.jsx(LayoutContext.Provider, {
        value: [
            state,
            dispatch
        ],
        children: children
    });
};
const useStateValue = ()=>useContext(LayoutContext);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./container/Layout/Layout.style.js

const Content = (external_styled_components_default()).div`

`;
const Layout = (external_styled_components_default()).div`
    
`;

;// CONCATENATED MODULE: ./container/Layout/Layout.js






const Header = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(952), __webpack_require__.e(61), __webpack_require__.e(778)]).then(__webpack_require__.bind(__webpack_require__, 6778)), {
    loadableGenerated: {
        modules: [
            "../container/Layout/Layout.js -> " + "./Header/Header"
        ]
    }
});
const Footer = dynamic_default()(()=>__webpack_require__.e(/* import() */ 56).then(__webpack_require__.bind(__webpack_require__, 1056)), {
    loadableGenerated: {
        modules: [
            "../container/Layout/Layout.js -> " + "./Footer/Footer"
        ]
    }
});
const LayoutWrapper = ({ children , user , isLoggedIn  })=>{
    if (typeof user === "string") user = JSON.parse(user);
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutProvider, {
            children: router.pathname === "/" || router.pathname === "/products" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        user: user,
                        isLoggedIn: isLoggedIn
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                        children: children
                    }),
                    router.pathname === "/" || router.pathname === "/products" ? /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}) : null
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                        children: children
                    }),
                    router.pathname.split("/")[1] == "dashboard" ? /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}) : null
                ]
            })
        })
    });
};
/* harmony default export */ const Layout_Layout = ((0,router_.withRouter)(LayoutWrapper));


/***/ }),

/***/ 6154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ get_api_data)
});

// UNUSED EXPORTS: Paginator, ProcessAPIData, SearchStateKeyCheck, SearchedData

;// CONCATENATED MODULE: external "isomorphic-unfetch"
const external_isomorphic_unfetch_namespaceObject = require("isomorphic-unfetch");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_namespaceObject);
;// CONCATENATED MODULE: external "lodash/shuffle"
const shuffle_namespaceObject = require("lodash/shuffle");
;// CONCATENATED MODULE: ./helpers/get_api_data.js


const FetchAPIData = (url, locale)=>{
    const settings = {
        method: "GET",
        headers: {
            // Authorization: "Bearer " + token,
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": locale
        }
    };
    return external_isomorphic_unfetch_default()(url, settings).then((r)=>r.json()).then((data)=>{
        return data;
    });
};
const ProcessAPIData = (apiData)=>{
    let fetchData = {};
    if (apiData) {
        apiData.forEach((item, key)=>{
            fetchData.data = item.data ? [
                ...item.data
            ] : [];
            fetchData.name = item.name ? item.name : "";
        });
    }
    const data = fetchData ? fetchData.data : [];
    return data;
};
const SearchedData = (processedData)=>{
    const randNumber = Math.floor(Math.random() * 50 + 1);
    const data = shuffle(processedData.slice(0, randNumber));
    return data;
};
const SearchStateKeyCheck = (state)=>{
    for(var key in state){
        if (state[key] !== null && state[key] != "" && state[key] != [] && state[key] != 0 && state[key] != 100) {
            return true;
        }
    }
    return false;
};
const Paginator = (posts, processedData, limit)=>{
    return [
        ...posts,
        ...processedData.slice(posts.length, posts.length + limit)
    ];
};
const GetAPIData = async (apiUrl, locale)=>{
    const promises = apiUrl.map(async (repo)=>{
        const api = repo.endpoint;
        const response = await FetchAPIData(api, locale);
        return {
            name: repo.name,
            data: response
        };
    });
    const receviedData = await Promise.all(promises);
    return receviedData;
};
/* harmony default export */ const get_api_data = (GetAPIData);


/***/ }),

/***/ 3532:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Redirect to any given url
 */ /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((context = {}, target)=>{
    if (context.res) {
        context.res.writeHead(303, {
            Location: target
        });
        context.res.end();
    } else {
        Router.replace(target);
    }
});


/***/ }),

/***/ 8041:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "du": () => (/* binding */ withData)
/* harmony export */ });
/* unused harmony exports isAuthenticated, secretPage, getUserByToken, isAuthorized, isLoggedInOrLogThenRedirect */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3048);
/* harmony import */ var _get_api_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6154);
/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3532);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_session__WEBPACK_IMPORTED_MODULE_1__]);
_session__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function isAuthenticated(context) {
    const token = getCookie(TOKEN_COOKIE, context);
    const isLoggedIn = token ? true : false;
    // if (isLoggedIn) {
    //   redirect(context, '/');
    // }
    return {
        isLoggedIn
    };
}
function secretPage(context) {
    const token = getCookie(TOKEN_COOKIE, context);
    const isLoggedIn = token ? true : false;
    if (!isLoggedIn) {
        if (false) {}
    }
    return {
        isLoggedIn
    };
}
const getUserByToken = async (token)=>{
    const locale = "fr";
    const apiUrl = [
        {
            name: "user",
            endpoint: `${"http://localhost:8000"}/api/get-user-by-token`
        }, 
    ];
    const response = await (0,_get_api_data__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(apiUrl, locale, token);
    if (response) {
        return await response[0].data.data;
    }
};
async function withData(context) {
    const token = (0,_session__WEBPACK_IMPORTED_MODULE_1__/* .getCookie */ .ej)(_session__WEBPACK_IMPORTED_MODULE_1__/* .TOKEN_COOKIE */ .Md, context);
    const isLoggedIn = token ? true : false;
    let user = {};
    if (isLoggedIn) {
        user = await getUserByToken(token);
    }
    return {
        isLoggedIn,
        user,
        token
    };
}
function isAuthorized(resourceOwnerId, locale) {
    const { user , isLoggedIn  } = withData();
    const userObj = JSON.parse(user);
    let authorized = false;
    if (!isLoggedIn) {
        if (false) {}
    } else {
        if (resourceOwnerId == userObj.id) {
            authorized = true;
        } else {
            authorized = false;
        }
    }
    return {
        authorized
    };
}
function isLoggedInOrLogThenRedirect(resourceOwnerId = null, locale = "fr") {
    const { user , isLoggedIn  } = withData();
    const userObj = user && Object.keys(user).length !== 0 && user.constructor === Object ? JSON.parse(user) : {};
    let authorized = false;
    if (!isLoggedIn) {
        if (false) { var _pathname; }
    } else {
        if (resourceOwnerId == (userObj === null || userObj === void 0 ? void 0 : userObj.id)) {
            authorized = true;
        } else {
            authorized = false;
        }
    }
    return {
        authorized
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3048:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Md": () => (/* binding */ TOKEN_COOKIE),
/* harmony export */   "ej": () => (/* binding */ getCookie)
/* harmony export */ });
/* unused harmony exports USER_COOKIE, setCookie, removeCookie */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7486);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const TOKEN_COOKIE = "token";
const USER_COOKIE = "user";
const getCookieFromBrowser = (key)=>{
    return cookie.get(key);
};
const getCookieFromServer = (ctx, key = "id_token")=>{
    const cookie = next_cookies__WEBPACK_IMPORTED_MODULE_1___default()(ctx);
    const token = cookie && cookie[key] ? cookie[key] : false;
    if (token) return null;
    return token;
};
const getCookie = (key, context = {})=>{
    return  false ? 0 : getCookieFromServer(context, key);
};
const setCookie = (key, token)=>{
    cookie.set(key, token, {
        expires: 7
    });
};
const removeCookie = (key)=>{
    cookie.remove(key);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9742);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_restriction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8041);
/* harmony import */ var _container_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_restriction__WEBPACK_IMPORTED_MODULE_6__]);
_helpers_restriction__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function MyApp({ Component , pageProps , query , user , isLoggedIn , locale , pathname , tokenCookie  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const AuthUser = typeof user === "string" ? JSON.parse(user) : user;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
        defaultTheme: "system",
        attribute: "class",
        value: {
            light: _styles_theme__WEBPACK_IMPORTED_MODULE_2__/* .lightTheme.className */ .W.className,
            dark: _styles_theme__WEBPACK_IMPORTED_MODULE_2__/* .darkTheme.className */ .$.className
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.NextUIProvider, {
            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__/* .darkTheme */ .$,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    isLoggedIn: isLoggedIn,
                    user: user,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__.DefaultSeo, {
                        title: "HardShop - Your best PC experience",
                        description: "HardShop website",
                        openGraph: {
                            type: "website",
                            locale: locale,
                            url: "https://hardshop.com",
                            site_name: "HardShop"
                        },
                        twitter: {
                            handle: "@handle",
                            site: "@site",
                            cardType: "summary_large_image"
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
MyApp.getInitialProps = async ({ Component , ctx  })=>{
    let pageProps = {};
    const { query , pathname , asPath , locale , res , req  } = ctx;
    const { user , isLoggedIn , token  } = await (0,_helpers_restriction__WEBPACK_IMPORTED_MODULE_6__/* .withData */ .du)(ctx);
    const tokenCookie = token;
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    let isProtectedRoute = [
        `/dashboard`,
        `/configurator`, 
    ].includes(pathname);
    if (!isLoggedIn && isProtectedRoute && res) {
        res.writeHead(302, {
            Location: `${"http://localhost:3000"}/login?next=${asPath}`
        });
        res.end();
    }
    return {
        pageProps,
        query,
        pathname,
        user,
        isLoggedIn,
        tokenCookie
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ darkTheme),
/* harmony export */   "W": () => (/* binding */ lightTheme)
/* harmony export */ });
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__);

const darkTheme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    type: "dark",
    theme: {
        colors: {
            primaryLight: "$green200",
            primaryLightHover: "$green300",
            primaryLightActive: "$green400",
            primaryLightContrast: "$green600",
            primary: "#4ADE7B",
            primaryBorder: "$green500",
            primaryBorderHover: "$green600",
            primarySolidHover: "$green700",
            primarySolidContrast: "$white",
            primaryShadow: "$green500",
            gradient: "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
            link: "#5E1DAD",
            myColor: "#ff4ecd"
        }
    }
});
const lightTheme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    type: "light"
});


/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 1961:
/***/ ((module) => {

module.exports = require("mobile-detect");

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = require("next-cookies");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5227:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 77:
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

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

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

/***/ 8297:
/***/ ((module) => {

module.exports = require("react-stickynode");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();