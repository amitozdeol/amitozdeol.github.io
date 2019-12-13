var $ = function (elem) {
  return document.querySelector(elem);
};
var $$ = function (elem) {
  return document.querySelectorAll(elem);
};

const questions = [
  {
    "id": 1, "question": "What type of jeans are you shopping for?",
    "answers": [
      { "id": 1, 'answer': "product 1", "points": [{ 'points': 1 }, { 'points': 0 }, { 'points': -1 }, { 'points': -1 }, { 'points': 1 }] },
      { "id": 2, 'answer': "product 2", "points": [{ 'points': 1 }, { 'points': 0 }, { 'points': -1 }, { 'points': -1 }, { 'points': 1 }] },
      { "id": 3, 'answer': "product 3", "points": [{ 'points': 1 }, { 'points': 0 }, { 'points': -1 }, { 'points': -1 }, { 'points': 1 }] },
      { "id": 4, 'answer': "product 4", "points": [{ 'points': 1 }, { 'points': 0 }, { 'points': -1 }, { 'points': -1 }, { 'points': 1 }] },
      { "id": 5, 'answer': "product 5", "points": [{ 'points': 1 }, { 'points': 0 }, { 'points': -1 }, { 'points': -1 }, { 'points': 1 }] },
    ]
  }
]

questions.map(q => {
  $('.question').innerHTML += `<h1> ${q.question} </h1>`
})
