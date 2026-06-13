document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.className = 'filter-btn px-4 py-2 bg-transparent text-slate-400 border border-cyber-border rounded';
            });
            btn.className = 'filter-btn px-4 py-2 bg-cyber-purple text-black rounded font-bold';
            const currentFilter = btn.getAttribute('data-filter');
            projectCards.forEach(card => {
                card.style.display = (currentFilter === 'all' || card.getAttribute('data-category') === currentFilter) ? 'flex' : 'none';
            });
        });
    });
});
