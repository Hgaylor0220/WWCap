webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/haileygaylor/Epicodus-Projects/WWCap/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React, { Fragment } from 'react';

var bodyStyle = {
  bodyheight: "100%",
  background: "#d1d4c9"
};
var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  background: "#98ccd3"
};

var Layout = function Layout(props) {
  return __jsx("body", {
    style: bodyStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), props.content));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/haileygaylor/Epicodus-Projects/WWCap/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var indexPageContent = __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("body", {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "White Water, Is It In?")), __jsx("div", {
  className: "jsx-849423050" + " " + "hero",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-849423050" + " " + "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "White Water, Is It In?"), __jsx("p", {
  className: "jsx-849423050" + " " + "description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Wellcome to the PNW White water application build to provide you with up to date information on all the great rivers around. You can search a river and find out what the current flow, class, length of the run and gps corrdinates of the put in and take out's of the river. What are you waiting for? get out there, be safe and get wild!"), __jsx("div", {
  className: "jsx-849423050" + " " + "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("a", {
  href: "/RiverInfo",
  className: "jsx-849423050" + " " + "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Search a River \u2192"), __jsx("p", {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Search by location, class or length")), __jsx("a", {
  href: "/journal",
  className: "jsx-849423050" + " " + "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Create a river Journal \u2192"), __jsx("p", {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "Document all your favorite runs here! Notes on flow, river changes, seasonal trends?")), __jsx("a", {
  href: "/messageBoard",
  className: "jsx-849423050" + " " + "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Message Board \u2192"), __jsx("p", {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "Looking for a river near you?")), __jsx("a", {
  href: "/inviteafriend",
  className: "jsx-849423050" + " " + "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "Invite a Friend  \u2192"), __jsx("p", {
  className: "jsx-849423050",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, "Do you want to share all this rad information with your other friends? Share the app here!")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "849423050",
  __self: undefined
}, ".hero.jsx-849423050{width:100%;color:#E5DFDF;fontfamily:Lucida-Grande;color:#333;}.title.jsx-849423050{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-849423050,.description.jsx-849423050{text-align:center;}.row.jsx-849423050{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-849423050{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-849423050:hover{border-color:#E5DFDF;}.card.jsx-849423050 h3.jsx-849423050{margin:0;color:#E5DFDF;border-color:#067df7;}.card.jsx-849423050 h3.jsx-849423050{margin:0;color:#067df7;font-size:18px;}.card.jsx-849423050 p.jsx-849423050{margin:0;padding:12px 0 0;font-size:13px;color:#E5DFDF;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWlsZXlnYXlsb3IvRXBpY29kdXMtUHJvamVjdHMvV1dDYXAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RnQixBQUdvQixBQVNGLEFBUVMsQUFHRixBQU9PLEFBUUYsQUFHWixBQUtBLEFBS0EsU0F0Q0UsQUE2QkcsQUFLQSxBQUtHLEVBL0NILEtBbUJRLEVBSHhCLEVBUG1CLENBeUJuQixFQVJjLEFBWVMsQUFLTixFQTFDVSxDQStDVixTQXJCQyxFQWpCQyxDQVVKLEFBd0JmLEdBS2dCLEdBVmhCLE1BcENhLENBeUJVLEdBakJOLENBdUNKLE1BN0NiLEtBOENBLEdBdkNBLGdDQWlCZ0IsV0FSSyxHQVNNLHlCQUMzQix5Q0FUK0IsMkhBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9oYWlsZXlnYXlsb3IvRXBpY29kdXMtUHJvamVjdHMvV1dDYXAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuXG5cblxuY29uc3QgaW5kZXhQYWdlQ29udGVudCA9XG4gICAgPGRpdj5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+V2hpdGUgV2F0ZXIsIElzIEl0IEluPzwvdGl0bGU+XG5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG5cblxuXG5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5XaGl0ZSBXYXRlciwgSXMgSXQgSW4/PC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBXZWxsY29tZSB0byB0aGUgUE5XIFdoaXRlIHdhdGVyIGFwcGxpY2F0aW9uIGJ1aWxkIHRvIHByb3ZpZGUgeW91IHdpdGggdXAgdG8gZGF0ZSBpbmZvcm1hdGlvbiBvbiBhbGwgdGhlIGdyZWF0IHJpdmVycyBhcm91bmQuIFlvdSBjYW4gc2VhcmNoIGEgcml2ZXIgYW5kIGZpbmQgb3V0IHdoYXQgdGhlIGN1cnJlbnQgZmxvdywgY2xhc3MsIGxlbmd0aCBvZiB0aGUgcnVuIGFuZCBncHMgY29ycmRpbmF0ZXMgb2YgdGhlIHB1dCBpbiBhbmQgdGFrZSBvdXQncyBvZiB0aGUgcml2ZXIuIFdoYXQgYXJlIHlvdSB3YWl0aW5nIGZvcj8gZ2V0IG91dCB0aGVyZSwgYmUgc2FmZSBhbmQgZ2V0IHdpbGQhXG4gICAgICA8L3A+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvUml2ZXJJbmZvXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNlYXJjaCBhIFJpdmVyICZyYXJyOzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWFyY2ggYnkgbG9jYXRpb24sIGNsYXNzIG9yIGxlbmd0aDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2pvdXJuYWxcIiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q3JlYXRlIGEgcml2ZXIgSm91cm5hbCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9jdW1lbnQgYWxsIHlvdXIgZmF2b3JpdGUgcnVucyBoZXJlISBOb3RlcyBvbiBmbG93LCByaXZlciBjaGFuZ2VzLCBzZWFzb25hbCB0cmVuZHM/PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbWVzc2FnZUJvYXJkXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1lc3NhZ2UgQm9hcmQgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvb2tpbmcgZm9yIGEgcml2ZXIgbmVhciB5b3U/PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2ludml0ZWFmcmllbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5JbnZpdGUgYSBGcmllbmQgICZyYXJyOzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EbyB5b3Ugd2FudCB0byBzaGFyZSBhbGwgdGhpcyByYWQgaW5mb3JtYXRpb24gd2l0aCB5b3VyIG90aGVyIGZyaWVuZHM/IFNoYXJlIHRoZSBhcHAgaGVyZSE8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgICAgICAgICAgYFxuICAgICAgLmhlcm8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBjb2xvcjogI0U1REZERjtcbiAgICAgICAgZm9udGZhbWlseTogTHVjaWRhLUdyYW5kZTtcblxuICAgICAgICBjb2xvcjogIzMzMztcbiBcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlLFxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnJvdyB7XG4gICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgfVxuICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICNFNURGREY7XG4gICAgICB9XG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICNFNURGREY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgIH1cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICNFNURGREY7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9ib2R5PlxuICAgIDwvZGl2PlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICAgIHJldHVybiA8TGF5b3V0IGNvbnRlbnQ9e2luZGV4UGFnZUNvbnRlbnR9IC8+O1xufVxuIl19 */\n/*@ sourceURL=/Users/haileygaylor/Epicodus-Projects/WWCap/pages/index.js */")));

function Index() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: indexPageContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=index.js.ae0d145c6b03234b07ed.hot-update.js.map