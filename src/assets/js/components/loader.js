document.querySelectorAll('.load-news-btn').forEach(btn => {
    const spinner = btn.querySelector('.spinner-dots');
    const text = btn.querySelector('.btn-text');
    const dots = spinner.querySelectorAll('span');
    let isAnimating = false;

    btn.addEventListener('click', () => {
        if (!isAnimating) {
            // Start animation
            dots[0].classList.add('animate-zoom-dot');
            dots[1].classList.add('animate-zoom-dot', 'delay-150');
            dots[2].classList.add('animate-zoom-dot', 'delay-300');
            isAnimating = true;
        } else {
            // Stop animation
            dots.forEach(dot => dot.classList.remove('animate-zoom-dot', 'delay-150', 'delay-300'));
            isAnimating = false;
        }
    });
});

