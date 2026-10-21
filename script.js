(() => {
  // Old .html links still open the page, so tidy the address bar to the short form (menu.html -> menu, index.html -> /)
  if (/^https?:$/.test(location.protocol) && /\.html$/.test(location.pathname)) {
    history.replaceState(history.state, '', location.pathname.replace(/(index)?\.html$/, '') + location.search + location.hash);
  }

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  const navLinks = nav.querySelectorAll('a');
  const mobileQuery = window.matchMedia('(max-width: 680px)');

  // Safari before 14 only has the older addListener on media queries
  function onMediaChange(query, fn) {
    if (query.addEventListener) query.addEventListener('change', fn);
    else if (query.addListener) query.addListener(fn);
  }

  function setMenu(open) {
    header.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  navLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));

  // Escape closes the mobile menu and returns focus to the toggle
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && header.classList.contains('open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Close when clicking outside, or when resizing back to desktop
  document.addEventListener('click', e => {
    if (header.classList.contains('open') && !header.contains(e.target)) setMenu(false);
  });
  onMediaChange(mobileQuery, e => { if (!e.matches) setMenu(false); });

  // Mark the nav link for the section currently in view (skipped on browsers without IntersectionObserver)
  const sections = [...navLinks]
    .filter(a => a.getAttribute('href').startsWith('#'))
    .map(a => document.querySelector(a.getAttribute('href')));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => {
          if (a.getAttribute('href') === '#' + entry.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => s && observer.observe(s));
  }

  // Gentle fade-in as sections enter the viewport (skipped for reduced motion)
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('can-reveal');
    const revealer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealer.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => revealer.observe(el));
  }

  // Dish slideshow: rotates every 5 s, pauses on hover/focus, never auto-rotates for reduced-motion users
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const slides = [...carousel.querySelectorAll('.slide')];
    const dots = [...document.querySelectorAll('.dots .dot')];
    const pauseBtn = document.querySelector('.car-pause');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let index = 0, timer = null, userPaused = reduce, hovering = false;

    function go(n) {
      index = (n + slides.length) % slides.length;
      slides.forEach((s, i) => {
        const on = i === index;
        s.classList.toggle('is-active', on);
        s.setAttribute('aria-hidden', String(!on));
        s.querySelectorAll('a').forEach(a => { a.tabIndex = on ? 0 : -1; });
      });
      // Load the next image ahead of time so it is ready to fade in
      const next = slides[(index + 1) % slides.length].querySelector('img');
      if (next.loading === 'lazy') next.loading = 'eager';
      dots.forEach((d, i) => { if (i === index) d.setAttribute('aria-current', ''); else d.removeAttribute('aria-current'); });
    }
    function schedule() {
      clearInterval(timer);
      if (!userPaused && !hovering && !document.hidden) timer = setInterval(() => go(index + 1), 5000);
    }
    function syncPause() {
      pauseBtn.textContent = userPaused ? 'Play' : 'Pause';
      pauseBtn.setAttribute('aria-pressed', String(userPaused));
      pauseBtn.setAttribute('aria-label', userPaused ? 'Play slideshow' : 'Pause slideshow');
      carousel.querySelector('.slides').setAttribute('aria-live', userPaused ? 'polite' : 'off');
    }

    carousel.querySelector('.car-prev').addEventListener('click', () => { go(index - 1); schedule(); });
    carousel.querySelector('.car-next').addEventListener('click', () => { go(index + 1); schedule(); });
    dots.forEach(d => d.addEventListener('click', () => { go(Number(d.dataset.i)); schedule(); }));
    pauseBtn.addEventListener('click', () => { userPaused = !userPaused; syncPause(); schedule(); });
    carousel.addEventListener('mouseenter', () => { hovering = true; schedule(); });
    carousel.addEventListener('mouseleave', () => { hovering = false; schedule(); });
    carousel.addEventListener('focusin', () => { hovering = true; schedule(); });
    carousel.addEventListener('focusout', () => { hovering = false; schedule(); });
    carousel.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { go(index - 1); schedule(); }
      if (e.key === 'ArrowRight') { go(index + 1); schedule(); }
    });
    // Swipe on touch screens
    let startX = null;
    carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', e => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) { go(index + (dx < 0 ? 1 : -1)); schedule(); }
      startX = null;
    });
    document.addEventListener('visibilitychange', schedule);
    syncPause(); go(0); schedule();
  }

  // Gallery page: category filters and a photo viewer
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    const items = [...gallery.querySelectorAll('.g-item')];
    const gButtons = gallery.querySelectorAll('[data-g]');
    gButtons.forEach(btn => btn.addEventListener('click', () => {
      gButtons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      items.forEach(item => { item.hidden = btn.dataset.g !== 'all' && item.dataset.cat !== btn.dataset.g; });
    }));

    const box = document.getElementById('lightbox');
    const boxImg = document.getElementById('lightbox-img');
    const boxCap = document.getElementById('lightbox-cap');
    let current = 0;
    const visible = () => items.filter(i => !i.hidden);
    const show = item => {
      const img = item.querySelector('img');
      boxImg.src = img.dataset.full || img.currentSrc || img.src;
      boxImg.alt = img.alt;
      boxCap.textContent = item.querySelector('.g-name').textContent;
      current = visible().indexOf(item);
    };
    const step = dir => { const list = visible(); show(list[(current + dir + list.length) % list.length]); };
    if (box && typeof box.showModal === 'function') {
      items.forEach(item => item.querySelector('.g-open').addEventListener('click', () => { show(item); box.showModal(); }));
      document.getElementById('lb-prev').addEventListener('click', () => step(-1));
      document.getElementById('lb-next').addEventListener('click', () => step(1));
      document.getElementById('lb-close').addEventListener('click', () => box.close());
      box.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
      });
      box.addEventListener('click', e => { if (e.target === box) box.close(); });
    }
  }

  // Visit page: highlight today's opening hours (Toronto time)
  const hoursTable = document.querySelector('.hours-table');
  if (hoursTable) {
    const name = new Intl.DateTimeFormat('en-CA', { weekday: 'long', timeZone: 'America/Toronto' }).format(new Date());
    hoursTable.querySelectorAll('tr').forEach(tr => {
      if (tr.querySelector('th').textContent === name) {
        tr.classList.add('is-today');
        tr.querySelector('th').insertAdjacentHTML('beforeend', ' <span class="today-tag">Today</span>');
      }
    });
  }

  // Home page: "Open now" / "Closed" badge (Toronto time). Keep hours in sync with the Visit section.
  const openBadge = document.getElementById('open-badge');
  if (openBadge) {
    const parts = new Intl.DateTimeFormat('en-CA', { weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'America/Toronto' })
      .formatToParts(new Date()).reduce((o, p) => (o[p.type] = p.value, o), {});
    const mins = (+parts.hour % 24) * 60 + +parts.minute; // some older browsers write midnight as 24
    const [open, close] = parts.weekday === 'Sun' ? [10 * 60, 19 * 60] : [9 * 60, 20 * 60];
    const isOpen = mins >= open && mins < close;
    openBadge.textContent = isOpen ? 'Open now' : 'Closed now';
    openBadge.classList.add(isOpen ? 'is-open' : 'is-closed');
    openBadge.hidden = false;
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
