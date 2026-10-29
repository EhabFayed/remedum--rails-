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
    // tap to open dropdowns on touch layouts; a second tap on an opened entry follows its link,
    // since an entry can be a page of its own (quality & accreditations) with no sub-item for it
    nav.querySelectorAll('.nav__item').forEach(function (item) {
      var link = item.querySelector('.nav__link');
      if (!item.querySelector('.dropdown') || !link) return;
      link.addEventListener('click', function (e) {
        if (window.matchMedia('(max-width: 1280px)').matches && !item.classList.contains('is-open')) {
          e.preventDefault();
          item.classList.add('is-open');
        }
      });
    });
    // nested brand menus (ReMedium / HA Filler): tap the brand to list its
    // products; the "full collection" link at the top opens the brand page
    nav.querySelectorAll('.dropdown__group').forEach(function (group) {
      var parent = group.querySelector('.dropdown__parent');
      if (!parent) return;
      parent.addEventListener('click', function (e) {
        if (window.matchMedia('(max-width: 1280px)').matches) {
          e.preventDefault();
          group.classList.toggle('is-open');
        }
      });
    });
  }
  /* back-to-top: appears once the page is scrolled a screen or so */
  var toTop = document.querySelector('[data-to-top]');
  if (toTop) {
    var toTopTick = false;
    var updateToTop = function () {
      toTop.classList.toggle('is-on', window.scrollY > 600);
      toTopTick = false;
    };
    window.addEventListener('scroll', function () {
      if (!toTopTick) { toTopTick = true; window.requestAnimationFrame(updateToTop); }
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    updateToTop();
  }
})();
