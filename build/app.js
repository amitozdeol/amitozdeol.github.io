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
/******/ 	__webpack_require__.p = "/Users/adeol/www/amitozdeol.github.io/build";
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
};

$("html").classList.remove("no-js"); // Remove no-js class

$("#toggle-switch").checked = false; //Keep toggle switch unchecked

/**
 * NAV ===================================================
 * Animate to section when nav is clicked
 */

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
}); // Remove mobile menu

$("#mobile-menu-close").addEventListener("click", function (e) {
  $$("header, body").forEach(e => e.classList.remove("active"));
});
/**
 * Copyright year ================================================
 */

$("#CR-year").innerHTML = new Date().getFullYear();
/**
 * Dark mode fevicon ==============================================
 * replace fevicon with dark/light themes as appropriate
 */

var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addListener(handleDarkmodeFav);
handleDarkmodeFav(darkModeMediaQuery);

function handleDarkmodeFav(e) {
  let darkModeOn = e.matches; // true if dark mode is enabled

  let favicon = $('link[rel="icon"]');
  favicon.href = darkModeOn ? '../assets/images/AD_logo_white.png' : '../assets/images/AD_logo_dark1.png';
}
/**
 * Dark mode CSS =================================================
 * dark mode switch
 */


$("#toggle-switch").addEventListener("click", toggleDarkMode);

function toggleDarkMode(e) {
  if (e.target.checked) {
    $('body').classList.add('dark-mode');
    $("link[href='assets/css/header.css']").href = "assets/css/header-dark.css";
    $("link[href='assets/css/styles.css']").href = "assets/css/styles-dark.css";
  } else {
    $('body').classList.remove('dark-mode');
    $("link[href='assets/css/header-dark.css']").href = "assets/css/header.css";
    $("link[href='assets/css/styles-dark.css']").href = "assets/css/styles.css";
  }
}
/**
 * Lazy load Images ==============================================
 */


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
}
/**
 * Service Worker - Offline support ==========================================
 * This is the "Offline copy of pages" service worker
 */


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NjcmlwdHMuanMiXSwibmFtZXMiOlsiJCIsImVsZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjaGVja2VkIiwiZm9yRWFjaCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImdldEF0dHJpYnV0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJlaGF2aW9yIiwiY29udGFpbnMiLCJhZGQiLCJpbm5lckhUTUwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJkYXJrTW9kZU1lZGlhUXVlcnkiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJoYW5kbGVEYXJrbW9kZUZhdiIsImRhcmtNb2RlT24iLCJtYXRjaGVzIiwiZmF2aWNvbiIsImhyZWYiLCJ0b2dnbGVEYXJrTW9kZSIsInRhcmdldCIsImxhenlsb2FkaW5nIiwibGF6eWxvYWRJbWFnZXMiLCJpbWFnZU9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW1hZ2UiLCJzcmMiLCJkYXRhc2V0IiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsImxhenlsb2FkVGhyb3R0bGVUaW1lb3V0IiwibGF6eWxvYWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJpbWciLCJvZmZzZXRUb3AiLCJpbm5lckhlaWdodCIsImxlbmd0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwiY29udHJvbGxlciIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsInNj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Z0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NzQyxRQUFsQztBQUNBbkMsVUFBTSxDQUFDSCxnQkFBUCxDQUF3QixtQkFBeEIsRUFBNkNzQyxRQUE3QztBQUNEO0FBQ0Y7QUFFRDs7Ozs7O0FBSUEsSUFBSVUsU0FBUyxDQUFDQyxhQUFWLENBQXdCQyxVQUE1QixFQUF3QztBQUN0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0VBQVo7QUFDRCxDQUZELE1BRU87QUFDTDtBQUNBSixXQUFTLENBQUNDLGFBQVYsQ0FDR0ksUUFESCxDQUNZLE9BRFosRUFDcUI7QUFDakJDLFNBQUssRUFBRTtBQURVLEdBRHJCLEVBSUdDLElBSkgsQ0FJUSxVQUFVQyxHQUFWLEVBQWU7QUFDbkJMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtEQUFrREksR0FBRyxDQUFDRixLQUFsRTtBQUNELEdBTkg7QUFPRCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1VzZXJzL2FkZW9sL3d3dy9hbWl0b3pkZW9sLmdpdGh1Yi5pby9idWlsZFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9zY3JpcHRzLmpzXCIpO1xuIiwidmFyICQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbn07XG52YXIgJCQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtKTtcbn07XG5cbiQoXCJodG1sXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1qc1wiKTsgLy8gUmVtb3ZlIG5vLWpzIGNsYXNzXG4kKFwiI3RvZ2dsZS1zd2l0Y2hcIikuY2hlY2tlZCA9IGZhbHNlOyAvL0tlZXAgdG9nZ2xlIHN3aXRjaCB1bmNoZWNrZWRcblxuLyoqXG4gKiBOQVYgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBBbmltYXRlIHRvIHNlY3Rpb24gd2hlbiBuYXYgaXMgY2xpY2tlZFxuICovXG4kJCgnI21lbnUgYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogJCh0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIikpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSk7XG4gICAgaWYgKCQoXCJoZWFkZXJcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAkJChcImhlYWRlciwgYm9keVwiKS5mb3JFYWNoKGUgPT4gZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIFNjcm9sbCB0byB0b3BcbiQoXCIjdG8tdG9wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgIHRvcDogMCxcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICB9KTtcbn0pO1xuXG4vLyBTY3JvbGwgdG8gZmlyc3QgZWxlbWVudFxuJChcIiNsZWFkLWRvd24gc3BhblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICB0b3A6ICQoXCIjYWJvdXRcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gIH0pO1xufSk7XG5cbi8vIE9wZW4gbW9iaWxlIG1lbnVcbiQoXCIjbW9iaWxlLW1lbnUtb3BlblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgJCQoXCJoZWFkZXIsIGJvZHlcIikuZm9yRWFjaChlID0+IGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSk7XG59KTtcblxuLy8gUmVtb3ZlIG1vYmlsZSBtZW51XG4kKFwiI21vYmlsZS1tZW51LWNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAkJChcImhlYWRlciwgYm9keVwiKS5mb3JFYWNoKGUgPT4gZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbn0pO1xuXG4vKipcbiAqIENvcHlyaWdodCB5ZWFyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG4kKFwiI0NSLXllYXJcIikuaW5uZXJIVE1MID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG4vKipcbiAqIERhcmsgbW9kZSBmZXZpY29uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIHJlcGxhY2UgZmV2aWNvbiB3aXRoIGRhcmsvbGlnaHQgdGhlbWVzIGFzIGFwcHJvcHJpYXRlXG4gKi9cbnZhciBkYXJrTW9kZU1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpO1xuZGFya01vZGVNZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKGhhbmRsZURhcmttb2RlRmF2KTtcbmhhbmRsZURhcmttb2RlRmF2KGRhcmtNb2RlTWVkaWFRdWVyeSk7XG5cbmZ1bmN0aW9uIGhhbmRsZURhcmttb2RlRmF2KGUpIHtcbiAgbGV0IGRhcmtNb2RlT24gPSBlLm1hdGNoZXM7IC8vIHRydWUgaWYgZGFyayBtb2RlIGlzIGVuYWJsZWRcbiAgbGV0IGZhdmljb24gPSAkKCdsaW5rW3JlbD1cImljb25cIl0nKTtcbiAgZmF2aWNvbi5ocmVmID0gZGFya01vZGVPbiA/ICcuLi9hc3NldHMvaW1hZ2VzL0FEX2xvZ29fd2hpdGUucG5nJyA6ICcuLi9hc3NldHMvaW1hZ2VzL0FEX2xvZ29fZGFyazEucG5nJztcbn1cblxuLyoqXG4gKiBEYXJrIG1vZGUgQ1NTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIGRhcmsgbW9kZSBzd2l0Y2hcbiAqL1xuJChcIiN0b2dnbGUtc3dpdGNoXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEYXJrTW9kZSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZURhcmtNb2RlKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAkKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgJChcImxpbmtbaHJlZj0nYXNzZXRzL2Nzcy9oZWFkZXIuY3NzJ11cIikuaHJlZiA9IFwiYXNzZXRzL2Nzcy9oZWFkZXItZGFyay5jc3NcIjtcbiAgICAkKFwibGlua1tocmVmPSdhc3NldHMvY3NzL3N0eWxlcy5jc3MnXVwiKS5ocmVmID0gXCJhc3NldHMvY3NzL3N0eWxlcy1kYXJrLmNzc1wiO1xuICB9IGVsc2Uge1xuICAgICQoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKTtcbiAgICAkKFwibGlua1tocmVmPSdhc3NldHMvY3NzL2hlYWRlci1kYXJrLmNzcyddXCIpLmhyZWYgPSBcImFzc2V0cy9jc3MvaGVhZGVyLmNzc1wiO1xuICAgICQoXCJsaW5rW2hyZWY9J2Fzc2V0cy9jc3Mvc3R5bGVzLWRhcmsuY3NzJ11cIikuaHJlZiA9IFwiYXNzZXRzL2Nzcy9zdHlsZXMuY3NzXCI7XG4gIH1cbn1cblxuLyoqXG4gKiBMYXp5IGxvYWQgSW1hZ2VzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxhenlsb2FkaW5nLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGxhenlsb2FkaW5nKCkge1xuICB2YXIgbGF6eWxvYWRJbWFnZXM7XG4gIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgbGF6eWxvYWRJbWFnZXMgPSAkJChcIi5sYXp5XCIpO1xuICAgIHZhciBpbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB2YXIgaW1hZ2UgPSBlbnRyeS50YXJnZXQ7XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2UuZGF0YXNldC5zcmM7XG4gICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxhenlcIik7XG4gICAgICAgICAgaW1hZ2VPYnNlcnZlci51bm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxhenlsb2FkSW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpbWFnZU9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHZhciBsYXp5bG9hZFRocm90dGxlVGltZW91dDtcbiAgICBsYXp5bG9hZEltYWdlcyA9ICQkKFwiLmxhenlcIik7XG5cbiAgICBmdW5jdGlvbiBsYXp5bG9hZCgpIHtcbiAgICAgIGlmIChsYXp5bG9hZFRocm90dGxlVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQobGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICBsYXp5bG9hZFRocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBsYXp5bG9hZEltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICBpZiAoaW1nLm9mZnNldFRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCArIHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltZy5kYXRhc2V0LnNyYztcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKFwibGF6eVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGF6eWxvYWRJbWFnZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxhenlsb2FkKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBsYXp5bG9hZCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbkNoYW5nZVwiLCBsYXp5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxhenlsb2FkKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBsYXp5bG9hZCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbkNoYW5nZVwiLCBsYXp5bG9hZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2aWNlIFdvcmtlciAtIE9mZmxpbmUgc3VwcG9ydCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFRoaXMgaXMgdGhlIFwiT2ZmbGluZSBjb3B5IG9mIHBhZ2VzXCIgc2VydmljZSB3b3JrZXJcbiAqL1xuaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgY29uc29sZS5sb2coXCJbUFdBIEJ1aWxkZXJdIGFjdGl2ZSBzZXJ2aWNlIHdvcmtlciBmb3VuZCwgbm8gbmVlZCB0byByZWdpc3RlclwiKTtcbn0gZWxzZSB7XG4gIC8vUmVnaXN0ZXIgdGhlIFNlcnZpY2VXb3JrZXJcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoXCJzdy5qc1wiLCB7XG4gICAgICBzY29wZTogXCIuL1wiXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIGhhcyBiZWVuIHJlZ2lzdGVyZWQgZm9yIHNjb3BlOlwiICsgcmVnLnNjb3BlKTtcbiAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9