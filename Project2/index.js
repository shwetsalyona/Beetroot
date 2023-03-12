const burgerBtn = document.getElementById("burger");

function toggleBurger() {
    const appHeader = document.getElementById("appHeader");
    appHeader.classList.toggle("is-open");
}

if (burgerBtn) {
    burgerBtn.addEventListener("click", toggleBurger);
}
