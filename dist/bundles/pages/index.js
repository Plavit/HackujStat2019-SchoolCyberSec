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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(1);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(4);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__(5);
var Container__default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(6);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__(7);
var Box__default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external__next_redux_wrapper_ = __webpack_require__(8);
var external__next_redux_wrapper__default = /*#__PURE__*/__webpack_require__.n(external__next_redux_wrapper_);

// EXTERNAL MODULE: external "react-simple-maps"
var external__react_simple_maps_ = __webpack_require__(9);
var external__react_simple_maps__default = /*#__PURE__*/__webpack_require__.n(external__react_simple_maps_);

// EXTERNAL MODULE: external "d3-scale"
var external__d3_scale_ = __webpack_require__(10);
var external__d3_scale__default = /*#__PURE__*/__webpack_require__.n(external__d3_scale_);

// EXTERNAL MODULE: external "react-tooltip"
var external__react_tooltip_ = __webpack_require__(11);
var external__react_tooltip__default = /*#__PURE__*/__webpack_require__.n(external__react_tooltip_);

// CONCATENATED MODULE: ./map-backup/SchoolCyberSafetyMap.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
var okresScale = Object(external__d3_scale_["scaleLinear"])().domain([40169, 40600, 40924]).range(["#006344", "#D8A800", "#BD3B1B"]);

var SchoolCyberSafetyMap_SchoolCyberSafetyMap = function (_Component) {
    _inherits(SchoolCyberSafetyMap, _Component);

    _createClass(SchoolCyberSafetyMap, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            setTimeout(function () {
                external__react_tooltip__default.a.rebuild();
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
            return external__react__default.a.createElement(
                "div",
                { style: wrapperStyles },
                external__react__default.a.createElement(
                    "button",
                    { onClick: this.handleZoomIn },
                    "Zoom in"
                ),
                external__react__default.a.createElement(
                    "button",
                    { onClick: this.handleZoomOut },
                    "Zoom out"
                ),
                external__react__default.a.createElement("hr", null),
                external__react__default.a.createElement(
                    external__react_simple_maps_["ComposableMap"],
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
                    external__react__default.a.createElement(
                        external__react_simple_maps_["ZoomableGroup"],
                        { center: [15.5, 49.9],
                            zoom: this.state.zoom,
                            onMoveStart: this.handleMoveStart,
                            onMoveEnd: this.handleMoveEnd
                        },
                        external__react__default.a.createElement(
                            external__react_simple_maps_["Geographies"],
                            { geography: "/static/okresy.json" },
                            function (geographies, projection) {
                                return geographies.map(function (geography, i) {
                                    return geography.id !== "ATA" && external__react__default.a.createElement(external__react_simple_maps_["Geography"], {
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
                external__react__default.a.createElement(external__react_tooltip__default.a, { multiline: true, place: 'left' })
            );
        }
    }]);

    return SchoolCyberSafetyMap;
}(external__react_["Component"]);

/* harmony default export */ var map_backup_SchoolCyberSafetyMap = (external__react__default.a.forwardRef(function (props, ref) {
    return external__react__default.a.createElement(SchoolCyberSafetyMap_SchoolCyberSafetyMap, _extends({}, props, { innerRef: ref }));
}));
// export default SchoolCyberSafetyMap
// CONCATENATED MODULE: ./pages/index.js
/* harmony export (immutable) */ __webpack_exports__["default"] = Index;








function Index() {
    return external__react__default.a.createElement(
        Container__default.a,
        { maxWidth: "sm" },
        external__react__default.a.createElement(
            Box__default.a,
            { my: 4 },
            external__react__default.a.createElement(
                Typography__default.a,
                { variant: "h4", component: "h1", gutterBottom: true },
                "Next.js example"
            ),
            external__react__default.a.createElement(map_backup_SchoolCyberSafetyMap, null)
        )
    );
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ })
/******/ ]);