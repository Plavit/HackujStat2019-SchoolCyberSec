module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_simple_maps__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_simple_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_simple_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_scale__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_scale___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_d3_scale__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tooltip__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_tooltip__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
    fontFamily: "Roboto, sans-serif",
    textAlign: "left"

};
var okresScale = Object(__WEBPACK_IMPORTED_MODULE_4_d3_scale__["scaleLinear"])().domain([40169, 40600, 40924]).range(["#006344", "#D8A800", "#BD3B1B"]);

var SchoolCyberSafetyMap = function (_Component) {
    _inherits(SchoolCyberSafetyMap, _Component);

    _createClass(SchoolCyberSafetyMap, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_5_react_tooltip___default.a.rebuild();
            }, 100);
        }
    }]);

    function SchoolCyberSafetyMap() {
        _classCallCheck(this, SchoolCyberSafetyMap);

        var _this = _possibleConstructorReturn(this, (SchoolCyberSafetyMap.__proto__ || Object.getPrototypeOf(SchoolCyberSafetyMap)).call(this));

        _this.state = {
            zoom: 56
        };

        _this.handleZoomIn = _this.handleZoomIn.bind(_this);
        _this.handleZoomOut = _this.handleZoomOut.bind(_this);
        return _this;
    }

    _createClass(SchoolCyberSafetyMap, [{
        key: "handleZoomIn",
        value: function handleZoomIn() {
            this.setState({
                zoom: this.state.zoom * 2
            });
        }
    }, {
        key: "handleZoomOut",
        value: function handleZoomOut() {
            this.setState({
                zoom: this.state.zoom / 2
            });
        }
    }, {
        key: "handleMoveStart",
        value: function handleMoveStart(currentCenter) {
            console.log("New center: ", currentCenter);
        }
    }, {
        key: "handleMoveEnd",
        value: function handleMoveEnd(newCenter) {
            console.log("New center: ", newCenter);
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { style: wrapperStyles },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "button",
                    { onClick: this.handleZoomIn },
                    "Zoom in"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "button",
                    { onClick: this.handleZoomOut },
                    "Zoom out"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_react_simple_maps__["ComposableMap"],
                    {
                        projectionConfig: {
                            scale: 205,
                            rotation: [-11, 0, 0]
                        },
                        width: 980,
                        height: 551,
                        style: {
                            width: "100%",
                            height: "auto"
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_simple_maps__["ZoomableGroup"],
                        { center: [15.5, 49.9],
                            zoom: this.state.zoom,
                            onMoveStart: this.handleMoveStart,
                            onMoveEnd: this.handleMoveEnd
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_react_simple_maps__["Geographies"],
                            { geography: "/static/okresy.json" },
                            function (geographies, projection) {
                                return geographies.map(function (geography, i) {
                                    return geography.id !== "ATA" && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_simple_maps__["Geography"], {
                                        key: i,
                                        "data-tip": "Okres: " + geography.properties.NAZ_LAU1 + "<br />Kraj: " + geography.properties.NAZ_CZNUTS3 + "<br />KOD: " + geography.properties.KOD_OKRES,
                                        geography: geography,
                                        projection: projection,
                                        style: {
                                            default: {
                                                fill: okresScale(geography.properties.KOD_OKRES),
                                                stroke: "#CCC",
                                                strokeWidth: 0.03,
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                outline: "none"

                                            },
                                            hover: {
                                                fill: "#607DFF",
                                                stroke: "#DDDDDD",
                                                strokeWidth: 0.03,
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                outline: "none"

                                            },
                                            pressed: {
                                                fill: "#0057ff",
                                                stroke: "#FFFFFF",
                                                strokeWidth: 0.03,
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                outline: "none"

                                            }
                                        }
                                    });
                                });
                            }
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_tooltip___default.a, { multiline: true, place: 'left' })
            );
        }
    }]);

    return SchoolCyberSafetyMap;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SchoolCyberSafetyMap);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ })
/******/ ]);