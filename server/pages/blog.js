(function() {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(449);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

async function getServerSideProps() {
  var url = "https://intersense.ddns.net:9022/api/Message/GetArticle";
  var data = {
    ArticleID: "4"
  };
  const res = await fetch(url, {
    method: "POST",
    // or 'PUT'
    body: JSON.stringify(data),
    // data can be `string` or {object}!
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  const item = await res.json();
  return {
    props: {
      item
    }
  };
}

function ArticleSSR({
  item
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    ogUrl: "https://main.d2g43yuyj4bfeo.amplifyapp.com/article"
  }), __jsx("article", null, __jsx("section", {
    className: "blog"
  }, __jsx("div", {
    className: "inner"
  }, item.ListViceData.map(data => __jsx("div", null, __jsx("div", {
    className: "viceTitle"
  }, data.ViceTitle), __jsx("div", {
    className: "vicePreface",
    dangerouslySetInnerHTML: {
      __html: data.VicePreface
    }
  }), __jsx("div", {
    className: "viceContent",
    dangerouslySetInnerHTML: {
      __html: data.ViceContent
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ArticleSSR);

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = __webpack_require__.X(0, [449], function() { return __webpack_exec__(286); });
module.exports = __webpack_exports__;

})();