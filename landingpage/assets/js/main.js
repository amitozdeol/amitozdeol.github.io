const glide = new Glide('.glide', {
  type: 'carousel',
  perView: 4,
  focusAt: 'center'
}).mount()

let slides = document.querySelectorAll('.glide__slide');
for (let slide of slides) {
  slide.addEventListener('click', function () {
    let active = document.querySelector('.glide__slide--active');
    let target = this;
    let activeId = active.dataset.index;
    let targetId = target.dataset.index;
    let cloneClass = target.classList.contains('glide__slide--clone');

    if (targetId > activeId && cloneClass) {
      glide.go('<');
    } else if (targetId < activeId && cloneClass) {
      glide.go('>');
    } else if (targetId > activeId) {
      glide.go('>');
    } else if (targetId < activeId) {
      glide.go('<');
    }
  });
}
