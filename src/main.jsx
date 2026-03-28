import './styles/global.css'
import './styles/layout.css'
import './styles/components.css'

document.addEventListener('DOMContentLoaded', () => {
  const moonBtn = document.querySelector('.moonBtn');
  const html = document.documentElement;

  // Check Local Storage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.setAttribute('data-theme', 'dark');
    updateIcon(true);
  }

  moonBtn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      updateIcon(false);
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      updateIcon(true);
    }
  });

  function updateIcon(isDark) {
    if (isDark) {
      moonBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="icon"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    } else {
      moonBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  }
});
