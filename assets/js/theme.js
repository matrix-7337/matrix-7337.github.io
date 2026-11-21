(function () {
  const THEMES = [
    { id: 'red', label: 'Pink & red' },
    { id: 'noir', label: 'Black & red brutalist' }
  ];
  const KEY = 'site-theme';

  function stored() {
    try { return localStorage.getItem(KEY); } catch (error) { return null; }
  }

  function save(value) {
    try { localStorage.setItem(KEY, value); } catch (error) {}
  }

  function index() {
    const id = document.documentElement.getAttribute('data-theme') || 'red';
    const found = THEMES.findIndex(function (theme) { return theme.id === id; });
    return found === -1 ? 0 : found;
  }

  function apply(next) {
    const theme = THEMES[next];
    document.documentElement.setAttribute('data-theme', theme.id);
    save(theme.id);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('theme', theme.id);
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    } catch (error) {}
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.setAttribute('title', 'Theme: ' + theme.label + ' (click to switch)');
      button.setAttribute('aria-label', 'Switch theme, current: ' + theme.label);
    }
  }

  function normalize(value) {
    if (value === 'mint' || value === 'japanese') return 'red';
    return THEMES.some(function (theme) { return theme.id === value; }) ? value : null;
  }

  const query = new URLSearchParams(window.location.search).get('theme');
  const saved = normalize(query) || normalize(stored()) || 'red';
  document.documentElement.setAttribute('data-theme', saved);
  apply(index());

  document.addEventListener('click', function (event) {
    if (!event.target.closest('#theme-toggle')) return;
    apply((index() + 1) % THEMES.length);
  });
})();
