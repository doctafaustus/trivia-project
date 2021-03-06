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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Add SCSS styles\r\nconst css = __webpack_require__(/*! ../style.scss */ \"./src/style.scss\");\r\n\r\n$('header').addClass('game-mode');\r\n\r\n\r\nconst countdownNumberEl = document.getElementById('countdown-number');\r\nlet countdown = 10;\r\ncountdownNumberEl.textContent = countdown;\r\n\r\nconst timer = setInterval(() => {\r\n  countdown = --countdown <= 0 ? 10 : countdown;\r\n  countdownNumberEl.textContent = countdown;\r\n}, 1000);\r\n\r\nsetTimeout(() => {\r\n  clearInterval(timer);\r\n}, 1000);\r\n\r\n\r\n// Flash status dots\r\nlet statusDots = '';\r\n(function flashStatusDots() {\r\n  statusDots = (statusDots.length === 4) ? '' : statusDots + '.';\r\n  $('#status-dots').text(statusDots);\r\n  //setTimeout(flashStatusDots, 425);\r\n})();\r\n\r\n\r\n\r\n// Chat functionality\r\n$('.chat-form').submit(function(e) {\r\n  e.preventDefault();\r\n  const $chatInput = $('#chat-input');\r\n  const message = $chatInput.val();\r\n  console.log('message', message);\r\n  if (message.trim() === '') return console.log('No message');\r\n  const randomNum = Math.floor(Math.random() * 1000);\r\n  const formattedMessage = `<li>\r\n    <div class=\"player-icon\">\r\n      <img src=\"https://api.adorable.io/avatars/40/${randomNum}@adorable.png\">\r\n    </div>\r\n    <div class=\"name-and-message\">\r\n      <span class=\"player-name\">${randomNum}</span>\r\n      <span class=\"message\">${message}</span>\r\n    </div>\r\n    <div class=\"chat-submenu\">\r\n      <svg class=\"chat-submenu-dots\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"style-scope yt-icon\">\r\n        <g class=\"style-scope yt-icon\">\r\n          <path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" class=\"style-scope yt-icon\"></path>\r\n        </g>\r\n      </svg>\r\n      <div class=\"boot\">Remove from party</div>\r\n    </div>\r\n  </li>`;\r\n  $('#party-messages').prepend(formattedMessage);\r\n  $chatInput.val('');\r\n});\r\n\r\n\r\n$(window).resize(setTabContentHeight);\r\nsetTabContentHeight();\r\n\r\n// Lobby tab content height setter\r\nfunction setTabContentHeight() {\r\n  const $chat = $('.game-chat');\r\n  const chatOffset = $chat.offset().top;\r\n  const chatFormHeight = $('.chat-form').outerHeight();\r\n  const windowHeight = $(window).height();\r\n  const newChatHeight = windowHeight - (chatOffset + chatFormHeight) - 5;\r\n\r\n  console.log(newChatHeight);\r\n  $('#party-messages').attr('style', `height: ${newChatHeight}px;`);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });