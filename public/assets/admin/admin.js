/* =========================================================
   BEAUTY ROOTS — dashboard behaviour
   No build step in this app, so everything here is plain ES2019
   that runs straight from public/. Each widget is opt-in through a
   data attribute, which keeps a page that does not use it untouched.
   ========================================================= */
(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var csrf = function () { var m = $('meta[name="csrf-token"]'); return m ? m.content : ''; };

  /* ---------------------------------------------------- sidebar drawer */
  var burger = $('[data-burger]');
  if (burger) {
    burger.addEventListener('click', function () {
      var nav = $('[data-sidenav]');
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ------------------------------------------------- hold to delete
     Deleting from the dashboard is permanent. A press that has to be
     held is the cheapest guard that never trains people to click past
     a dialog. Holding is slow (1.4s); releasing cancels instantly. */
  $$('.holddel').forEach(function (btn) {
    var timer = null;
    var armed = false;

    var start = function () {
      if (armed) return;
      btn.setAttribute('data-holding', '');
      timer = setTimeout(function () {
        armed = true;
        btn.removeAttribute('data-holding');
        var label = btn.querySelector('span:last-child');
        if (label) label.textContent = '…';
        if (btn.form) btn.form.submit(); else btn.click();
      }, 1400);
    };
    var cancel = function () {
      if (timer) { clearTimeout(timer); timer = null; }
      btn.removeAttribute('data-holding');
    };

    btn.addEventListener('click', function (e) { if (!armed) e.preventDefault(); });
    btn.addEventListener('pointerdown', start);
    btn.addEventListener('pointerup', cancel);
    btn.addEventListener('pointerleave', cancel);
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); start(); }
    });
    btn.addEventListener('keyup', cancel);
  });

  /* --------------------------------------------------- language tabs */
  $$('[data-langtabs]').forEach(function (wrap) {
    var scope = wrap.closest('[data-lang-scope]') || document;
    var show = function (lang) {
      $$('.langtab', wrap).forEach(function (t) {
        var on = t.getAttribute('data-lang') === lang;
        t.classList.toggle('is-on', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      $$('[data-lang-pane]', scope).forEach(function (p) {
        p.hidden = p.getAttribute('data-lang-pane') !== lang;
      });
      scope.setAttribute('data-active-lang', lang);
      scope.dispatchEvent(new CustomEvent('langchange', { detail: lang, bubbles: true }));
    };
    $$('.langtab', wrap).forEach(function (t) {
      t.addEventListener('click', function () { show(t.getAttribute('data-lang')); });
    });
    show('ar');
  });

  /* ------------------------------------------- repeatable nested rows
     Rails nested attributes need a unique index per new row. The
     template carries NEW_RECORD and we swap in a timestamp, which is
     unique for as long as the form is open. */
  $$('[data-rows]').forEach(function (host) {
    var list = $('[data-rows-list]', host);
    var tpl = $('template[data-rows-template]', host);
    var addBtns = $$('[data-rows-add]', host);
    var noun = host.getAttribute('data-rows-noun') || 'عنصر';

    var renumber = function () {
      var live = $$('[data-row]', list).filter(function (r) { return !r.classList.contains('is-removed'); });
      live.forEach(function (row, i) {
        var badge = $('[data-row-no]', row);
        if (badge) badge.textContent = noun + ' ' + (i + 1);
        var pos = $('[data-row-position]', row);
        if (pos) pos.value = i;
        var up = $('[data-row-up]', row); if (up) up.disabled = i === 0;
        var down = $('[data-row-down]', row); if (down) down.disabled = i === live.length - 1;
      });
      var emptyMsg = $('[data-rows-empty]', host);
      if (emptyMsg) emptyMsg.hidden = live.length > 0;
    };

    var wire = function (row) {
      var up = $('[data-row-up]', row);
      var down = $('[data-row-down]', row);
      var del = $('[data-row-remove]', row);

      if (up) up.addEventListener('click', function () {
        var prev = row.previousElementSibling;
        while (prev && prev.classList.contains('is-removed')) prev = prev.previousElementSibling;
        if (prev) { list.insertBefore(row, prev); renumber(); }
      });
      if (down) down.addEventListener('click', function () {
        var next = row.nextElementSibling;
        while (next && next.classList.contains('is-removed')) next = next.nextElementSibling;
        if (next) { list.insertBefore(next, row); renumber(); }
      });
      if (del) del.addEventListener('click', function () {
        var destroy = $('[data-row-destroy]', row);
        if (destroy) {
          // Saved rows must tell the server to delete them; unsaved ones just go.
          destroy.value = '1';
          row.classList.add('is-removed');
        } else {
          row.remove();
        }
        renumber();
      });
      initRich(row);
      initPickers(row);
    };

    $$('[data-row]', list).forEach(wire);

    addBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var html = tpl.innerHTML.replace(/NEW_RECORD/g, String(Date.now()) + Math.floor(Math.random() * 1000));
        var holder = document.createElement('div');
        holder.innerHTML = html.trim();
        var row = holder.firstElementChild;
        list.appendChild(row);
        var lang = (host.closest('[data-lang-scope]') || document.body).getAttribute('data-active-lang') || 'ar';
        $$('[data-lang-pane]', row).forEach(function (p) { p.hidden = p.getAttribute('data-lang-pane') !== lang; });
        wire(row);
        renumber();
        var first = row.querySelector('input, textarea, [contenteditable]');
        if (first) first.focus();
      });
    });

    renumber();
  });

  /* ------------------------------------------------------ uploading */
  function upload(file, hint) {
    var fd = new FormData();
    fd.append('file', file);
    if (hint) fd.append('name', hint);
    return fetch('/admin/media', {
      method: 'POST', body: fd, credentials: 'same-origin',
      headers: { 'X-CSRF-Token': csrf(), 'Accept': 'application/json' }
    }).then(function (r) {
      return r.json().catch(function () { return { ok: false, message: 'تعذّر الاتصال بالخادم.' }; });
    }).then(function (d) {
      if (!d.ok) throw new Error(d.message || 'تعذّر الرفع.');
      return d;
    });
  }

  var libraryCache = null;
  function library() {
    if (libraryCache) return Promise.resolve(libraryCache);
    return fetch('/admin/media.json', { credentials: 'same-origin', headers: { 'Accept': 'application/json' } })
      .then(function (r) { return r.json(); })
      .then(function (d) { libraryCache = (d && d.media) || []; return libraryCache; })
      .catch(function () { return []; });
  }

  /* ------------------------------------------------- image pickers */
  function initPickers(root) {
    $$('[data-picker]', root || document).forEach(function (pick) {
      if (pick.__wired) return;
      pick.__wired = true;

      var urlInput = $('[data-picker-url]', pick);
      var wInput = $('[data-picker-w]', pick);
      var hInput = $('[data-picker-h]', pick);
      var prev = $('[data-picker-preview]', pick);
      var drop = $('[data-picker-drop]', pick);
      var err = $('[data-picker-error]', pick);
      var libBox = $('[data-picker-library]', pick);
      var file = $('[data-picker-file]', pick);
      var hint = pick.getAttribute('data-picker-hint') || '';

      // Brands and products store a URL but no dimensions; the size inputs are
      // simply absent there, so every read goes through these.
      var readW = function () { return wInput ? wInput.value : ''; };
      var writeSize = function (w, h) { if (wInput) wInput.value = w || ''; if (hInput) hInput.value = h || ''; };

      var render = function () {
        var url = urlInput.value;
        if (url) {
          prev.hidden = false;
          drop.hidden = true;
          $('img', prev).src = url;
          $('[data-picker-meta]', prev).textContent =
            url + (readW() ? ' · ' + readW() + '×' + hInput.value : '');
        } else {
          prev.hidden = true;
          drop.hidden = false;
        }
        var removeBtn = $('[data-picker-remove]', pick);
        if (removeBtn) removeBtn.hidden = !url;
        pick.dispatchEvent(new CustomEvent('pickchange', { bubbles: true }));
      };

      var fail = function (msg) { err.hidden = false; err.textContent = msg; };
      var set = function (d) {
        err.hidden = true;
        urlInput.value = d.url || '';
        writeSize(d.width, d.height);
        render();
      };

      var send = function (f) {
        if (!f) return;
        err.hidden = true;
        drop.textContent = 'جارٍ الرفع…';
        upload(f, hint).then(set).catch(function (e) { fail(e.message); })
          .then(function () { drop.textContent = drop.getAttribute('data-idle'); libraryCache = null; });
      };

      $$('[data-picker-upload]', pick).forEach(function (b) {
        b.addEventListener('click', function () { file.click(); });
      });
      drop.addEventListener('click', function () { file.click(); });
      file.addEventListener('change', function () { send(file.files[0]); file.value = ''; });

      pick.addEventListener('dragover', function (e) { e.preventDefault(); });
      pick.addEventListener('drop', function (e) {
        e.preventDefault();
        var f = e.dataTransfer && e.dataTransfer.files[0];
        if (f && /^image\//.test(f.type)) send(f);
      });

      var removeBtn = $('[data-picker-remove]', pick);
      if (removeBtn) removeBtn.addEventListener('click', function () { set({ url: '', width: '', height: '' }); });

      var libBtn = $('[data-picker-lib]', pick);
      if (libBtn) libBtn.addEventListener('click', function () {
        if (!libBox.hidden) { libBox.hidden = true; return; }
        libBox.hidden = false;
        libBox.innerHTML = '<p class="card__note">جارٍ التحميل…</p>';
        library().then(function (items) {
          if (!items.length) { libBox.innerHTML = '<p class="card__note">لا صور مرفوعة بعد.</p>'; return; }
          var grid = document.createElement('div');
          grid.className = 'pick__grid';
          items.forEach(function (m) {
            var b = document.createElement('button');
            b.type = 'button';
            b.title = m.filename + (m.width ? ' · ' + m.width + '×' + m.height : '');
            b.innerHTML = '<img src="' + m.url + '" alt="">';
            b.addEventListener('click', function () {
              set({ url: m.url, width: m.width, height: m.height });
              libBox.hidden = true;
            });
            grid.appendChild(b);
          });
          libBox.innerHTML = '';
          libBox.appendChild(grid);
        });
      });

      render();
    });

    // Missing alt text breaks both the screen reader and the search result,
    // so the warning lives next to the field rather than in a validation list.
    $$('[data-altwarn]', root || document).forEach(function (warn) {
      if (warn.__wired) return;
      warn.__wired = true;
      var scope = warn.closest('[data-media-group]');
      if (!scope) return;
      var check = function () {
        var hasImage = $$('[data-picker-url]', scope).some(function (i) { return i.value; });
        var missing = $$('[data-alt-input]', scope).some(function (i) { return !i.value.trim(); });
        warn.hidden = !(hasImage && missing);
      };
      scope.addEventListener('pickchange', check);
      $$('[data-alt-input]', scope).forEach(function (i) { i.addEventListener('input', check); });
      check();
    });
  }

  /* -------------------------------------------------- rich editor
     A small contenteditable editor rather than a bundled library: this
     app has no JavaScript build step, and a CDN dependency would put a
     third party between the editor and their own words. Everything it
     produces is sanitised again on the server. */
  var RICH_TAGS = ['H2','H3','P','BR','STRONG','EM','U','S','A','UL','OL','LI','BLOCKQUOTE','IMG','DIV'];

  function cleanPaste(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    doc.body.querySelectorAll('script,style,meta,link,iframe,object,embed,form,input,button,svg').forEach(function (n) { n.remove(); });
    doc.body.querySelectorAll('*').forEach(function (n) {
      if (RICH_TAGS.indexOf(n.tagName) === -1) {
        n.replaceWith.apply(n, Array.prototype.slice.call(n.childNodes));
        return;
      }
      Array.prototype.slice.call(n.attributes).forEach(function (a) {
        var keep = (n.tagName === 'A' && a.name === 'href') ||
                   (n.tagName === 'IMG' && (a.name === 'src' || a.name === 'alt'));
        if (!keep) n.removeAttribute(a.name);
      });
      if (n.tagName === 'H1') n.outerHTML = '<h2>' + n.innerHTML + '</h2>';
    });
    return doc.body.innerHTML;
  }

  function initRich(root) {
    $$('[data-rich]', root || document).forEach(function (wrap) {
      if (wrap.__wired) return;
      wrap.__wired = true;

      var body = $('[data-rich-body]', wrap);
      var store = $('[data-rich-input]', wrap);
      var err = $('[data-rich-error]', wrap);
      var file = $('[data-rich-file]', wrap);
      var hint = wrap.getAttribute('data-rich-hint') || '';

      body.innerHTML = store.value || '';

      // An "empty" contenteditable still holds <br> or <p></p>; storing that
    // would make every blank section look like it has content.
    var sync = function () {
      var hasContent = body.textContent.trim().length > 0 || !!body.querySelector('img');
      store.value = hasContent ? body.innerHTML : '';
    };
      var exec = function (cmd, val) { document.execCommand(cmd, false, val || null); body.focus(); sync(); refresh(); };

      var refresh = function () {
        $$('[data-cmd]', wrap).forEach(function (b) {
          var state = b.getAttribute('data-state');
          if (!state) return;
          var on = false;
          try {
            on = state.indexOf('format:') === 0
              ? document.queryCommandValue('formatBlock').toLowerCase() === state.slice(7)
              : document.queryCommandState(state);
          } catch (e) { on = false; }
          b.classList.toggle('is-on', on);
        });
      };

      body.addEventListener('input', function () { sync(); });
      body.addEventListener('blur', sync);
      body.addEventListener('keyup', refresh);
      body.addEventListener('mouseup', refresh);

      body.addEventListener('paste', function (e) {
        var dt = e.clipboardData;
        if (!dt) return;
        var img = Array.prototype.slice.call(dt.files || []).filter(function (f) { return /^image\//.test(f.type); })[0];
        if (img) { e.preventDefault(); insertImage(img); return; }
        var html = dt.getData('text/html');
        if (!html) return;
        e.preventDefault();
        document.execCommand('insertHTML', false, cleanPaste(html));
        sync();
      });

      body.addEventListener('drop', function (e) {
        var f = e.dataTransfer && e.dataTransfer.files[0];
        if (f && /^image\//.test(f.type)) { e.preventDefault(); insertImage(f); }
      });

      body.addEventListener('click', function (e) {
        $$('img', body).forEach(function (i) { i.classList.toggle('is-picked', i === e.target); });
      });

      function insertImage(f) {
        err.hidden = true;
        upload(f, hint).then(function (d) {
          body.focus();
          document.execCommand('insertHTML', false, '<img src="' + d.url + '" alt="">');
          sync();
          libraryCache = null;
        }).catch(function (ex) { err.hidden = false; err.textContent = ex.message; });
      }

      $$('[data-cmd]', wrap).forEach(function (b) {
        b.addEventListener('mousedown', function (e) { e.preventDefault(); });
        b.addEventListener('click', function () {
          var cmd = b.getAttribute('data-cmd');
          if (cmd === 'link') {
            var current = '';
            var sel = document.getSelection();
            if (sel && sel.anchorNode && sel.anchorNode.parentElement) {
              var a = sel.anchorNode.parentElement.closest('a');
              if (a) current = a.href;
            }
            var url = window.prompt('الرابط — يبدأ بـ https:// أو / للداخلي', current || 'https://');
            if (url === null) return;
            body.focus();
            if (!url.trim()) exec('unlink'); else exec('createLink', url.trim());
            return;
          }
          if (cmd === 'image') { file.click(); return; }
          if (cmd === 'alt') {
            var picked = $('img.is-picked', body);
            if (!picked) { err.hidden = false; err.textContent = 'اختر صورة داخل النص أولًا.'; return; }
            var alt = window.prompt('النص البديل — ما تُظهره الصورة', picked.alt || '');
            if (alt === null) return;
            picked.alt = alt;
            sync();
            return;
          }
          if (cmd === 'formatBlock') { exec('formatBlock', b.getAttribute('data-value')); return; }
          exec(cmd);
        });
      });

      file.addEventListener('change', function () {
        if (file.files[0]) insertImage(file.files[0]);
        file.value = '';
      });

      sync();
    });
  }

  initRich(document);
  initPickers(document);

  /* ------------------------------------------------ SEO live preview */
  $$('[data-seo]').forEach(function (box) {
    var scope = box.closest('form') || document;
    var out = {
      url: $('[data-seo-url]', box),
      title: $('[data-seo-title]', box),
      desc: $('[data-seo-desc]', box)
    };

    var prefix = box.getAttribute('data-seo-prefix') || 'post';
    var read = function (name) {
      // Exact name: a section row carries title_ar too, and an "ends with"
      // match would happily read that instead.
      var el = scope.querySelector('[name="' + prefix + '[' + name + ']"]');
      return el ? el.value.trim() : '';
    };

    var paint = function () {
      var lang = (box.closest('[data-lang-scope]') || document.body).getAttribute('data-active-lang') || 'ar';
      var suffix = lang === 'en' ? 'en' : 'ar';
      var slug = read('slug_' + suffix) || Slugish(read('title_' + suffix));
      var title = read('meta_title_' + suffix) || read('title_' + suffix);
      var desc = read('meta_description_' + suffix) || read('excerpt_' + suffix);

      out.url.textContent = 'beautyrooots.com/' + suffix + '/knowledge/' + (slug || '…');
      out.title.textContent = title || 'عنوان الصفحة';
      out.desc.textContent = desc || 'وصف الصفحة يظهر هنا.';

      count(box, 'title', title.length, 60);
      count(box, 'desc', desc.length, 160);
    };

    var count = function (root, key, len, max) {
      $$('[data-count="' + key + '"]', root).forEach(function (el) {
        el.textContent = len + '/' + max;
        el.classList.toggle('is-over', len > max);
      });
    };

    // Rough client-side echo of the server's slug rule — a preview, not the
    // value that gets stored.
    function Slugish(s) {
      return String(s).trim().toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 90);
    }

    scope.addEventListener('input', paint);
    scope.addEventListener('langchange', paint);
    paint();
  });

  /* -------------------------------------- unsaved-changes guard on editors */
  $$('form[data-guard]').forEach(function (form) {
    var dirty = false;
    form.addEventListener('input', function () { dirty = true; });
    form.addEventListener('submit', function () { dirty = false; });
    window.addEventListener('beforeunload', function (e) {
      if (!dirty) return;
      e.preventDefault();
      e.returnValue = '';
    });
  });
})();
