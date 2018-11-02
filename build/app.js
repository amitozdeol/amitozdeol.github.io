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
};

console.log("testing");
window.addEventListener('load', lazyloading, false);

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
            img.classList.remove('lazy');
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


$('html').classList.remove('no-js'); // Animate to section when nav is clicked

$$('#menu a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: $(this.getAttribute('href')).getBoundingClientRect().top,
      behavior: 'smooth'
    });

    if ($('header').classList.contains('active')) {
      $$('header, body').forEach(function (e) {
        return e.classList.remove('active');
      });
    }
  });
}); // Scroll to top

$('#to-top').addEventListener('click', function (e) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}); // Scroll to first element

$('#lead-down span').addEventListener('click', function (e) {
  window.scrollTo({
    top: $("#about").getBoundingClientRect().top,
    behavior: 'smooth'
  });
}); // Open mobile menu

$('#mobile-menu-open').addEventListener('click', function (e) {
  $$('header, body').forEach(function (e) {
    return e.classList.add('active');
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyIkIiwiZWxlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibGF6eWxvYWRpbmciLCJsYXp5bG9hZEltYWdlcyIsImltYWdlT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnNlcnZlciIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW1hZ2UiLCJ0YXJnZXQiLCJzcmMiLCJkYXRhc2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsImxhenlsb2FkIiwibGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJpbWciLCJvZmZzZXRUb3AiLCJpbm5lckhlaWdodCIsImxlbmd0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhbmNob3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGxUbyIsInRvcCIsImdldEF0dHJpYnV0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJlaGF2aW9yIiwiY29udGFpbnMiLCJhZGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxDQUFDLEdBQUcsU0FBSkEsQ0FBSSxDQUFVQyxJQUFWLEVBQWlCO0FBQUUsU0FBT0MsUUFBUSxDQUFDQyxhQUFULENBQXdCRixJQUF4QixDQUFQO0FBQXdDLENBQW5FOztBQUNBLElBQUlHLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQVVILElBQVYsRUFBaUI7QUFBRSxTQUFPQyxRQUFRLENBQUNHLGdCQUFULENBQTJCSixJQUEzQixDQUFQO0FBQTJDLENBQXZFOztBQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBRUFDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NDLFdBQWhDLEVBQTZDLEtBQTdDOztBQUNBLFNBQVNBLFdBQVQsR0FBc0I7QUFDbEIsTUFBSUMsY0FBSjs7QUFDQSxNQUFJLDBCQUEwQkgsTUFBOUIsRUFBc0M7QUFDbENHLGtCQUFjLEdBQUdQLEVBQUUsQ0FBQyxPQUFELENBQW5CO0FBQ0EsUUFBSVEsYUFBYSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQVNDLE9BQVQsRUFBa0JDLFFBQWxCLEVBQTRCO0FBQ3JFRCxhQUFPLENBQUNFLE9BQVIsQ0FBZ0IsVUFBU0MsS0FBVCxFQUFnQjtBQUM1QixZQUFJQSxLQUFLLENBQUNDLGNBQVYsRUFBMEI7QUFDdEIsY0FBSUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLE1BQWxCO0FBQ0FELGVBQUssQ0FBQ0UsR0FBTixHQUFZRixLQUFLLENBQUNHLE9BQU4sQ0FBY0QsR0FBMUI7QUFDQUYsZUFBSyxDQUFDSSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QixNQUF2QjtBQUNBWix1QkFBYSxDQUFDYSxTQUFkLENBQXdCTixLQUF4QjtBQUNIO0FBQ0osT0FQRDtBQVFILEtBVG1CLENBQXBCO0FBV0FSLGtCQUFjLENBQUNLLE9BQWYsQ0FBdUIsVUFBU0csS0FBVCxFQUFnQjtBQUNuQ1AsbUJBQWEsQ0FBQ2MsT0FBZCxDQUFzQlAsS0FBdEI7QUFDSCxLQUZEO0FBR0gsR0FoQkQsTUFnQk87QUFBQSxRQUlNUSxRQUpOLEdBSUgsU0FBU0EsUUFBVCxHQUFxQjtBQUNqQixVQUFHQyx1QkFBSCxFQUE0QjtBQUN4QkMsb0JBQVksQ0FBQ0QsdUJBQUQsQ0FBWjtBQUNIOztBQUVEQSw2QkFBdUIsR0FBR0UsVUFBVSxDQUFDLFlBQVc7QUFDNUMsWUFBSUMsU0FBUyxHQUFHdkIsTUFBTSxDQUFDd0IsV0FBdkI7QUFDQXJCLHNCQUFjLENBQUNLLE9BQWYsQ0FBdUIsVUFBU2lCLEdBQVQsRUFBYztBQUNqQyxjQUFHQSxHQUFHLENBQUNDLFNBQUosR0FBaUIxQixNQUFNLENBQUMyQixXQUFQLEdBQXFCSixTQUF6QyxFQUFxRDtBQUNyREUsZUFBRyxDQUFDWixHQUFKLEdBQVVZLEdBQUcsQ0FBQ1gsT0FBSixDQUFZRCxHQUF0QjtBQUNBWSxlQUFHLENBQUNWLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixNQUFyQjtBQUNDO0FBQ0osU0FMRDs7QUFNQSxZQUFHYixjQUFjLENBQUN5QixNQUFmLElBQXlCLENBQTVCLEVBQStCO0FBQzNCbEMsa0JBQVEsQ0FBQ21DLG1CQUFULENBQTZCLFFBQTdCLEVBQXVDVixRQUF2QztBQUNBbkIsZ0JBQU0sQ0FBQzZCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDVixRQUFyQztBQUNBbkIsZ0JBQU0sQ0FBQzZCLG1CQUFQLENBQTJCLG1CQUEzQixFQUFnRFYsUUFBaEQ7QUFDSDtBQUNKLE9BYm1DLEVBYWpDLEVBYmlDLENBQXBDO0FBY0gsS0F2QkU7O0FBQ0gsUUFBSUMsdUJBQUo7QUFDQWpCLGtCQUFjLEdBQUdQLEVBQUUsQ0FBQyxPQUFELENBQW5CO0FBdUJBRixZQUFRLENBQUNPLGdCQUFULENBQTBCLFFBQTFCLEVBQW9Da0IsUUFBcEM7QUFDQW5CLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NrQixRQUFsQztBQUNBbkIsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixtQkFBeEIsRUFBNkNrQixRQUE3QztBQUNIO0FBQ0osQyxDQUVEOzs7QUFDQTNCLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXVCLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLE9BQTNCLEUsQ0FFQTs7QUFDQXBCLEVBQUUsQ0FBQyxvQkFBRCxDQUFGLENBQXlCWSxPQUF6QixDQUFpQyxVQUFBc0IsTUFBTSxFQUFJO0FBQ3ZDQSxRQUFNLENBQUM3QixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFVOEIsQ0FBVixFQUFhO0FBQzFDQSxLQUFDLENBQUNDLGNBQUY7QUFDQWhDLFVBQU0sQ0FBQ2lDLFFBQVAsQ0FBZ0I7QUFDWkMsU0FBRyxFQUFFMUMsQ0FBQyxDQUFDLEtBQUsyQyxZQUFMLENBQWtCLE1BQWxCLENBQUQsQ0FBRCxDQUE2QkMscUJBQTdCLEdBQXFERixHQUQ5QztBQUVaRyxjQUFRLEVBQUU7QUFGRSxLQUFoQjs7QUFJQSxRQUFHN0MsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZdUIsU0FBWixDQUFzQnVCLFFBQXRCLENBQStCLFFBQS9CLENBQUgsRUFBNEM7QUFDeEMxQyxRQUFFLENBQUMsY0FBRCxDQUFGLENBQW1CWSxPQUFuQixDQUEyQixVQUFBdUIsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ2hCLFNBQUYsQ0FBWUMsTUFBWixDQUFtQixRQUFuQixDQUFKO0FBQUEsT0FBNUI7QUFDSDtBQUNKLEdBVEQ7QUFVSCxDQVhELEUsQ0FhQTs7QUFDQXhCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBVThCLENBQVYsRUFBYTtBQUNoRC9CLFFBQU0sQ0FBQ2lDLFFBQVAsQ0FBZ0I7QUFDWkMsT0FBRyxFQUFFLENBRE87QUFFWkcsWUFBUSxFQUFFO0FBRkUsR0FBaEI7QUFJSCxDQUxELEUsQ0FPQTs7QUFDQTdDLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCUyxnQkFBckIsQ0FBc0MsT0FBdEMsRUFBK0MsVUFBVThCLENBQVYsRUFBYTtBQUN4RC9CLFFBQU0sQ0FBQ2lDLFFBQVAsQ0FBZ0I7QUFDWkMsT0FBRyxFQUFFMUMsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZNEMscUJBQVosR0FBb0NGLEdBRDdCO0FBRVpHLFlBQVEsRUFBRTtBQUZFLEdBQWhCO0FBSUgsQ0FMRCxFLENBT0E7O0FBQ0E3QyxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QlMsZ0JBQXZCLENBQXdDLE9BQXhDLEVBQWlELFVBQVU4QixDQUFWLEVBQWE7QUFDMURuQyxJQUFFLENBQUMsY0FBRCxDQUFGLENBQW1CWSxPQUFuQixDQUEyQixVQUFBdUIsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ2hCLFNBQUYsQ0FBWXdCLEdBQVosQ0FBZ0IsUUFBaEIsQ0FBSjtBQUFBLEdBQTVCO0FBQ0gsQ0FGRCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvc2NyaXB0cy5qc1wiKTtcbiIsInZhciAkID0gZnVuY3Rpb24oIGVsZW0gKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7IH07XG52YXIgJCQgPSBmdW5jdGlvbiggZWxlbSApIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIGVsZW0gKTsgfTtcbmNvbnNvbGUubG9nKFwidGVzdGluZ1wiKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsYXp5bG9hZGluZywgZmFsc2UpO1xuZnVuY3Rpb24gbGF6eWxvYWRpbmcoKXtcbiAgICB2YXIgbGF6eWxvYWRJbWFnZXM7ICAgIFxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICAgIGxhenlsb2FkSW1hZ2VzID0gJCQoXCIubGF6eVwiKTtcbiAgICAgICAgdmFyIGltYWdlT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcywgb2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSBlbnRyeS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGltYWdlLmRhdGFzZXQuc3JjO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibGF6eVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VPYnNlcnZlci51bm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsYXp5bG9hZEltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgICAgICBpbWFnZU9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgeyAgXG4gICAgICAgIHZhciBsYXp5bG9hZFRocm90dGxlVGltZW91dDtcbiAgICAgICAgbGF6eWxvYWRJbWFnZXMgPSAkJChcIi5sYXp5XCIpO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gbGF6eWxvYWQgKCkge1xuICAgICAgICAgICAgaWYobGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQpO1xuICAgICAgICAgICAgfSAgICBcblxuICAgICAgICAgICAgbGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgbGF6eWxvYWRJbWFnZXMuZm9yRWFjaChmdW5jdGlvbihpbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaW1nLm9mZnNldFRvcCA8ICh3aW5kb3cuaW5uZXJIZWlnaHQgKyBzY3JvbGxUb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpbWcuZGF0YXNldC5zcmM7XG4gICAgICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdsYXp5Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZihsYXp5bG9hZEltYWdlcy5sZW5ndGggPT0gMCkgeyBcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsYXp5bG9hZCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxhenlsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbkNoYW5nZVwiLCBsYXp5bG9hZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsYXp5bG9hZCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxhenlsb2FkKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbkNoYW5nZVwiLCBsYXp5bG9hZCk7XG4gICAgfVxufVxuIFxuLy8gUmVtb3ZlIG5vLWpzIGNsYXNzXG4kKCdodG1sJykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcblxuLy8gQW5pbWF0ZSB0byBzZWN0aW9uIHdoZW4gbmF2IGlzIGNsaWNrZWRcbiQkKCcjbWVudSBhW2hyZWZePVwiI1wiXScpLmZvckVhY2goYW5jaG9yID0+IHtcbiAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6ICQodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pXG4gICAgICAgIGlmKCQoJ2hlYWRlcicpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICAgICAgJCQoJ2hlYWRlciwgYm9keScpLmZvckVhY2goZSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4gXG4vLyBTY3JvbGwgdG8gdG9wXG4kKCcjdG8tdG9wJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgfSk7XG59KTtcblxuLy8gU2Nyb2xsIHRvIGZpcnN0IGVsZW1lbnRcbiQoJyNsZWFkLWRvd24gc3BhbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6ICQoXCIjYWJvdXRcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KVxufSk7XG5cbi8vIE9wZW4gbW9iaWxlIG1lbnVcbiQoJyNtb2JpbGUtbWVudS1vcGVuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICQkKCdoZWFkZXIsIGJvZHknKS5mb3JFYWNoKGUgPT4gZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==