/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    height: 100vh;\n    font-family: 'Rubik', sans-serif;\n}\n\nul {\n    list-style-type: none;\n}\n\na:active, a:visited, a:link{\n    text-decoration: none;\n    color: inherit;\n}\n\n.inactive {\n    opacity: 0;\n}\n\nh1 {\n    font-size: 4rem;\n    letter-spacing: 0.3rem;\n    padding-bottom: 2rem;\n}\n\ndiv#content {\n    display: grid;\n    height: 100vh;\n    grid-template-columns: 1fr 3fr ;\n    gap: 2rem\n}\n\ndiv .navbar {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    padding-left: 30px;\n    align-items: flex-start;\n    font-size: 1.5rem;\n    padding: 2rem;\n    box-shadow: 0px 0px 10px gainsboro;\n}\n\nh2 summary{\n    font-size: 1.5rem;\n    font-weight: 400;\n    margin-bottom: 5px;\n}\n\n.projects .delete {\n    color: gainsboro;\n}\n\nul.projects, input[name=\"add-project\"] {\n    margin-left: 2rem;\n    font-size: 1.4rem;\n    font-weight: 300;\n}\n\ninput[name=\"add-project\"] {\n    background-color: transparent;\n    width: 6rem;\n    font-family: 'Rubik', sans-serif;\n    border: none;\n    padding: 2px;\n    border-radius: 5px;\n    font-size: 1rem;\n    margin-top: 15px;\n}\n\ndiv.content {\n    overflow: scroll;\n}\n\ndiv#tasks {\n    display: grid;\n    padding: 2rem;\n    grid-template-columns: repeat(auto-fit, 400px);\n    grid-auto-rows: 210px;\n    justify-content: start;\n    grid-gap: 15px;\n    overflow: scroll;\n}\n\ndiv.task {\n    padding: 15px;\n    position: relative;\n    box-sizing: border-box;\n    display: grid;\n    grid-template: 3rem 1fr 2fr 2rem / 1fr 4rem;\n    background-color: rgb(216, 216, 216);\n    border-radius: 15px;\n    border-left: 10px solid grey;\n}\n\ndiv[data-priority=\"1\"] {\n    border-color: red;\n}\ndiv[data-priority=\"2\"] {\n    border-color: rgb(255, 123, 0);\n}\ndiv[data-priority=\"3\"] {\n    border-color: rgb(255, 191, 0);\n}\ndiv[data-priority=\"4\"] {\n    border-color: green;\n}\ndiv[data-priority=\"5\"] {\n    border-color: cornflowerblue;\n}\n\n.task-title {\n    grid-area: 1 / 1 / 2 / 2;\n    font-size: 1.6rem;\n    font-weight: 600;\n    max-width: 90%;\n}\n\n.task-project{\n    grid-area: 2 / 1 / 3 / 2;\n    font-weight: 500;\n    padding: 5px 0px;\n}\n\n\n.details {\n    grid-area: 3 / 1 / 4 / 2;\n    overflow: scroll;\n}\n\n.duedate{\n    font-size: 1rem;\n    font-weight: 500;\n    color: slategrey;\n    grid-area: 4 / 1 / 5 / 2;\n    align-self: end;\n}\n\ninput[type=\"checkbox\"]{\n    border-radius: 100%;\n    accent-color: grey;\n    height: 1.3rem;\n    width: 1.3rem;\n    grid-area: 4 / 2 / 5 / 3;\n    justify-self: right;\n    align-self: end;\n}\n\nbutton.delete {\n    font-size: 1rem;\n    padding: 4px;\n    background-color: transparent;\n    grid-area: 1 / 2 / 2 / 3;\n    justify-self: right;\n    align-self: start;\n    border: none;\n}\n\n.task.done {\n    color: darkgrey;\n}\n\nbutton.add-task {\n    position: fixed;\n    border-radius: 100%;\n    background-color: gainsboro;\n    height: 3rem;\n    aspect-ratio: 1;\n    border: none;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);\n    bottom: 7vh;\n    right: 7vh;\n    transition: ease-out 0.4s;\n    font-size: 1.5rem;\n}\n\nbutton.add-task:hover {\n    rotate: -90deg;\n    transform: scale(120%);\n    transition: ease-out 0.2s;\n}\n\ndiv.new-task {\n    position: absolute;\n    opacity: 1;\n    top: 50%;\n    right: 50%;\n    transform: translateY(-50%) translateX(50%);\n    margin: auto;\n    height: 450px;\n    width: 400px;\n    padding: 2rem;\n    box-sizing: border-box;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0px 0px 40px rgba(0, 0, 0, .3);\n    transition: all 0.2s;\n}\n\ndiv.new-task.inactive{\n    display: none;\n    opacity: 0;\n    transform: translateY(-30%) translateX(50%);\n}\n\ndiv.new-task form{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: space-between;\n}\n\ndiv.new-task form div {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 100%;\n}\n\ndiv.new-task input, div.new-task select {\n    padding: 10px;\n    margin: 5px 0px;\n    border: 1px gainsboro solid;\n    font-family: sans-serif;\n}\n\ninput:focus {\n    outline: 2px solid grey;\n}\n\ndiv.new-task button {\n    height: 50px;\n    width: 90px;\n    padding: 3px;\n    align-self: center;\n    border: none;\n    border-radius: 5px;\n    font-family: Rubik, sans-serif;\n    font-size: 1rem;\n}\n\nbutton:hover {\n    background-color: darkgray;\n}\n\n.blur {\n    filter: blur(10px);\n    transition: all 0.3s;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_taskmodule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskmodule.js */ \"./src/modules/taskmodule.js\");\n/* harmony import */ var _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helpers.js */ \"./src/modules/helpers.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst DOMManipulator = (function(){\n    const contentDiv = document.querySelector('div#content')\n\n    const setPage = function(){\n        //New Task Popup\n        const formDiv = document.querySelector('div.new-task');\n        const formBtn = document.querySelector('button.add-task');\n        formBtn.addEventListener('click', () => {\n            formDiv.classList.toggle('inactive');\n            contentDiv.classList.toggle('blur');\n        })\n\n        //Accept form \n        const form = formDiv.querySelector('form#new-task');\n\n        form.addEventListener('submit', (e) => {\n            const taskObj = _modules_taskmodule_js__WEBPACK_IMPORTED_MODULE_1__.newTask(\n                document.getElementById(\"title\").value,\n                document.getElementById(\"date\").value,\n                document.getElementById(\"priority\").value,\n                document.getElementById(\"details\").value,\n                document.getElementById(\"project\").value,\n                false\n            )\n            _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.taskList.addTask(taskObj);\n\n        })\n\n        //Display projects \n        const projectsList = document.querySelector('ul.projects');\n        const projectOptions = document.querySelector('select#project');\n        const projectNames = _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectNames();\n\n        for(const name of projectNames){\n            const li = document.createElement('li');\n            li.dataset.projectName = name;\n\n            const link = document.createElement('a');\n\n            //Delete task button\n            const deleteBtn = document.createElement('button');\n            deleteBtn.classList.add('delete');\n            deleteBtn.addEventListener('click', (e) => {\n                const name = e.currentTarget.parentElement.dataset.projectName;\n                _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.projectList.deleteProject(name);\n                e.currentTarget.parentElement.remove();\n            })\n            deleteBtn.textContent = \"X\";\n\n            link.textContent = name;\n            link.addEventListener('click', (e) => {\n                const projectName = e.currentTarget.parentElement.dataset.projectName;\n                const tasks = _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.sortByProject(projectName);\n                \n                _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks(tasks);\n            })\n\n            //Display selection options for projects\n            const option = document.createElement('option');\n            option.textContent = name;\n            option.value = name;\n\n            li.appendChild(link);\n            li.appendChild(deleteBtn);\n            projectsList.appendChild(li);\n            projectOptions.appendChild(option);\n        }\n\n        //Add project\n        const addProjectForm = document.getElementById('add-project-form');\n        addProjectForm.addEventListener('keyup', (e) => {\n            const name = e.currentTarget.value;\n            if(e.key === \"Enter\" && name !== ''){\n                console.log(e.currentTarget.value, name)\n                _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(name);\n            }\n        })\n\n        //Display all tasks\n        const allTasks = document.querySelector('a.all-tasks');\n        allTasks.addEventListener('click', () => displayAllTasks());\n    }\n\n    const displayAllTasks = function(){\n        _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks(_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.taskList.getAllTasks());\n    }\n    return {displayAllTasks, setPage}\n})()\n\nwindow.onload = () => {\n    DOMManipulator.displayAllTasks();\n    DOMManipulator.setPage();\n};\n\n//# sourceURL=webpack://odin-to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearTaskDiv: () => (/* binding */ clearTaskDiv),\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks),\n/* harmony export */   renderTask: () => (/* binding */ renderTask),\n/* harmony export */   sortByProject: () => (/* binding */ sortByProject)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\nconst tasksDiv =  document.querySelector(\"#tasks\");\n\nconst clearTaskDiv = function(){\n    tasksDiv.innerHTML = ''\n}\n\nfunction renderTask(task){\n    const taskDiv = document.createElement('div');\n    taskDiv.classList.add('task');\n    taskDiv.dataset.taskId = task.id;\n\n    const taskHeader = document.createElement('h3');\n    taskHeader.classList.add('task-title');\n    taskHeader.textContent = task.title;\n\n    const project = document.createElement('h4');\n    project.classList.add('task-project')\n    if(task.project){\n        project.textContent = `Project: ${task.project}`\n    }\n    else{\n        project.textContent = \"No project\"\n    }\n\n    const details = document.createElement('p');\n    details.classList.add('details')\n    if(task.details){\n        details.textContent = task.details;\n    }\n    else{\n        details.textContent = \"No details\"\n    }\n\n    const dueDate = document.createElement('h3');\n    dueDate.classList.add('duedate');\n    if(task.dueDate){\n        dueDate.textContent = `Due to: ${task.dueDate}`\n    }\n    else{\n        dueDate.textContent = \"No date\"\n    }\n\n    const check = document.createElement('input');\n    check.classList.add('check');\n    check.setAttribute('type', 'checkbox')\n    if (task.isDone) {\n        check.checked = true;\n        taskDiv.classList.add('done');\n    }\n    check.dataset.taskId = task.id;\n    check.addEventListener('input', (e) => {\n        const parentDiv = e.currentTarget.parentElement;\n        const id = e.currentTarget.dataset.taskId;\n        _storage_js__WEBPACK_IMPORTED_MODULE_0__.taskList.checkTask(id);\n        parentDiv.classList.toggle('done');\n    })\n\n    if(task.priority){\n        taskDiv.dataset.priority = task.priority;\n    }\n\n    const deleteBtn = document.createElement('button');\n    deleteBtn.textContent = \"x\"\n    deleteBtn.classList.add('delete');\n    deleteBtn.setAttribute(\"type\", \"button\");\n    deleteBtn.addEventListener('click', (e) => {\n        const id = e.currentTarget.parentElement.dataset.taskId;\n        _storage_js__WEBPACK_IMPORTED_MODULE_0__.taskList.deleteTask(id);\n        location.reload();\n    })\n\n    taskDiv.appendChild(taskHeader);\n    taskDiv.appendChild(project);\n    taskDiv.appendChild(details);\n    taskDiv.appendChild(dueDate);\n    taskDiv.appendChild(check);\n    taskDiv.appendChild(deleteBtn);\n\n    return taskDiv;\n}\n\nfunction sortByProject(projectName) {\n    const allTasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__.taskList.getAllTasks();\n\n    let projectTasks = [];\n    for(const task of allTasks){\n        if(task.project == projectName){\n            projectTasks.push(task);\n        }\n        if(task.project == \"\" && projectName == \"Unsorted\"){\n            projectTasks.push(task);\n        }\n    }\n    return projectTasks;\n}\n\nfunction displayTasks(tasks) {\n    clearTaskDiv()\n    for (const task of tasks){\n        if(task){\n            const newTask = renderTask(task)\n            tasksDiv.appendChild(newTask);\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectList: () => (/* binding */ projectList),\n/* harmony export */   taskList: () => (/* binding */ taskList)\n/* harmony export */ });\n\n//Storage availability check (source: MDN docs)\nfunction storageAvailable(type) {\n    let storage;\n    try {\n      storage = window[type];\n      const x = \"__storage_test__\";\n      storage.setItem(x, x);\n      storage.removeItem(x);\n      return true;\n    } catch (e) {\n      return (\n        e instanceof DOMException &&\n        (e.code === 22 ||\n          e.code === 1014 ||\n          e.name === \"QuotaExceededError\" ||\n          e.name === \"NS_ERROR_DOM_QUOTA_REACHED\") &&\n        storage &&\n        storage.length !== 0\n      );\n    }\n  }\n\n\n\nlet tasks = JSON.parse(localStorage.getItem('taskList'));\nif(!tasks) {\n    tasks = [];\n}\n\nlet projects = JSON.parse(localStorage.getItem('projectList'));\nif(!projects){\n    projects = [\n        \"Home\",\n        \"Work\",\n        \"Other\",\n        \"Unsorted\"\n    ]   \n}\n\nconst taskList = {\n    tasks: tasks,\n\n    getAllTasks: function(){\n        return this.tasks;\n    },\n\n    deleteTask: function(i) {\n        delete this.tasks[i];\n        this.updateStorage();\n    },\n\n    addTask: function(task) {\n        task[\"id\"] = this.tasks.length;\n        this.tasks.push(task);\n        if(!projectList.getProjectNames().includes(task.project)){\n            projectList.addProject(task.project);\n        }\n        this.updateStorage();\n    },\n\n    editTask: function(i, prop, value) {\n        this.tasks[i][prop] = value;\n        this.updateStorage();\n    },\n\n    checkTask: function(i) {\n        this.tasks[i].isDone = this.tasks[i].isDone === false ? true : false;\n        this.updateStorage();\n    },\n\n    getTask: function(i){\n        return this.tasks[i];\n    },\n\n    updateStorage: function(){\n        if(storageAvailable){\n            localStorage.setItem('taskList', JSON.stringify(this.tasks));\n        }\n    }\n}\n\nconst projectList = {\n    projects: projects,\n    \n    getProjectNames: function(){\n        return projects;\n    },\n\n    addProject: function(name){\n        this.projects.push(name);\n        this.updateStorage()\n    },\n\n    deleteProject: function(name) {\n        const projects = this.projects;\n        const index = projects.indexOf(name);\n        if (index !== (-1)){\n            projects.splice(index, 1);\n        }\n        this.updateStorage()\n    },\n\n    updateStorage: function(){\n        if(storageAvailable){\n            localStorage.setItem('projectList', JSON.stringify(this.projects));\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/taskmodule.js":
/*!***********************************!*\
  !*** ./src/modules/taskmodule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newTask: () => (/* binding */ newTask),\n/* harmony export */   proto: () => (/* binding */ proto)\n/* harmony export */ });\nconst proto = {\n    check: function() {\n        this.isDone = this.isDone === false ? true : false;\n        return this.isDone\n    },\n    change: function(prop, value) {\n        this[prop] = value;\n        return this[prop];\n    }\n}\n\nconst newTask = (title, dueDate = null, priority = 1, details = null, project = null, isDone = false) => {\n    \n    let props = {\n        title, \n        dueDate, \n        priority, \n        details, \n        project,\n        isDone\n    }\n    const obj = Object.create(proto)\n    return Object.assign(obj, props);\n}\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/modules/taskmodule.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;