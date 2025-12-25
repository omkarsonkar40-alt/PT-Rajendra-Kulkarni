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

    // Update page language attribute
    document.documentElement.setAttribute("lang", lang);
  }

  // Setup language select (combo box)
  function setupLanguageSwitcher() {
    const select = document.getElementById("language-switcher");
    if (!select) return;

    // Set saved language as selected value
    select.value = getCurrentLanguage();

    // Change language on selection
    select.addEventListener("change", function () {
      setLanguage(this.value);
    });
  }

  // Initialize on page load
  document.addEventListener("DOMContentLoaded", function () {
    const currentLang = getCurrentLanguage();
    applyLanguage(currentLang);
    setupLanguageSwitcher();
  });
})();
