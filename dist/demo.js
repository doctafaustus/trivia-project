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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/demo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/demo.js":
/*!************************!*\
  !*** ./src/js/demo.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let questionIndex = 0;\r\n\r\n$('.answer-btn').click(function() {\r\n\r\n  const $btn = $(this);\r\n  if ($btn.hasClass('locked')) return;\r\n\r\n  const selectedAnswer = $btn.find('span').attr('id').replace('question-', '');\r\n  const correctAnswer = questions[questionIndex].answer;\r\n  const $correctAnswerBtn = $('#question-' + correctAnswer).closest('.answer-btn');\r\n  $btn.addClass('selected');\r\n  $('.answer-btn').addClass('locked');\r\n\r\n  setTimeout(() => {\r\n    if (selectedAnswer === correctAnswer) {\r\n      $btn.addClass('correct');\r\n    } else {\r\n      $correctAnswerBtn.addClass('incorrect');\r\n    }\r\n\r\n    setTimeout(() => {\r\n      questionIndex++;\r\n      if (questionIndex === questions.length) return shrinkAnswers();\r\n      populateQuestion(questionIndex);\r\n    }, 2300);\r\n  }, 1000);\r\n});\r\n\r\n\r\nconst questions = [\r\n  {\r\n    question: 'Which of the following planets is the closest to the Sun?',\r\n    a: 'Mars',\r\n    b: 'Venus',\r\n    c: 'Mercury',\r\n    d: 'Earth',\r\n    answer: 'c'\r\n  },\r\n  {\r\n    question: 'Regarding the candy, what does \\'M&M\\' stand for?',\r\n    a: 'Mars and Murrie',\r\n    b: 'Marshall Mathers',\r\n    c: 'Mine & Mine',\r\n    d: 'Mr. Murphy\\'s',\r\n    answer: 'a'\r\n  },\r\n  {\r\n    question: 'Which literary character killed the monster \"Grendel\"?',\r\n    a: 'Achilles',\r\n    b: 'Perseus',\r\n    c: 'Hercules',\r\n    d: 'Beowulf',\r\n    answer: 'd'\r\n  },\r\n  {\r\n    question: 'What 1990\\'s fad involved something known as a slammer?',\r\n    a: 'Tamagotchi',\r\n    b: 'Pogs',\r\n    c: 'Pokemon',\r\n    d: 'Beanie Babies',\r\n    answer: 'b'\r\n  },\r\n  {\r\n    question: 'Which car company manufactures the \"Navigator\"?',\r\n    a: 'Nissan',\r\n    b: 'Honda',\r\n    c: 'GMC',\r\n    d: 'Lincoln',\r\n    answer: 'd'\r\n  }\r\n];\r\n\r\nfunction populateQuestion(questionNum) {\r\n  $('.answer-btn').removeClass('locked selected correct incorrect');\r\n  populateText('#question-title', questions[questionIndex].question);\r\n  populateText('#question-a', questions[questionIndex].a);\r\n  populateText('#question-b', questions[questionIndex].b);\r\n  populateText('#question-c', questions[questionIndex].c);\r\n  populateText('#question-d', questions[questionIndex].d);\r\n}\r\n\r\nfunction populateText(selector, text) {\r\n  $(selector).animate({opacity: 0}, function() {\r\n    $(this).text(text).animate({opacity: 1});  \r\n  });\r\n}\r\n\r\npopulateQuestion(questionIndex);\r\n\r\nfunction shrinkAnswers() {\r\n  $('#demo-answers, #question-title').fadeOut(function() {\r\n    $('#demo-question').addClass('grow');\r\n    $('#question-title').text('Join a live game for more!').addClass('shifted').fadeIn();\r\n  });\r\n}\n\n//# sourceURL=webpack:///./src/js/demo.js?");

/***/ })

/******/ });