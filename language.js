(function () {
  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "site_language";

  // 1. Language Handling
  function setLanguage(lang) {
    // A. Update the HTML tag (This changes the CSS visibility)
    document.documentElement.setAttribute("lang", lang);
    
    // B. Save to Memory (So other pages know)
    localStorage.setItem(STORAGE_KEY, lang);

    // C. Update the Dropdown Selector (if it exists on screen)
    const select = document.getElementById("language-switcher");
    if (select) {
      select.value = lang;
    }
  }

  function initLanguage() {
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    setLanguage(savedLang);
  }

  // 2. Mobile Menu Handling
  function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');

    if (btn && nav) {
      // Clone button to remove old listeners (Safety step)
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);

      newBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Accessibility attribute
        newBtn.setAttribute('aria-expanded', nav.classList.contains('active'));
      });
    }
  }

  // 3. EXECUTION FLOW

  // STEP A: Run IMMEDIATELY (Prevents the "Flash" of English)
  initLanguage();

  // STEP B: Run when HTML is ready (Attaches clicks and menus)
  document.addEventListener("DOMContentLoaded", function () {
    // Re-sync the dropdown UI
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    const select = document.getElementById("language-switcher");
    if (select) {
      select.value = savedLang;
      // Attach the change listener
      select.addEventListener("change", function () {
        setLanguage(this.value);
      });
    }

    // Setup the Mobile Menu
    setupMobileMenu();
  });

})();