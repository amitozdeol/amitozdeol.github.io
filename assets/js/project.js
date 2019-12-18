const $ = elem => document.querySelector(elem);

const questions = [
  {
    id: 1,
    question: "What type of Jeans are you shopping for?",
    catgeory: "jeans",
    answers: [
      {
        id: 1,
        answer: "Skinny",
        image: "",
        points: [
          { product_type: 1, points: 1 },
          { product_type: 2, points: 0 },
          { product_type: 3, points: -1 },
          { product_type: 4, points: 1 },
          { product_type: 5, points: 1 },
          { product_type: 6, points: -1 }
        ]
      },
      {
        id: 2,
        answer: "Super Skinny",
        image: "",
        points: [
          { product_type: 1, points: -1 },
          { product_type: 2, points: 1 },
          { product_type: 3, points: 0 },
          { product_type: 4, points: 0 },
          { product_type: 5, points: 1 },
          { product_type: 6, points: -1 }
        ]
      },
      {
        id: 3,
        answer: "Straight",
        image: "http://placekitten.com/200/302",
        points: [
          { product_type: 1, points: 1 },
          { product_type: 2, points: 0 },
          { product_type: 3, points: -1 },
          { product_type: 4, points: 1 },
          { product_type: 5, points: 1 },
          { product_type: 6, points: 1 }
        ]
      }
    ]
  },
  {
    id: 2,
    question: "Preferred Rise?",
    catgeory: "jeans",
    answers: [
      {
        id: 1,
        answer: "High",
        image: "http://placekitten.com/200/303",
        points: [
          { product_type: 1, points: 1 },
          { product_type: 2, points: 0 },
          { product_type: 3, points: -1 },
          { product_type: 4, points: 1 },
          { product_type: 5, points: 1 },
          { product_type: 6, points: -1 }
        ]
      },
      {
        id: 2,
        answer: "Mid",
        image: "http://placekitten.com/200/304",
        points: [
          { product_type: 1, points: 0 },
          { product_type: 2, points: 1 },
          { product_type: 3, points: 0 },
          { product_type: 4, points: 1 },
          { product_type: 5, points: 0 },
          { product_type: 6, points: 0 }
        ]
      },
      {
        id: 3,
        answer: "Low",
        image: "http://placekitten.com/200/305",
        points: [
          { product_type: 1, points: 1 },
          { product_type: 2, points: 0 },
          { product_type: 3, points: -1 },
          { product_type: 4, points: 1 },
          { product_type: 5, points: 1 },
          { product_type: 6, points: 1 }
        ]
      }
    ]
  },
  {
    id: 3,
    question: "Preferred Rise?",
    catgeory: "jeans",
    answers: [
      {
        id: 1,
        answer: "High",
        image: "http://placekitten.com/200/306",
        points: [
          { product_type: 1, points: 1 },
          { product_type: 2, points: 0 },
          { product_type: 3, points: -1 },
          { product_type: 4, points: 1 },
          { product_type: 5, points: 1 },
          { product_type: 6, points: -1 }
        ]
      },
      {
        id: 2,
        answer: "Mid",
        image: "http://placekitten.com/200/307",
        points: [
          { product_type: 1, points: 0 },
          { product_type: 2, points: 1 },
          { product_type: 3, points: 0 },
          { product_type: 4, points: 1 },
          { product_type: 5, points: 0 },
          { product_type: 6, points: 0 }
        ]
      },
      {
        id: 3,
        answer: "Low",
        image: "http://placekitten.com/200/308",
        points: [
          { product_type: 1, points: 1 },
          { product_type: 2, points: 0 },
          { product_type: 3, points: -1 },
          { product_type: 4, points: 1 },
          { product_type: 5, points: 1 },
          { product_type: 6, points: 1 }
        ]
      }
    ]
  }
];

let categories = [
  {
    id: 1,
    name: "jeans1",
    product_types: [
      { id: 1, name: "Skinny", sum: 0 },
      { id: 2, name: "Super Skinny", sum: 0 },
      { id: 3, name: "Straight", sum: 0 },
      { id: 4, name: "Bootcut", sum: 0 },
      { id: 5, name: "Boyfriend", sum: 0 },
      { id: 6, name: "Cropped", sum: 0 }
    ]
  },
  {
    id: 2,
    name: "jeans",
    product_types: [
      { id: 1, name: "Skinny", sum: 0 },
      { id: 2, name: "Super Skinny", sum: 0 },
      { id: 3, name: "Straight", sum: 0 },
      { id: 4, name: "Bootcut", sum: 0 },
      { id: 5, name: "Boyfriend", sum: 0 },
      { id: 6, name: "Cropped", sum: 0 }
    ]
  }
];

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

  questionDOM +=
    answers +
    `<button type='button' class='btn btn-primary submitButton' data-qindex='${q_index}' data-last=${is_last}>
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
            <input class="form-check-input" type="radio" name="answer${q_index}" value='${
    a.answer
  }' data-index='${a_index}' required>
            <label class="form-check-label">
            ${a.answer}
            </label>
            ${
              a.image
                ? "<img src=" +
                  a.image +
                  " class='img-fluid' alt='Responsive image'>"
                : ""
            }
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
    answerDOM = $(`input[name="answer${index}"]:checked`);

  //If no answer selected, do nothing
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
  let result = product.reduce((prev, current) =>
    prev.sum > current.sum ? prev : current
  );
  $(".quiz").innerHTML += `<h2>Recommendation ${result.name}</h2>`;
}
