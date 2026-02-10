import './checkbox.js';
import './switch.js';

(function () {
  // Theme switcher
  const themeSwitcher = document.getElementById("themeSwitcher");
  if (themeSwitcher) {
    // Set dropdown to current theme
    const currentTheme = document.documentElement.getAttribute("data-theme") || "theme-1";
    themeSwitcher.value = currentTheme;
    themeSwitcher.addEventListener("change", function () {
      document.documentElement.setAttribute("data-theme", this.value);
    });
  }
})();
