(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const year = document.getElementById('year');

  year.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem('bekzod-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  function setTheme(theme) {
    root.dataset.theme = theme;
    const next = theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', `Switch to ${next} mode`);
    toggle.setAttribute('title', `Switch to ${next} mode`);
  }

  toggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('bekzod-theme', nextTheme);
  });
})();
