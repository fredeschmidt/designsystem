// Minimal behavior for toggle component: handle click, keyboard, and aria state
(function(){
  function initToggle(el){
    if(!el) return;
    el.tabIndex = el.getAttribute('tabindex') || 0;
    el.setAttribute('role', el.getAttribute('role') || 'switch');
    if(!el.hasAttribute('aria-checked')) el.setAttribute('aria-checked','false');

    el.addEventListener('click', function(){
      if(el.classList.contains('ds-toggle--disabled')) return;
      const next = el.getAttribute('aria-checked') === 'true' ? 'false' : 'true';
      el.setAttribute('aria-checked', next);
      el.dispatchEvent(new CustomEvent('ds-toggle-change',{detail:{checked: next==='true'}}));
    });

    el.addEventListener('keydown', function(e){
      if(e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter'){
        e.preventDefault();
        el.click();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.ds-toggle').forEach(initToggle);
  });

  window.dsToggleInit = initToggle;
})();
