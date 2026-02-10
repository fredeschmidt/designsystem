// Switch JS: wire up ARIA state + keyboard handling
document.addEventListener('DOMContentLoaded', function () {
  const controls = Array.from(document.querySelectorAll('.ds-switch'));
  controls.forEach(control => {
    function isDisabled() {
      return control.getAttribute('aria-disabled') === 'true' || control.getAttribute('data-disabled') === 'true' || control.disabled;
    }

    function syncState() {
      const checked = control.getAttribute('data-checked') === 'true';
      control.setAttribute('role', 'switch');
      control.setAttribute('aria-checked', checked ? 'true' : 'false');
      if (isDisabled()) control.setAttribute('aria-disabled', 'true');
    }

    function toggle() {
      if (isDisabled()) return;
      const next = control.getAttribute('data-checked') !== 'true';
      control.setAttribute('data-checked', next ? 'true' : 'false');
      syncState();
    }

    syncState();

    control.addEventListener('click', function () {
      toggle();
    });

    control.addEventListener('keydown', function (e) {
      if (isDisabled()) return;
      if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    });
  });
});
