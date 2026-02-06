// Small enhancement for keyboard navigation between native radio inputs
(function () {
  function handleKey(e) {
    const target = e.target;
    if (!target || target.type !== 'radio') return;
    const name = target.name;
    if (!name) return;

    const radios = Array.from(document.querySelectorAll('input[type="radio"][name="' + name + '"]'));
    const idx = radios.indexOf(target);
    if (idx === -1) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = radios[(idx + 1) % radios.length];
      next.focus();
      next.checked = true;
      next.dispatchEvent(new Event('change', { bubbles: true }));
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = radios[(idx - 1 + radios.length) % radios.length];
      prev.focus();
      prev.checked = true;
      prev.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  document.addEventListener('keydown', handleKey);
})();
