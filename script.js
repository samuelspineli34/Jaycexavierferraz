(() => {
  const root = document.documentElement;
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const themeButton = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const themeLabel = document.querySelector('.theme-label');
  const themeMeta = document.querySelector('#theme-color-meta');

  const closeMenu = () => {
    nav?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
  };

  menuButton?.addEventListener('click', () => {
    const open = !nav?.classList.contains('open');
    nav?.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', event => {
    if (!nav?.classList.contains('open')) return;
    if (!nav.contains(event.target) && !menuButton?.contains(event.target)) closeMenu();
  });

  function applyTheme(theme) {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    themeButton?.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
    themeButton?.setAttribute('aria-pressed', String(dark));
    themeButton && (themeButton.title = dark ? 'Ativar tema claro' : 'Ativar tema escuro');
    if (themeIcon) themeIcon.textContent = dark ? '☀' : '☾';
    if (themeLabel) themeLabel.textContent = dark ? 'Tema claro' : 'Tema escuro';
    if (themeMeta) themeMeta.content = dark ? '#191817' : '#f8f5f0';
  }

  let initialTheme = 'light';
  try { initialTheme = localStorage.getItem('jayce-theme') || 'light'; } catch (_) {}
  applyTheme(initialTheme);

  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('jayce-theme', next); } catch (_) {}
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // One-page navigation: native anchors, smooth scrolling and current-section feedback.
  const sectionLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const observedSections = sectionLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && observedSections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-28% 0px -62% 0px', threshold: 0 });
    observedSections.forEach(section => observer.observe(section));
  }
})();
