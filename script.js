const bar = document.getElementById('bar');
const close = document.getElementById('close');
const hamBurger = document.getElementById('navBar');
const iconTag = document.getElementById('icon')

iconTag.onclick = function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        iconTag.src = "./images/sun.png";
    } else{
        iconTag.src = "./images/moon.png";
    }
}


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