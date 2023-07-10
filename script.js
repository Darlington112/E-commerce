const bar = document.getElementById('bar');
const close = document.getElementById('close');
const hamBurger = document.getElementById('navBar');


if (bar) {
    bar.addEventListener('click', () => {
        hamBurger.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', () => {
        hamBurger.classList.remove('active');
    });
}