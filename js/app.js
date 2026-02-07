(function () {
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
