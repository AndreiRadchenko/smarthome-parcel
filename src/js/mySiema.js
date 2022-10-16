const mySiema = new Siema({
  loop: true,
});

const prevArrows = document.querySelectorAll('.fa-chevron-left');
const nextArrows = document.querySelectorAll('.fa-chevron-right');

// prev.addEventListener('click', () => mySiema.prev());
// next.addEventListener('click', () => mySiema.next());

prevArrows.forEach((element, index) => {
  element.addEventListener('click', () => mySiema.prev());
});

nextArrows.forEach((element, index) => {
  element.addEventListener('click', () => mySiema.next());
});
