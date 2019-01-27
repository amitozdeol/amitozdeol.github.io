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

var $ = function $(elem) {
  return document.querySelector(elem);
};

var $$ = function $$(elem) {
  return document.querySelectorAll(elem);
}; //This is the "Offline copy of pages" service worker
//Add this below content to your HTML page, or add the js file to your page at the very top to register service worker


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
    var lazyload = function lazyload() {
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
    };

    var lazyloadThrottleTimeout;
    lazyloadImages = $$(".lazy");
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
} // Remove no-js class


$("html").classList.remove("no-js"); // Animate to section when nav is clicked

$$('#menu a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: $(this.getAttribute("href")).getBoundingClientRect().top,
      behavior: "smooth"
    });

    if ($("header").classList.contains("active")) {
      $$("header, body").forEach(function (e) {
        return e.classList.remove("active");
      });
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
  $$("header, body").forEach(function (e) {
    return e.classList.add("active");
  });
}); //Copyright year

$("#CR-year").innerHTML = new Date().getFullYear();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyIkIiwiZWxlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJjb250cm9sbGVyIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIiwic2NvcGUiLCJ0aGVuIiwicmVnIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxhenlsb2FkaW5nIiwibGF6eWxvYWRJbWFnZXMiLCJpbWFnZU9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImltYWdlIiwidGFyZ2V0Iiwic3JjIiwiZGF0YXNldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJsYXp5bG9hZCIsImxhenlsb2FkVGhyb3R0bGVUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiaW1nIiwib2Zmc2V0VG9wIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYW5jaG9yIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJnZXRBdHRyaWJ1dGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJiZWhhdmlvciIsImNvbnRhaW5zIiwiYWRkIiwiaW5uZXJIVE1MIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFBQSxHQUE1QjtBQUNELENBRkQsRSxDQUlBOztBQUNBdEQsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjdUQsU0FBZCxHQUEwQixJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBMUIsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL3NjcmlwdHMuanNcIik7XG4iLCJ2YXIgJCA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG59O1xudmFyICQkID0gZnVuY3Rpb24oZWxlbSkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtKTtcbn07XG4vL1RoaXMgaXMgdGhlIFwiT2ZmbGluZSBjb3B5IG9mIHBhZ2VzXCIgc2VydmljZSB3b3JrZXJcblxuLy9BZGQgdGhpcyBiZWxvdyBjb250ZW50IHRvIHlvdXIgSFRNTCBwYWdlLCBvciBhZGQgdGhlIGpzIGZpbGUgdG8geW91ciBwYWdlIGF0IHRoZSB2ZXJ5IHRvcCB0byByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxuaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgY29uc29sZS5sb2coXCJbUFdBIEJ1aWxkZXJdIGFjdGl2ZSBzZXJ2aWNlIHdvcmtlciBmb3VuZCwgbm8gbmVlZCB0byByZWdpc3RlclwiKTtcbn0gZWxzZSB7XG4gIC8vUmVnaXN0ZXIgdGhlIFNlcnZpY2VXb3JrZXJcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoXCJzdy5qc1wiLCB7XG4gICAgICBzY29wZTogXCIuL1wiXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSB3b3JrZXIgaGFzIGJlZW4gcmVnaXN0ZXJlZCBmb3Igc2NvcGU6XCIgKyByZWcuc2NvcGUpO1xuICAgIH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbGF6eWxvYWRpbmcsIGZhbHNlKTtcblxuZnVuY3Rpb24gbGF6eWxvYWRpbmcoKSB7XG4gIHZhciBsYXp5bG9hZEltYWdlcztcbiAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICBsYXp5bG9hZEltYWdlcyA9ICQkKFwiLmxhenlcIik7XG4gICAgdmFyIGltYWdlT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcywgb2JzZXJ2ZXIpIHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB2YXIgaW1hZ2UgPSBlbnRyeS50YXJnZXQ7XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2UuZGF0YXNldC5zcmM7XG4gICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxhenlcIik7XG4gICAgICAgICAgaW1hZ2VPYnNlcnZlci51bm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxhenlsb2FkSW1hZ2VzLmZvckVhY2goZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgIGltYWdlT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxhenlsb2FkVGhyb3R0bGVUaW1lb3V0O1xuICAgIGxhenlsb2FkSW1hZ2VzID0gJCQoXCIubGF6eVwiKTtcblxuICAgIGZ1bmN0aW9uIGxhenlsb2FkKCkge1xuICAgICAgaWYgKGxhenlsb2FkVGhyb3R0bGVUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChsYXp5bG9hZFRocm90dGxlVGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIGxhenlsb2FkVGhyb3R0bGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbGF6eWxvYWRJbWFnZXMuZm9yRWFjaChmdW5jdGlvbihpbWcpIHtcbiAgICAgICAgICBpZiAoaW1nLm9mZnNldFRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCArIHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltZy5kYXRhc2V0LnNyYztcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKFwibGF6eVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGF6eWxvYWRJbWFnZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxhenlsb2FkKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBsYXp5bG9hZCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbkNoYW5nZVwiLCBsYXp5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxhenlsb2FkKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBsYXp5bG9hZCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbkNoYW5nZVwiLCBsYXp5bG9hZCk7XG4gIH1cbn1cblxuLy8gUmVtb3ZlIG5vLWpzIGNsYXNzXG4kKFwiaHRtbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIik7XG5cbi8vIEFuaW1hdGUgdG8gc2VjdGlvbiB3aGVuIG5hdiBpcyBjbGlja2VkXG4kJCgnI21lbnUgYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiAkKHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICB9KTtcbiAgICBpZiAoJChcImhlYWRlclwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICQkKFwiaGVhZGVyLCBib2R5XCIpLmZvckVhY2goZSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLy8gU2Nyb2xsIHRvIHRvcFxuJChcIiN0by10b3BcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICB0b3A6IDAsXG4gICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgfSk7XG59KTtcblxuLy8gU2Nyb2xsIHRvIGZpcnN0IGVsZW1lbnRcbiQoXCIjbGVhZC1kb3duIHNwYW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICB0b3A6ICQoXCIjYWJvdXRcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gIH0pO1xufSk7XG5cbi8vIE9wZW4gbW9iaWxlIG1lbnVcbiQoXCIjbW9iaWxlLW1lbnUtb3BlblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAkJChcImhlYWRlciwgYm9keVwiKS5mb3JFYWNoKGUgPT4gZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpKTtcbn0pO1xuXG4vL0NvcHlyaWdodCB5ZWFyXG4kKFwiI0NSLXllYXJcIikuaW5uZXJIVE1MID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==