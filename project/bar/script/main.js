//Navigation button click
const button = document.querySelector('.nav-button');
const menu = document.querySelector('.nav');
button.addEventListener('click', () => {
  menu.classList.toggle('visible');
  button.classList.toggle('active');
});
