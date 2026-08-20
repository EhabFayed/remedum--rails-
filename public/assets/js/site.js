/* ROOTS OF BEAUTY — inner pages behaviour */
(function () {
  'use strict';

  /* mobile nav */
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });
    // tap to open dropdowns on touch layouts
    nav.querySelectorAll('.nav__item').forEach(function (item) {
      var link = item.querySelector('.nav__link');
      if (!item.querySelector('.dropdown') || !link) return;
      link.addEventListener('click', function (e) {
        if (window.matchMedia('(max-width: 1080px)').matches) {
          e.preventDefault();
          item.classList.toggle('is-open');
        }
      });
    });
  }

  /* product page tabs */
  document.querySelectorAll('[data-tabs]').forEach(function (root) {
    var tabs = root.querySelectorAll('.tab');
    var panels = root.querySelectorAll('.tab-panel');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); });
        panels.forEach(function (p) { p.hidden = p.dataset.panel !== tab.dataset.tab; });
      });
    });
  });

  /* medical gate: checkbox enables the button; entry reveals gated content */
  var gate = document.querySelector('[data-gate]');
  if (gate) {
    var check = gate.querySelector('input[type="checkbox"]');
    var enter = gate.querySelector('[data-gate-enter]');
    var gated = document.querySelectorAll('.gated');
    var open = function () {
      gate.hidden = true;
      gated.forEach(function (el) { el.hidden = false; });
    };
    if (sessionStorage.getItem('rb-gate') === '1') open();
    if (check && enter) {
      enter.disabled = true;
      check.addEventListener('change', function () { enter.disabled = !check.checked; });
      enter.addEventListener('click', function () {
        sessionStorage.setItem('rb-gate', '1');
        open();
      });
    }
  }

  /* choice chips (visual selection only — real form wiring comes with the backend) */
  document.querySelectorAll('.choice-chips').forEach(function (group) {
    var multi = group.hasAttribute('data-multi');
    group.querySelectorAll('.cchip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        if (!multi) group.querySelectorAll('.cchip').forEach(function (c) { c.classList.remove('is-on'); });
        chip.classList.toggle('is-on');
      });
    });
  });

  /* quote form: client-side stub until the backend exists */
  var form = document.querySelector('[data-quote-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var consent = form.querySelector('[data-consent]');
      if (consent && !consent.checked) {
        consent.closest('.checkbox-row').style.color = '#B4736B';
        return;
      }
      form.querySelector('[data-form-body]').hidden = true;
      form.querySelector('[data-form-thanks]').hidden = false;
      window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
    });
  }

  /* footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
