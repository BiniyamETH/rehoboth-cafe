(() => {
  const search = document.getElementById('menu-search');
  const buttons = document.querySelectorAll('.filter-btn');
  const categories = document.querySelectorAll('.menu-category');
  const status = document.getElementById('menu-status');
  const empty = document.getElementById('menu-empty');
  const reset = document.getElementById('menu-reset');
  const validFilters = [...buttons].map(b => b.dataset.filter);
  let filter = 'all';

  // Accent-insensitive matching, so "sauteed" finds "sautéed"
  const normalise = str => str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  categories.forEach(cat => {
    cat.querySelectorAll('.menu-item').forEach(item => {
      item.dataset.search = normalise(item.textContent + ' ' + cat.querySelector('h2').textContent);
    });
  });

  function apply() {
    const terms = normalise(search.value.trim()).split(/\s+/).filter(Boolean);
    let shown = 0;

    categories.forEach(cat => {
      const inFilter = filter === 'all' || cat.dataset.category === filter;
      let visibleInCat = 0;
      cat.querySelectorAll('.menu-item').forEach(item => {
        const match = inFilter && terms.every(t => item.dataset.search.includes(t));
        item.hidden = !match;
        if (match) visibleInCat++;
      });
      cat.hidden = visibleInCat === 0;
      shown += visibleInCat;
    });

    empty.hidden = shown !== 0;
    const where = filter === 'all' ? '' : ' in ' + document.querySelector(`[data-filter="${filter}"]`).textContent;
    status.textContent = terms.length || filter !== 'all'
      ? `Showing ${shown} ${shown === 1 ? 'item' : 'items'}${where}.`
      : '';
  }

  function setFilter(value, updateHash = true) {
    filter = validFilters.includes(value) ? value : 'all';
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
    if (updateHash) history.replaceState(null, '', filter === 'all' ? location.pathname : '#' + filter);
    apply();
  }

  buttons.forEach(b => b.addEventListener('click', () => setFilter(b.dataset.filter)));
  search.addEventListener('input', apply);
  search.addEventListener('keydown', e => { if (e.key === 'Escape') { search.value = ''; apply(); } });
  reset.addEventListener('click', () => { search.value = ''; setFilter('all'); search.focus(); });

  // Support links such as menu.html#breakfast
  const fromHash = location.hash.slice(1);
  setFilter(validFilters.includes(fromHash) ? fromHash : 'all', false);
})();
