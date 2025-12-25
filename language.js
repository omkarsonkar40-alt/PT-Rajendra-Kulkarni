/* =========================
   Language Switcher Logic (Corrected)
   ========================= */

(function () {
  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "site_language";

  // 1. Determine language (Saved or Default)
  function getCurrentLanguage() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  // 2. Set Language on <html> tag and Save to LocalStorage
  function setLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  // 3. Initialize Language on Page Load
  function initLanguage() {
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);
    
    // Update the Combo Box value if it exists on page
    const select = document.getElementById("language-switcher");
    if (select) {
      select.value = currentLang;
    }
  }

  // 4. Setup Event Listeners for the Combo Box
  function setupListener() {
    const select = document.getElementById("language-switcher");
    if (!select) return;

    select.addEventListener("change", function () {
      setLanguage(this.value);
    });
  }

  // Run immediately to prevent flash (if script is loaded in head or high up)
  // or runs normally at end of body.
  initLanguage();

  // Wait for DOM to ensure element exists before attaching listeners
  document.addEventListener("DOMContentLoaded", function () {
    // Re-run init in case the select box wasn't ready the first time
    initLanguage(); 
    setupListener();
  });

})();