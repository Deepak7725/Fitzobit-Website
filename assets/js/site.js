// Fitzobit website: language switch, menu, cart, order form (opens WhatsApp), pincode check, header.
// Classic script (not a module) so it also works when index.html is opened by double-clicking.
(function () {
  'use strict';
  var C = window.FITZ, T = window.FITZ_TEXT;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // ---------- small helpers ----------
  function store(key, val) {
    try { if (val === undefined) return JSON.parse(localStorage.getItem(key)); localStorage.setItem(key, JSON.stringify(val)); }
    catch (e) { return null; }
  }
  var lang = store('fitzobit.lang') === 'ta' ? 'ta' : 'en';
  function t(key, vars) {
    var s = (T[lang] && T[lang][key]) || T.en[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }
  function rupees(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
  function L(o) { return o[lang] || o.en; }
  function plan(id) { return C.plans.filter(function (p) { return p.id === id; })[0]; }
  function meal(id) { return C.menu.filter(function (m) { return m.id === id; })[0]; }
  function digits(s) { return String(s || '').replace(/\D/g, ''); }
  var toastTimer;
  function toast(msg) { var el = $('#toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.classList.remove('on'); }, 2200); }

  // ---------- drawings for the menu cards ----------
  var ICONS = {
    meal: '<svg viewBox="0 0 120 120"><ellipse cx="60" cy="100" rx="40" ry="6" fill="#313b29" opacity=".1"/><path d="M14 58h92c0 24-20 40-46 40S14 82 14 58z" fill="#fff" stroke="#313b29" stroke-width="3"/><path d="M20 72h80" stroke="#6f8a4f" stroke-width="6"/><path d="M20 58c4-14 22-20 40-20s36 6 40 20z" fill="#efe3c4"/><circle cx="44" cy="48" r="8" fill="#d3302a"/><path d="M58 46c6-10 18-10 22-4-6 2-12 6-22 4z" fill="#4d8a2c"/><ellipse cx="70" cy="52" rx="9" ry="6" fill="#fbf8f1"/><circle cx="71" cy="52" r="3.5" fill="#f2a419"/><rect x="30" y="50" width="12" height="4" rx="2" fill="#e8711d" transform="rotate(-20 36 52)"/><path d="M50 28c-4-6 4-8 0-14M62 28c-4-6 4-8 0-14M74 28c-4-6 4-8 0-14" stroke="#6f8a4f" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".6"/></svg>',
    bowl: '<svg viewBox="0 0 120 120"><ellipse cx="60" cy="100" rx="40" ry="6" fill="#313b29" opacity=".1"/><path d="M14 56h92c0 26-20 42-46 42S14 82 14 56z" fill="#fff" stroke="#313b29" stroke-width="3"/><path d="M20 72h80" stroke="#6f8a4f" stroke-width="6"/><path d="M22 56c-2-10 10-18 18-12 2-12 18-14 22-4 8-8 22-2 20 8 10-2 18 4 16 8z" fill="#62a138"/><path d="M30 52c6-6 14-8 20-4M60 46c6 0 12 4 14 8" stroke="#3e7224" stroke-width="2.5" fill="none"/><circle cx="48" cy="50" r="7" fill="#d3302a"/><circle cx="76" cy="50" r="6" fill="#d3302a"/><circle cx="62" cy="54" r="5" fill="#e2ebc3" stroke="#3c6a28" stroke-width="2"/></svg>',
    oats: '<svg viewBox="0 0 120 120"><ellipse cx="60" cy="100" rx="40" ry="6" fill="#313b29" opacity=".1"/><path d="M16 56h88c0 24-18 42-44 42S16 80 16 56z" fill="#fff" stroke="#313b29" stroke-width="3"/><path d="M22 72h76" stroke="#6f8a4f" stroke-width="6"/><path d="M20 56c6-10 22-14 40-14s34 4 40 14z" fill="#e7d2a2"/><g fill="#c99a52"><ellipse cx="36" cy="51" rx="4" ry="2.4"/><ellipse cx="50" cy="48" rx="4" ry="2.4" transform="rotate(30 50 48)"/><ellipse cx="80" cy="51" rx="4" ry="2.4" transform="rotate(-20 80 51)"/></g><circle cx="64" cy="48" r="5" fill="#7b2d5b"/><circle cx="72" cy="46" r="4" fill="#7b2d5b"/><path d="M40 46c4-6 12-6 14 0z" fill="#f2c24b"/><path d="M84 30l-10 22" stroke="#313b29" stroke-width="4" stroke-linecap="round"/><ellipse cx="86" cy="26" rx="6" ry="8" fill="#fff" stroke="#313b29" stroke-width="3" transform="rotate(25 86 26)"/></svg>',
    drink: '<svg viewBox="0 0 120 120"><ellipse cx="60" cy="104" rx="26" ry="5" fill="#313b29" opacity=".1"/><path d="M38 30h44l-6 70H44z" fill="#fff" stroke="#313b29" stroke-width="3" stroke-linejoin="round"/><path d="M41 52h38l-4 46H45z" fill="#9cc96b"/><path d="M41 52h38" stroke="#6f8a4f" stroke-width="3"/><path d="M70 14l-8 60" stroke="#cf4604" stroke-width="4" stroke-linecap="round"/><circle cx="83" cy="34" r="11" fill="#f5d547" stroke="#d9a91a" stroke-width="2.5"/><path d="M83 23v22M72 34h22M75 26l16 16M91 26 75 42" stroke="#d9a91a" stroke-width="1.5"/><path d="M52 66c3 0 4 3 2 5M62 80c3 0 4 3 2 5" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/></svg>'
  };

  // ---------- language ----------
  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    var b = $('#lang');
    b.textContent = lang === 'en' ? 'தமிழ்' : 'English';
    b.setAttribute('lang', lang === 'en' ? 'ta' : 'en');
    b.setAttribute('aria-label', lang === 'en' ? 'தமிழில் பார்க்க' : 'View in English');
    window.FITZ_LANG = lang; window.FITZ_T = t;
    renderTabs(); renderMenu(); renderCart(); renderTiles();
    if ($('#pinResult').dataset.pin) checkPin($('#pinResult').dataset.pin);
  }
  $('#lang').addEventListener('click', function () { lang = lang === 'en' ? 'ta' : 'en'; store('fitzobit.lang', lang); applyLang(); });

  // ---------- menu ----------
  var current = 'monthly';
  var choice = {};      // per meal: { pref, qty }
  function renderTabs() {
    var box = $('#planTabs'); box.innerHTML = '';
    C.plans.forEach(function (p) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'tab'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', p.id === current);
      b.innerHTML = '<span></span><small></small>';
      b.firstChild.textContent = L(p.name);
      b.lastChild.textContent = p.days === 1 ? t('menu.day1') : t('menu.days', { n: p.days });
      b.addEventListener('click', function () { current = p.id; renderTabs(); renderMenu(); });
      box.appendChild(b);
    });
  }
  function renderMenu() {
    var grid = $('#menuGrid'), p = plan(current); grid.innerHTML = '';
    C.menu.forEach(function (m) {
      var price = m.prices[current]; if (!price) return;
      var ch = choice[m.id] || (choice[m.id] = { pref: 'veg', qty: 1 });
      var card = document.createElement('article'); card.className = 'card rise in';
      var per = p.days > 1 ? ' · ' + t('menu.perbox', { n: Math.round(price / p.days) }) : '';
      card.innerHTML =
        '<div class="art">' + ICONS[m.icon] + '</div>' +
        '<div class="body"><h3></h3><p class="desc"></p>' +
        '<div class="price"><b>' + rupees(price) + '</b><span></span></div>' +
        '<div class="opts">' +
          (m.egg ? '<div class="pref" role="group"><button type="button" data-p="veg"><i class="dot veg"></i></button><button type="button" data-p="egg"><i class="dot egg"></i></button></div>' : '<span></span>') +
          '<div class="qty"><button type="button" data-q="-1" aria-label="−">−</button><output>' + ch.qty + '</output><button type="button" data-q="1" aria-label="+">+</button></div>' +
        '</div>' +
        '<button type="button" class="btn btn-primary add" data-cursor-key="cursor.add"></button></div>';
      card.querySelector('h3').textContent = L(m.name);
      card.querySelector('.desc').textContent = L(m.desc);
      card.querySelector('.price span').textContent = (p.days === 1 ? t('menu.day1') : t('menu.days', { n: p.days })) + per;
      card.querySelector('.qty').setAttribute('aria-label', t('menu.qty'));
      $$('.pref button', card).forEach(function (b) {
        b.appendChild(document.createTextNode(t(b.dataset.p === 'veg' ? 'pref.veg' : 'pref.egg')));
        b.setAttribute('aria-pressed', b.dataset.p === ch.pref);
        b.addEventListener('click', function () { ch.pref = b.dataset.p; $$('.pref button', card).forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); });
      });
      var out = card.querySelector('output'), minus = card.querySelector('[data-q="-1"]');
      minus.disabled = ch.qty <= 1;
      $$('[data-q]', card).forEach(function (b) {
        b.addEventListener('click', function () { ch.qty = Math.min(9, Math.max(1, ch.qty + Number(b.dataset.q))); out.textContent = ch.qty; minus.disabled = ch.qty <= 1; });
      });
      var add = card.querySelector('.add'); add.textContent = t('menu.add');
      add.addEventListener('click', function () {
        addToCart(m.id, current, m.egg ? ch.pref : '', ch.qty);
        add.textContent = t('menu.added'); add.classList.add('ok');
        setTimeout(function () { add.textContent = t('menu.add'); add.classList.remove('ok'); }, 1300);
      });
      grid.appendChild(card);
    });
  }
  $('#tryOne').addEventListener('click', function () { current = 'trial'; renderTabs(); renderMenu(); });

  // ---------- cart ----------
  var cart = (store('fitzobit.cart.v1') || []).filter(function (l) { return meal(l.meal) && plan(l.plan) && meal(l.meal).prices[l.plan]; });
  function save() { store('fitzobit.cart.v1', cart); }
  function lineTotal(l) { return meal(l.meal).prices[l.plan] * l.qty; }
  function total() { return cart.reduce(function (s, l) { return s + lineTotal(l); }, 0); }
  function count() { return cart.reduce(function (s, l) { return s + l.qty; }, 0); }
  function addToCart(m, p, pref, qty) {
    var same = cart.filter(function (l) { return l.meal === m && l.plan === p && l.pref === pref; })[0];
    if (same) same.qty = Math.min(9, same.qty + qty); else cart.push({ meal: m, plan: p, pref: pref, qty: qty });
    save(); renderCart();
    var b = $('#cartBtn'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
    toast(L(meal(m).name) + ' · ' + L(plan(p).name) + ' ✓');
  }
  function lineLabel(l) {
    var p = plan(l.plan), bits = [L(p.name) + (p.days > 1 ? ' (' + t('menu.days', { n: p.days }) + ')' : '')];
    if (l.pref) bits.push(t(l.pref === 'veg' ? 'pref.veg' : 'pref.egg'));
    return bits.join(' · ');
  }
  function renderCart() {
    var n = count(), cnt = $('#cartCount');
    cnt.textContent = n; cnt.classList.toggle('on', n > 0);
    var bar = $('#cartBar'); bar.hidden = n === 0; document.body.classList.toggle('has-bar', n > 0);
    bar.querySelector('.cb-count').textContent = n + ' ' + t('cart.items');
    bar.querySelector('.cb-total').textContent = rupees(total());
    $('#cartTotal').textContent = rupees(total());
    $$('.js-total').forEach(function (el) { el.textContent = rupees(total()); });
    $('#cartEmpty').hidden = n > 0; $('#cartFoot').hidden = n === 0;
    var ul = $('#cartLines'); ul.innerHTML = '';
    cart.forEach(function (l, i) {
      var li = document.createElement('li'); li.className = 'line';
      li.innerHTML = '<div class="ico">' + ICONS[meal(l.meal).icon] + '</div><div><h4></h4><div class="meta"></div></div>' +
        '<div class="right"><span class="amt">' + rupees(lineTotal(l)) + '</span><div class="qty"><button type="button" data-q="-1" aria-label="−">−</button><output>' + l.qty +
        '</output><button type="button" data-q="1" aria-label="+">+</button></div><button type="button" class="rm"></button></div>';
      li.querySelector('h4').textContent = L(meal(l.meal).name);
      li.querySelector('.meta').textContent = lineLabel(l);
      li.querySelector('.rm').textContent = t('cart.remove');
      li.querySelector('.rm').addEventListener('click', function () { cart.splice(i, 1); save(); renderCart(); });
      $$('[data-q]', li).forEach(function (b) {
        b.addEventListener('click', function () {
          l.qty += Number(b.dataset.q);
          if (l.qty < 1) cart.splice(i, 1); else l.qty = Math.min(9, l.qty);
          save(); renderCart();
        });
      });
      ul.appendChild(li);
    });
    if (n === 0 && !$('#viewForm').hidden) show('cart');
  }

  // ---------- drawer ----------
  var drawer = $('#drawer'), scrim = $('#scrim'), lastFocus = null;
  function show(view) {
    $('#viewCart').hidden = view !== 'cart'; $('#viewForm').hidden = view !== 'form'; $('#viewDone').hidden = view !== 'done';
    $('#drawerBack').hidden = view !== 'form';
    $('#drawerTitle').textContent = t(view === 'form' ? 'form.h' : view === 'done' ? 'done.h' : 'cart.h');
    $('#drawerTitle').setAttribute('data-i18n', view === 'form' ? 'form.h' : view === 'done' ? 'done.h' : 'cart.h');
  }
  function openDrawer() {
    lastFocus = document.activeElement; show('cart');
    drawer.hidden = false; scrim.hidden = false;
    requestAnimationFrame(function () { drawer.classList.add('on'); scrim.classList.add('on'); });
    document.documentElement.style.overflow = 'hidden';
    setTimeout(function () { $('#drawerClose').focus(); }, 50);
  }
  function closeDrawer() {
    drawer.classList.remove('on'); scrim.classList.remove('on');
    document.documentElement.style.overflow = '';
    setTimeout(function () { drawer.hidden = true; scrim.hidden = true; }, 380);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $('#cartBtn').addEventListener('click', openDrawer);
  $('#cartBar').addEventListener('click', openDrawer);
  $('#drawerClose').addEventListener('click', closeDrawer);
  scrim.addEventListener('click', closeDrawer);
  $('#drawerBack').addEventListener('click', function () { show('cart'); });
  $('#toForm').addEventListener('click', function () { show('form'); $('#viewForm [name=name]').focus(); });
  document.addEventListener('keydown', function (e) {
    if (drawer.hidden) return;
    if (e.key === 'Escape') closeDrawer();
    if (e.key === 'Tab') {     // keep focus inside the drawer
      var f = $$('button:not([hidden]):not(:disabled), a[href], input, select, textarea', drawer).filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });

  // ---------- order form ----------
  var form = $('#viewForm');
  function ymd(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  var tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
  form.start.min = ymd(tomorrow);
  C.deliveryTimes.forEach(function (x) { var o = document.createElement('option'); o.textContent = x; $('#timeSelect').appendChild(o); });
  $('#noNumber').hidden = /^91[6-9]\d{9}$/.test(C.whatsapp);

  var draft = store('fitzobit.form.v1') || {};
  ['name', 'phone', 'address', 'pincode', 'map', 'time'].forEach(function (k) { if (draft[k]) form[k].value = draft[k]; });
  form.addEventListener('input', function () {
    var d = {}; ['name', 'phone', 'address', 'pincode', 'map', 'time'].forEach(function (k) { d[k] = form[k].value; }); store('fitzobit.form.v1', d);
  });

  function setErr(name, key, info) {
    var f = form[name].closest('.f'), em = f.querySelector('.err');
    f.classList.toggle('bad', !!key && !info);
    em.classList.toggle('info', !!info);
    em.textContent = key ? t(key) : '';
  }
  function validate() {
    var ok = true, first = null;
    function bad(n, k) { setErr(n, k); ok = false; first = first || form[n]; }
    ['name', 'phone', 'address', 'pincode', 'start'].forEach(function (n) { setErr(n, ''); });
    if (form.name.value.trim().length < 2) bad('name', 'form.err.name');
    var ph = digits(form.phone.value); if (ph.length > 10) ph = ph.slice(-10);
    if (!/^[6-9]\d{9}$/.test(ph)) bad('phone', 'form.err.phone');
    if (form.address.value.trim().length < 8) bad('address', 'form.err.address');
    var pin = digits(form.pincode.value);
    if (!/^\d{6}$/.test(pin)) bad('pincode', 'form.err.pincode');
    else if (C.pincodes.indexOf(pin) < 0) setErr('pincode', 'form.warn.pin', true);
    var v = form.start.value;
    if (!v) bad('start', 'form.err.start');
    else {
      var d = new Date(v + 'T00:00:00');
      if (d.getDay() === 0) bad('start', 'form.err.sunday');
      else if (v < form.start.min) bad('start', 'form.err.past');
    }
    if (first) first.focus();
    return ok;
  }
  form.pincode.addEventListener('blur', function () {
    var pin = digits(form.pincode.value);
    if (/^\d{6}$/.test(pin)) setErr('pincode', C.pincodes.indexOf(pin) < 0 ? 'form.warn.pin' : '', true);
  });
  form.start.addEventListener('change', function () {
    var v = form.start.value; if (!v) return;
    setErr('start', new Date(v + 'T00:00:00').getDay() === 0 ? 'form.err.sunday' : '');
  });

  // the WhatsApp message is always in English so the team reads every order the same way
  function message() {
    var ph = digits(form.phone.value).slice(-10), pin = digits(form.pincode.value);
    var d = new Date(form.start.value + 'T00:00:00');
    var date = d.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
    var lines = ['Hello Fitzobit! New order from the website.', '', '*Order*'];
    cart.forEach(function (l, i) {
      var m = meal(l.meal), p = plan(l.plan);
      lines.push((i + 1) + '. ' + m.name.en + ' - ' + p.name.en + (p.days > 1 ? ' (' + p.days + ' days)' : ' (1 box)') +
        (l.pref ? ' - ' + (l.pref === 'veg' ? 'Veg' : 'With egg') : '') + ' x ' + l.qty + ' = ' + rupees(lineTotal(l)));
    });
    lines.push('*Total: ' + rupees(total()) + '*', '', '*Delivery details*');
    lines.push('Name: ' + form.name.value.trim());
    lines.push('Mobile: ' + ph);
    lines.push('Address: ' + form.address.value.trim().replace(/\s*\n\s*/g, ', '));
    lines.push('Pincode: ' + pin + (C.pincodes.indexOf(pin) < 0 ? ' (outside usual area)' : ''));
    if (form.map.value.trim()) lines.push('Location: ' + form.map.value.trim());
    lines.push('Start date: ' + date);
    lines.push('Delivery time: ' + form.time.value);
    if (form.note.value.trim()) lines.push('Note: ' + form.note.value.trim());
    lines.push('', 'I will pay by UPI after you confirm.');
    return lines.join('\n');
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!cart.length || !validate()) return;
    var url = 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(message());
    $('#waAgain').href = url;
    window.open(url, '_blank', 'noopener');
    show('done');
  });
  $('#clearCart').addEventListener('click', function () { cart = []; save(); renderCart(); closeDrawer(); });

  $('#locBtn').addEventListener('click', function () {
    var btn = this, msg = $('#locMsg');
    if (!navigator.geolocation) { msg.textContent = t('form.mapFail'); return; }
    btn.disabled = true; btn.textContent = t('form.mapBusy'); msg.textContent = '';
    navigator.geolocation.getCurrentPosition(function (pos) {
      form.map.value = 'https://maps.google.com/?q=' + pos.coords.latitude.toFixed(6) + ',' + pos.coords.longitude.toFixed(6);
      form.dispatchEvent(new Event('input'));
      btn.disabled = false; btn.textContent = t('form.mapBtn');
    }, function () {
      msg.textContent = t('form.mapFail'); btn.disabled = false; btn.textContent = t('form.mapBtn');
    }, { enableHighAccuracy: true, timeout: 15000 });
  });

  // ---------- pincode check ----------
  function checkPin(pin) {
    var r = $('#pinResult'); r.dataset.pin = pin; r.className = 'pin-result';
    if (!/^\d{6}$/.test(pin)) { r.textContent = t('area.bad'); r.classList.add('no'); return; }
    var yes = C.pincodes.indexOf(pin) >= 0;
    r.textContent = t(yes ? 'area.yes' : 'area.no', { pin: pin }); r.classList.add(yes ? 'yes' : 'no');
  }
  $('#pinForm').addEventListener('submit', function (e) { e.preventDefault(); checkPin(digits($('#pinInput').value)); });

  // ---------- instagram tiles (placeholders until photos are added to config/images) ----------
  var TILE_BG = ['#e9efdf', '#fbe7d9', '#f6efd9', '#e3ecd2', '#fde9e4', '#eef3e6'];
  var TILE_ICON = ['meal', 'bowl', 'oats', 'drink', 'bowl', 'meal'];
  function renderTiles() {
    var box = $('#instaTiles'); box.innerHTML = '';
    (C.instagramPhotos && C.instagramPhotos.length ? C.instagramPhotos : TILE_ICON).slice(0, 6).forEach(function (x, i) {
      var a = document.createElement('a'); a.href = C.instagram; a.target = '_blank'; a.rel = 'noopener'; a.style.background = TILE_BG[i % 6];
      a.setAttribute('aria-label', 'Instagram @fitzobit');
      if (ICONS[x]) a.innerHTML = '<div class="ph">' + ICONS[x] + '<span>' + t('insta.soon') + '</span></div>';
      else { var im = new Image(); im.src = x; im.alt = ''; im.loading = 'lazy'; a.appendChild(im); }
      box.appendChild(a);
    });
  }

  // ---------- contact details ----------
  $$('.js-wa').forEach(function (a) { a.href = 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent('Hello Fitzobit!'); a.dataset.cursorKey = 'cursor.chat'; });
  $$('.js-tel').forEach(function (a) { a.href = 'tel:+' + digits(C.whatsapp); });
  $$('.js-phone').forEach(function (el) { el.textContent = C.phone; });
  $$('.js-mail').forEach(function (a) { a.href = 'mailto:' + C.email; });
  $$('.js-email').forEach(function (el) { el.textContent = C.email; });
  $$('.js-insta, .insta-link').forEach(function (a) { a.href = C.instagram; });
  $$('.js-address').forEach(function (el) { el.textContent = C.address; });
  $$('.js-fssai').forEach(function (el) { el.textContent = C.fssai; });

  // ---------- header + mobile nav ----------
  var top = $('#top'), reveal = $('#reveal');
  function onScroll() {
    var end = reveal && !reveal.classList.contains('no-webgl') ? reveal.offsetTop + reveal.offsetHeight - 90 : 10;
    top.classList.toggle('solid', scrollY > end);
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var nav = $('#nav'), tog = $('#navToggle');
  tog.addEventListener('click', function () { var o = !nav.classList.contains('open'); nav.classList.toggle('open', o); tog.setAttribute('aria-expanded', o); });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); tog.setAttribute('aria-expanded', 'false'); }); });

  // sections rise in as they scroll into view
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px' }) : null;
  $$('.hero-copy, .hero-art, .steps li, .area-card, .faq details, .insta .tiles').forEach(function (el) { el.classList.add('rise'); if (io) io.observe(el); else el.classList.add('in'); });

  applyLang();
})();
