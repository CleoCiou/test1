(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 458:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/header.js

var __jsx = (external_react_default()).createElement;

function Header() {
  return __jsx("header", null, __jsx("a", {
    className: "logo",
    href: "index.html"
  }, __jsx("img", {
    src: "/images/logo.svg",
    alt: "Logo"
  })), __jsx("nav", null, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "faq.html"
  }, "FAQs ")), __jsx("li", null, __jsx("a", {
    className: "download",
    href: "https://bit.ly/3b91YMY",
    target: "_blank"
  }, "Download Now")))));
}

/* harmony default export */ var header = (Header);
;// CONCATENATED MODULE: ./components/footer.js

var footer_jsx = (external_react_default()).createElement;

function Footer() {
  return footer_jsx("footer", null, footer_jsx("div", {
    className: "inner"
  }, footer_jsx("div", {
    className: "main"
  }, footer_jsx("div", {
    className: "row"
  }, footer_jsx("h4", null, "Company"), footer_jsx("a", {
    href: "https://whoscall.com",
    target: "_blank"
  }, "Gogolook"), footer_jsx("a", {
    href: "privacy.html"
  }, "Privacy policy"), footer_jsx("a", {
    href: "terms.html"
  }, "Terms of service")), footer_jsx("div", {
    className: "row"
  }, footer_jsx("h4", null, "Services"), footer_jsx("a", {
    href: "https://intersense.ddns.net:9022/Contact/Message?lang=en&id=1"
  }, "Contact"), footer_jsx("a", {
    href: "faq.html"
  }, "FAQs")), footer_jsx("div", {
    className: "row"
  }, footer_jsx("h4", null, "Follow us"), footer_jsx("a", {
    href: "https://www.facebook.com/MessageCheckerBR",
    target: "_blank"
  }, "Facebook"), footer_jsx("a", {
    href: "https://www.instagram.com/messagechecker/?igshid=YmMyMTA2M2Y=",
    target: "_blank"
  }, "Instagram")), footer_jsx("div", {
    className: "row"
  }, footer_jsx("h1", null, "Message Checker"), footer_jsx("a", {
    className: "app01",
    href: "https://bit.ly/3b91YMY",
    target: "_blank"
  }, footer_jsx("img", {
    src: "/images/app01.png",
    alt: "Google Play"
  })))), footer_jsx("div", {
    className: "copyright"
  }, footer_jsx("p", null, "\xA9 2021 Gogolook. All Rights Reserved."), footer_jsx("div", {
    className: "lang"
  }, "English (US)"), footer_jsx("div", {
    className: "lang_box"
  }, footer_jsx("span", null, "English (US)"), footer_jsx("a", {
    href: "tw/index.html"
  }, "\u4E2D\u6587"), footer_jsx("a", {
    href: "pt/index.html"
  }, "Portugu\xEAs")))));
}

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./components/layout.js

var layout_jsx = (external_react_default()).createElement;


function Layout({
  children
}) {
  return layout_jsx((external_react_default()).Fragment, null, layout_jsx(header, null), layout_jsx("main", null, children), layout_jsx(footer, null));
}
;// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = (external_react_default()).createElement;






function MyApp({
  Component,
  pageProps
}) {
  return _app_jsx(Layout, null, _app_jsx(Component, pageProps));
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(458));
module.exports = __webpack_exports__;

})();