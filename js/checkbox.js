// Checkbox JS: wire up ARIA, indeterminate state, and keyboard handling
document.addEventListener('DOMContentLoaded', function () {
  const controls = Array.from(document.querySelectorAll('.ds-checkbox'));
  controls.forEach(control => {
    const input = control.querySelector('.ds-checkbox__input');
    const label = control.querySelector('.ds-checkbox__label');

    // initialize state from input
    function syncState() {
      const checked = input.checked;
      const ind = input.hasAttribute('data-indeterminate') && input.getAttribute('data-indeterminate') === 'true';
      control.setAttribute('data-checked', checked ? 'true' : 'false');
      control.setAttribute('data-indeterminate', ind ? 'true' : 'false');
      control.setAttribute('role', 'checkbox');
      control.setAttribute('tabindex', input.disabled ? '-1' : '0');
      control.setAttribute('aria-checked', ind ? 'mixed' : (checked ? 'true' : 'false'));
      if (input.disabled) control.setAttribute('aria-disabled', 'true');
    }

    syncState();

    // Click on the visual control toggles the native input
    control.addEventListener('click', function (e) {
      if (input.disabled) return;
      // If indeterminate, clear indeterminate and set checked
      if (input.hasAttribute('data-indeterminate') && input.getAttribute('data-indeterminate') === 'true') {
        input.removeAttribute('data-indeterminate');
        input.indeterminate = false;
        input.checked = true;
      } else {
        input.checked = !input.checked;
      }
      input.dispatchEvent(new Event('change', { bubbles: true }));
      syncState();
    });

    // Keyboard support: Space toggles
    control.addEventListener('keydown', function (e) {
      if (input.disabled) return;
      if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
        e.preventDefault();
        control.click();
      }
    });

    // Keep in sync if underlying input changes programmatically
    input.addEventListener('change', function () {
      syncState();
    });
  });
});
