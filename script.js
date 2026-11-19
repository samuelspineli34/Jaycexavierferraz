const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Abrir menu');
}));

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');
const themeMeta = document.querySelector('#theme-color-meta');

function applyTheme(theme) {
  const isDark = theme === 'dark';
  root.dataset.theme = isDark ? 'dark' : 'light';
  if (themeButton) {
    themeButton.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
    themeButton.setAttribute('aria-pressed', String(isDark));
    themeButton.title = isDark ? 'Ativar tema claro' : 'Ativar tema escuro';
  }
  if (themeIcon) themeIcon.textContent = isDark ? '☀' : '☾';
  if (themeLabel) themeLabel.textContent = isDark ? 'Tema claro' : 'Tema escuro';
  if (themeMeta) themeMeta.content = isDark ? '#191817' : '#f8f5f0';
}

let savedTheme = 'light';
try { savedTheme = localStorage.getItem('jayce-theme') || 'light'; } catch (_) {}
applyTheme(savedTheme);

themeButton?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('jayce-theme', next); } catch (_) {}
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
