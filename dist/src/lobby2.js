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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lobby.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lobby.js":
/*!**********************!*\
  !*** ./src/lobby.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Add SCSS styles\r\nconst css = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\r\n\r\nconsole.log('Hello world....');\r\n\r\n// Invitation Learn More\r\n$('.invitation-list').on('click', '.toggle-learn-more', function(e) {\r\n  $(this).closest('.invitation-middle').toggleClass('info-veil');\r\n});\r\n\r\n\r\n// Menu tab toggle\r\n$('#menu li').click(function() {\r\n  const $currentTab = $(this);\r\n  const tabContentToShow = $currentTab.attr('data-tab-id');\r\n  $('section, #menu li').removeClass('active');\r\n  $currentTab.add(`#page-${tabContentToShow}`).addClass('active');\r\n});\r\n$('#menu li[data-tab-id=home]').click();\r\n\r\n\r\n// Sidebar tab toggle\r\n$('.tab').click(function() {\r\n  const $currentTab = $(this);\r\n  const tabContentToShow = $currentTab.attr('data-tab-id');\r\n  $('.tab, .tab-content').removeClass('active');\r\n  $currentTab.add(`#${tabContentToShow}`).addClass('active');\r\n}); \r\n$('.tab').eq(1).trigger('click');\r\n\r\n// How to play close\r\n$('.how-to-play-close').click(function() {\r\n  $('.how-to-play-container').hide();\r\n});\r\n\r\n// Temporary invite functionality\r\n$('.side-bar').on('click', '.tab-content .player-invite', function() {\r\n  const $li = $(this).closest('li');\r\n  const playerInvited = $li.hasClass('invited');\r\n  if (!playerInvited) {\r\n    $li.addClass('invited');\r\n  } else {\r\n    $li.removeClass('invited');\r\n  }\r\n});\r\n\r\n\r\n\r\n// Chat functionality\r\n$('.chat-form').submit(function(e) {\r\n  e.preventDefault();\r\n  const $chatInput = $('#chat-input');\r\n  const message = $chatInput.val();\r\n  if (message.trim() === '') return console.log('No message');\r\n  const randomNum = Math.floor(Math.random() * 1000);\r\n  const formattedMessage = `<li>\r\n    <div class=\"player-icon\">\r\n      <img src=\"https://api.adorable.io/avatars/40/${randomNum}@adorable.png\">\r\n    </div>\r\n    <div class=\"name-and-message\">\r\n      <span class=\"player-name\">${randomNum}</span>\r\n      <span class=\"message\">${message}</span>\r\n    </div>\r\n    <div class=\"chat-submenu\">\r\n      <svg class=\"chat-submenu-dots\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"style-scope yt-icon\">\r\n        <g class=\"style-scope yt-icon\">\r\n          <path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" class=\"style-scope yt-icon\"></path>\r\n        </g>\r\n      </svg>\r\n      <div class=\"boot\">Remove from party</div>\r\n    </div>\r\n  </li>`;\r\n  $('#tab-party-content #party-messages').prepend(formattedMessage);\r\n  $chatInput.val('');\r\n});\r\n\r\n\r\n\r\n// Show dummy leadboard data\r\nlet fakeLeaderboardRows = ''\r\nfor (let i = 0; i < 123; i++) {\r\n  fakeLeaderboardRows += `<div class=\"leaderboard-row\">\r\n    <div class=\"lb-rank\">${i + 3}</div>\r\n    <div class=\"lb-player-icon-and-name\">\r\n      <div class=\"lb-player-icon\">\r\n          <img src=\"https://api.adorable.io/avatars/40/${i}doctafaustus@adorable.png\">\r\n      </div>\r\n      <div class=\"lb-player-name\">doctafaustus</div>\r\n    </div>\r\n    <div class=\"lb-wins\">13</div>\r\n    <div class=\"lb-games-played\">27</div>\r\n    <div class=\"lb-total-points\">4565</div>\r\n  </div>`;\r\n}\r\n$('.leaderboard').append(fakeLeaderboardRows);\r\n\r\n\r\n// Boot party member\r\nfunction hideSubmenus() {\r\n  $('#party-messages li.submenu-open').removeClass('submenu-open');\r\n}\r\n$('#tab-party-content').on('click', '.chat-submenu-dots', function() {\r\n  const $parentMessage = $(this).closest('li');\r\n  $parentMessage.addClass('submenu-open');\r\n  $(document).one('mousedown', function(e) {\r\n    if (!e.target.matches('.boot')) hideSubmenus();\r\n  });\r\n});\r\n$('#tab-party-content').on('click', '.boot', function() {\r\n  console.log('Clicked submeu');\r\n  hideSubmenus();\r\n});\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/lobby.js?");

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