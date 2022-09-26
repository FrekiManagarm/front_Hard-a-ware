"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_namespaceObject);
;// CONCATENATED MODULE: ./components/Layout/Layout.style.js

const Layout = (external_styled_components_default()).div`

`;
const Content = (external_styled_components_default()).div`
    
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./settings/constants.js
const MAIN_COLOR = "#5674AF";

;// CONCATENATED MODULE: ./components/Layout/Header/Header.style.js


const Navbar = (external_styled_components_default()).nav`
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 62px;
    background-color: ${MAIN_COLOR};
    position: fixed;
`;
const NavbarItems = (external_styled_components_default()).li`
    list-style-type: none;
    margin: 0 20px;
    font-size: 22px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        background: white;
        width: 100%;
        height: 2px;
        bottom: -0.25rem;
        transform-origin: 100% 0;
        transform: scaleX(0);
        transition: transform 0.4s;
    }

    &:hover::before {
        transform-origin: 0 0;
        transform: scaleX(1);
    }

    a {
        color: white;
        text-decoration: none;
    }
`;
const NavbarListItems = (external_styled_components_default()).ul`
    display: flex;
    justify-content: space-around;
`;
const LogoArea = (external_styled_components_default()).div`

`;
const ConnectButtons = (external_styled_components_default()).div`
    
`;
const Avatar = (external_styled_components_default()).button`
    margin: 10px;
`;
const Button = (external_styled_components_default()).button`
    padding: 0.5rem 1.5rem;
    margin: 0 0.5rem;
    border-radius: 2rem;
    border: none;
    background-color: white;
`;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Layout/Header/Header.js






const Header = ({ user , isLoggedIn  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Navbar, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LogoArea, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "https://i.imgur.com/9kR20Nx.png",
                        height: "35",
                        width: "35"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavbarListItems, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavbarItems, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Accueil"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavbarItems, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/configurator",
                            children: "Configurateur"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavbarItems, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/components",
                            children: "Composants"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ConnectButtons, {
                children: !isLoggedIn ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                        onClick: ()=>router.push("/login"),
                        children: "Connexion"
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                    children: "Avatar"
                })
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout/Footer/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout/Layout.js






const LayoutWrapper = ({ children , user , isLoggedIn  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: router.pathname === "/" || router.pathname === "/configurator" || router.pathname === "/configurator/[[...tab]]" || router.pathname === "/components" || router.pathname === "/components/cpu" || router.pathname === "/components/cpu/[id]" || router.pathname === "/components/case" || router.pathname === "/components/case/[id]" || router.pathname === "/components/cooling" || router.pathname === "/components/cooling/[id]" || router.pathname === "/components/gpu" || router.pathname === "/components/gpu/[id]" || router.pathname === "/components/hdd" || router.pathname === "/components/hdd/[id]" || router.pathname === "/components/motherboard" || router.pathname === "/components/motherboard/[id]" || router.pathname === "/components/psu" || router.pathname === "/components/psu/[id]" || router.pathname === "/components/ram" || router.pathname === "/components/ram/[id]" || router.pathname === "/components/ssd" || router.pathname === "/components/ssd/[id]" || router.pathname === "/dashboard" || router.pathname === "/login" || router.pathname === "/registration" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {
                    user: user,
                    isLoggedIn: isLoggedIn
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                    children: children
                }),
                // router.pathname === '/' ||
                router.pathname === "/dashboard" || router.pathname === "/configurator" || router.pathname === "/configurator/case-step" || router.pathname === "/configurator/cpu-step" || router.pathname === "/configurator" || router.pathname === "/components" || router.pathname === "/components/cpu" || router.pathname === "/components/cpu/[id]" || router.pathname === "/components/case" || router.pathname === "/components/case/[id]" || router.pathname === "/components/cooling" || router.pathname === "/components/cooling/[id]" || router.pathname === "/components/gpu" || router.pathname === "/components/gpu/[id]" || router.pathname === "/components/hdd" || router.pathname === "/components/hdd/[id]" || router.pathname === "/components/motherboard" || router.pathname === "/components/motherboard/[id]" || router.pathname === "/components/psu" || router.pathname === "/components/psu/[id]" || router.pathname === "/components/ram" || router.pathname === "/components/ram/[id]" || router.pathname === "/components/ssd" || router.pathname === "/components/ssd/[id]" ? /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {}) : null
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                    children: children
                }),
                router.pathname.split("/")[1] == "dashboard" ? /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {}) : null
            ]
        })
    });
};
/* harmony default export */ const Layout_Layout = ((0,router_.withRouter)(LayoutWrapper));


/***/ }),

/***/ 2282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export AuthContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var _helpers_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3048);
/* harmony import */ var _helpers_redirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3532);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7881);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_restriction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8041);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__, _helpers_session__WEBPACK_IMPORTED_MODULE_4__, _helpers_restriction__WEBPACK_IMPORTED_MODULE_7__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_3__, _helpers_session__WEBPACK_IMPORTED_MODULE_4__, _helpers_restriction__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const addItem = (key, value = "")=>{
    if (key) js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set(key, value, {
        expires: 7
    }); // secure true à remettre lors de la prod
};
const clearItem = (key)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].remove(key);
};
const isValidToken = ()=>{
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get(_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_COOKIE */ .Md);
    // JWT decode & check token validity & expiration.
    if (token) return true;
    return false;
};
const AuthProvider = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { locale  } = router;
    const { 0: loggedIn , 1: setLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loggedOut , 1: setLoggedOut  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!isValidToken());
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: token , 1: setToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: apiErrorMessage , 1: setApiErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    ////console.log(loggedIn, 'loggedIn');
    const getAuthUser = async ()=>{
        const { user  } = await (0,_helpers_restriction__WEBPACK_IMPORTED_MODULE_7__/* .withData */ .du)();
        setUser(user);
        return user;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoggedIn(isValidToken());
        getAuthUser();
    }, []);
    const signIn = (params, redirectionDatas)=>{
        //console.log(params);
        return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(`${"http://localhost:8000"}/api/login`, {
            method: "POST",
            // Authorization: `Bearer ${token}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then((response)=>{
            if (!response.ok) {
                response.json().then((json)=>{
                    setApiErrorMessage(json.message);
                });
            }
            return response.json();
        }).then((json)=>{
            if (json.token) {
                let user = json.user;
                let token = json.token;
                setUser(user);
                setToken(token);
                addItem(_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_COOKIE */ .Md, token);
                addItem(_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .USER_COOKIE */ .fT, user);
                setLoggedIn(true);
                setApiErrorMessage(null);
                if (redirectionDatas.next !== undefined) {
                    const nextRoute = redirectionDatas.next;
                    delete redirectionDatas.next;
                    router.push({
                        pathname: decodeURIComponent(nextRoute),
                        query: redirectionDatas,
                        locale: locale
                    });
                } else {
                    router.push({
                        pathname: "/",
                        locale: locale
                    });
                }
                return json;
            }
        }).catch((error)=>{
            return error.message;
        });
    };
    const signUp = (params, redirectionUrl, locale)=>{
        //console.log('url',redirectionUrl)
        //console.log('locale',locale)
        return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(`${"http://localhost:8000"}/api/register`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then((response)=>{
            if (response.status === 422) {
                setApiErrorMessage("User already exists");
            }
            return response.json();
        }).then((json)=>{
            if (json.token) {
                let user = json.user;
                let token = json.token;
                setUser(user);
                setToken(token);
                addItem(_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_COOKIE */ .Md, token);
                addItem(_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .USER_COOKIE */ .fT, user);
                setLoggedIn(true);
                setApiErrorMessage(null);
                router.push({
                    pathname: redirectionUrl,
                    locale: locale
                });
            }
        }).catch((error)=>{
        //console.log("error:"+ error.message);
        });
    };
    /**
   * For 3rd-party Authentication [e.g. Autho0, firebase, AWS etc]
   *
   */ const tokenAuth = (token, user = {})=>{
        setUser(user);
        setToken(token);
        addItem(_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_COOKIE */ .Md, token);
        addItem(_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .USER_COOKIE */ .fT, user);
        setLoggedIn(true);
        router.push("/", "/", {
            locale: locale
        });
    };
    const forgetPass = (params)=>{
    //console.log(params, 'forget password form Props');
    };
    const changePass = (params)=>{
    //console.log(params, 'change password form Props');
    };
    const logOut = ()=>{
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(`${"http://localhost:8000"}/api/logout`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${(0,_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .getCookie */ .ej)(_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_COOKIE */ .Md)}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.status == 200) {
                console.log("logged out");
                clearItem(_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .TOKEN_COOKIE */ .Md);
                clearItem(_helpers_session__WEBPACK_IMPORTED_MODULE_4__/* .USER_COOKIE */ .fT);
                setLoggedIn(false);
                setUser({});
                setToken(null);
                router.push({
                    pathname: "/",
                    locale: locale
                });
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            loggedIn,
            logOut,
            loggedOut,
            signIn,
            signUp,
            forgetPass,
            changePass,
            tokenAuth,
            router,
            user,
            token,
            apiErrorMessage,
            setApiErrorMessage
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: props.children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2282);
/* harmony import */ var _helpers_restriction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8041);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8766);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthProvider__WEBPACK_IMPORTED_MODULE_2__, _helpers_restriction__WEBPACK_IMPORTED_MODULE_3__]);
([_context_AuthProvider__WEBPACK_IMPORTED_MODULE_2__, _helpers_restriction__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function MyApp({ Component , pageProps , query , user , isLoggedIn , locale , pathname , tokenCookie ,  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.MantineProvider, {
        withGlobalStyles: true,
        withNormalizeCSS: true,
        theme: {
            colorScheme: "light"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                user: user,
                isLoggedIn: isLoggedIn,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__.DefaultSeo, {
                        title: "HARDSHOP",
                        titleTemplate: "Hardshop | %s",
                        description: "HARDSHOP website",
                        openGraph: {
                            type: "website",
                            locale: locale,
                            url: "https://www.Hardshop.com/",
                            site_name: "Hardshop"
                        },
                        twitter: {
                            handle: "@handle",
                            site: "@site",
                            cardType: "summary_large_image"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        })
    });
}
MyApp.getInitialProps = async ({ Component , ctx  })=>{
    let pageProps = {};
    const { query , pathname , asPath , locale , res , req  } = ctx;
    const { user , isLoggedIn , token ,  } = await (0,_helpers_restriction__WEBPACK_IMPORTED_MODULE_3__/* .withData */ .du)(ctx);
    const tokenCookie = token;
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    let isProtectedRoute = [
        `/dashboard/[[...tab]]`,
        `configurator`
    ].includes(pathname);
    if (!isLoggedIn && isProtectedRoute && res) {
        res.writeHead(302, {
            Location: `${process.env.LOCAL_FRONT_SERVER}/login?next=${asPath}`
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

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 7881:
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 9318:
/***/ ((module) => {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = require("next-cookies");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

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

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, [377,675,952,664,41], () => (__webpack_exec__(2581)));
module.exports = __webpack_exports__;

})();