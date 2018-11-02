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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var $ = function $(elem) {\n  return document.querySelector(elem);\n};\n\nvar $$ = function $$(elem) {\n  return document.querySelectorAll(elem);\n};\n\nconsole.log(\"testing\");\nwindow.addEventListener('load', lazyloading, false);\n\nfunction lazyloading() {\n  var lazyloadImages;\n\n  if (\"IntersectionObserver\" in window) {\n    lazyloadImages = $$(\".lazy\");\n    var imageObserver = new IntersectionObserver(function (entries, observer) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          var image = entry.target;\n          image.src = image.dataset.src;\n          image.classList.remove(\"lazy\");\n          imageObserver.unobserve(image);\n        }\n      });\n    });\n    lazyloadImages.forEach(function (image) {\n      imageObserver.observe(image);\n    });\n  } else {\n    var lazyload = function lazyload() {\n      if (lazyloadThrottleTimeout) {\n        clearTimeout(lazyloadThrottleTimeout);\n      }\n\n      lazyloadThrottleTimeout = setTimeout(function () {\n        var scrollTop = window.pageYOffset;\n        lazyloadImages.forEach(function (img) {\n          if (img.offsetTop < window.innerHeight + scrollTop) {\n            img.src = img.dataset.src;\n            img.classList.remove('lazy');\n          }\n        });\n\n        if (lazyloadImages.length == 0) {\n          document.removeEventListener(\"scroll\", lazyload);\n          window.removeEventListener(\"resize\", lazyload);\n          window.removeEventListener(\"orientationChange\", lazyload);\n        }\n      }, 20);\n    };\n\n    var lazyloadThrottleTimeout;\n    lazyloadImages = $$(\".lazy\");\n    document.addEventListener(\"scroll\", lazyload);\n    window.addEventListener(\"resize\", lazyload);\n    window.addEventListener(\"orientationChange\", lazyload);\n  }\n} // Remove no-js class\n\n\n$('html').classList.remove('no-js'); // Animate to section when nav is clicked\n\n$$('#menu a[href^=\"#\"]').forEach(function (anchor) {\n  anchor.addEventListener('click', function (e) {\n    e.preventDefault();\n    window.scrollTo({\n      top: $(this.getAttribute('href')).getBoundingClientRect().top,\n      behavior: 'smooth'\n    });\n\n    if ($('header').classList.contains('active')) {\n      $$('header, body').forEach(function (e) {\n        return e.classList.remove('active');\n      });\n    }\n  });\n}); // Scroll to top\n\n$('#to-top').addEventListener('click', function (e) {\n  window.scrollTo({\n    top: 0,\n    behavior: 'smooth'\n  });\n}); // Scroll to first element\n\n$('#lead-down span').addEventListener('click', function (e) {\n  window.scrollTo({\n    top: $(\"#about\").getBoundingClientRect().top,\n    behavior: 'smooth'\n  });\n}); // Open mobile menu\n\n$('#mobile-menu-open').addEventListener('click', function (e) {\n  $$('header, body').forEach(function (e) {\n    return e.classList.add('active');\n  });\n});\n\n//# sourceURL=webpack:///./js/scripts.js?");

/***/ })

/******/ });