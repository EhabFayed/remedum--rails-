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

  /* choice chips — a chip group is a radio set unless it carries data-multi */
  document.querySelectorAll('.choice-chips').forEach(function (group) {
    var multi = group.hasAttribute('data-multi');
    group.querySelectorAll('.cchip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        if (!multi) group.querySelectorAll('.cchip').forEach(function (c) { c.classList.remove('is-on'); });
        chip.classList.toggle('is-on');
      });
    });
  });

  /* quote form → POST /leads */
  var form = document.querySelector('[data-quote-form]');
  if (form) {
    var IS_AR = (document.documentElement.lang || '').toLowerCase().indexOf('ar') === 0;
    var val = function (name) {
      var el = form.querySelector('[name="' + name + '"]');
      return el ? el.value.trim() : '';
    };
    var picked = function (key) {
      var g = form.querySelector('[data-field="' + key + '"]');
      if (!g) return [];
      return Array.prototype.map.call(g.querySelectorAll('.cchip.is-on'), function (c) {
        return c.textContent.trim();
      });
    };
    var checked = function (name) {
      var el = form.querySelector('[name="' + name + '"]');
      return !!(el && el.checked);
    };
    var say = function (msg, bad) {
      var box = form.querySelector('[data-form-error]');
      if (!box) return;
      box.hidden = false;
      box.textContent = msg;
      box.style.color = bad ? '#B4736B' : '';
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var consent = form.querySelector('[data-consent]');
      if (consent && !consent.checked) {
        consent.closest('.checkbox-row').style.color = '#B4736B';
        say(IS_AR ? 'يلزم الموافقة على سياسة الخصوصية قبل الإرسال.'
                  : 'Please agree to the Privacy Policy before sending.', true);
        return;
      }
      if (!val('name') || (!val('phone') && !val('email'))) {
        say(IS_AR ? 'الاسم ووسيلة تواصل واحدة على الأقل مطلوبان.'
                  : 'A name and at least one way to reply are required.', true);
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; }
      say(IS_AR ? 'جارٍ الإرسال…' : 'Sending…', false);

      var token = document.querySelector('meta[name="csrf-token"]');
      fetch('/leads', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': token ? token.content : ''
        },
        body: JSON.stringify({
          locale: IS_AR ? 'ar' : 'en',
          source_path: location.pathname,
          company_website: val('company_website'),
          lead: {
            source: 'quote',
            name: val('name'),
            facility: val('facility'),
            city: val('city'),
            phone: val('phone'),
            email: val('email'),
            message: val('notes'),
            facility_type: picked('facility_type')[0] || '',
            volume: picked('volume')[0] || '',
            existing_client: (picked('existing')[0] || '') === (IS_AR ? 'نعم' : 'Yes'),
            visit_requested: checked('visit'),
            eligibility_ack: checked('eligibility'),
            products: picked('products')
          }
        })
      }).then(function (r) {
        return r.json().catch(function () { return { ok: false }; });
      }).then(function (d) {
        if (!d.ok) throw new Error((d.errors && d.errors[0]) || d.message || '');
        form.querySelector('[data-form-body]').hidden = true;
        form.querySelector('[data-form-thanks]').hidden = false;
        window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
      }).catch(function (err) {
        if (btn) btn.disabled = false;
        say((err && err.message) || (IS_AR ? 'تعذّر الإرسال. حاول مرة أخرى أو راسلنا على واتساب.'
                                           : 'Could not send. Try again, or reach us on WhatsApp.'), true);
      });
    });
  }

  /* footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
