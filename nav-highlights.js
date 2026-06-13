document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isHidden = mobileMenu.classList.contains('hidden');
            menuIcon.setAttribute('data-lucide', isHidden ? 'menu' : 'x');
            if (window.lucide) window.lucide.createIcons();
        });
    }

    const sections = document.querySelectorAll('.section-target, #home');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = 'home';
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('text-cyber-purple', link.getAttribute('href') === `#${current}`);
            link.classList.toggle('border-cyber-purple', link.getAttribute('href') === `#${current}`);
        });
    });
});
