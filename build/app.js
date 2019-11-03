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
/******/ 	__webpack_require__.p = "/Users/amitozdeol/WebProjects/amitozdeol.github.io/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/scripts.js":
/*!******************************!*\
  !*** ./assets/js/scripts.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = function (elem) {
  return document.querySelector(elem);
};

var $$ = function (elem) {
  return document.querySelectorAll(elem);
}; //This is the "Offline copy of pages" service worker


if (navigator.serviceWorker.controller) {
  console.log("[PWA Builder] active service worker found, no need to register");
} else {
  //Register the ServiceWorker
  navigator.serviceWorker.register("sw.js", {
    scope: "./"
  }).then(function (reg) {
    console.log("Service worker has been registered for scope:" + reg.scope);
  });
}

window.addEventListener("load", lazyloading, false);

function lazyloading() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = $$(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });
    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = $$(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });

        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
} // Remove no-js class


$("html").classList.remove("no-js"); // Animate to section when nav is clicked

$$('#menu a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: $(this.getAttribute("href")).getBoundingClientRect().top,
      behavior: "smooth"
    });

    if ($("header").classList.contains("active")) {
      $$("header, body").forEach(e => e.classList.remove("active"));
    }
  });
}); // Scroll to top

$("#to-top").addEventListener("click", function (e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}); // Scroll to first element

$("#lead-down span").addEventListener("click", function (e) {
  window.scrollTo({
    top: $("#about").getBoundingClientRect().top,
    behavior: "smooth"
  });
}); // Open mobile menu

$("#mobile-menu-open").addEventListener("click", function (e) {
  $$("header, body").forEach(e => e.classList.add("active"));
}); //Copyright year

$("#CR-year").innerHTML = new Date().getFullYear(); //Dark mode fevicon

var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
handleDarkmode(darkModeMediaQuery);

function handleDarkmode(e) {
  let darkModeOn = e.matches; // true if dark mode is enabled

  let favicon = $('link[rel="icon"]'); // get favicon.ico element
  // replace icons with dark/light themes as appropriate

  favicon.href = darkModeOn ? '../assets/images/AD_logo_white.png' : '../assets/images/AD_logo_dark1.png';
}

darkModeMediaQuery.addListener(handleDarkmode);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NjcmlwdHMuanMiXSwibmFtZXMiOlsiJCIsImVsZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwiY29udHJvbGxlciIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsInNjb3BlIiwidGhlbiIsInJlZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsYXp5bG9hZGluZyIsImxhenlsb2FkSW1hZ2VzIiwiaW1hZ2VPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbWFnZSIsInRhcmdldCIsInNyYyIsImRhdGFzZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwibGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQiLCJsYXp5bG9hZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImltZyIsIm9mZnNldFRvcCIsImlubmVySGVpZ2h0IiwibGVuZ3RoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFuY2hvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbFRvIiwidG9wIiwiZ2V0QXR0cmlidXRlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYmVoYXZpb3IiLCJjb250YWlucyIsImFkZCIsImlubmVySFRNTCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImRhcmtNb2RlTWVkaWFRdWVyeSIsIm1hdGNoTWVkaWEiLCJoYW5kbGVEYXJrbW9kZSIsImRhcmtNb2RlT24iLCJtYXRjaGVzIiwiZmF2aWNvbiIsImhyZWYiLCJhZGRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6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QUYsQ0FBWXdCLEdBQVosQ0FBZ0IsUUFBaEIsQ0FBaEM7QUFDRCxDQUZELEUsQ0FJQTs7QUFDQXRELENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3VELFNBQWQsR0FBMEIsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQTFCLEMsQ0FFQTs7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRzNDLE1BQU0sQ0FBQzRDLFVBQVAsQ0FBa0IsOEJBQWxCLENBQXpCO0FBRUFDLGNBQWMsQ0FBQ0Ysa0JBQUQsQ0FBZDs7QUFDQSxTQUFTRSxjQUFULENBQXdCZCxDQUF4QixFQUEyQjtBQUN6QixNQUFJZSxVQUFVLEdBQUdmLENBQUMsQ0FBQ2dCLE9BQW5CLENBRHlCLENBQ0c7O0FBQzVCLE1BQUlDLE9BQU8sR0FBRy9ELENBQUMsQ0FBQyxrQkFBRCxDQUFmLENBRnlCLENBRVk7QUFDckM7O0FBQ0ErRCxTQUFPLENBQUNDLElBQVIsR0FBZUgsVUFBVSxHQUFHLG9DQUFILEdBQTBDLG9DQUFuRTtBQUNEOztBQUNESCxrQkFBa0IsQ0FBQ08sV0FBbkIsQ0FBK0JMLGNBQS9CLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvVXNlcnMvYW1pdG96ZGVvbC9XZWJQcm9qZWN0cy9hbWl0b3pkZW9sLmdpdGh1Yi5pby9idWlsZFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9zY3JpcHRzLmpzXCIpO1xuIiwidmFyICQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbn07XG52YXIgJCQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtKTtcbn07XG5cbi8vVGhpcyBpcyB0aGUgXCJPZmZsaW5lIGNvcHkgb2YgcGFnZXNcIiBzZXJ2aWNlIHdvcmtlclxuaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgY29uc29sZS5sb2coXCJbUFdBIEJ1aWxkZXJdIGFjdGl2ZSBzZXJ2aWNlIHdvcmtlciBmb3VuZCwgbm8gbmVlZCB0byByZWdpc3RlclwiKTtcbn0gZWxzZSB7XG4gIC8vUmVnaXN0ZXIgdGhlIFNlcnZpY2VXb3JrZXJcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoXCJzdy5qc1wiLCB7XG4gICAgICBzY29wZTogXCIuL1wiXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIGhhcyBiZWVuIHJlZ2lzdGVyZWQgZm9yIHNjb3BlOlwiICsgcmVnLnNjb3BlKTtcbiAgICB9KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxhenlsb2FkaW5nLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGxhenlsb2FkaW5nKCkge1xuICB2YXIgbGF6eWxvYWRJbWFnZXM7XG4gIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgbGF6eWxvYWRJbWFnZXMgPSAkJChcIi5sYXp5XCIpO1xuICAgIHZhciBpbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB2YXIgaW1hZ2UgPSBlbnRyeS50YXJnZXQ7XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2UuZGF0YXNldC5zcmM7XG4gICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxhenlcIik7XG4gICAgICAgICAgaW1hZ2VPYnNlcnZlci51bm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxhenlsb2FkSW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpbWFnZU9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHZhciBsYXp5bG9hZFRocm90dGxlVGltZW91dDtcbiAgICBsYXp5bG9hZEltYWdlcyA9ICQkKFwiLmxhenlcIik7XG5cbiAgICBmdW5jdGlvbiBsYXp5bG9hZCgpIHtcbiAgICAgIGlmIChsYXp5bG9hZFRocm90dGxlVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQobGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICBsYXp5bG9hZFRocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBsYXp5bG9hZEltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICBpZiAoaW1nLm9mZnNldFRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCArIHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltZy5kYXRhc2V0LnNyYztcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKFwibGF6eVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGF6eWxvYWRJbWFnZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxhenlsb2FkKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBsYXp5bG9hZCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbkNoYW5nZVwiLCBsYXp5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxhenlsb2FkKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBsYXp5bG9hZCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbkNoYW5nZVwiLCBsYXp5bG9hZCk7XG4gIH1cbn1cblxuLy8gUmVtb3ZlIG5vLWpzIGNsYXNzXG4kKFwiaHRtbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIik7XG5cbi8vIEFuaW1hdGUgdG8gc2VjdGlvbiB3aGVuIG5hdiBpcyBjbGlja2VkXG4kJCgnI21lbnUgYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogJCh0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIikpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSk7XG4gICAgaWYgKCQoXCJoZWFkZXJcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAkJChcImhlYWRlciwgYm9keVwiKS5mb3JFYWNoKGUgPT4gZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIFNjcm9sbCB0byB0b3BcbiQoXCIjdG8tdG9wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgIHRvcDogMCxcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICB9KTtcbn0pO1xuXG4vLyBTY3JvbGwgdG8gZmlyc3QgZWxlbWVudFxuJChcIiNsZWFkLWRvd24gc3BhblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICB0b3A6ICQoXCIjYWJvdXRcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gIH0pO1xufSk7XG5cbi8vIE9wZW4gbW9iaWxlIG1lbnVcbiQoXCIjbW9iaWxlLW1lbnUtb3BlblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgJCQoXCJoZWFkZXIsIGJvZHlcIikuZm9yRWFjaChlID0+IGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSk7XG59KTtcblxuLy9Db3B5cmlnaHQgeWVhclxuJChcIiNDUi15ZWFyXCIpLmlubmVySFRNTCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuLy9EYXJrIG1vZGUgZmV2aWNvblxudmFyIGRhcmtNb2RlTWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG5cbmhhbmRsZURhcmttb2RlKGRhcmtNb2RlTWVkaWFRdWVyeSk7XG5mdW5jdGlvbiBoYW5kbGVEYXJrbW9kZShlKSB7XG4gIGxldCBkYXJrTW9kZU9uID0gZS5tYXRjaGVzOyAvLyB0cnVlIGlmIGRhcmsgbW9kZSBpcyBlbmFibGVkXG4gIGxldCBmYXZpY29uID0gJCgnbGlua1tyZWw9XCJpY29uXCJdJyk7IC8vIGdldCBmYXZpY29uLmljbyBlbGVtZW50XG4gIC8vIHJlcGxhY2UgaWNvbnMgd2l0aCBkYXJrL2xpZ2h0IHRoZW1lcyBhcyBhcHByb3ByaWF0ZVxuICBmYXZpY29uLmhyZWYgPSBkYXJrTW9kZU9uID8gJy4uL2Fzc2V0cy9pbWFnZXMvQURfbG9nb193aGl0ZS5wbmcnIDogJy4uL2Fzc2V0cy9pbWFnZXMvQURfbG9nb19kYXJrMS5wbmcnO1xufVxuZGFya01vZGVNZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKGhhbmRsZURhcmttb2RlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=