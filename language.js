(function () {
  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "site_language";

  // 1. Language Handling
  function setLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLanguage() {
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    setLanguage(savedLang);
    const select = document.getElementById("language-switcher");
    if (select) select.value = savedLang;
  }

  // 2. Mobile Menu Handling
  function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');

    if (btn && nav) {
      btn.addEventListener('click', () => {
        nav.classList.toggle('active');
        btn.setAttribute('aria-expanded', nav.classList.contains('active'));
      });
    }
  }

  // 3. Initialize
  document.addEventListener("DOMContentLoaded", function () {
    initLanguage();
    setupMobileMenu();

    const select = document.getElementById("language-switcher");
    if (select) {
      select.addEventListener("change", function () {
        setLanguage(this.value);
      });
    }
  });

})();