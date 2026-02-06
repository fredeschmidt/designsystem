(function () {
  // Theme toggle
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? null : "dark";
      if (next) document.documentElement.setAttribute("data-theme", next);
      else document.documentElement.removeAttribute("data-theme");
    });
  }

  // Type switcher
  const typeSwitcher = document.getElementById("typeSwitcher");
  if (typeSwitcher) {
    // Set dropdown to current type
    const currentType = document.documentElement.getAttribute("data-type") || "type-1";
    typeSwitcher.value = currentType;
    typeSwitcher.addEventListener("change", function () {
      document.documentElement.setAttribute("data-type", this.value);
    });
  }
})();
