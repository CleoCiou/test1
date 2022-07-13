(function() {
var exports = {};
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 614:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(449);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


async function getServerSideProps({
  params
}) {
  const url = "https://intersense.ddns.net:9022/api/Message/GetArticle";
  const data = {
    ArticleID: params.aid
  };
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
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

function init({
  item
}) {
  const metaData = [{
    index: 4,
    "og:url": "https://main.d2g43yuyj4bfeo.amplifyapp.com/blog/4",
    "og:title": "Como evitar a disseminação de desinformação?",
    "og:image": "https://main.d2g43yuyj4bfeo.amplifyapp.com/images/meta/A01-Cover.png",
    "og:description": "Saiba as principais características dos conteúdos falsos replicados na internet e dicas de como não cair em possíveis golpes e sofrer com a falta de informação."
  }, {
    index: 5,
    "og:url": "https://main.d2g43yuyj4bfeo.amplifyapp.com/blog/5",
    "og:title": "Como usar o Message Checker contra Fake News",
    "og:image": "https://main.d2g43yuyj4bfeo.amplifyapp.com/images/meta/A02-Cover.png",
    "og:description": "Conheça o aplicativo que garante proteção a toda hora em todos os lugares e evite receber fake news e conteúdos perigosos."
  }, {
    index: 6,
    "og:url": "https://main.d2g43yuyj4bfeo.amplifyapp.com/blog/6",
    "og:title": "O que são URLs maliciosas?",
    "og:image": "https://main.d2g43yuyj4bfeo.amplifyapp.com/images/meta/A03-Cover.png",
    "og:description": "Apenas com um click é possível cair em uma cilada e se tornar vítima de um ataque de vírus."
  }];
  console.log(item);
  const meta = metaData.find(data => data.index == item.ArticleID);
  return meta;
}

function ArticleSSR({
  item
}) {
  const {
    0: meta,
    1: setMeta
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => init({
    item
  }));
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    ogTitle: meta["og:title"],
    ogUrl: meta["og:url"],
    ogDescription: meta["og:description"],
    ogImage: meta["og:image"]
  }), __jsx("article", null, __jsx("section", {
    className: "blog"
  }, __jsx("div", {
    className: "inner"
  }, __jsx("div", {
    className: "title"
  }, item.Title), __jsx("div", {
    className: "titleImg"
  }, __jsx("img", {
    src: item.TitleImageUrl
  }), __jsx("div", {
    className: "author"
  }, item.DateAuthor)), item.ListViceData.map((data, index) => __jsx("div", {
    key: index
  }, __jsx("div", {
    className: "viceTitle"
  }, data.ViceTitle), __jsx("div", {
    className: "vicePreface",
    dangerouslySetInnerHTML: {
      __html: data.VicePreface
    }
  }), data.ViceImageUrl != "" && data.ViceImageUrl != null && __jsx("div", {
    className: "viceImg"
  }, __jsx("img", {
    src: data.ViceImageUrl
  })), __jsx("div", {
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [449], function() { return __webpack_exec__(614); });
module.exports = __webpack_exports__;

})();