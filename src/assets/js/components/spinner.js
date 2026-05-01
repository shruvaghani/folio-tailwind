(function () {
    const btn = document.getElementById('loadBtn');
    if (!btn) return;

    btn.addEventListener('click', function () {
        const pressed = this.getAttribute('aria-pressed') === 'true';
        // toggle state
        this.setAttribute('aria-pressed', String(!pressed));
        this.querySelector('.load-text')?.classList.toggle('hidden', !pressed);
        this.querySelector('.load-spinner')?.classList.toggle('hidden', pressed);
    });
})();

// Zuck stories and stories data

var timestamp = function () {
    var timeIndex = 0;
    var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];

    var now = new Date();
    var shift = shifts[timeIndex++] || 0;
    var date = new Date(now - shift * 1000);

    return date.getTime() / 1000;
};