/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/store */ "./redux/store.js");
/* harmony import */ var _components_gameWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/gameWrapper */ "./components/gameWrapper/index.jsx");
/* harmony import */ var _scss_App_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/App.scss */ "./scss/App.scss");







function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_2__.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_gameWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./components/background/index.jsx":
/*!*****************************************!*\
  !*** ./components/background/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums */ "./enums.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./components/background/index.module.scss");






var Background = function Background() {
  var background = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state === null || state === void 0 ? void 0 : state.info.background;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var setBackground = function setBackground(image) {
    return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__.setBackgroundAC)(image));
  };

  var addBackgroundButton = function addBackgroundButton(message, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      key: key,
      onClick: function onClick() {
        return setBackground(message);
      },
      className: background === message ? _enums__WEBPACK_IMPORTED_MODULE_3__.ACTIVE_CLASS : null
    }, message);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].panelBackground
  }, Object.keys(_enums__WEBPACK_IMPORTED_MODULE_3__.BACKGROUND_TYPES).map(function (key) {
    return addBackgroundButton(_enums__WEBPACK_IMPORTED_MODULE_3__.BACKGROUND_TYPES[key], key);
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);

/***/ }),

/***/ "./components/gameGrid/gameItems/index.jsx":
/*!*************************************************!*\
  !*** ./components/gameGrid/gameItems/index.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/render/dom/motion.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./utils.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.module.scss */ "./components/gameGrid/index.module.scss");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enums */ "./enums.js");





var variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

var GameItems = function GameItems(_ref) {
  var pictures = _ref.pictures,
      isStartGame = _ref.isStartGame,
      handlerCLickItem = _ref.handlerCLickItem,
      opensItems = _ref.opensItems,
      chosenItems = _ref.chosenItems,
      isShowLearn = _ref.isShowLearn;
  return pictures.map(function (picture, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
      key: id,
      layoutId: !isShowLearn && 'gridItem',
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: _enums__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_COLOR,
        cursor: chosenItems.length > 1 || opensItems.includes(id) ? 'not-allowed' : 'pointer'
      },
      onClick: isStartGame ? function () {
        return handlerCLickItem(id);
      } : null,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].gridItem
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
      initial: false
    }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isOpenedNowItem)(id, opensItems, chosenItems) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {
      src: picture,
      alt: picture,
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      variants: variants,
      style: {
        width: '85%',
        height: '85%'
      }
    })));
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameItems);

/***/ }),

/***/ "./components/gameGrid/index.jsx":
/*!***************************************!*\
  !*** ./components/gameGrid/index.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/animation/use-animation.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/render/dom/motion.js");
/* harmony import */ var _panelComplexity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panelComplexity */ "./components/gameGrid/panelComplexity/index.jsx");
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popups */ "./components/popups/index.jsx");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums */ "./enums.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./utils.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ "./components/gameGrid/index.module.scss");
/* harmony import */ var _gameItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameItems */ "./components/gameGrid/gameItems/index.jsx");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../progressBar */ "./components/progressBar/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }













var timeout;

var GameGrid = function GameGrid() {
  var location = (0,react_router__WEBPACK_IMPORTED_MODULE_10__.useLocation)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state === null || state === void 0 ? void 0 : state.info;
  }),
      time = _useSelector.time,
      isStartGame = _useSelector.isStartGame,
      countItems = _useSelector.countItems,
      pictures = _useSelector.pictures,
      opensItems = _useSelector.opensItems,
      chosenItems = _useSelector.chosenItems,
      isShowLearn = _useSelector.isShowLearn;

  var complexity = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getComplexity)(location);

  var createGame = function createGame(complexity) {
    return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__.createGameThunk)(complexity));
  };

  var addOpensItem = function addOpensItem(item) {
    return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__.addOpensItemAC)(item));
  };

  var resetChoosenItems = function resetChoosenItems() {
    return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__.resetChoosenItemsAC)());
  };

  var handlerCLickItem = function handlerCLickItem(id) {
    if (!opensItems.includes(id) && chosenItems.length < 2) dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__.addChoosenItemAC)(id));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    createGame(complexity);
  }, [location.pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (chosenItems.length === 2) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.isRightChoose)(chosenItems, pictures)) {
        chosenItems.map(function (item) {
          return addOpensItem(item);
        });
        resetChoosenItems();
      } else setTimeout(function () {
        return resetChoosenItems();
      }, _enums__WEBPACK_IMPORTED_MODULE_5__.TIME_SHOW_ITEM);
    }
  }, [chosenItems]);
  var control = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useAnimation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!isStartGame) {
              _context.next = 8;
              break;
            }

            if (!(time < 11)) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return control.start({
              scale: 2,
              transition: {
                duration: 0.25
              }
            });

          case 4:
            _context.next = 6;
            return control.start({
              scale: 1,
              transition: {
                duration: 0.25
              }
            });

          case 6:
            if (time > 0) {
              timeout = setTimeout(function () {
                return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__.setTimeAC)(time - 1));
              }, 1000);
            }

            return _context.abrupt("return");

          case 8:
            clearTimeout(timeout);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [isStartGame, time]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].game
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_12__.AnimatePresence, null, (0,_utils__WEBPACK_IMPORTED_MODULE_6__.isGameOver)(time) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popups__WEBPACK_IMPORTED_MODULE_3__.LoosePopup, null), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.isGameWin)(opensItems, countItems) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popups__WEBPACK_IMPORTED_MODULE_3__.WinPopup, null), isShowLearn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popups__WEBPACK_IMPORTED_MODULE_3__.LearnPopup, {
    toggleShowLearn: function toggleShowLearn() {
      return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__.toggleShowLearnAC)(false));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_panelComplexity__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].time, " ").concat(time < 11 && _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].redTime)
  }, "time:", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.span, {
    animate: control
  }, time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {
    className: complexity === _enums__WEBPACK_IMPORTED_MODULE_5__.COMPLEXITY.HARD ? _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].gameGridHard : _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].gameGridEasy
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gameItems__WEBPACK_IMPORTED_MODULE_8__["default"], {
    pictures: pictures,
    isStartGame: isStartGame,
    handlerCLickItem: handlerCLickItem,
    opensItems: opensItems,
    chosenItems: chosenItems,
    isShowLearn: isShowLearn
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progressBar__WEBPACK_IMPORTED_MODULE_9__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameGrid);

/***/ }),

/***/ "./components/gameGrid/panelComplexity/index.jsx":
/*!*******************************************************!*\
  !*** ./components/gameGrid/panelComplexity/index.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enums */ "./enums.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./components/gameGrid/panelComplexity/index.module.scss");





var PanelComplexity = function PanelComplexity() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].gameComplex
  }, Object.keys(_enums__WEBPACK_IMPORTED_MODULE_1__.COMPLEXITY).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
      key: key,
      to: "/".concat(_enums__WEBPACK_IMPORTED_MODULE_1__.COMPLEXITY[key])
    }, _enums__WEBPACK_IMPORTED_MODULE_1__.COMPLEXITY[key]);
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelComplexity);

/***/ }),

/***/ "./components/gameWrapper/index.jsx":
/*!******************************************!*\
  !*** ./components/gameWrapper/index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../background */ "./components/background/index.jsx");
/* harmony import */ var _gameGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameGrid */ "./components/gameGrid/index.jsx");
/* harmony import */ var _panelStartGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panelStartGame */ "./components/panelStartGame/index.jsx");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sound */ "./components/sound/index.jsx");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./components/gameWrapper/index.module.scss");








var GameWrapper = function GameWrapper() {
  var background = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state === null || state === void 0 ? void 0 : state.info.background;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].wrapper, " ").concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][background])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sound__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_panelStartGame__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gameGrid__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_background__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameWrapper);

/***/ }),

/***/ "./components/panelStartGame/index.jsx":
/*!*********************************************!*\
  !*** ./components/panelStartGame/index.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/index.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./components/panelStartGame/index.module.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils.js");







var PanelStartGame = function PanelStartGame() {
  var location = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var isStartGame = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state === null || state === void 0 ? void 0 : state.info.isStartGame;
  });
  var complexity = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getComplexity)(location);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panelStartGame
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__.toggleStartGameAC)(true));
    },
    className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].startGame, " ").concat(isStartGame && _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].active)
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__.createGameThunk)(complexity));
    }
  }, "Reset"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelStartGame);

/***/ }),

/***/ "./components/popups/index.jsx":
/*!*************************************!*\
  !*** ./components/popups/index.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoosePopup": () => (/* binding */ LoosePopup),
/* harmony export */   "WinPopup": () => (/* binding */ WinPopup),
/* harmony export */   "LearnPopup": () => (/* binding */ LearnPopup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/render/dom/motion.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums */ "./enums.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./components/popups/index.module.scss");
/* harmony import */ var _img_loose_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/loose.gif */ "./img/loose.gif");
/* harmony import */ var _img_win_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/win.gif */ "./img/win.gif");
/* harmony import */ var _img_before_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/before.png */ "./img/before.png");
/* harmony import */ var _img_arr_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/arr.png */ "./img/arr.png");
/* harmony import */ var _img_after_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/after.png */ "./img/after.png");











var variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.8
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8
    }
  }
};
var LoosePopup = function LoosePopup() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var complexity = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state === null || state === void 0 ? void 0 : state.info.complexityGame;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__.toggleLooseAC)(true));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].result
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].result__loose,
    initial: "hidden",
    animate: "visible",
    exit: variants.hidden,
    variants: variants
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loose((("), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _img_loose_gif__WEBPACK_IMPORTED_MODULE_5__,
    alt: "winner"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__.createGameThunk)(complexity));
    },
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].play_again
  }, "play again")));
};
var WinPopup = function WinPopup() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return {
      time: state === null || state === void 0 ? void 0 : state.info.time,
      allTime: state === null || state === void 0 ? void 0 : state.info.allTime,
      complexityGame: state === null || state === void 0 ? void 0 : state.info.complexityGame
    };
  }),
      time = _useSelector.time,
      allTime = _useSelector.allTime,
      complexityGame = _useSelector.complexityGame;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__.toggleWinAC)(true));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].result
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].result__win,
    initial: "hidden",
    animate: "visible",
    exit: variants.hidden,
    variants: variants
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Win!!!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, "You result:", ' ', allTime - time, ' ', "seconds")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _img_win_gif__WEBPACK_IMPORTED_MODULE_6__,
    alt: "winner"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__.createGameThunk)(complexityGame));
    },
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].play_again
  }, "play again")));
};
var LearnPopup = function LearnPopup() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].info__content,
    initial: "hidden",
    animate: "visible",
    exit: variants.hidden,
    variants: variants
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, _enums__WEBPACK_IMPORTED_MODULE_3__.LEAR_POPUP_TEXT.map(function (paragraph) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, paragraph, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].info__images
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].info__img,
    src: _img_before_png__WEBPACK_IMPORTED_MODULE_7__,
    alt: "before"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _img_arr_png__WEBPACK_IMPORTED_MODULE_8__,
    alt: "",
    width: 60
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].info__img,
    src: _img_after_png__WEBPACK_IMPORTED_MODULE_9__,
    alt: "after"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__.toggleShowLearnAC)(false));
    },
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn_open_game
  }, "ok")));
};

/***/ }),

/***/ "./components/progressBar/index.js":
/*!*****************************************!*\
  !*** ./components/progressBar/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _gameGrid_index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameGrid/index.module.scss */ "./components/gameGrid/index.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ProgressBar = function ProgressBar() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state === null || state === void 0 ? void 0 : state.info;
  }),
      countItems = _useSelector.countItems,
      opensItems = _useSelector.opensItems;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!opensItems.length) {
      setValue(0);
      return;
    }

    var newValue = Math.round(opensItems.length / countItems * 100);
    var interval = setInterval(function () {
      setValue(function (oldValue) {
        if (oldValue + 1 < newValue) return oldValue + 1;
        clearInterval(interval);
        return oldValue;
      });
    }, 10);
  }, [opensItems.length]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    className: _gameGrid_index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].progressbar,
    value: value,
    max: 100
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);

/***/ }),

/***/ "./components/sound/index.jsx":
/*!************************************!*\
  !*** ./components/sound/index.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-sound */ "../node_modules/use-sound/dist/use-sound.esm.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./components/sound/index.module.scss");
/* harmony import */ var _img_speaker_volume_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/speaker-volume.svg */ "./img/speaker-volume.svg");
/* harmony import */ var _img_sound_off_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/sound-off.svg */ "./img/sound-off.svg");
/* harmony import */ var _audio_audio_sea_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../audio/audio_sea.mp3 */ "./audio/audio_sea.mp3");
/* harmony import */ var _audio_audio_fire_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../audio/audio_fire.mp3 */ "./audio/audio_fire.mp3");
/* harmony import */ var _audio_audio_rain_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../audio/audio_rain.mp3 */ "./audio/audio_rain.mp3");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../enums */ "./enums.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Sound = function Sound() {
  var background = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state === null || state === void 0 ? void 0 : state.info.background;
  });
  var currentTrack;

  switch (background) {
    case _enums__WEBPACK_IMPORTED_MODULE_9__.BACKGROUND_TYPES.SEA:
      currentTrack = _audio_audio_sea_mp3__WEBPACK_IMPORTED_MODULE_6__;
      break;

    case _enums__WEBPACK_IMPORTED_MODULE_9__.BACKGROUND_TYPES.FIRE:
      currentTrack = _audio_audio_fire_mp3__WEBPACK_IMPORTED_MODULE_7__;
      break;

    case _enums__WEBPACK_IMPORTED_MODULE_9__.BACKGROUND_TYPES.RAIN:
      currentTrack = _audio_audio_rain_mp3__WEBPACK_IMPORTED_MODULE_8__;
      break;

    default:
      currentTrack = _audio_audio_sea_mp3__WEBPACK_IMPORTED_MODULE_6__;
      break;
  }

  var _useSound = (0,use_sound__WEBPACK_IMPORTED_MODULE_2__["default"])(currentTrack, {
    interrupt: true
  }),
      _useSound2 = _slicedToArray(_useSound, 2),
      play = _useSound2[0],
      _useSound2$ = _useSound2[1],
      stop = _useSound2$.stop,
      isPlaying = _useSound2$.isPlaying;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return stop();
  }, [currentTrack]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].sound
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    onClick: isPlaying ? function () {
      return stop();
    } : function () {
      return play();
    },
    src: isPlaying ? _img_speaker_volume_svg__WEBPACK_IMPORTED_MODULE_4__ : _img_sound_off_svg__WEBPACK_IMPORTED_MODULE_5__,
    alt: ""
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sound);

/***/ }),

/***/ "./enums.js":
/*!******************!*\
  !*** ./enums.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PICTURES": () => (/* binding */ PICTURES),
/* harmony export */   "BACKGROUND_TYPES": () => (/* binding */ BACKGROUND_TYPES),
/* harmony export */   "DEFAULT_COLOR": () => (/* binding */ DEFAULT_COLOR),
/* harmony export */   "ACTIVE_CLASS": () => (/* binding */ ACTIVE_CLASS),
/* harmony export */   "TIME_SHOW_ITEM": () => (/* binding */ TIME_SHOW_ITEM),
/* harmony export */   "COMPLEXITY": () => (/* binding */ COMPLEXITY),
/* harmony export */   "LEAR_POPUP_TEXT": () => (/* binding */ LEAR_POPUP_TEXT)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./utils.js");

var PICTURES = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPictures)();
var BACKGROUND_TYPES = {
  RAIN: 'rain',
  SEA: 'sea',
  FIRE: 'fire'
};
var DEFAULT_COLOR = 'rgba(0, 0, 0, .9)';
var ACTIVE_CLASS = 'active';
var TIME_SHOW_ITEM = 500;
var COMPLEXITY = {
  EASY: 'easy',
  MIDDLE: 'middle',
  HARD: 'hard'
};
var LEAR_POPUP_TEXT = [" \u041F\u0435\u0440\u0435\u0434 \u0432\u0430\u043C\u0438 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E \u0438\u0433\u0440\u043E\u0432\u043E\u0435 \u043F\u043E\u043B\u0435 \u0438\u0437 \u0447\u0435\u0442\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043E\u0432,\n  \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u043C \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0441\u043A\u0440\u044B\u0442\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430. \u041A\u043B\u0438\u043A\u043D\u0443\u0432 \u043F\u043E \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443, \u0432\u044B\n  \u0443\u0432\u0438\u0434\u0438\u0442\u0435, \u043A\u0430\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0437\u0430 \u043D\u0438\u043C \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0430.", 'Кликнув по следующему квадрату воможны 2 сценария:', '1) Если выбранные квадраты скрывают одинаковые картинки, то они останутся открытыми', '2) Если выбранные квадраты скрывают разные картинки, то через пол секунды они закроются.', " \u0412\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u043D\u0430\u0439\u0442\u0438 \u0437\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u043A \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0432\u0441\u0435\n  \u043F\u0430\u0440\u044B \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A. \u0423\u0434\u0430\u0447\u0438!!!"];

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/index.scss */ "./scss/index.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./App.js");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./redux/actions/action-types.js":
/*!***************************************!*\
  !*** ./redux/actions/action-types.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES)
/* harmony export */ });
var ACTION_TYPES = {
  SET_BACKGROUND: 'SET_BACKGROUND',
  SET_COMPLEXITY: 'SET_COMPLEXITY',
  SET_TIME: 'SET_TIME',
  SET_ALL_TIME: 'SET_ALL_TIME',
  SET_COUNT_ITEMS: 'SET_COUNT_ITEMS',
  ADD_CHOOSEN_ITEM: 'ADD_CHOOSEN_ITEM',
  RESET_OPENS_ITEMS: 'RESET_OPENS_ITEMS',
  RESET_CHOOSEN_ITEMS: 'RESET_CHOOSEN_ITEMS',
  ADD_OPENS_ITEM: 'ADD_OPENS_ITEM',
  SET_PICTURES: 'SET_PICTURES',
  TOGGLE_SHOW_LEARN: 'TOGGLE_SHOW_LEARN',
  TOGGLE_START_GAME: 'TOGGLE_START_GAME',
  TOGGLE_WIN: 'TOGGLE_WIN',
  TOGGLE_LOOSE: 'TOGGLE_LOOSE'
};

/***/ }),

/***/ "./redux/actions/actions.js":
/*!**********************************!*\
  !*** ./redux/actions/actions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setComplexityAC": () => (/* binding */ setComplexityAC),
/* harmony export */   "setBackgroundAC": () => (/* binding */ setBackgroundAC),
/* harmony export */   "setTimeAC": () => (/* binding */ setTimeAC),
/* harmony export */   "setAllTimeAC": () => (/* binding */ setAllTimeAC),
/* harmony export */   "toggleWinAC": () => (/* binding */ toggleWinAC),
/* harmony export */   "toggleLooseAC": () => (/* binding */ toggleLooseAC),
/* harmony export */   "toggleShowLearnAC": () => (/* binding */ toggleShowLearnAC),
/* harmony export */   "toggleStartGameAC": () => (/* binding */ toggleStartGameAC),
/* harmony export */   "setCountItemsAC": () => (/* binding */ setCountItemsAC),
/* harmony export */   "setPicturesAC": () => (/* binding */ setPicturesAC),
/* harmony export */   "addOpensItemAC": () => (/* binding */ addOpensItemAC),
/* harmony export */   "resetOpenItemsAC": () => (/* binding */ resetOpenItemsAC),
/* harmony export */   "addChoosenItemAC": () => (/* binding */ addChoosenItemAC),
/* harmony export */   "resetChoosenItemsAC": () => (/* binding */ resetChoosenItemsAC),
/* harmony export */   "createGameThunk": () => (/* binding */ createGameThunk)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./redux/actions/action-types.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "./enums.js");


var SET_BACKGROUND = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_BACKGROUND,
    SET_COMPLEXITY = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_COMPLEXITY,
    SET_TIME = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_TIME,
    SET_ALL_TIME = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_ALL_TIME,
    SET_COUNT_ITEMS = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_COUNT_ITEMS,
    ADD_CHOOSEN_ITEM = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ADD_CHOOSEN_ITEM,
    RESET_OPENS_ITEMS = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RESET_OPENS_ITEMS,
    RESET_CHOOSEN_ITEMS = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RESET_CHOOSEN_ITEMS,
    ADD_OPENS_ITEM = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ADD_OPENS_ITEM,
    SET_PICTURES = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PICTURES,
    TOGGLE_SHOW_LEARN = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.TOGGLE_SHOW_LEARN,
    TOGGLE_START_GAME = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.TOGGLE_START_GAME,
    TOGGLE_WIN = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.TOGGLE_WIN,
    TOGGLE_LOOSE = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.TOGGLE_LOOSE;
var setComplexityAC = function setComplexityAC(complexityGame) {
  return {
    type: SET_COMPLEXITY,
    complexityGame: complexityGame
  };
};
var setBackgroundAC = function setBackgroundAC(background) {
  return {
    type: SET_BACKGROUND,
    background: background
  };
};
var setTimeAC = function setTimeAC(time) {
  return {
    type: SET_TIME,
    time: time
  };
};
var setAllTimeAC = function setAllTimeAC(allTime) {
  return {
    type: SET_ALL_TIME,
    allTime: allTime
  };
};
var toggleWinAC = function toggleWinAC(isWin) {
  return {
    type: TOGGLE_WIN,
    isWin: isWin
  };
};
var toggleLooseAC = function toggleLooseAC(isLoose) {
  return {
    type: TOGGLE_LOOSE,
    isLoose: isLoose
  };
};
var toggleShowLearnAC = function toggleShowLearnAC(isSHowLearn) {
  return {
    type: TOGGLE_SHOW_LEARN,
    isSHowLearn: isSHowLearn
  };
};
var toggleStartGameAC = function toggleStartGameAC(isStartGame) {
  return {
    type: TOGGLE_START_GAME,
    isStartGame: isStartGame
  };
};
var setCountItemsAC = function setCountItemsAC(countItems) {
  return {
    type: SET_COUNT_ITEMS,
    countItems: countItems
  };
};
var setPicturesAC = function setPicturesAC(pictures) {
  return {
    type: SET_PICTURES,
    pictures: pictures
  };
};
var addOpensItemAC = function addOpensItemAC(item) {
  return {
    type: ADD_OPENS_ITEM,
    item: item
  };
};
var resetOpenItemsAC = function resetOpenItemsAC() {
  return {
    type: RESET_OPENS_ITEMS
  };
};
var addChoosenItemAC = function addChoosenItemAC(item) {
  return {
    type: ADD_CHOOSEN_ITEM,
    item: item
  };
};
var resetChoosenItemsAC = function resetChoosenItemsAC() {
  return {
    type: RESET_CHOOSEN_ITEMS
  };
};

var setGameProperties = function setGameProperties(dispatch, countItems, time, PICTURES) {
  dispatch(setCountItemsAC(countItems));
  dispatch(setAllTimeAC(time));
  dispatch(setTimeAC(time));
  dispatch(setPicturesAC(PICTURES.concat(PICTURES).sort(function () {
    return 0.5 - Math.random();
  })));
};

var createGameThunk = function createGameThunk(complexity) {
  return function (dispatch) {
    dispatch(toggleStartGameAC(false));
    dispatch(toggleLooseAC(false));
    dispatch(toggleWinAC(false));
    dispatch(setComplexityAC(complexity));
    dispatch(resetChoosenItemsAC());
    dispatch(resetOpenItemsAC());

    switch (complexity) {
      case _enums__WEBPACK_IMPORTED_MODULE_1__.COMPLEXITY.EASY:
        setGameProperties(dispatch, 12, 30, _enums__WEBPACK_IMPORTED_MODULE_1__.PICTURES.filter(function (_, index) {
          return index < 6;
        }));
        break;

      case _enums__WEBPACK_IMPORTED_MODULE_1__.COMPLEXITY.MIDDLE:
        setGameProperties(dispatch, 16, 45, _enums__WEBPACK_IMPORTED_MODULE_1__.PICTURES.filter(function (_, index) {
          return index < 8;
        }));
        break;

      case _enums__WEBPACK_IMPORTED_MODULE_1__.COMPLEXITY.HARD:
        setGameProperties(dispatch, 20, 60, _enums__WEBPACK_IMPORTED_MODULE_1__.PICTURES.filter(function (_, index) {
          return index < 10;
        }));
        break;

      default:
        setGameProperties(dispatch, 12, 30, _enums__WEBPACK_IMPORTED_MODULE_1__.PICTURES.filter(function (_, index) {
          return index < 6;
        }));
        break;
    }
  };
};

/***/ }),

/***/ "./redux/reducers/infoReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/infoReducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ "./redux/actions/action-types.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "./enums.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var SET_BACKGROUND = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_BACKGROUND,
    SET_COMPLEXITY = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_COMPLEXITY,
    SET_TIME = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_TIME,
    SET_ALL_TIME = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_ALL_TIME,
    SET_COUNT_ITEMS = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_COUNT_ITEMS,
    ADD_CHOOSEN_ITEM = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ADD_CHOOSEN_ITEM,
    RESET_OPENS_ITEMS = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RESET_OPENS_ITEMS,
    RESET_CHOOSEN_ITEMS = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RESET_CHOOSEN_ITEMS,
    ADD_OPENS_ITEM = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ADD_OPENS_ITEM,
    SET_PICTURES = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PICTURES,
    TOGGLE_SHOW_LEARN = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.TOGGLE_SHOW_LEARN,
    TOGGLE_START_GAME = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.TOGGLE_START_GAME,
    TOGGLE_WIN = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.TOGGLE_WIN,
    TOGGLE_LOOSE = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.TOGGLE_LOOSE;
var initialState = {
  background: _enums__WEBPACK_IMPORTED_MODULE_1__.BACKGROUND_TYPES.SEA,
  complexityGame: _enums__WEBPACK_IMPORTED_MODULE_1__.COMPLEXITY.EASY,
  countItems: 12,
  pictures: _enums__WEBPACK_IMPORTED_MODULE_1__.PICTURES.filter(function (_, index) {
    return index < 6;
  }),
  isShowLearn: true,
  isStartGame: false,
  isWin: false,
  isLoose: false,
  time: 30,
  allTime: 30,
  opensItems: [],
  chosenItems: []
};

var infoReducer = function infoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SET_BACKGROUND:
      return _objectSpread(_objectSpread({}, state), {}, {
        background: action.background
      });

    case SET_COMPLEXITY:
      return _objectSpread(_objectSpread({}, state), {}, {
        complexityGame: action.complexityGame
      });

    case SET_TIME:
      return _objectSpread(_objectSpread({}, state), {}, {
        time: action.time
      });

    case SET_ALL_TIME:
      return _objectSpread(_objectSpread({}, state), {}, {
        allTime: action.allTime
      });

    case TOGGLE_SHOW_LEARN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowLearn: action.isShowLearn
      });

    case TOGGLE_START_GAME:
      return _objectSpread(_objectSpread({}, state), {}, {
        isStartGame: action.isStartGame
      });

    case SET_COUNT_ITEMS:
      return _objectSpread(_objectSpread({}, state), {}, {
        countItems: action.countItems
      });

    case SET_PICTURES:
      return _objectSpread(_objectSpread({}, state), {}, {
        pictures: _toConsumableArray(action.pictures)
      });

    case RESET_OPENS_ITEMS:
      return _objectSpread(_objectSpread({}, state), {}, {
        opensItems: []
      });

    case ADD_OPENS_ITEM:
      return _objectSpread(_objectSpread({}, state), {}, {
        opensItems: _toConsumableArray(state.opensItems.concat([action.item]))
      });

    case RESET_CHOOSEN_ITEMS:
      return _objectSpread(_objectSpread({}, state), {}, {
        chosenItems: []
      });

    case ADD_CHOOSEN_ITEM:
      return _objectSpread(_objectSpread({}, state), {}, {
        chosenItems: _toConsumableArray(state.chosenItems.concat([action.item]))
      });

    case TOGGLE_WIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isStartGame: false,
        isWin: action.isWin
      });

    case TOGGLE_LOOSE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isStartGame: false,
        isLoose: action.isLoose
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (infoReducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_infoReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/infoReducer */ "./redux/reducers/infoReducer.js");



var reducers = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  info: _reducers_infoReducer__WEBPACK_IMPORTED_MODULE_0__["default"]
});
var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(reducers, (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isRightChoose": () => (/* binding */ isRightChoose),
/* harmony export */   "isGameOver": () => (/* binding */ isGameOver),
/* harmony export */   "isGameWin": () => (/* binding */ isGameWin),
/* harmony export */   "isOpenedNowItem": () => (/* binding */ isOpenedNowItem),
/* harmony export */   "getComplexity": () => (/* binding */ getComplexity),
/* harmony export */   "getPictures": () => (/* binding */ getPictures)
/* harmony export */ });
var isRightChoose = function isRightChoose(chosenItems, pictures) {
  if (!Array.isArray(chosenItems) || !Array.isArray(pictures)) return null;
  return pictures[chosenItems[0]] === pictures[chosenItems[1]] && chosenItems[0] !== chosenItems[1];
};
var isGameOver = function isGameOver(time) {
  return time === 0;
};
var isGameWin = function isGameWin(opensItems, countItems) {
  return opensItems.length === countItems;
};
var isOpenedNowItem = function isOpenedNowItem(id, opensItems, chosenItems) {
  return opensItems.includes(id) || chosenItems.includes(id);
};
var getComplexity = function getComplexity(location) {
  return location.pathname.split('').slice(1).join('');
};
var getPictures = function getPictures() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__("./img/pictures sync \\.(png%7Cjpe?g%7Csvg)$");
  return context.keys().map(function (picture) {
    return context(picture);
  });
};

/***/ }),

/***/ "./components/background/index.module.scss":
/*!*************************************************!*\
  !*** ./components/background/index.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"panelBackground":"zqyqbRiwR6lKTv7NZ6fD"});

/***/ }),

/***/ "./components/gameGrid/index.module.scss":
/*!***********************************************!*\
  !*** ./components/gameGrid/index.module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"game":"vrk0JhSJuhLksW8yZkJm","gameGridEasy":"lFqaF6Q5Nf7a5KnOBi6l","gameGridMiddle":"hNtO8OLbXW4HEDYrOtRY","gameGridHard":"fgU1erpxx9jXcenJ3IGo","gridItem":"kjS4tU1tIZQQ0dDergsp","time":"nvU2aaT7eAWV4l07i0RA","redTime":"iDJAk14MEHxONC3wLnUG","progressbar":"YXMlLZWSci3JM56ChgHA"});

/***/ }),

/***/ "./components/gameGrid/panelComplexity/index.module.scss":
/*!***************************************************************!*\
  !*** ./components/gameGrid/panelComplexity/index.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"gameComplex":"X8HUqlAmqxeTNEnqbJQw"});

/***/ }),

/***/ "./components/gameWrapper/index.module.scss":
/*!**************************************************!*\
  !*** ./components/gameWrapper/index.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"Z1fToNYa19hrQStnu1MT","sea":"t25ckWL8t53JtLow3QWo","fire":"A5QJA1GJRRALrXQl6hGe","rain":"GuyEpNTXwRudOssR_iik"});

/***/ }),

/***/ "./components/panelStartGame/index.module.scss":
/*!*****************************************************!*\
  !*** ./components/panelStartGame/index.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"panelStartGame":"PS6_vIA3dotpvVzhCsPj","controls":"CfPtGngsiXkrQuB2tW6R","startGame":"ffXkgUveEHlkjm79xYQm","jump":"h79PebIUKoAPo8ebYeat","active":"XC93ZwjP93rxQoWQi3b1"});

/***/ }),

/***/ "./components/popups/index.module.scss":
/*!*********************************************!*\
  !*** ./components/popups/index.module.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"result":"u2OuZNBi8IJqaCwUS2bB","info":"Zl3Vdtg0ZIlfTpj5pO7o","move":"WEbXLjweDgBb3upV3CkN","info__images":"VHCh3h91NquKzIhU9Wel","info__arr":"JA4533Lc5HQsjFQwSKCb","info__img":"LCjzZKLKHNNVphGoc_4R","result__loose":"HxobJCdO582Av7MTPQwi","result__win":"oYsm_iduDSHeQ3dD8hjL","info__content":"gUU0BpqvQOu4ejlc3dhA","play_again":"ak3cLhvIco02xzSG1z4G","btn_open_game":"ObDmw1G111WXHzzzz4tN"});

/***/ }),

/***/ "./components/sound/index.module.scss":
/*!********************************************!*\
  !*** ./components/sound/index.module.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"sound":"MyQ4kHp3VfVgjBcnaoch"});

/***/ }),

/***/ "./scss/App.scss":
/*!***********************!*\
  !*** ./scss/App.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./img/pictures sync \\.(png%7Cjpe?g%7Csvg)$":
/*!****************************************************************!*\
  !*** ./img/pictures/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.svg": "./img/pictures/1.svg",
	"./10.svg": "./img/pictures/10.svg",
	"./2.svg": "./img/pictures/2.svg",
	"./3.svg": "./img/pictures/3.svg",
	"./4.svg": "./img/pictures/4.svg",
	"./5.svg": "./img/pictures/5.svg",
	"./6.svg": "./img/pictures/6.svg",
	"./7.svg": "./img/pictures/7.svg",
	"./8.svg": "./img/pictures/8.svg",
	"./9.svg": "./img/pictures/9.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./img/pictures sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./audio/audio_fire.mp3":
/*!******************************!*\
  !*** ./audio/audio_fire.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4b20d77a27992c9faba4.mp3";

/***/ }),

/***/ "./audio/audio_rain.mp3":
/*!******************************!*\
  !*** ./audio/audio_rain.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d007ef0da21e7c0bfab1.mp3";

/***/ }),

/***/ "./audio/audio_sea.mp3":
/*!*****************************!*\
  !*** ./audio/audio_sea.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/afda38ef15f5ba95c07e.mp3";

/***/ }),

/***/ "./img/after.png":
/*!***********************!*\
  !*** ./img/after.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b35819790ca0276c69ea.png";

/***/ }),

/***/ "./img/arr.png":
/*!*********************!*\
  !*** ./img/arr.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d90b13b78cf3dfd8764d.png";

/***/ }),

/***/ "./img/before.png":
/*!************************!*\
  !*** ./img/before.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6cca7aa016d100d030f9.png";

/***/ }),

/***/ "./img/loose.gif":
/*!***********************!*\
  !*** ./img/loose.gif ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/239f89624d152dbe485d.gif";

/***/ }),

/***/ "./img/pictures/1.svg":
/*!****************************!*\
  !*** ./img/pictures/1.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5a1176ae1207ceaa89e2.svg";

/***/ }),

/***/ "./img/pictures/10.svg":
/*!*****************************!*\
  !*** ./img/pictures/10.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8837c61c4c87fb2ee679.svg";

/***/ }),

/***/ "./img/pictures/2.svg":
/*!****************************!*\
  !*** ./img/pictures/2.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/9f7ff5e468a9bca0776a.svg";

/***/ }),

/***/ "./img/pictures/3.svg":
/*!****************************!*\
  !*** ./img/pictures/3.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/889a44e277165289600c.svg";

/***/ }),

/***/ "./img/pictures/4.svg":
/*!****************************!*\
  !*** ./img/pictures/4.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4a54998889e6581ff03f.svg";

/***/ }),

/***/ "./img/pictures/5.svg":
/*!****************************!*\
  !*** ./img/pictures/5.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/dfdc3dc1374242a81f57.svg";

/***/ }),

/***/ "./img/pictures/6.svg":
/*!****************************!*\
  !*** ./img/pictures/6.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5de6ce85d075e6771e56.svg";

/***/ }),

/***/ "./img/pictures/7.svg":
/*!****************************!*\
  !*** ./img/pictures/7.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3549a983e4b3667ca812.svg";

/***/ }),

/***/ "./img/pictures/8.svg":
/*!****************************!*\
  !*** ./img/pictures/8.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/00a91ec4ccd64cbd783c.svg";

/***/ }),

/***/ "./img/pictures/9.svg":
/*!****************************!*\
  !*** ./img/pictures/9.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a25c03655bf916bf138b.svg";

/***/ }),

/***/ "./img/sound-off.svg":
/*!***************************!*\
  !*** ./img/sound-off.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6f6bfb9eac26cf82bb32.svg";

/***/ }),

/***/ "./img/speaker-volume.svg":
/*!********************************!*\
  !*** ./img/speaker-volume.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d21cd86e2477c9c2660d.svg";

/***/ }),

/***/ "./img/win.gif":
/*!*********************!*\
  !*** ./img/win.gif ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0feba87ea2723ef383bc.gif";

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_framer-motion_dist_es_animation-8c19be"], () => (__webpack_require__("../node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_framer-motion_dist_es_animation-8c19be"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map