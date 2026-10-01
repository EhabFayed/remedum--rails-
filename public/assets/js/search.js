/* Site search — products & brands + knowledge articles.
   Opens from any [data-search-open] control (header icon, drawer item, the
   knowledge page's search bar) and filters /<locale>/search-index.json in
   the browser. Arabic is normalised so أ/إ/آ = ا, ة = ه, ى = ي and
   diacritics are ignored. */
(function () {
  'use strict';
  var html = document.documentElement;
  var LOC = (html.lang || '').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';
  var openers = document.querySelectorAll('[data-search-open]');
  if (!openers.length) return;

  var index = null, loading = null, labels = {}, flat = [], active = -1, lastFocus = null;
  var SUGGEST = LOC === 'ar'
    ? ['ReMedium', 'HA Filler', 'Hairont', 'GynWell', 'OVDs', 'الشفاه', 'التخزين']
    : ['ReMedium', 'HA Filler', 'Hairont', 'GynWell', 'OVDs', 'Lips', 'Storage'];

  var norm = function (s) {
    return String(s || '').toLowerCase()
      .replace(/[ً-ْٰـ]/g, '')       // tashkeel + tatweel
      .replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و').replace(/ئ/g, 'ي')
      .replace(/[®™’'".,:;!?()\[\]{}|/\\–—-]+/g, ' ').replace(/\s+/g, ' ').trim();
  };
  var esc = function (s) {
    return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  };

  /* ---- overlay ---- */
  var root = document.createElement('div');
  root.className = 'srch';
  root.hidden = true;
  root.innerHTML =
    '<div class="srch__backdrop" data-search-close></div>' +
    '<div class="srch__panel" role="dialog" aria-modal="true" aria-labelledby="srchLabel">' +
      '<div class="srch__bar">' +
        '<svg class="srch__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
        '<label id="srchLabel" class="srch__sr" for="srchInput"></label>' +
        '<input id="srchInput" class="srch__input" type="search" autocomplete="off" spellcheck="false" ' +
          'role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="srchList">' +
        '<button type="button" class="srch__close" data-search-close><span aria-hidden="true">✕</span></button>' +
      '</div>' +
      '<div class="srch__body" id="srchList" role="listbox"></div>' +
      '<p class="srch__hint" aria-hidden="true"></p>' +
    '</div>';
  document.body.appendChild(root);
  var input = root.querySelector('.srch__input');
  var body = root.querySelector('.srch__body');


  var load = function () {
    if (index) return Promise.resolve(index);
    if (loading) return loading;
    loading = fetch('/' + LOC + '/search-index.json', { headers: { Accept: 'application/json' } })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (d) {
        index = d; labels = d.labels || {};
        index.groups.forEach(function (g) {
          g.items.forEach(function (it) {
            it._t = norm(it.title); it._x = norm([it.text, it.tag, it.keywords].join(' '));
          });
        });
        applyLabels();
        return index;
      })
      .catch(function () { loading = null; body.innerHTML = '<p class="srch__empty">…</p>'; });
    return loading;
  };
  var applyLabels = function () {
    input.placeholder = labels.placeholder || '';
    root.querySelector('#srchLabel').textContent = labels.open || '';
    root.querySelector('.srch__close').setAttribute('aria-label', labels.close || 'Close');
    hint.textContent = labels.hint || '';
  };

  var score = function (it, terms) {
    var s = 0;
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i];
      if (it._t.indexOf(t) === 0) s += 6;
      else if ((' ' + it._t).indexOf(' ' + t) > -1) s += 5;
      else if (it._t.indexOf(t) > -1) s += 4;
      else if ((' ' + it._x).indexOf(' ' + t) > -1) s += 2;
      else if (it._x.indexOf(t) > -1) s += 1;
      else return 0;                                   // every word must match
    }
    return s;
  };
  var mark = function (text, terms) {
    var out = esc(text);
    if (!terms.length) return out;
    // highlight on the original text: build a loose pattern per term
    terms.forEach(function (t) {
      if (t.length < 2) return;
      var pat = t.split('').map(function (ch) {
        if (ch === 'ا') return '[اأإآٱ]';
        if (ch === 'ه') return '[هة]';
        if (ch === 'ي') return '[يىئ]';
        if (ch === 'و') return '[وؤ]';
        return ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }).join('[\\u064B-\\u0652\\u0640]*');
      try { out = out.replace(new RegExp('(' + pat + ')', 'gi'), '<mark>$1</mark>'); } catch (e) {}
    });
    return out;
  };

  var render = function () {
    if (!index) return;
    var q = norm(input.value);
    var terms = q ? q.split(' ') : [];
    flat = []; active = -1;
    if (!terms.length) {
      body.innerHTML = '<p class="srch__label">' + esc(labels.suggest) + '</p><div class="srch__chips">' +
        SUGGEST.map(function (s) { return '<button type="button" class="srch__chip">' + esc(s) + '</button>'; }).join('') + '</div>';
      input.setAttribute('aria-expanded', 'false');
      return;
    }
    var html = '', total = 0;
    index.groups.forEach(function (g) {
      var hits = g.items.map(function (it) { return [score(it, terms), it]; })
        .filter(function (x) { return x[0] > 0; })
        .sort(function (a, b) { return b[0] - a[0]; }).slice(0, 8);
      if (!hits.length) return;
      total += hits.length;
      html += '<section class="srch__group"><h3 class="srch__label">' + esc(g.label) +
        ' <span>' + hits.length + '</span></h3><ul>';
      hits.forEach(function (x) {
        var it = x[1], id = 'srchOpt' + flat.length;
        flat.push(it);
        html += '<li><a class="srch__item' + (g.key === 'knowledge' ? ' srch__item--post' : '') + '" id="' + id + '" role="option" href="' + esc(it.url) + '">' +
          (it.image ? '<img class="srch__thumb" src="' + esc(it.image) + '" alt="" loading="lazy">' :
            '<span class="srch__dot" aria-hidden="true"></span>') +
          '<span class="srch__txt"><b>' + mark(it.title, terms) + '</b>' +
          (it.tag ? '<em>' + esc(it.tag) + '</em>' : '') +
          (it.text ? '<small>' + mark(it.text, terms) + '</small>' : '') +
          '</span></a></li>';
      });
      html += '</ul></section>';
    });
    body.innerHTML = total ? html :
      '<div class="srch__empty"><b>' + esc(labels.empty) + '</b><p>' + esc(labels.empty_hint) + '</p></div>';
    input.setAttribute('aria-expanded', total ? 'true' : 'false');
  };

  var setActive = function (i) {
    var items = body.querySelectorAll('.srch__item');
    if (!items.length) return;
    active = (i + items.length) % items.length;
    items.forEach(function (a, k) { a.classList.toggle('is-active', k === active); });
    items[active].scrollIntoView({ block: 'nearest' });
    input.setAttribute('aria-activedescendant', items[active].id);
  };

  var open = function (q) {
    lastFocus = document.activeElement;
    root.hidden = false;
    html.classList.add('srch-locked');
    requestAnimationFrame(function () { root.classList.add('is-open'); });
    if (typeof q === 'string') input.value = q;
    input.focus();
    load().then(render);
  };
  var close = function () {
    root.classList.remove('is-open');
    html.classList.remove('srch-locked');
    setTimeout(function () { root.hidden = true; }, 200);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  };

  openers.forEach(function (el) {
    if (el.tagName === 'FORM') {
      el.addEventListener('submit', function (e) {
        e.preventDefault();
        var f = el.querySelector('input'); open(f ? f.value : '');
      });
    } else {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        // the drawer may be open when the search item inside it is tapped
        var burger = document.querySelector('.burger.is-open');
        if (burger) burger.click();
        open();
      });
    }
  });
  root.addEventListener('click', function (e) {
    if (e.target.closest('[data-search-close]')) { close(); return; }
    var chip = e.target.closest('.srch__chip');
    if (chip) { input.value = chip.textContent; render(); input.focus(); }
  });
  input.addEventListener('input', render);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (e.key === 'Enter') {
      var items = body.querySelectorAll('.srch__item');
      var target = items[active >= 0 ? active : 0];
      if (target) { e.preventDefault(); window.location.href = target.getAttribute('href'); }
    }
  });
  document.addEventListener('keydown', function (e) {
    if (!root.hidden && e.key === 'Escape') { close(); return; }
    // "/" opens search when not typing somewhere else
    if (root.hidden && e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement || {}).tagName)) {
      e.preventDefault(); open();
    }
    // keep Tab inside the dialog
    if (!root.hidden && e.key === 'Tab') {
      var f = root.querySelectorAll('input, button, a[href]');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  // warm the index after the page settles, so the first search feels instant
  if ('requestIdleCallback' in window) requestIdleCallback(function () { load(); }, { timeout: 4000 });
})();
