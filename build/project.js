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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/project.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/project.js":
/*!******************************!*\
  !*** ./assets/js/project.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const $ = elem => document.querySelector(elem);

const questions = [{
  id: 1,
  question: "What type of Jeans are you shopping for?",
  catgeory: "jeans",
  answers: [{
    id: 1,
    answer: "Skinny",
    image: "",
    points: [{
      product_type: 1,
      points: 1
    }, {
      product_type: 2,
      points: 0
    }, {
      product_type: 3,
      points: -1
    }, {
      product_type: 4,
      points: 1
    }, {
      product_type: 5,
      points: 1
    }, {
      product_type: 6,
      points: -1
    }]
  }, {
    id: 2,
    answer: "Super Skinny",
    image: "",
    points: [{
      product_type: 1,
      points: -1
    }, {
      product_type: 2,
      points: 1
    }, {
      product_type: 3,
      points: 0
    }, {
      product_type: 4,
      points: 0
    }, {
      product_type: 5,
      points: 1
    }, {
      product_type: 6,
      points: -1
    }]
  }, {
    id: 3,
    answer: "Straight",
    image: "http://placekitten.com/200/302",
    points: [{
      product_type: 1,
      points: 1
    }, {
      product_type: 2,
      points: 0
    }, {
      product_type: 3,
      points: -1
    }, {
      product_type: 4,
      points: 1
    }, {
      product_type: 5,
      points: 1
    }, {
      product_type: 6,
      points: 1
    }]
  }]
}, {
  id: 2,
  question: "Preferred Rise?",
  catgeory: "jeans",
  answers: [{
    id: 1,
    answer: "High",
    image: "http://placekitten.com/200/303",
    points: [{
      product_type: 1,
      points: 1
    }, {
      product_type: 2,
      points: 0
    }, {
      product_type: 3,
      points: -1
    }, {
      product_type: 4,
      points: 1
    }, {
      product_type: 5,
      points: 1
    }, {
      product_type: 6,
      points: -1
    }]
  }, {
    id: 2,
    answer: "Mid",
    image: "http://placekitten.com/200/304",
    points: [{
      product_type: 1,
      points: 0
    }, {
      product_type: 2,
      points: 1
    }, {
      product_type: 3,
      points: 0
    }, {
      product_type: 4,
      points: 1
    }, {
      product_type: 5,
      points: 0
    }, {
      product_type: 6,
      points: 0
    }]
  }, {
    id: 3,
    answer: "Low",
    image: "http://placekitten.com/200/305",
    points: [{
      product_type: 1,
      points: 1
    }, {
      product_type: 2,
      points: 0
    }, {
      product_type: 3,
      points: -1
    }, {
      product_type: 4,
      points: 1
    }, {
      product_type: 5,
      points: 1
    }, {
      product_type: 6,
      points: 1
    }]
  }]
}, {
  id: 3,
  question: "Preferred Rise?",
  catgeory: "jeans",
  answers: [{
    id: 1,
    answer: "High",
    image: "http://placekitten.com/200/306",
    points: [{
      product_type: 1,
      points: 1
    }, {
      product_type: 2,
      points: 0
    }, {
      product_type: 3,
      points: -1
    }, {
      product_type: 4,
      points: 1
    }, {
      product_type: 5,
      points: 1
    }, {
      product_type: 6,
      points: -1
    }]
  }, {
    id: 2,
    answer: "Mid",
    image: "http://placekitten.com/200/307",
    points: [{
      product_type: 1,
      points: 0
    }, {
      product_type: 2,
      points: 1
    }, {
      product_type: 3,
      points: 0
    }, {
      product_type: 4,
      points: 1
    }, {
      product_type: 5,
      points: 0
    }, {
      product_type: 6,
      points: 0
    }]
  }, {
    id: 3,
    answer: "Low",
    image: "http://placekitten.com/200/308",
    points: [{
      product_type: 1,
      points: 1
    }, {
      product_type: 2,
      points: 0
    }, {
      product_type: 3,
      points: -1
    }, {
      product_type: 4,
      points: 1
    }, {
      product_type: 5,
      points: 1
    }, {
      product_type: 6,
      points: 1
    }]
  }]
}];
let categories = [{
  id: 1,
  name: "jeans1",
  product_types: [{
    id: 1,
    name: "Skinny",
    sum: 0
  }, {
    id: 2,
    name: "Super Skinny",
    sum: 0
  }, {
    id: 3,
    name: "Straight",
    sum: 0
  }, {
    id: 4,
    name: "Bootcut",
    sum: 0
  }, {
    id: 5,
    name: "Boyfriend",
    sum: 0
  }, {
    id: 6,
    name: "Cropped",
    sum: 0
  }]
}, {
  id: 2,
  name: "jeans",
  product_types: [{
    id: 1,
    name: "Skinny",
    sum: 0
  }, {
    id: 2,
    name: "Super Skinny",
    sum: 0
  }, {
    id: 3,
    name: "Straight",
    sum: 0
  }, {
    id: 4,
    name: "Bootcut",
    sum: 0
  }, {
    id: 5,
    name: "Boyfriend",
    sum: 0
  }, {
    id: 6,
    name: "Cropped",
    sum: 0
  }]
}];
/**
 * Add the entire question and answer DOM inside the <div class="quiz"> DOM
 * @param {Int} q_index index value of question
 */

function showQuestion(q_index) {
  //If index out of bound, return void
  if (questions.length <= q_index) {
    return;
  }

  let questionDOM = addQuestion(q_index, questions[q_index].question),
      answers = "",
      is_last = q_index == questions.length - 1;
  questions[q_index].answers.map((a, a_index) => {
    answers += addAnswer(q_index, a_index, a);
  });
  questionDOM += answers + `<button type='button' class='btn btn-primary submitButton' data-qindex='${q_index}' data-last=${is_last}>
	  ${is_last ? "Submit" : "Next"}
	  </button>
	</div>`;
  $(".quiz").innerHTML += questionDOM;
}

showQuestion(0);
$(".quiz").addEventListener("click", changeQuestion);
/**
 * Add question to the DOM
 * @param {Int} q_index index value of question
 * @param {String} question actual question string
 */

function addQuestion(q_index, question) {
  return `<div id="question${q_index}" class="question"><h4>${question}</h4>`;
}
/**
 * Add answer to the DOM
 * @param {Int} q_index index value of question
 * @param {Int} a_index index value of answer inside that question
 * @param {Object} a Answer object
 */


function addAnswer(q_index, a_index, a) {
  return `<div class="form-check">
            <input class="form-check-input" type="radio" name="answer${q_index}" value='${a.answer}' data-index='${a_index}' required>
            <label class="form-check-label">
            ${a.answer}
            </label>
            ${a.image ? "<img src=" + a.image + " class='img-fluid' alt='Responsive image'>" : ""}
          </div>`;
}
/**
 * Cannge the question on button click
 * If it's the last question, click event will find the result
 * @param {Object} event Click event
 */


function changeQuestion(event) {
  if (!event.target.matches(".submitButton")) {
    return;
  }

  let index = event.target.dataset.qindex,
      is_last = event.target.dataset.last === "true",
      answerDOM = $(`input[name="answer${index}"]:checked`); //If no answer selected, do nothing

  if (!answerDOM.value) {
    return;
  }

  const a_index = answerDOM.dataset.index,
        question = questions[index],
        answer = question.answers[a_index],
        category = categories.filter(obj => {
    return obj.name === question.catgeory;
  })[0];
  calculatePoint(answer.points, category);
  $(`#question${index}`).classList.add("fade");

  if (is_last) {
    showResult(category.product_types);
  } else {
    showQuestion(++index);
  }
}
/**
 * Add/subtract points and store the sum in category.product_types.sum variable
 * @param {Object} points Points object associated to that answer
 * @param {Object} category current category object
 */


function calculatePoint(points, category) {
  points.map(p => {
    let category_update = category.product_types.filter(c => {
      return c.id === p.product_type;
    })[0];
    category_update.sum += p.points;
  });
}
/**
 * Find the product with the highest sum value and render the result in the DOM
 * @param {Object} product current product
 */


function showResult(product) {
  let result = product.reduce((max, c) => c.sum > max ? c.sum : max, product[0]);
  $(".quiz").innerHTML += `<h2>Recommendation ${result.name}</h2>`;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Byb2plY3QuanMiXSwibmFtZXMiOlsiJCIsImVsZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVzdGlvbnMiLCJpZCIsInF1ZXN0aW9uIiwiY2F0Z2VvcnkiLCJhbnN3ZXJzIiwiYW5zd2VyIiwiaW1hZ2UiLCJwb2ludHMiLCJwcm9kdWN0X3R5cGUiLCJjYXRlZ29yaWVzIiwibmFtZSIsInByb2R1Y3RfdHlwZXMiLCJzdW0iLCJzaG93UXVlc3Rpb24iLCJxX2luZGV4IiwibGVuZ3RoIiwicXVlc3Rpb25ET00iLCJhZGRRdWVzdGlvbiIsImlzX2xhc3QiLCJtYXAiLCJhIiwiYV9pbmRleCIsImFkZEFuc3dlciIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VRdWVzdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwibWF0Y2hlcyIsImluZGV4IiwiZGF0YXNldCIsInFpbmRleCIsImxhc3QiLCJhbnN3ZXJET00iLCJ2YWx1ZSIsImNhdGVnb3J5IiwiZmlsdGVyIiwib2JqIiwiY2FsY3VsYXRlUG9pbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzaG93UmVzdWx0IiwicCIsImNhdGVnb3J5X3VwZGF0ZSIsImMiLCJwcm9kdWN0IiwicmVzdWx0IiwicmVkdWNlIiwibWF4Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVB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QyxHQUR4QixFQUVYSCxPQUFPLENBQUMsQ0FBRCxDQUZJLENBQWI7QUFJQWpELEdBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVzJCLFNBQVgsSUFBeUIsc0JBQXFCdUIsTUFBTSxDQUFDcEMsSUFBSyxPQUExRDtBQUNELEMiLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1VzZXJzL2FkZW9sL3d3dy9hbWl0b3pkZW9sLmdpdGh1Yi5pby9idWlsZFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9wcm9qZWN0LmpzXCIpO1xuIiwiY29uc3QgJCA9IGVsZW0gPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcblxuY29uc3QgcXVlc3Rpb25zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgcXVlc3Rpb246IFwiV2hhdCB0eXBlIG9mIEplYW5zIGFyZSB5b3Ugc2hvcHBpbmcgZm9yP1wiLFxuICAgIGNhdGdlb3J5OiBcImplYW5zXCIsXG4gICAgYW5zd2VyczogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgYW5zd2VyOiBcIlNraW5ueVwiLFxuICAgICAgICBpbWFnZTogXCJcIixcbiAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDEsIHBvaW50czogMSB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiAyLCBwb2ludHM6IDAgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogMywgcG9pbnRzOiAtMSB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiA0LCBwb2ludHM6IDEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogNSwgcG9pbnRzOiAxIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDYsIHBvaW50czogLTEgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgYW5zd2VyOiBcIlN1cGVyIFNraW5ueVwiLFxuICAgICAgICBpbWFnZTogXCJcIixcbiAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDEsIHBvaW50czogLTEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogMiwgcG9pbnRzOiAxIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDMsIHBvaW50czogMCB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiA0LCBwb2ludHM6IDAgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogNSwgcG9pbnRzOiAxIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDYsIHBvaW50czogLTEgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgYW5zd2VyOiBcIlN0cmFpZ2h0XCIsXG4gICAgICAgIGltYWdlOiBcImh0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwMlwiLFxuICAgICAgICBwb2ludHM6IFtcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogMSwgcG9pbnRzOiAxIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDIsIHBvaW50czogMCB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiAzLCBwb2ludHM6IC0xIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDQsIHBvaW50czogMSB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiA1LCBwb2ludHM6IDEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogNiwgcG9pbnRzOiAxIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHF1ZXN0aW9uOiBcIlByZWZlcnJlZCBSaXNlP1wiLFxuICAgIGNhdGdlb3J5OiBcImplYW5zXCIsXG4gICAgYW5zd2VyczogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgYW5zd2VyOiBcIkhpZ2hcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cDovL3BsYWNla2l0dGVuLmNvbS8yMDAvMzAzXCIsXG4gICAgICAgIHBvaW50czogW1xuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiAxLCBwb2ludHM6IDEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogMiwgcG9pbnRzOiAwIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDMsIHBvaW50czogLTEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogNCwgcG9pbnRzOiAxIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDUsIHBvaW50czogMSB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiA2LCBwb2ludHM6IC0xIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGFuc3dlcjogXCJNaWRcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cDovL3BsYWNla2l0dGVuLmNvbS8yMDAvMzA0XCIsXG4gICAgICAgIHBvaW50czogW1xuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiAxLCBwb2ludHM6IDAgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogMiwgcG9pbnRzOiAxIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDMsIHBvaW50czogMCB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiA0LCBwb2ludHM6IDEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogNSwgcG9pbnRzOiAwIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDYsIHBvaW50czogMCB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBhbnN3ZXI6IFwiTG93XCIsXG4gICAgICAgIGltYWdlOiBcImh0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwNVwiLFxuICAgICAgICBwb2ludHM6IFtcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogMSwgcG9pbnRzOiAxIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDIsIHBvaW50czogMCB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiAzLCBwb2ludHM6IC0xIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDQsIHBvaW50czogMSB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiA1LCBwb2ludHM6IDEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogNiwgcG9pbnRzOiAxIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHF1ZXN0aW9uOiBcIlByZWZlcnJlZCBSaXNlP1wiLFxuICAgIGNhdGdlb3J5OiBcImplYW5zXCIsXG4gICAgYW5zd2VyczogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgYW5zd2VyOiBcIkhpZ2hcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cDovL3BsYWNla2l0dGVuLmNvbS8yMDAvMzA2XCIsXG4gICAgICAgIHBvaW50czogW1xuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiAxLCBwb2ludHM6IDEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogMiwgcG9pbnRzOiAwIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDMsIHBvaW50czogLTEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogNCwgcG9pbnRzOiAxIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDUsIHBvaW50czogMSB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiA2LCBwb2ludHM6IC0xIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGFuc3dlcjogXCJNaWRcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cDovL3BsYWNla2l0dGVuLmNvbS8yMDAvMzA3XCIsXG4gICAgICAgIHBvaW50czogW1xuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiAxLCBwb2ludHM6IDAgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogMiwgcG9pbnRzOiAxIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDMsIHBvaW50czogMCB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiA0LCBwb2ludHM6IDEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogNSwgcG9pbnRzOiAwIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDYsIHBvaW50czogMCB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBhbnN3ZXI6IFwiTG93XCIsXG4gICAgICAgIGltYWdlOiBcImh0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwOFwiLFxuICAgICAgICBwb2ludHM6IFtcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogMSwgcG9pbnRzOiAxIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDIsIHBvaW50czogMCB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiAzLCBwb2ludHM6IC0xIH0sXG4gICAgICAgICAgeyBwcm9kdWN0X3R5cGU6IDQsIHBvaW50czogMSB9LFxuICAgICAgICAgIHsgcHJvZHVjdF90eXBlOiA1LCBwb2ludHM6IDEgfSxcbiAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogNiwgcG9pbnRzOiAxIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxubGV0IGNhdGVnb3JpZXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcImplYW5zMVwiLFxuICAgIHByb2R1Y3RfdHlwZXM6IFtcbiAgICAgIHsgaWQ6IDEsIG5hbWU6IFwiU2tpbm55XCIsIHN1bTogMCB9LFxuICAgICAgeyBpZDogMiwgbmFtZTogXCJTdXBlciBTa2lubnlcIiwgc3VtOiAwIH0sXG4gICAgICB7IGlkOiAzLCBuYW1lOiBcIlN0cmFpZ2h0XCIsIHN1bTogMCB9LFxuICAgICAgeyBpZDogNCwgbmFtZTogXCJCb290Y3V0XCIsIHN1bTogMCB9LFxuICAgICAgeyBpZDogNSwgbmFtZTogXCJCb3lmcmllbmRcIiwgc3VtOiAwIH0sXG4gICAgICB7IGlkOiA2LCBuYW1lOiBcIkNyb3BwZWRcIiwgc3VtOiAwIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcImplYW5zXCIsXG4gICAgcHJvZHVjdF90eXBlczogW1xuICAgICAgeyBpZDogMSwgbmFtZTogXCJTa2lubnlcIiwgc3VtOiAwIH0sXG4gICAgICB7IGlkOiAyLCBuYW1lOiBcIlN1cGVyIFNraW5ueVwiLCBzdW06IDAgfSxcbiAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiU3RyYWlnaHRcIiwgc3VtOiAwIH0sXG4gICAgICB7IGlkOiA0LCBuYW1lOiBcIkJvb3RjdXRcIiwgc3VtOiAwIH0sXG4gICAgICB7IGlkOiA1LCBuYW1lOiBcIkJveWZyaWVuZFwiLCBzdW06IDAgfSxcbiAgICAgIHsgaWQ6IDYsIG5hbWU6IFwiQ3JvcHBlZFwiLCBzdW06IDAgfVxuICAgIF1cbiAgfVxuXTtcblxuLyoqXG4gKiBBZGQgdGhlIGVudGlyZSBxdWVzdGlvbiBhbmQgYW5zd2VyIERPTSBpbnNpZGUgdGhlIDxkaXYgY2xhc3M9XCJxdWl6XCI+IERPTVxuICogQHBhcmFtIHtJbnR9IHFfaW5kZXggaW5kZXggdmFsdWUgb2YgcXVlc3Rpb25cbiAqL1xuZnVuY3Rpb24gc2hvd1F1ZXN0aW9uKHFfaW5kZXgpIHtcbiAgLy9JZiBpbmRleCBvdXQgb2YgYm91bmQsIHJldHVybiB2b2lkXG4gIGlmIChxdWVzdGlvbnMubGVuZ3RoIDw9IHFfaW5kZXgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgcXVlc3Rpb25ET00gPSBhZGRRdWVzdGlvbihxX2luZGV4LCBxdWVzdGlvbnNbcV9pbmRleF0ucXVlc3Rpb24pLFxuICAgIGFuc3dlcnMgPSBcIlwiLFxuICAgIGlzX2xhc3QgPSBxX2luZGV4ID09IHF1ZXN0aW9ucy5sZW5ndGggLSAxO1xuXG4gIHF1ZXN0aW9uc1txX2luZGV4XS5hbnN3ZXJzLm1hcCgoYSwgYV9pbmRleCkgPT4ge1xuICAgIGFuc3dlcnMgKz0gYWRkQW5zd2VyKHFfaW5kZXgsIGFfaW5kZXgsIGEpO1xuICB9KTtcblxuICBxdWVzdGlvbkRPTSArPVxuICAgIGFuc3dlcnMgK1xuICAgIGA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tcHJpbWFyeSBzdWJtaXRCdXR0b24nIGRhdGEtcWluZGV4PScke3FfaW5kZXh9JyBkYXRhLWxhc3Q9JHtpc19sYXN0fT5cblx0ICAke2lzX2xhc3QgPyBcIlN1Ym1pdFwiIDogXCJOZXh0XCJ9XG5cdCAgPC9idXR0b24+XG5cdDwvZGl2PmA7XG5cbiAgJChcIi5xdWl6XCIpLmlubmVySFRNTCArPSBxdWVzdGlvbkRPTTtcbn1cbnNob3dRdWVzdGlvbigwKTtcblxuJChcIi5xdWl6XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VRdWVzdGlvbik7XG5cbi8qKlxuICogQWRkIHF1ZXN0aW9uIHRvIHRoZSBET01cbiAqIEBwYXJhbSB7SW50fSBxX2luZGV4IGluZGV4IHZhbHVlIG9mIHF1ZXN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gcXVlc3Rpb24gYWN0dWFsIHF1ZXN0aW9uIHN0cmluZ1xuICovXG5mdW5jdGlvbiBhZGRRdWVzdGlvbihxX2luZGV4LCBxdWVzdGlvbikge1xuICByZXR1cm4gYDxkaXYgaWQ9XCJxdWVzdGlvbiR7cV9pbmRleH1cIiBjbGFzcz1cInF1ZXN0aW9uXCI+PGg0PiR7cXVlc3Rpb259PC9oND5gO1xufVxuXG4vKipcbiAqIEFkZCBhbnN3ZXIgdG8gdGhlIERPTVxuICogQHBhcmFtIHtJbnR9IHFfaW5kZXggaW5kZXggdmFsdWUgb2YgcXVlc3Rpb25cbiAqIEBwYXJhbSB7SW50fSBhX2luZGV4IGluZGV4IHZhbHVlIG9mIGFuc3dlciBpbnNpZGUgdGhhdCBxdWVzdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGEgQW5zd2VyIG9iamVjdFxuICovXG5mdW5jdGlvbiBhZGRBbnN3ZXIocV9pbmRleCwgYV9pbmRleCwgYSkge1xuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFuc3dlciR7cV9pbmRleH1cIiB2YWx1ZT0nJHtcbiAgICBhLmFuc3dlclxuICB9JyBkYXRhLWluZGV4PScke2FfaW5kZXh9JyByZXF1aXJlZD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICR7YS5hbnN3ZXJ9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgYS5pbWFnZVxuICAgICAgICAgICAgICAgID8gXCI8aW1nIHNyYz1cIiArXG4gICAgICAgICAgICAgICAgICBhLmltYWdlICtcbiAgICAgICAgICAgICAgICAgIFwiIGNsYXNzPSdpbWctZmx1aWQnIGFsdD0nUmVzcG9uc2l2ZSBpbWFnZSc+XCJcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5gO1xufVxuXG4vKipcbiAqIENhbm5nZSB0aGUgcXVlc3Rpb24gb24gYnV0dG9uIGNsaWNrXG4gKiBJZiBpdCdzIHRoZSBsYXN0IHF1ZXN0aW9uLCBjbGljayBldmVudCB3aWxsIGZpbmQgdGhlIHJlc3VsdFxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IENsaWNrIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGNoYW5nZVF1ZXN0aW9uKGV2ZW50KSB7XG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIuc3VibWl0QnV0dG9uXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucWluZGV4LFxuICAgIGlzX2xhc3QgPSBldmVudC50YXJnZXQuZGF0YXNldC5sYXN0ID09PSBcInRydWVcIixcbiAgICBhbnN3ZXJET00gPSAkKGBpbnB1dFtuYW1lPVwiYW5zd2VyJHtpbmRleH1cIl06Y2hlY2tlZGApO1xuXG4gIC8vSWYgbm8gYW5zd2VyIHNlbGVjdGVkLCBkbyBub3RoaW5nXG4gIGlmICghYW5zd2VyRE9NLnZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYV9pbmRleCA9IGFuc3dlckRPTS5kYXRhc2V0LmluZGV4LFxuICAgIHF1ZXN0aW9uID0gcXVlc3Rpb25zW2luZGV4XSxcbiAgICBhbnN3ZXIgPSBxdWVzdGlvbi5hbnN3ZXJzW2FfaW5kZXhdLFxuICAgIGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maWx0ZXIob2JqID0+IHtcbiAgICAgIHJldHVybiBvYmoubmFtZSA9PT0gcXVlc3Rpb24uY2F0Z2Vvcnk7XG4gICAgfSlbMF07XG4gIGNhbGN1bGF0ZVBvaW50KGFuc3dlci5wb2ludHMsIGNhdGVnb3J5KTtcblxuICAkKGAjcXVlc3Rpb24ke2luZGV4fWApLmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuXG4gIGlmIChpc19sYXN0KSB7XG4gICAgc2hvd1Jlc3VsdChjYXRlZ29yeS5wcm9kdWN0X3R5cGVzKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93UXVlc3Rpb24oKytpbmRleCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQvc3VidHJhY3QgcG9pbnRzIGFuZCBzdG9yZSB0aGUgc3VtIGluIGNhdGVnb3J5LnByb2R1Y3RfdHlwZXMuc3VtIHZhcmlhYmxlXG4gKiBAcGFyYW0ge09iamVjdH0gcG9pbnRzIFBvaW50cyBvYmplY3QgYXNzb2NpYXRlZCB0byB0aGF0IGFuc3dlclxuICogQHBhcmFtIHtPYmplY3R9IGNhdGVnb3J5IGN1cnJlbnQgY2F0ZWdvcnkgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBvaW50KHBvaW50cywgY2F0ZWdvcnkpIHtcbiAgcG9pbnRzLm1hcChwID0+IHtcbiAgICBsZXQgY2F0ZWdvcnlfdXBkYXRlID0gY2F0ZWdvcnkucHJvZHVjdF90eXBlcy5maWx0ZXIoYyA9PiB7XG4gICAgICByZXR1cm4gYy5pZCA9PT0gcC5wcm9kdWN0X3R5cGU7XG4gICAgfSlbMF07XG4gICAgY2F0ZWdvcnlfdXBkYXRlLnN1bSArPSBwLnBvaW50cztcbiAgfSk7XG59XG5cbi8qKlxuICogRmluZCB0aGUgcHJvZHVjdCB3aXRoIHRoZSBoaWdoZXN0IHN1bSB2YWx1ZSBhbmQgcmVuZGVyIHRoZSByZXN1bHQgaW4gdGhlIERPTVxuICogQHBhcmFtIHtPYmplY3R9IHByb2R1Y3QgY3VycmVudCBwcm9kdWN0XG4gKi9cbmZ1bmN0aW9uIHNob3dSZXN1bHQocHJvZHVjdCkge1xuICBsZXQgcmVzdWx0ID0gcHJvZHVjdC5yZWR1Y2UoXG4gICAgKG1heCwgYykgPT4gKGMuc3VtID4gbWF4ID8gYy5zdW0gOiBtYXgpLFxuICAgIHByb2R1Y3RbMF1cbiAgKTtcbiAgJChcIi5xdWl6XCIpLmlubmVySFRNTCArPSBgPGgyPlJlY29tbWVuZGF0aW9uICR7cmVzdWx0Lm5hbWV9PC9oMj5gO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==