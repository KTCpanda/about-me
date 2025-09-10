document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });
});
//一番下の↑ボタン
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault(); 
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // スムーズスクロールです
            });
        });
    }
});
