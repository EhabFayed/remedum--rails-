/* Before / after slider: drag (range input) to reveal, arrows / dots / swipe-free buttons to change case. */
(function () {
  'use strict';
  document.querySelectorAll('[data-ba]').forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-ba-slide]'));
    var section = root.closest('.ba-sec') || document;
    var dots = Array.prototype.slice.call(section.querySelectorAll('[data-ba-dot]'));
    var current = 0;
    slides.forEach(function (s) {
      var range = s.querySelector('.ba__range');
      var set = function () { s.style.setProperty('--pos', range.value + '%'); };
      range.addEventListener('input', set);
      set();
    });
    var show = function (i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) {
        s.hidden = k !== current;
        if (k === current) { var r = s.querySelector('.ba__range'); r.value = 50; s.style.setProperty('--pos', '50%'); }
      });
      dots.forEach(function (d, k) { d.classList.toggle('is-active', k === current); d.setAttribute('aria-selected', k === current ? 'true' : 'false'); });
    };
    /* same visual direction in both languages: the left arrow goes back, the right arrow forward */
    root.querySelector('[data-ba-prev]').addEventListener('click', function () { show(current - 1); });
    root.querySelector('[data-ba-next]').addEventListener('click', function () { show(current + 1); });
    dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); }); });
  });
})();
