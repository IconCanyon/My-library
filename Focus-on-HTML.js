(function enableFocus() {
  document.querySelectorAll('span, a, label').forEach(el => {
    if (!el.hasAttribute('tabindex')) {
      el.setAttribute('tabindex', '0');
    }
  });
})();

// Usage Method
// You can now add focus to any HTML element
// by placing it inside ('span, a, label').
