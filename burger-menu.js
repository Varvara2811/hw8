const openBurgerBtn = document.querySelector('[burger-modal-open]');
const burgerBackdrop = document.querySelector('[burger-modal]');
const closeBurgerBtn = document.querySelector('[burger-modal-close]');

openBurgerBtn.addEventListener('click', () => {
  burgerBackdrop.classList.remove('is__hidden');
});

closeBurgerBtn.addEventListener('click', () => {
  burgerBackdrop.classList.add('is__hidden');
});
console.log('Я тут');
