const burgerElement = document.getElementById('burger');
const burgerElementListener = function () {
    console.dir(burgerElement);
};

burgerElement.addEventListener('click', burgerElementListener);

