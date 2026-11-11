// Fork cursor with a trailing ring that shows words ("Add", "Order", "Scroll"), and a burst of
// leaves, carrot coins, tomatoes and peas when a button is clicked.
// Classic script (not a module) so it also works when index.html is opened by double-clicking.
(function () {
  var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // ---------- veggie burst on click (all devices) ----------
  var BURST = '.btn, .add, .tab, .pref button, .reveal-pref button, .cart-btn, .cart-bar, .lang, .qty button';
  var KINDS = ['leaf', 'leaf', 'carrot', 'tomato', 'pea', 'leaf', 'carrot', 'pea'];
  document.addEventListener('click', function (e) {
    if (still || !e.target.closest) return;
    var hit = e.target.closest(BURST); if (!hit || hit.disabled) return;
    var x = e.clientX, y = e.clientY;
    if (!x && !y) { var r = hit.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2; }   // keyboard click
    var n = hit.classList.contains('add') ? 16 : 10;
    for (var i = 0; i < n; i++) {
      var s = document.createElement('i');
      s.className = 'bit ' + KINDS[i % KINDS.length];
      s.style.left = x + 'px'; s.style.top = y + 'px';
      document.body.appendChild(s);
      var a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.3, d = 40 + Math.random() * 70;
      var dx = Math.cos(a) * d, dy = Math.sin(a) * d, rot = (Math.random() - 0.5) * 540;
      s.animate([
        { transform: 'translate(-50%,-50%) translate(0,0) scale(.3) rotate(0deg)', opacity: 1 },
        { transform: 'translate(-50%,-50%) translate(' + dx + 'px,' + dy + 'px) scale(1) rotate(' + rot * 0.5 + 'deg)', opacity: 1, offset: 0.45 },
        { transform: 'translate(-50%,-50%) translate(' + dx * 1.3 + 'px,' + (dy + 70 + Math.random() * 40) + 'px) scale(.8) rotate(' + rot + 'deg)', opacity: 0 }
      ], { duration: 800 + Math.random() * 400, easing: 'cubic-bezier(.2,.6,.4,1)' }).onfinish = (function (el) { return function () { el.remove(); }; })(s);
    }
  });

  if (!fine || still) return;   // phones, tablets and reduced motion keep the normal pointer

  var LIGHT = '.foot, .btn-primary, .cart-btn, .cart-bar, .tab[aria-selected="true"]';
  var cur = document.createElement('div'); cur.className = 'cur'; cur.setAttribute('aria-hidden', 'true');
  cur.innerHTML =
    '<div class="ring"><span class="label"></span></div>' +
    '<div class="fork"><svg viewBox="0 0 40 44" width="40" height="44"><g transform="translate(5 4) rotate(-28)">' +
      '<g class="halo"><path d="M-4.5 0v9M-1.5 0v9M1.5 0v9M4.5 0v9M-4.5 9q0 6 4.5 6t4.5-6M0 15v20"/></g>' +
      '<g class="tines"><path d="M-4.5 0v9M-1.5 0v9M1.5 0v9M4.5 0v9M-4.5 9q0 6 4.5 6t4.5-6M0 15v20"/></g>' +
    '</g></svg></div>';
  document.body.appendChild(cur);
  document.documentElement.classList.add('has-cursor');
  var ring = cur.querySelector('.ring'), label = cur.querySelector('.label'), fork = cur.querySelector('.fork');

  var x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, px = x, tilt = 0, moved = false, down = false;

  function update(target) {
    if (!target || !target.closest) return;
    if (target.closest('input, textarea, select, [contenteditable]')) { cur.classList.remove('on'); return; }
    if (moved) cur.classList.add('on');
    var tagged = target.closest('[data-cursor-key]');
    var clickable = target.closest('a, button, label, summary, [role="button"]');
    var key = tagged ? tagged.getAttribute('data-cursor-key') : '';
    // inside the 3D intro, real buttons (veg / with egg) win over the "Scroll" label
    if (tagged && tagged.classList.contains('reveal-pin') && clickable) key = '';
    var text = key && window.FITZ_T ? window.FITZ_T(key) : '';
    cur.classList.toggle('text', !!text);
    cur.classList.toggle('link', !text && !!clickable);
    cur.classList.toggle('light', !!target.closest(LIGHT) && !text);
    label.textContent = text;
  }

  addEventListener('mousemove', function (e) { x = e.clientX; y = e.clientY; moved = true; update(e.target); }, { passive: true });
  addEventListener('scroll', function () { if (moved) update(document.elementFromPoint(x, y)); }, { passive: true });
  document.addEventListener('mouseleave', function () { cur.classList.remove('on'); });
  document.addEventListener('mouseenter', function () { if (moved) cur.classList.add('on'); });
  addEventListener('mousedown', function () { down = true; cur.classList.add('down'); });
  addEventListener('mouseup', function () { down = false; cur.classList.remove('down'); });

  (function loop() {
    requestAnimationFrame(loop);
    rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;                 // ring trails behind the fork
    var v = x - px; px = x;
    tilt += (Math.max(-22, Math.min(22, v * 1.2)) - tilt) * 0.15;  // fork leans the way you move
    fork.style.transform = 'translate3d(' + (x - 5) + 'px,' + (y - 4) + 'px,0) rotate(' + (tilt + (down ? 14 : 0)) + 'deg) scale(' + (down ? 0.85 : 1) + ')';
    ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0)';
  })();
})();
