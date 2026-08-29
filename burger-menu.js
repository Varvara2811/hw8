// const menuOpen = document.querySelector('.menu-open');
// const nav = document.querySelector('.header-nav');
// menuOpen.addEventListener('click', () => {
//     nav.classList.add('is-open');
// });
// const menuClose = document.querySelector('.menu-close');
// menuClose.addEventListener('click', () =>{
//     nav.classList.remove('.is-open')
// })
const menuOpen = document.querySelector('.menu-open');
const nav = document.querySelector('.header-nav');

menuOpen.addEventListener('click', () => {
    nav.classList.add('is-open');
});
const menuClose = document.querySelector('.menu-close');

menuClose.addEventListener('click', () => {
    nav.classList.remove('is-open');
});
const backdrop = document.querySelector('.menu-backdrop');
menuOpen.addEventListener('click', () => {
    nav.classList.add('is-open');
    backdrop.classList.add('is-open');
});
menuClose.addEventListener('click', () => {
    nav.classList.remove('is-open');
    backdrop.classList.remove('is-open');
});