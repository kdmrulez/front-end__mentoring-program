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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ticTacToe_KeyActions__ = __webpack_require__(1);

(() => {
    document.onkeydown = __WEBPACK_IMPORTED_MODULE_0__ticTacToe_KeyActions__["a" /* default */];
})();



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoardActions_js__ = __webpack_require__(2);


const keyActions = () => {
    let selectedFieldIndex = 4;

    const keyMoves = {
        /*SPACE KEY*/
        32: () => {
            __WEBPACK_IMPORTED_MODULE_0__BoardActions_js__["a" /* default */].putSign(selectedFieldIndex);
        },
        /*LEFT KEY*/
        37: () => {
            selectedFieldIndex = selectedFieldIndex >= 1 ? --selectedFieldIndex : 8;
            __WEBPACK_IMPORTED_MODULE_0__BoardActions_js__["a" /* default */].highlightSelectedField(selectedFieldIndex);
        },
        /*UP KEY*/
        38: () => {
            selectedFieldIndex = selectedFieldIndex <= 2 ? selectedFieldIndex + 6 : selectedFieldIndex - 3;
            __WEBPACK_IMPORTED_MODULE_0__BoardActions_js__["a" /* default */].highlightSelectedField(selectedFieldIndex);
        },
        /*RIGHT KEY*/
        39: () => {
            selectedFieldIndex = selectedFieldIndex >= 8 ? 0 : ++selectedFieldIndex;
            __WEBPACK_IMPORTED_MODULE_0__BoardActions_js__["a" /* default */].highlightSelectedField(selectedFieldIndex);
        },
        /*DOWN KEY*/
        40: () => {
            selectedFieldIndex = selectedFieldIndex >= 6 ? selectedFieldIndex - 6 : selectedFieldIndex + 3;
            __WEBPACK_IMPORTED_MODULE_0__BoardActions_js__["a" /* default */].highlightSelectedField(selectedFieldIndex);
        }
    }
    __WEBPACK_IMPORTED_MODULE_0__BoardActions_js__["a" /* default */].highlightSelectedField(selectedFieldIndex);
    return (event) => {
        keyMoves[event.keyCode]();
    };
}

/* harmony default export */ __webpack_exports__["a"] = (keyActions());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EndOfGameActions_js__ = __webpack_require__(3);

const BoardActions = () => {
    let fields = ['', '', '', '', '', '', '', '', '']
    const leastNumberOfMovesToWin = 5;
    const maxNumberOfMovesAllowed = fields.length;
    let currentPlayerSign = 'X';
    let lastSelectedField = 4;
    let numberOfMoves = 0;
    let isGameFinished = false;
    const changeCurrentPlayer = () => {
        currentPlayerSign = currentPlayerSign === 'X' ? 'O' : 'X';
        document.getElementsByClassName('game-status')[0].innerText = `Player ${currentPlayerSign} moves`;
    }


    const clearPreviouslyHighlightedField = () => {
        document.getElementsByClassName('field')[lastSelectedField].style.backgroundColor = 'transparent';
    }

    const drawingSignDelay = () => {
        return new Promise(resolve => setTimeout(resolve, 300));
    }
    return {
        putSign: (index) => {
            drawingSignDelay().then(
                () => {
                    if (!fields[index] && !isGameFinished) {
                        document.getElementsByClassName('field')[index].innerText = `${currentPlayerSign}`;
                        fields[index] = currentPlayerSign;
                        numberOfMoves++;

                        if (numberOfMoves >= leastNumberOfMovesToWin)
                            isGameFinished = __WEBPACK_IMPORTED_MODULE_0__EndOfGameActions_js__["a" /* default */].checkWinning(index, fields);


                        if (!isGameFinished && numberOfMoves === maxNumberOfMovesAllowed) {
                            __WEBPACK_IMPORTED_MODULE_0__EndOfGameActions_js__["a" /* default */].draw();
                            isGameFinished = true;
                        }

                        if (!isGameFinished) changeCurrentPlayer();
                    }
                }
            );

        },
        highlightSelectedField: (index) => {
            clearPreviouslyHighlightedField();
            lastSelectedField = index;
            document.getElementsByClassName('field')[index].style.backgroundColor = 'lightgray';
        }
    }
}


/* harmony default export */ __webpack_exports__["a"] = (BoardActions());

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const EndOfGameActions = () => {
    const sequenceForIndex = {
        0: [[1, 2], [3, 6], [4, 8]],
        1: [[0, 2], [4, 7]],
        2: [[0, 1], [5, 8], [4, 6]],
        3: [[0, 6], [4, 5]],
        4: [[0, 8], [3, 5], [2, 6], [1, 7]],
        5: [[2, 8], [3, 4]],
        6: [[0, 3], [7, 8],[2,4]],
        7: [[1, 4], [6, 8]],
        8: [[0, 4], [2, 5], [6, 7]]

    }

    const performActionForGameEnd = (text) => {
        document.getElementsByClassName('game-status')[0].innerText = text;
        document.onkeydown = () => window.location.reload();
    }
    return {
        checkWinning: (index, fields) => {
            let isWinner = false;
            sequenceForIndex[index].forEach(sequence => {
                let sign = fields[index];
                if (sign === fields[sequence[0]] && sign === fields[sequence[1]]) {
                    performActionForGameEnd('Player ' + sign + ' won');
                    isWinner = true;
                    return;
                }
            })
            return isWinner;
        },
        draw: () => {
            performActionForGameEnd('Draw');
        }
    }
}


/* harmony default export */ __webpack_exports__["a"] = (EndOfGameActions());

/***/ })
/******/ ]);