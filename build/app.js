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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NjcmlwdHMuanMiXSwibmFtZXMiOlsiJCIsImVsZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjaGVja2VkIiwiZm9yRWFjaCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImdldEF0dHJpYnV0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJlaGF2aW9yIiwiY29udGFpbnMiLCJhZGQiLCJpbm5lckhUTUwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJkYXJrTW9kZU1lZGlhUXVlcnkiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJoYW5kbGVEYXJrbW9kZUZhdiIsImRhcmtNb2RlT24iLCJtYXRjaGVzIiwiZmF2aWNvbiIsImhyZWYiLCJ0b2dnbGVEYXJrTW9kZSIsInRhcmdldCIsImxhenlsb2FkaW5nIiwibGF6eWxvYWRJbWFnZXMiLCJpbWFnZU9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW1hZ2UiLCJzcmMiLCJkYXRhc2V0IiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsImxhenlsb2FkVGhyb3R0bGVUaW1lb3V0IiwibGF6eWxvYWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJpbWciLCJvZmZzZXRUb3AiLCJpbm5lckhlaWdodCIsImxlbmd0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwiY29udHJvbGxlciIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsInNj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Z0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NzQyxRQUFsQztBQUNBbkMsVUFBTSxDQUFDSCxnQkFBUCxDQUF3QixtQkFBeEIsRUFBNkNzQyxRQUE3QztBQUNEO0FBQ0Y7QUFFRDs7Ozs7O0FBSUEsSUFBSVUsU0FBUyxDQUFDQyxhQUFWLENBQXdCQyxVQUE1QixFQUF3QztBQUN0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0VBQVo7QUFDRCxDQUZELE1BRU87QUFDTDtBQUNBSixXQUFTLENBQUNDLGFBQVYsQ0FDR0ksUUFESCxDQUNZLE9BRFosRUFDcUI7QUFDakJDLFNBQUssRUFBRTtBQURVLEdBRHJCLEVBSUdDLElBSkgsQ0FJUSxVQUFVQyxHQUFWLEVBQWU7QUFDbkJMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtEQUFrREksR0FBRyxDQUFDRixLQUFsRTtBQUNELEdBTkg7QUFPRCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1VzZXJzL2FtaXRvemRlb2wvV2ViUHJvamVjdHMvYW1pdG96ZGVvbC5naXRodWIuaW8vYnVpbGRcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvc2NyaXB0cy5qc1wiKTtcbiIsInZhciAkID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG59O1xudmFyICQkID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbSk7XG59O1xuXG4kKFwiaHRtbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIik7IC8vIFJlbW92ZSBuby1qcyBjbGFzc1xuJChcIiN0b2dnbGUtc3dpdGNoXCIpLmNoZWNrZWQgPSBmYWxzZTsgLy9LZWVwIHRvZ2dsZSBzd2l0Y2ggdW5jaGVja2VkXG5cbi8qKlxuICogTkFWID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQW5pbWF0ZSB0byBzZWN0aW9uIHdoZW4gbmF2IGlzIGNsaWNrZWRcbiAqL1xuJCQoJyNtZW51IGFbaHJlZl49XCIjXCJdJykuZm9yRWFjaChhbmNob3IgPT4ge1xuICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6ICQodGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgIH0pO1xuICAgIGlmICgkKFwiaGVhZGVyXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgJCQoXCJoZWFkZXIsIGJvZHlcIikuZm9yRWFjaChlID0+IGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vLyBTY3JvbGwgdG8gdG9wXG4kKFwiI3RvLXRvcFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICB0b3A6IDAsXG4gICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgfSk7XG59KTtcblxuLy8gU2Nyb2xsIHRvIGZpcnN0IGVsZW1lbnRcbiQoXCIjbGVhZC1kb3duIHNwYW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgdG9wOiAkKFwiI2Fib3V0XCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICB9KTtcbn0pO1xuXG4vLyBPcGVuIG1vYmlsZSBtZW51XG4kKFwiI21vYmlsZS1tZW51LW9wZW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICQkKFwiaGVhZGVyLCBib2R5XCIpLmZvckVhY2goZSA9PiBlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIikpO1xufSk7XG5cbi8vIFJlbW92ZSBtb2JpbGUgbWVudVxuJChcIiNtb2JpbGUtbWVudS1jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgJCQoXCJoZWFkZXIsIGJvZHlcIikuZm9yRWFjaChlID0+IGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG59KTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgeWVhciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuJChcIiNDUi15ZWFyXCIpLmlubmVySFRNTCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuLyoqXG4gKiBEYXJrIG1vZGUgZmV2aWNvbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiByZXBsYWNlIGZldmljb24gd2l0aCBkYXJrL2xpZ2h0IHRoZW1lcyBhcyBhcHByb3ByaWF0ZVxuICovXG52YXIgZGFya01vZGVNZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcbmRhcmtNb2RlTWVkaWFRdWVyeS5hZGRMaXN0ZW5lcihoYW5kbGVEYXJrbW9kZUZhdik7XG5oYW5kbGVEYXJrbW9kZUZhdihkYXJrTW9kZU1lZGlhUXVlcnkpO1xuXG5mdW5jdGlvbiBoYW5kbGVEYXJrbW9kZUZhdihlKSB7XG4gIGxldCBkYXJrTW9kZU9uID0gZS5tYXRjaGVzOyAvLyB0cnVlIGlmIGRhcmsgbW9kZSBpcyBlbmFibGVkXG4gIGxldCBmYXZpY29uID0gJCgnbGlua1tyZWw9XCJpY29uXCJdJyk7XG4gIGZhdmljb24uaHJlZiA9IGRhcmtNb2RlT24gPyAnLi4vYXNzZXRzL2ltYWdlcy9BRF9sb2dvX3doaXRlLnBuZycgOiAnLi4vYXNzZXRzL2ltYWdlcy9BRF9sb2dvX2RhcmsxLnBuZyc7XG59XG5cbi8qKlxuICogRGFyayBtb2RlIENTUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBkYXJrIG1vZGUgc3dpdGNoXG4gKi9cbiQoXCIjdG9nZ2xlLXN3aXRjaFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRGFya01vZGUpO1xuXG5mdW5jdGlvbiB0b2dnbGVEYXJrTW9kZShlKSB7XG4gIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgJCgnYm9keScpLmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICQoXCJsaW5rW2hyZWY9J2Fzc2V0cy9jc3MvaGVhZGVyLmNzcyddXCIpLmhyZWYgPSBcImFzc2V0cy9jc3MvaGVhZGVyLWRhcmsuY3NzXCI7XG4gICAgJChcImxpbmtbaHJlZj0nYXNzZXRzL2Nzcy9zdHlsZXMuY3NzJ11cIikuaHJlZiA9IFwiYXNzZXRzL2Nzcy9zdHlsZXMtZGFyay5jc3NcIjtcbiAgfSBlbHNlIHtcbiAgICAkKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgJChcImxpbmtbaHJlZj0nYXNzZXRzL2Nzcy9oZWFkZXItZGFyay5jc3MnXVwiKS5ocmVmID0gXCJhc3NldHMvY3NzL2hlYWRlci5jc3NcIjtcbiAgICAkKFwibGlua1tocmVmPSdhc3NldHMvY3NzL3N0eWxlcy1kYXJrLmNzcyddXCIpLmhyZWYgPSBcImFzc2V0cy9jc3Mvc3R5bGVzLmNzc1wiO1xuICB9XG59XG5cbi8qKlxuICogTGF6eSBsb2FkIEltYWdlcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsYXp5bG9hZGluZywgZmFsc2UpO1xuXG5mdW5jdGlvbiBsYXp5bG9hZGluZygpIHtcbiAgdmFyIGxhenlsb2FkSW1hZ2VzO1xuICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgIGxhenlsb2FkSW1hZ2VzID0gJCQoXCIubGF6eVwiKTtcbiAgICB2YXIgaW1hZ2VPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcywgb2JzZXJ2ZXIpIHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdmFyIGltYWdlID0gZW50cnkudGFyZ2V0O1xuICAgICAgICAgIGltYWdlLnNyYyA9IGltYWdlLmRhdGFzZXQuc3JjO1xuICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXp5XCIpO1xuICAgICAgICAgIGltYWdlT2JzZXJ2ZXIudW5vYnNlcnZlKGltYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsYXp5bG9hZEltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgaW1hZ2VPYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQ7XG4gICAgbGF6eWxvYWRJbWFnZXMgPSAkJChcIi5sYXp5XCIpO1xuXG4gICAgZnVuY3Rpb24gbGF6eWxvYWQoKSB7XG4gICAgICBpZiAobGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGxhenlsb2FkVGhyb3R0bGVUaW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgbGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbGF6eWxvYWRJbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgaWYgKGltZy5vZmZzZXRUb3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgKyBzY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWcuZGF0YXNldC5zcmM7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZShcImxhenlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxhenlsb2FkSW1hZ2VzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsYXp5bG9hZCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgbGF6eWxvYWQpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25DaGFuZ2VcIiwgbGF6eWxvYWQpO1xuICAgICAgICB9XG4gICAgICB9LCAyMCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsYXp5bG9hZCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgbGF6eWxvYWQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25DaGFuZ2VcIiwgbGF6eWxvYWQpO1xuICB9XG59XG5cbi8qKlxuICogU2VydmljZSBXb3JrZXIgLSBPZmZsaW5lIHN1cHBvcnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBUaGlzIGlzIHRoZSBcIk9mZmxpbmUgY29weSBvZiBwYWdlc1wiIHNlcnZpY2Ugd29ya2VyXG4gKi9cbmlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gIGNvbnNvbGUubG9nKFwiW1BXQSBCdWlsZGVyXSBhY3RpdmUgc2VydmljZSB3b3JrZXIgZm91bmQsIG5vIG5lZWQgdG8gcmVnaXN0ZXJcIik7XG59IGVsc2Uge1xuICAvL1JlZ2lzdGVyIHRoZSBTZXJ2aWNlV29ya2VyXG4gIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgLnJlZ2lzdGVyKFwic3cuanNcIiwge1xuICAgICAgc2NvcGU6IFwiLi9cIlxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlZykge1xuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlciBoYXMgYmVlbiByZWdpc3RlcmVkIGZvciBzY29wZTpcIiArIHJlZy5zY29wZSk7XG4gICAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==