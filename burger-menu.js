const openBurgerBtn = document.querySelector('[burger-modal-open]');
const burgerBackdrop = document.querySelector('[burger-modal]');
const closeBurgerBtn = document.querySelector('[burger-modal-close]');

openBurgerBtn.addEventListener('click', () => {
  burgerBackdrop.classList.remove('is-hidden');
});

closeBurgerBtn.addEventListener('click', () => {
  burgerBackdrop.classList.add('is-hidden');
});
console.log('Я тут');
