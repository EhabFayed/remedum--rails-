/* =========================================================
   ROOTS OF BEAUTY — interactions
   Locale-aware: injected strings follow <html lang> (en / ar).
   ========================================================= */
(function () {
  'use strict';

  var IS_AR = (document.documentElement.lang || '').toLowerCase().indexOf('ar') === 0;

  /* ---------- sticky header ---------- */
  var header = document.getElementById('header');
  var onScroll = function () {
    if (window.scrollY > 90) header.classList.add('is-stuck');
    else header.classList.remove('is-stuck');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile nav ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  });
  nav.addEventListener('click', function (e) {
    var link = e.target.closest('.nav__link');
    if (link && window.matchMedia('(max-width:992px)').matches) {
      var item = link.parentElement;
      if (item.querySelector('.dropdown')) {
        e.preventDefault();
        item.classList.toggle('is-open');
        return;
      }
    }
    if (e.target.closest('a[href^="#"]')) {
      burger.classList.remove('is-open');
      nav.classList.remove('is-open');
    }
  });

  /* ---------- services accordion ---------- */
  var accordion = document.getElementById('accordion');
  if (accordion) {
    accordion.addEventListener('click', function (e) {
      var head = e.target.closest('.acc__head');
      if (!head) return;
      var item = head.parentElement;
      if (item.classList.contains('is-open')) return;
      accordion.querySelectorAll('.acc').forEach(function (a) { a.classList.remove('is-open'); });
      item.classList.add('is-open');
    });
  }

  /* ---------- interactive face map ---------- */
  /* `img` = pack shot. Placeholders for now — swap in the real ReMedium
     product photography, same 1:1 crop. `months` drives the 0–24 scale. */
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

  var faceMap = document.getElementById('faceMap');
  if (faceMap) {
    var pop = document.getElementById('facePop');
    var popClose = document.getElementById('fpopClose');
    var popZone = document.getElementById('fpopZone');
    var popTitle = document.getElementById('fpopTitle');
    var popText = document.getElementById('fpopText');
    var popProds = document.getElementById('fpopProds');
    var points = Array.prototype.slice.call(faceMap.querySelectorAll('.fpoint'));
    var regions = Array.prototype.slice.call(faceMap.querySelectorAll('.fregion'));
    var prodBtns = Array.prototype.slice.call(document.querySelectorAll('.fprod'));
    var activePoint = null;
    var isSheet = function () { return window.matchMedia('(max-width:992px)').matches; };

    var placePop = function (btn) {
      if (isSheet()) {
        /* the card sits in the flow below the face — drop any desktop offsets */
        pop.dataset.side = 'none';
        pop.style.left = '';
        pop.style.top = '';
        return;
      }
      var frameBox = faceMap.getBoundingClientRect();
      var boundsBox = faceMap.closest('.container').getBoundingClientRect();
      var fh = faceMap.clientHeight;
      /* the point is centred on its --x/--y by a -50%/-50% transform, which
         offsetLeft/offsetTop do not see — so those values are the centre */
      var px = btn.offsetLeft;
      var py = btn.offsetTop;
      var pw = pop.offsetWidth;
      var ph = pop.offsetHeight;
      var gap = 26;
      /* the popup may travel anywhere inside the section container, in
         coordinates relative to the frame */
      var fw = faceMap.clientWidth;
      var min = boundsBox.left - frameBox.left;
      var max = boundsBox.right - frameBox.left - pw;
      /* park it clear of the photo on the nearer side, so the popup never
         covers the face it is describing — a leader line closes the gap */
      var near = px > fw / 2 ? 'right' : 'left';
      var far = near === 'right' ? 'left' : 'right';
      /* clear of the photo first, beside the point second, clamped last */
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
      pop.style.setProperty('--lead',
        Math.max(0, side === 'right' ? left - px : px - (left + pw)) + 'px');
    };

    var renderPop = function (key) {
      var data = FACE_POINTS[key];
      if (!data) return;
      popZone.textContent = data.zone;
      popTitle.textContent = data.title;
      popText.textContent = data.text;
      popProds.innerHTML = data.products.map(function (id) {
        var p = FACE_PRODUCTS[id];
        var from = (p.months[0] / DUR_MAX) * 100;
        var to = (p.months[1] / DUR_MAX) * 100;
        return '<div class="fpop-prod fpop-prod--' + id + '">' +
          '<span class="fpop-prod__img">' +
            '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">' +
            '<i class="fpop-prod__swatch"></i>' +
          '</span>' +
          '<div class="fpop-prod__body">' +
            '<b dir="ltr">' + p.name + '</b>' +
            '<span>' + p.depth + '</span>' +
          '</div>' +
          '<div class="fpop-dur">' +
            '<div class="fpop-dur__head">' +
              '<span>' + L.duration + '</span>' +
              '<b>' + L.months(p.months[0], p.months[1]) + '</b>' +
            '</div>' +
            '<div class="fpop-dur__track">' +
              '<span class="fpop-dur__fill" style="left:' + from + '%;right:' + (100 - to) + '%"></span>' +
            '</div>' +
            '<div class="fpop-dur__scale"><i>0</i><i>6</i><i>12</i><i>18</i><i>' + L.scaleEnd + '</i></div>' +
          '</div>' +
        '</div>';
      }).join('');
    };

    /* light up the drawn zone that belongs to a point */
    var markRegions = function (cls, key) {
      regions.forEach(function (r) {
        r.classList.toggle(cls, r.dataset.region === key);
      });
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
      points.forEach(function (p) {
        p.classList.remove('is-on');
        p.setAttribute('aria-expanded', 'false');
      });
      activePoint = btn;
      btn.classList.add('is-on');
      btn.setAttribute('aria-expanded', 'true');
      markRegions('is-on', btn.dataset.point);
      renderPop(btn.dataset.point);
      pop.hidden = false;
      placePop(btn);
      /* next frame, so the transition actually runs */
      requestAnimationFrame(function () { pop.classList.add('is-open'); });
    };

    points.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        openPop(btn);
      });
      /* previewing the zone before committing to a click */
      var preview = function () {
        if (!activePoint) markRegions('is-hover', btn.dataset.point);
      };
      var clear = function () { markRegions('is-hover', null); };
      btn.addEventListener('mouseenter', preview);
      btn.addEventListener('mouseleave', clear);
      btn.addEventListener('focus', preview);
      btn.addEventListener('blur', clear);
    });

    popClose.addEventListener('click', function () { closePop(true); });
    pop.addEventListener('click', function (e) { e.stopPropagation(); });
    document.addEventListener('click', function () { closePop(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') closePop(true);
    });
    window.addEventListener('resize', function () {
      if (activePoint) placePop(activePoint);
    }, { passive: true });

    /* product key ↔ points */
    var filterBy = function (id) {
      faceMap.classList.toggle('is-filtered', !!id);
      var covers = function (key) {
        var data = FACE_POINTS[key];
        return !!id && !!data && data.products.indexOf(id) > -1;
      };
      points.forEach(function (p) {
        p.classList.toggle('is-match', covers(p.dataset.point));
      });
      /* the zones preview what the selected product actually treats */
      regions.forEach(function (r) {
        r.classList.toggle('is-match', covers(r.dataset.region));
      });
      prodBtns.forEach(function (b) {
        var on = b.dataset.product === id;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    };

    prodBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        filterBy(b.classList.contains('is-on') ? null : b.dataset.product);
      });
    });
  }

  /* ---------- process steps: chip <-> card sync ---------- */
  var stepsWrap = document.getElementById('steps');
  var stepsBar = document.getElementById('stepsBar');
  if (stepsWrap && stepsBar) {
    var stepEls = Array.prototype.slice.call(stepsWrap.querySelectorAll('.step'));
    var chipEls = Array.prototype.slice.call(stepsBar.querySelectorAll('.step-chip'));
    var DEFAULT_STEP = 1;

    var setStep = function (n) {
      stepEls.forEach(function (el, i) { el.classList.toggle('is-active', i === n); });
      chipEls.forEach(function (el, i) { el.classList.toggle('is-active', i === n); });
    };

    stepEls.forEach(function (el, i) {
      el.addEventListener('mouseenter', function () { setStep(i); });
    });
    chipEls.forEach(function (el, i) {
      el.addEventListener('mouseenter', function () { setStep(i); });
      el.addEventListener('focus', function () { setStep(i); });
      el.addEventListener('click', function () { setStep(i); });
    });

    // leaving the section restores the default highlighted step
    document.getElementById('process').addEventListener('mouseleave', function () {
      setStep(DEFAULT_STEP);
    });
    setStep(DEFAULT_STEP);
  }

  /* ---------- testimonials slider ---------- */
  var DATA = IS_AR ? [
    {
      title: 'مستندات تصمد أمام التفتيش',
      text: '«ما أقنعنا لم يكن السعر، بل الملف الذي وصل مع الطلب: تسجيل، وتشغيلة، وصلاحية، وفاتورة — كلها في مكان واحد. حين زارنا المفتش انتهى الحديث في أربع دقائق.»',
      name: 'د. ليلى الحربي',
      role: 'عيادة جلدية، الرياض',
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=85'
    },
    {
      title: 'ظروف النقل مضبوطة فعلًا',
      text: '«كنا نستلم المخزون بحرارة الغرفة دون تفسير. الآن كل توريد يصل مختومًا وموثّقًا، والمنتج يتصرف بالطريقة نفسها من علبة إلى أخرى.»',
      name: 'د. عمر ناصر',
      role: 'مركز تجميل، جدة',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=85'
    },
    {
      title: 'التدريب صنع الفرق',
      text: '«الفريق لم يسلّم صناديق فحسب: جلسوا مع حاقنينا، وشرحوا البروتوكول خطوة خطوة، وعادوا بعد شهر لمراجعة النتائج معنا.»',
      name: 'د. هدى القحطاني',
      role: 'عيادة جلدية وليزر، الدمام',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=85'
    },
    {
      title: 'رقم واحد، وإجابة واحدة',
      text: '«حين يطرأ سؤال عن تشغيلة أحصل على إجابة مباشرة في اليوم نفسه ومعها المستند. هذه الموثوقية تساوي أكثر من أي خصم.»',
      name: 'د. فيصل العتيبي',
      role: 'مدير طبي، الخبر',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85'
    },
    {
      title: 'المريضات يسألن — ونستطيع أن نريهن',
      text: '«المريضات يبحثن عن كل شيء الآن. أن نستطيع عرض التسجيل ومصدر المنتج ينهي الشك قبل أن يبدأ.»',
      name: 'د. نورة الشهري',
      role: 'عيادة تجميل، الرياض',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85'
    }
  ] : [
    {
      title: 'Paperwork That Survives an Inspection',
      text: '“What sold us was not the price, it was the file that came with the order. Registration, batch, expiry, invoice — all of it in one place. When the inspector visited, the conversation took four minutes.”',
      name: 'Dr. Layla Al-Harbi',
      role: 'Dermatology Clinic, Riyadh',
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=85'
    },
    {
      title: 'The Cold Chain Actually Holds',
      text: '“We used to receive stock at room temperature with no explanation. Now every delivery arrives sealed and logged, and the product behaves exactly the same from one box to the next.”',
      name: 'Dr. Omar Nasser',
      role: 'Aesthetic Center, Jeddah',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=85'
    },
    {
      title: 'Training Made the Difference',
      text: '“The team did not just deliver boxes. They sat with our injectors, walked through the protocol, and came back a month later to review the results with us.”',
      name: 'Dr. Huda Al-Qahtani',
      role: 'Skin & Laser Clinic, Dammam',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=85'
    },
    {
      title: 'One Number, One Answer',
      text: '“When a batch question comes up I get a straight answer the same day, with the document attached. That reliability is worth more than a discount.”',
      name: 'Dr. Faisal Al-Otaibi',
      role: 'Medical Director, Khobar',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85'
    },
    {
      title: 'Patients Ask, and We Can Show Them',
      text: '“Patients research everything now. Being able to show the registration and the source of the product ends the doubt before it starts.”',
      name: 'Dr. Noura Al-Shehri',
      role: 'Cosmetic Clinic, Riyadh',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85'
    }
  ];

  var thumbs = document.getElementById('testiThumbs');
  if (thumbs) {
    var items = Array.prototype.slice.call(thumbs.children);
    var elTitle = document.getElementById('testiTitle');
    var elText = document.getElementById('testiText');
    var elName = document.getElementById('testiName');
    var elRole = document.getElementById('testiRole');
    var elPhoto = document.getElementById('testiPhoto');
    var current = 0;

    var render = function (i) {
      current = (i + DATA.length) % DATA.length;
      var d = DATA[current];
      [elTitle, elText, elName, elRole, elPhoto].forEach(function (el) { el.style.opacity = '0'; });
      window.setTimeout(function () {
        elTitle.textContent = d.title;
        elText.textContent = d.text;
        elName.textContent = d.name;
        elRole.textContent = d.role;
        elPhoto.src = d.photo;
        elPhoto.alt = d.name;
        [elTitle, elText, elName, elRole, elPhoto].forEach(function (el) {
          el.style.transition = 'opacity .4s ease';
          el.style.opacity = '1';
        });
      }, 180);
      items.forEach(function (li, n) { li.classList.toggle('is-active', n === current); });
    };

    items.forEach(function (li, n) {
      li.addEventListener('click', function () { render(n); });
    });
    document.getElementById('testiPrev').addEventListener('click', function () { render(current - 1); });
    document.getElementById('testiNext').addEventListener('click', function () { render(current + 1); });
  }

  /* ---------- why-choose-us active card ---------- */
  var whyGrid = document.querySelector('.why__grid');
  if (whyGrid) {
    var cards = Array.prototype.slice.call(whyGrid.querySelectorAll('.why-card'));
    cards.forEach(function (c) {
      c.addEventListener('mouseenter', function () {
        cards.forEach(function (x) { x.classList.remove('is-active'); });
        c.classList.add('is-active');
      });
    });
  }

  /* ---------- counters ---------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll('.counter'));
  var runCounter = function (el) {
    var target = parseFloat(el.dataset.target);
    var from = parseFloat(el.dataset.from || 0);
    var suffix = el.dataset.suffix || '';
    var start = null;
    var dur = 1600;
    var tick = function (ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (target - from) * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  /* ---------- scroll reveal ---------- */
  var revealTargets = [
    '.sec-head', '.about__media', '.about__content', '.acc',
    '.facemap__stage', '.facemap__side', '.step', '.testi__media', '.testi__content',
    '.why-card', '.post', '.footer__cta', '.footer__col',
    '.compare__row', '.certs__head', '.certs__list li'
  ];
  document.querySelectorAll(revealTargets.join(',')).forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 90 + 'ms';
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        if (entry.target.classList.contains('counter')) runCounter(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    counters.forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
    counters.forEach(runCounter);
  }
})();
