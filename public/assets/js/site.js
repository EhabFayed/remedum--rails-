/* ROOTS OF BEAUTY — inner pages behaviour */
(function () {
  'use strict';

  /* mobile nav */
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
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

/* ---------------------------------------------------------------------
   Product face maps ("Where does Sub-Q / Mid / Fine work?")
   The same interactive map as the home page (خريطة الوجه التفاعلية):
   drawn treatment zones, pulsing points and the detail card, limited to
   the zones this product treats. The data block below is copied from
   main.js so both maps always say the same thing — keep them in sync.
   --------------------------------------------------------------------- */
(function () {
  'use strict';
  var faceMap = document.querySelector('.facemap__frame[data-product]');
  if (!faceMap) return;
  var IS_AR = (document.documentElement.lang || '').toLowerCase().indexOf('ar') === 0;
  var PRODUCT = faceMap.getAttribute('data-product');

  var FACE_IMGS = {
    fine: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=200&h=200&q=85',
    mid: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=200&h=200&q=85',
    subq: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?auto=format&fit=crop&w=200&h=200&q=85'
  };

  var FACE_PRODUCTS = IS_AR ? {
    fine: { name: 'ReMedium Fine', depth: 'حقن سطحي', months: [9, 12], img: FACE_IMGS.fine },
    mid: { name: 'ReMedium Mid', depth: 'حقن متوسط العمق', months: [12, 18], img: FACE_IMGS.mid },
    subq: { name: 'ReMedium Sub-Q', depth: 'حقن عميق تحت الجلد', months: [18, 24], img: FACE_IMGS.subq }
  } : {
    fine: { name: 'ReMedium Fine', depth: 'Superficial placement', months: [9, 12], img: FACE_IMGS.fine },
    mid: { name: 'ReMedium Mid', depth: 'Mid-depth placement', months: [12, 18], img: FACE_IMGS.mid },
    subq: { name: 'ReMedium Sub-Q', depth: 'Deep, sub-Q placement', months: [18, 24], img: FACE_IMGS.subq }
  };
  var DUR_MAX = 24; /* months — the end of the scale drawn in the popup */

  var L = IS_AR ? {
    duration: 'المدة المعتادة',
    months: function (a, b) { return a + '–' + b + ' شهرًا'; },
    scaleEnd: '24ش'
  } : {
    duration: 'Typical duration',
    months: function (a, b) { return a + '&ndash;' + b + ' months'; },
    scaleEnd: '24m'
  };

  var FACE_POINTS = IS_AR ? {
    forehead: {
      zone: 'أعلى الوجه',
      title: 'خطوط الجبهة',
      text: 'خطوط أفقية تبقى ظاهرة والوجه في وضع الراحة. تُحقن سطحيًا فيخفّ الخط دون إضافة وزن لأعلى الوجه.',
      products: ['fine']
    },
    temple: {
      zone: 'أعلى الوجه',
      title: 'الأصداغ',
      text: 'فراغ في منطقة الصدغ يضيّق الثلث العلوي ويجعل محيط العين يبدو مرهقًا. يُعاد بناؤه بحقن عميق داعم.',
      products: ['subq']
    },
    periorbital: {
      zone: 'محيط العين',
      title: 'الخطوط حول العين',
      text: 'خطوط دقيقة تتفرّع من الزاوية الخارجية للعين. الجلد هنا الأرقّ في الوجه، لذا يأخذ أخفّ جل في التشكيلة.',
      products: ['fine']
    },
    cheek: {
      zone: 'منتصف الوجه',
      title: 'الخدود',
      text: 'فقدان الحجم والتحديد فوق عظمة الخد. الحقن العميق هنا يعيد الدعامة التي يرتكز عليها أسفل الوجه كله.',
      products: ['subq']
    },
    smile: {
      zone: 'منتصف الوجه',
      title: 'خطوط الابتسامة',
      text: 'الطية الأنفية الشفوية الممتدة من الأنف إلى زاوية الفم. تُملأ بعمق متوسط فتخفّ الطية ويبقى التعبير طبيعيًا.',
      products: ['mid']
    },
    lips: {
      zone: 'أسفل الوجه',
      title: 'الشفاه',
      text: 'تحديد حواف الشفة، وترطيب جسمها، وتوازن النسبة بين الشفة العلوية والسفلية.',
      products: ['mid']
    },
    jaw: {
      zone: 'أسفل الوجه',
      title: 'خط الفك',
      text: 'زاوية فك محددة وانتقال أنظف نحو الرقبة — يُبنى بأكثر منتجات التشكيلة دعمًا.',
      products: ['subq']
    },
    chin: {
      zone: 'أسفل الوجه',
      title: 'الذقن',
      text: 'إبراز وتوازن الثلث السفلي. العمق المتوسط يهذّب الملامح، ويُستخدم الحقن العميق حين يحتاج الذقن إبرازًا حقيقيًا.',
      products: ['mid', 'subq']
    },
    neck: {
      zone: 'الرقبة',
      title: 'خطوط الرقبة',
      text: 'خطوط الرقبة الأفقية، تُعالج بأخفّ المنتجات لأن الجلد هنا رقيق ودائم الحركة.',
      products: ['fine']
    }
  } : {
    forehead: {
      zone: 'Upper Face',
      title: 'Forehead Lines',
      text: 'Horizontal lines that stay visible when the face is at rest. Placed superficially, so the line softens without adding weight to the upper face.',
      products: ['fine']
    },
    temple: {
      zone: 'Upper Face',
      title: 'Temples',
      text: 'Hollowing at the temple that narrows the upper third and makes the eye area look tired. Rebuilt with a deep, structural placement.',
      products: ['subq']
    },
    periorbital: {
      zone: 'Eye Area',
      title: 'Peri-orbital Lines',
      text: 'Fine lines fanning out from the outer corner of the eye. The skin here is the thinnest on the face, so it takes the lightest gel in the range.',
      products: ['fine']
    },
    cheek: {
      zone: 'Mid Face',
      title: 'Cheeks',
      text: 'Loss of volume and definition over the cheekbone. Deep placement here restores the support that everything in the lower face rests on.',
      products: ['subq']
    },
    smile: {
      zone: 'Mid Face',
      title: 'Smile Lines',
      text: 'The nasolabial fold running from the nose to the corner of the mouth. Filled at mid depth so the fold softens and the expression stays natural.',
      products: ['mid']
    },
    lips: {
      zone: 'Lower Face',
      title: 'Lips',
      text: 'Definition of the lip border, hydration of the body, and balanced proportion between the upper and lower lip.',
      products: ['mid']
    },
    jaw: {
      zone: 'Lower Face',
      title: 'Jawline',
      text: 'A defined jaw angle and a cleaner transition into the neck — built with the most structural product in the range.',
      products: ['subq']
    },
    chin: {
      zone: 'Lower Face',
      title: 'Chin',
      text: 'Projection and balance of the lower third. Mid depth refines the contour; sub-Q is used when the chin needs real projection.',
      products: ['mid', 'subq']
    },
    neck: {
      zone: 'Neck',
      title: 'Neck Lines',
      text: 'Horizontal neck lines, treated with the lightest product because the skin here is thin and constantly in motion.',
      products: ['fine']
    }
  };

  /* zone geometry and point positions — identical to the home page map */
  var REGIONS = {
    forehead: '<ellipse class="fzone" cx="49" cy="42" rx="12.2" ry="4.6"/>',
    temple: '<ellipse class="fzone" cx="71" cy="50" rx="3.6" ry="5.4" transform="rotate(12 71 50)"/><ellipse class="fzone" cx="28.5" cy="52" rx="4" ry="5.6" transform="rotate(-12 28.5 52)"/>',
    periorbital: '<ellipse class="fzone" cx="33.5" cy="59" rx="3.6" ry="4.8" transform="rotate(-22 33.5 59)"/><ellipse class="fzone" cx="67" cy="58" rx="3.4" ry="4.8" transform="rotate(22 67 58)"/>',
    cheek: '<ellipse class="fzone" cx="33" cy="70" rx="7.4" ry="6"/><ellipse class="fzone" cx="64.5" cy="68" rx="6.8" ry="5.8"/>',
    smile: '<ellipse class="fzone" cx="41.5" cy="78" rx="2.6" ry="4.6" transform="rotate(-9 41.5 78)"/><ellipse class="fzone" cx="58" cy="77" rx="2.6" ry="4.6" transform="rotate(9 58 77)"/>',
    lips: '<ellipse class="fzone" cx="50" cy="84" rx="9" ry="3.8"/>',
    jaw: '<path class="fzone fzone--band" d="M30 77C31.5 84 35.5 89.8 42 93.2 45.6 95 48.4 95.4 50.5 95.4c2.4 0 5.6-.4 9.2-2.2 6.4-3 10-8 11.4-14.6"/>',
    chin: '<ellipse class="fzone" cx="50" cy="95" rx="6" ry="4.2"/>',
    neck: '<ellipse class="fzone" cx="48" cy="104" rx="9.2" ry="1.4"/><ellipse class="fzone" cx="47.5" cy="108" rx="8.4" ry="1.3"/>'
  };
  var POINTS = [
    ['forehead', 49, 35], ['temple', 71, 41.7], ['periorbital', 33.5, 49.2],
    ['cheek', 33, 58.3], ['smile', 58, 64.2], ['lips', 50, 70],
    ['jaw', 64, 73.5], ['chin', 50, 79.2], ['neck', 47, 87]
  ];
  var tone = function (key) {
    var ps = FACE_POINTS[key].products;
    return ps.length > 1 ? 'duo' : ps[0];
  };
  var mine = POINTS.filter(function (p) {
    var d = FACE_POINTS[p[0]]; return d && d.products.indexOf(PRODUCT) > -1;
  });

  /* ---- build the map ---- */
  var svg = '<svg class="fregions" viewBox="0 0 100 120" aria-hidden="true">' +
    mine.map(function (p) {
      return '<g class="fregion fregion--' + tone(p[0]) + '" data-region="' + p[0] + '">' + REGIONS[p[0]] + '</g>';
    }).join('') + '</svg>';
  var btns = mine.map(function (p, i) {
    var d = FACE_POINTS[p[0]];
    return '<button type="button" class="fpoint fpoint--' + tone(p[0]) + '" data-point="' + p[0] + '"' +
      ' style="--x:' + p[1] + '%;--y:' + p[2] + '%;--d:' + (i * 0.3) + 's" aria-expanded="false"' +
      ' aria-label="' + d.title + '"><span class="fpoint__dot"></span><span class="fpoint__label">' + d.title + '</span></button>';
  }).join('');
  var popHtml = '<div class="fpop" role="dialog" aria-labelledby="pmapTitle" data-side="right" hidden>' +
    '<button type="button" class="fpop__close" aria-label="' + (IS_AR ? 'إغلاق' : 'Close') + '">' +
    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
    '<span class="fpop__zone"></span><h3 class="fpop__title" id="pmapTitle"></h3>' +
    '<p class="fpop__text"></p><div class="fpop__prods"></div></div>';
  faceMap.insertAdjacentHTML('beforeend', svg + btns);
  /* like the home map, the card is the frame's sibling: beside the face on
     desktop, in the flow below it on smaller screens */
  faceMap.insertAdjacentHTML('afterend', popHtml);
  var hint = document.createElement('p');
  hint.className = 'facemap__hint';
  hint.innerHTML = '<i></i> ' + (IS_AR ? 'اضغطي أي نقطة على الوجه' : 'Tap any point on the face');
  faceMap.parentNode.appendChild(hint);

  var pop = faceMap.parentNode.querySelector('.fpop');
  var popClose = pop.querySelector('.fpop__close');
  var popZone = pop.querySelector('.fpop__zone');
  var popTitle = pop.querySelector('.fpop__title');
  var popText = pop.querySelector('.fpop__text');
  var popProds = pop.querySelector('.fpop__prods');
  var points = Array.prototype.slice.call(faceMap.querySelectorAll('.fpoint'));
  var regions = Array.prototype.slice.call(faceMap.querySelectorAll('.fregion'));
  var activePoint = null;
  var isSheet = function () { return window.matchMedia('(max-width:992px)').matches; };

  /* same placement rules as the home map: beside the face on desktop,
     below it on smaller screens */
  var placePop = function (btn) {
    if (isSheet()) {
      pop.dataset.side = 'none'; pop.style.left = ''; pop.style.top = '';
      return;
    }
    var frameBox = faceMap.getBoundingClientRect();
    var boundsBox = faceMap.closest('.container').getBoundingClientRect();
    var fh = faceMap.clientHeight, fw = faceMap.clientWidth;
    var px = btn.offsetLeft, py = btn.offsetTop;
    var pw = pop.offsetWidth, ph = pop.offsetHeight, gap = 26;
    var min = boundsBox.left - frameBox.left;
    var max = boundsBox.right - frameBox.left - pw;
    var near = px > fw / 2 ? 'right' : 'left';
    var far = near === 'right' ? 'left' : 'right';
    var tries = [
      { side: near, left: near === 'right' ? fw + gap : -gap - pw },
      { side: far, left: far === 'right' ? fw + gap : -gap - pw },
      { side: near, left: near === 'right' ? px + gap : px - gap - pw },
      { side: far, left: far === 'right' ? px + gap : px - gap - pw }
    ];
    var fit = null;
    for (var i = 0; i < tries.length && !fit; i++) {
      if (tries[i].left >= min && tries[i].left <= max) fit = tries[i];
    }
    var side = fit ? fit.side : 'none';
    var left = fit ? fit.left : Math.max(min, Math.min(px - pw / 2, max));
    var top = Math.max(0, Math.min(py - ph / 2, fh - ph));
    pop.dataset.side = side;
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
    pop.style.setProperty('--tip', (py - top) + 'px');
    pop.style.setProperty('--lead', Math.max(0, side === 'right' ? left - px : px - (left + pw)) + 'px');
  };

  var renderPop = function (key) {
    var data = FACE_POINTS[key];
    popZone.textContent = data.zone;
    popTitle.textContent = data.title;
    popText.textContent = data.text;
    /* this page's product first, then any other product that treats the zone */
    var ids = data.products.slice().sort(function (a, b) { return (b === PRODUCT) - (a === PRODUCT); });
    popProds.innerHTML = ids.map(function (id) {
      var p = FACE_PRODUCTS[id];
      var from = (p.months[0] / DUR_MAX) * 100, to = (p.months[1] / DUR_MAX) * 100;
      return '<div class="fpop-prod fpop-prod--' + id + '">' +
        '<span class="fpop-prod__img"><img src="' + p.img + '" alt="' + p.name + '" loading="lazy"><i class="fpop-prod__swatch"></i></span>' +
        '<div class="fpop-prod__body"><b dir="ltr">' + p.name + '</b><span>' + p.depth + '</span></div>' +
        '<div class="fpop-dur"><div class="fpop-dur__head"><span>' + L.duration + '</span><b>' + L.months(p.months[0], p.months[1]) + '</b></div>' +
        '<div class="fpop-dur__track"><span class="fpop-dur__fill" style="left:' + from + '%;right:' + (100 - to) + '%"></span></div>' +
        '<div class="fpop-dur__scale"><i>0</i><i>6</i><i>12</i><i>18</i><i>' + L.scaleEnd + '</i></div></div>' +
      '</div>';
    }).join('');
  };

  var markRegions = function (cls, key) {
    regions.forEach(function (r) { r.classList.toggle(cls, r.dataset.region === key); });
  };
  var closePop = function (refocus) {
    if (!activePoint) return;
    activePoint.classList.remove('is-on');
    activePoint.setAttribute('aria-expanded', 'false');
    if (refocus) activePoint.focus();
    activePoint = null;
    markRegions('is-on', null);
    pop.classList.remove('is-open');
    window.setTimeout(function () { if (!activePoint) pop.hidden = true; }, 300);
  };
  var openPop = function (btn) {
    if (activePoint === btn) { closePop(false); return; }
    points.forEach(function (p) { p.classList.remove('is-on'); p.setAttribute('aria-expanded', 'false'); });
    activePoint = btn;
    btn.classList.add('is-on');
    btn.setAttribute('aria-expanded', 'true');
    markRegions('is-on', btn.dataset.point);
    renderPop(btn.dataset.point);
    pop.hidden = false;
    placePop(btn);
    requestAnimationFrame(function () {
      pop.classList.add('is-open');
      if (isSheet()) pop.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  };

  points.forEach(function (btn) {
    btn.addEventListener('click', function (e) { e.stopPropagation(); openPop(btn); });
    var preview = function () { if (!activePoint) markRegions('is-hover', btn.dataset.point); };
    var clear = function () { markRegions('is-hover', null); };
    btn.addEventListener('mouseenter', preview);
    btn.addEventListener('mouseleave', clear);
    btn.addEventListener('focus', preview);
    btn.addEventListener('blur', clear);
  });
  popClose.addEventListener('click', function () { closePop(true); });
  pop.addEventListener('click', function (e) { e.stopPropagation(); });
  document.addEventListener('click', function () { closePop(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' || e.key === 'Esc') closePop(true); });
  window.addEventListener('resize', function () { if (activePoint) placePop(activePoint); }, { passive: true });
})();
