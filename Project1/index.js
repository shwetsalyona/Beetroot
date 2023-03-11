
//themeBtn toggle

const themeBtn = document.getElementById('themeBtn');

function toggleTheme() {
    const body = document.body;

    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}


if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
}


//burger menu

const burgerBtn = document.getElementById("burger");

function toggleBurger() {
    const appHeader = document.getElementById('appHeader');
    appHeader.classList.toggle("is-open");
}

if (burgerBtn) {
    burgerBtn.addEventListener("click", toggleBurger);
};