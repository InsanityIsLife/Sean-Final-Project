document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('glow');
        });

        link.addEventListener('mouseout', () => {
            link.classList.remove('glow');
        });
    });
});