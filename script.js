const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
