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

eval("// Add SCSS styles\nconst css = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\nconsole.log('Hello world....');\n\n// Invitation Learn More\n$('.invitation-list').on('click', '.toggle-learn-more', function(e) {\n  $(this).closest('.invitation-middle').toggleClass('info-veil');\n});\n\n\n// Menu tab toggle\n$('#menu li').click(function() {\n  const $currentTab = $(this);\n  const tabContentToShow = $currentTab.attr('data-tab-id');\n  $('section, #menu li').removeClass('active');\n  $currentTab.add(`#page-${tabContentToShow}`).addClass('active');\n});\n$('#menu li[data-tab-id=home]').click();\n\n\n// Sidebar tab toggle\n$('.tab').click(function() {\n  const $currentTab = $(this);\n  const tabContentToShow = $currentTab.attr('data-tab-id');\n  $('.tab, .tab-content').removeClass('active');\n  $currentTab.add(`#${tabContentToShow}`).addClass('active');\n}); \n$('.tab').eq(1).trigger('click');\n\n// How to play close\n$('.how-to-play-close').click(function() {\n  $('.how-to-play-container').hide();\n});\n\n// Temporary invite functionality\n$('.side-bar').on('click', '.tab-content .player-invite', function() {\n  const $li = $(this).closest('li');\n  const playerInvited = $li.hasClass('invited');\n  if (!playerInvited) {\n    $li.addClass('invited');\n  } else {\n    $li.removeClass('invited');\n  }\n});\n\n\n\n// Chat functionality\n$('.chat-form').submit(function(e) {\n  e.preventDefault();\n  const $chatInput = $('#chat-input');\n  const message = $chatInput.val();\n  if (message.trim() === '') return console.log('No message');\n  const randomNum = Math.floor(Math.random() * 1000);\n  const formattedMessage = `<li>\n    <div class=\"player-icon\">\n      <img src=\"https://api.adorable.io/avatars/40/${randomNum}@adorable.png\">\n    </div>\n    <div class=\"name-and-message\">\n      <span class=\"player-name\">${randomNum}</span>\n      <span class=\"message\">${message}</span>\n    </div>\n    <div class=\"chat-submenu\">\n      <svg class=\"chat-submenu-dots\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"style-scope yt-icon\">\n        <g class=\"style-scope yt-icon\">\n          <path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" class=\"style-scope yt-icon\"></path>\n        </g>\n      </svg>\n      <div class=\"boot\">Remove from party</div>\n    </div>\n  </li>`;\n  $('#tab-party-content #party-messages').prepend(formattedMessage);\n  $chatInput.val('');\n});\n\n\n\n// Show dummy leadboard data\nlet fakeLeaderboardRows = ''\nfor (let i = 0; i < 123; i++) {\n  fakeLeaderboardRows += `<div class=\"leaderboard-row\">\n    <div class=\"lb-rank\">${i + 3}</div>\n    <div class=\"lb-player-icon-and-name\">\n      <div class=\"lb-player-icon\">\n          <img src=\"https://api.adorable.io/avatars/40/${i}doctafaustus@adorable.png\">\n      </div>\n      <div class=\"lb-player-name\">doctafaustus</div>\n    </div>\n    <div class=\"lb-wins\">13</div>\n    <div class=\"lb-games-played\">27</div>\n    <div class=\"lb-total-points\">4565</div>\n  </div>`;\n}\n$('.leaderboard').append(fakeLeaderboardRows);\n\n\n// Boot party member\nfunction hideSubmenus() {\n  $('#party-messages li.submenu-open').removeClass('submenu-open');\n}\n$('#tab-party-content').on('click', '.chat-submenu-dots', function() {\n  const $parentMessage = $(this).closest('li');\n  $parentMessage.addClass('submenu-open');\n  $(document).one('mousedown', function(e) {\n    if (!e.target.matches('.boot')) hideSubmenus();\n  });\n});\n$('#tab-party-content').on('click', '.boot', function() {\n  console.log('Clicked submeu');\n  hideSubmenus();\n});\n\n\n\n\n// Countdown Timer\n$('#countdown-clock').FlipClock(10, {\n  clockFace: 'MiniteCounter',\n  countdown: true,\n  callbacks: {\n    stop: function() {\n      console.log('DONE!');\n    },\n  },\n});\n\n//# sourceURL=webpack:///./src/lobby.js?");

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