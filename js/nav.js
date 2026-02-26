//а ну  ка пошел нпхуй пидор (функция 1)
(function() {
    const slides = document.querySelectorAll('.bg-slide');
    if (!slides.length) return;
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 6000); 
})();

function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
}

// бургер
document.addEventListener('click', function(e) {
    const nav = document.getElementById('nav-links');
    const toggle = document.querySelector('.menu-toggle');
    if (!nav || !toggle) return;
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('active');
    }
});