const cardBtnRefs = document.querySelectorAll('.team__card-button');
const teamCards = document.querySelectorAll('[data-card-active]');

cardBtnRefs.forEach((element, index) => {
  element.addEventListener('click', () => {
    let cardState = teamCards[index].getAttribute('data-card-active');
    cardState = cardState === 'inactive' ? 'active' : 'inactive';
    teamCards[index].setAttribute('data-card-active', cardState);
  });
});
