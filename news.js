/* Local topic and keyword filtering. Stories remain readable without JavaScript. */
(() => {
    const tools = document.getElementById('news-tools');
    const search = document.getElementById('news-search');
    const count = document.getElementById('results-count');
    const empty = document.getElementById('empty-results');
    if (!tools || !search || !count || !empty) return;
    const cards = [...document.querySelectorAll('.news-card')];
    const buttons = [...tools.querySelectorAll('[data-category]')];
    let category = 'All';
    function filter() {
        const words = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
        let visible = 0;
        cards.forEach(card => {
            const matches = (category === 'All' || card.dataset.category === category) && words.every(word => card.dataset.search.includes(word));
            card.hidden = !matches;
            if (matches) visible++;
        });
        buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
        empty.hidden = visible !== 0;
        count.textContent = `${visible} ${visible === 1 ? 'story' : 'stories'}${category === 'All' ? '' : ` · ${category}`} · Newest first`;
    }
    buttons.forEach(button => button.addEventListener('click', () => { category = button.dataset.category; filter(); }));
    search.addEventListener('input', filter);
    tools.hidden = false;
})();
