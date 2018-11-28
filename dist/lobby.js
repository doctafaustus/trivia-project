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

/***/ "./src/js/auth0.js":
/*!*************************!*\
  !*** ./src/js/auth0.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return test; });\nfunction test() {\r\n\r\n  const webAuth = new auth0.WebAuth({\r\n    domain: 'completelyabsurdtrivia.auth0.com',\r\n    clientID: 'JZaEtC58Pg6dlUtSUfluY9R94M9doqBZ',\r\n    redirectUri: 'http://localhost:3000/',\r\n    responseType: 'token id_token',\r\n    scope: 'openid'\r\n  });\r\n\r\n  const $loginBtn = $('#sign-in-register a');\r\n\r\n  $loginBtn.click(function(e) {\r\n    e.preventDefault();\r\n    if ($(this).text() === 'Sign In / Register') {\r\n      console.log('yes');\r\n      webAuth.authorize();\r\n    } else {\r\n      logout();\r\n    }\r\n  });\r\n\r\n  window.x = webAuth;\r\n\r\n  function setSession(authResult) {\r\n    // Set the time that the Access Token will expire at\r\n    const expiresAt = JSON.stringify(\r\n      authResult.expiresIn * 1000 + new Date().getTime()\r\n    );\r\n    localStorage.setItem('access_token', authResult.accessToken);\r\n    localStorage.setItem('id_token', authResult.idToken);\r\n    localStorage.setItem('expires_at', expiresAt);\r\n  }\r\n\r\n  function logout() {\r\n    console.log('logout()');\r\n\r\n    // Remove tokens and expiry time from localStorage\r\n    localStorage.removeItem('access_token');\r\n    localStorage.removeItem('id_token');\r\n    localStorage.removeItem('expires_at');\r\n    displayButtons();\r\n    webAuth.logout({\r\n      returnTo: 'http://localhost:3000/',\r\n      client_id: 'JZaEtC58Pg6dlUtSUfluY9R94M9doqBZ'\r\n    });\r\n  }\r\n\r\n  function isAuthenticated() {\r\n    // Check whether the current time is past the\r\n    // Access Token's expiry time\r\n    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));\r\n    return new Date().getTime() < expiresAt;\r\n  }\r\n\r\n  function handleAuthentication() {\r\n    webAuth.parseHash(function(err, authResult) {\r\n      console.log('parsing hash');\r\n      if (authResult && authResult.accessToken && authResult.idToken) {\r\n        //window.location.hash = '';\r\n        console.log('LOGGED IN', authResult);\r\n        setSession(authResult);\r\n      } else if (err) {\r\n        console.log(err);\r\n      } else {\r\n        console.log('nothing');\r\n      }\r\n      displayButtons();\r\n    });\r\n  }\r\n\r\n  function displayButtons() {\r\n    if (isAuthenticated()) {\r\n      $loginBtn.text('Logout');\r\n    } else {\r\n      $loginBtn.text('Sign In / Register');\r\n    }\r\n  }\r\n\r\n\r\n  handleAuthentication();\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/auth0.js?");

/***/ }),

/***/ "./src/lobby.js":
/*!**********************!*\
  !*** ./src/lobby.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/auth0 */ \"./src/js/auth0.js\");\n\r\n\r\nObject(_js_auth0__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n// Add SCSS styles\r\nconst css = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\r\n\r\n// Invitation Learn More\r\n$('.invitation-list').on('click', '.toggle-learn-more', function(e) {\r\n  $(this).closest('.invitation-middle').toggleClass('info-veil');\r\n});\r\n\r\n\r\n// Menu tab toggle\r\n$(window).on('hashchange', function() {\r\n  let clickedHash = window.location.hash.replace('#', '');\r\n  if (clickedHash === '') clickedHash = 'home';\r\n  const $currentTab = $(`#menu li[data-tab-id=${clickedHash}]`);\r\n\r\n  // First reset/remove the active class from the menu and content\r\n  $('section, #menu li').removeClass('active');\r\n\r\n  // Apply the active class to the clicked menu and content\r\n  $currentTab.add(`#page-${clickedHash}`).addClass('active');\r\n  localStorage.lastPageVisited = clickedHash;\r\n  setTabContentHeight();\r\n});\r\n$(`#menu li[data-tab-id=${localStorage.lastPageVisited || 'home'}]`).add(`#page-${localStorage.lastPageVisited || 'home'}`).addClass('active').click();\r\n\r\n// Mobile menu close\r\n$('#menu li').click(hideMenu);\r\n\r\n\r\n\r\n// Footer navigation\r\n$('#footer-links a').click(function() {\r\n  const linkID = $(this).attr('data-tab-id');\r\n  const target = $(`#menu li[data-tab-id=${linkID}]`);\r\n  target.click();\r\n});\r\n\r\n\r\n// Sidebar tab toggle\r\n$('.tab').click(function() {\r\n  const $currentTab = $(this);\r\n  const tabContentToShow = $currentTab.attr('data-tab-id');\r\n  $('.tab, .tab-content').removeClass('active');\r\n  $currentTab.add(`#${tabContentToShow}`).addClass('active');\r\n  setTabContentHeight();\r\n}); \r\n$('.tab').eq(1).trigger('click');\r\n\r\n// How to play close\r\n$('.how-to-play-close').click(function() {\r\n  $('.how-to-play-container').hide();\r\n});\r\n\r\n// Temporary invite functionality\r\n$('.side-bar').on('click', '.tab-content .player-invite', function() {\r\n  const $li = $(this).closest('li');\r\n  const playerInvited = $li.hasClass('invited');\r\n  if (!playerInvited) {\r\n    $li.addClass('invited');\r\n  } else {\r\n    $li.removeClass('invited');\r\n  }\r\n});\r\n\r\n\r\n\r\n// Chat functionality\r\n$('.chat-form').submit(function(e) {\r\n  e.preventDefault();\r\n  const $chatInput = $('#chat-input');\r\n  const message = $chatInput.val();\r\n  if (message.trim() === '') return console.log('No message');\r\n  const randomNum = Math.floor(Math.random() * 1000);\r\n  const formattedMessage = `<li>\r\n    <div class=\"player-icon\">\r\n      <img src=\"https://api.adorable.io/avatars/40/${randomNum}@adorable.png\">\r\n    </div>\r\n    <div class=\"name-and-message\">\r\n      <span class=\"player-name\">${randomNum}</span>\r\n      <span class=\"message\">${message}</span>\r\n    </div>\r\n    <div class=\"chat-submenu\">\r\n      <svg class=\"chat-submenu-dots\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"style-scope yt-icon\">\r\n        <g class=\"style-scope yt-icon\">\r\n          <path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" class=\"style-scope yt-icon\"></path>\r\n        </g>\r\n      </svg>\r\n      <div class=\"boot\">Remove from party</div>\r\n    </div>\r\n  </li>`;\r\n  $('#tab-party-content #party-messages').prepend(formattedMessage);\r\n  $chatInput.val('');\r\n\r\n  // If on mobile trigger a blur event to bring down keyboard and properly reshow previously hidden content from when the keyboard was open\r\n  if ($(window).width() < 1099) {\r\n    $('#chat-input').trigger('blur');\r\n    setTabContentHeight();\r\n  }\r\n});\r\n\r\n\r\n\r\n// Show dummy leadboard data\r\nlet fakeLeaderboardRows = ''\r\nfor (let i = 0; i < 123; i++) {\r\n  fakeLeaderboardRows += `<div class=\"leaderboard-row\">\r\n    <div class=\"lb-rank\">${i + 3}</div>\r\n    <div class=\"lb-player-icon-and-name\">\r\n      <div class=\"lb-player-icon\">\r\n          <img src=\"https://api.adorable.io/avatars/40/${i}doctafaustus@adorable.png\">\r\n      </div>\r\n      <div class=\"lb-player-name\">doctafaustus</div>\r\n    </div>\r\n    <div class=\"lb-wins\">13</div>\r\n    <div class=\"lb-games-played\">27</div>\r\n    <div class=\"lb-total-points\">4565</div>\r\n  </div>`;\r\n}\r\n$('.leaderboard').append(fakeLeaderboardRows);\r\n\r\n\r\n// Boot party member\r\nfunction hideSubmenus() {\r\n  $('#party-messages li.submenu-open').removeClass('submenu-open');\r\n}\r\n$('#tab-party-content').on('click', '.chat-submenu-dots', function() {\r\n  const $parentMessage = $(this).closest('li');\r\n  $parentMessage.addClass('submenu-open');\r\n  $(document).one('mousedown', function(e) {\r\n    if (!e.target.matches('.boot')) hideSubmenus();\r\n  });\r\n});\r\n$('#tab-party-content').on('click', '.boot', function() {\r\n  console.log('Clicked submeu');\r\n  hideSubmenus();\r\n});\r\n\r\n// Back to top\r\n$('#scroll-top').click(function() {\r\n  window.scrollTo({\r\n    top: 0,\r\n    left: 0,\r\n    behavior: 'smooth',\r\n  });\r\n});\r\n\r\n\r\n// Countdown Timer\r\n$('#countdown-clock').FlipClock(10, {\r\n  clockFace: 'MiniteCounter',\r\n  countdown: true,\r\n  callbacks: {\r\n    stop: function() {\r\n      console.log('DONE!');\r\n    },\r\n  },\r\n});\r\n\r\n\r\n// Burger Menu\r\n$('#burger-menu').click(function() {\r\n  $('html, body').addClass('mobile-menu-open');\r\n});\r\n\r\n$('.overlay').click(hideMenu);\r\n\r\nfunction hideMenu() {\r\n  $('html, body').removeClass('mobile-menu-open');\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(window).resize(setTabContentHeight);\r\nsetTabContentHeight();\r\n\r\n// Lobby tab content height setter\r\nfunction setTabContentHeight() {\r\n  const $sideBar = $('.side-bar');\r\n  const $partyMessages = $('#party-messages');\r\n  const sideBarOffset = $sideBar.offset().top;\r\n  const windowHeight = $(window).height();\r\n  const tabsHeight = $('.tabs').outerHeight();\r\n  const chatFormHeight = $('.chat-form').outerHeight();\r\n\r\n  const newSideBarHeight = windowHeight - sideBarOffset;\r\n  const newChatSize = newSideBarHeight - (tabsHeight + chatFormHeight);\r\n\r\n  $sideBar.attr('style', `height: ${newSideBarHeight}px;`);\r\n  $partyMessages.attr('style', `height: ${newChatSize}px;`);\r\n\r\n  if (windowHeight > 1099) {\r\n    $sideBar.attr('style', 'height: auto;');\r\n    $partyMessages.attr('style', 'height: 451px;');\r\n  }\r\n}\r\n\r\n\r\n\r\n$('#chat-input').on('focus', function() {\r\n  if (!isMobile()) return;\r\n  $('.chat-form').addClass('keyboard-open');\r\n});\r\n\r\n$('#chat-input').on('blur', function() {\r\n  if (!isMobile()) return;\r\n  $('.chat-form').removeClass('keyboard-open');\r\n});\r\n\r\n\r\nfunction isMobile() {\r\n  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);\r\n}\n\n//# sourceURL=webpack:///./src/lobby.js?");

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