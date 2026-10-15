const logoTL = document.getElementById('tlLogo');

if (logoTL) {
    logoTL.addEventListener('mouseenter', () => {
        logoTL.classList.add('hovered');
    });

    logoTL.addEventListener('mouseleave', () => {
        logoTL.classList.remove('hovered');
    });
}
