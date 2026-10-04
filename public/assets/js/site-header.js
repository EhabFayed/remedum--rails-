/* ROOTS OF BEAUTY — site header (inner pages and home pages) */
(function () {
  'use strict';

  /* mobile nav */
  var burger = document.querySelector('.site-header .burger');
  var nav = document.querySelector('.site-header .nav');
  if (burger && nav) {
    // backdrop, Escape and scroll lock: the drawer used to close only via the burger
    var scrim = document.createElement('div');
    scrim.className = 'nav-scrim';
    document.body.appendChild(scrim);
    var setNav = function (open) {
      burger.classList.toggle('is-open', open);
      nav.classList.toggle('is-open', open);
      scrim.classList.toggle('is-on', open);
      document.documentElement.classList.toggle('nav-locked', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    burger.addEventListener('click', function () { setNav(!nav.classList.contains('is-open')); });
    scrim.addEventListener('click', function () { setNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
    // tap to open dropdowns on touch layouts
    nav.querySelectorAll('.nav__item').forEach(function (item) {
      var link = item.querySelector('.nav__link');
      if (!item.querySelector('.dropdown') || !link) return;
      link.addEventListener('click', function (e) {
        if (window.matchMedia('(max-width: 1280px)').matches) {
          e.preventDefault();
          item.classList.toggle('is-open');
        }
      });
    });
  }
})();
