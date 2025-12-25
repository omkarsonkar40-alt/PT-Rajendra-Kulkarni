/* =========================
   Language Switcher Logic
   ========================= */

(function () {
  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "site_language";

  // Get saved language or default
  function getCurrentLanguage() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  // Save language choice
  function setLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  // Show / hide language blocks
  function applyLanguage(lang) {
    const allLangBlocks = document.querySelectorAll("[data-lang]");
    allLangBlocks.forEach(block => {
      block.style.display =
        block.getAttribute("data-lang") === lang ? "block" : "none";
    });

    // Update active state (optional visual use later)
    document.documentElement.setAttribute("lang", lang);
  }

  // Attach click handlers to language menu
  function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll("[data-set-lang]");
    langButtons.forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const lang = this.getAttribute("data-set-lang");
        setLanguage(lang);
      });
    });
  }

  // Initialize on page load
  document.addEventListener("DOMContentLoaded", function () {
    const currentLang = getCurrentLanguage();
    applyLanguage(currentLang);
    setupLanguageSwitcher();
  });
})();
