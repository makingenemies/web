(function () {
  'use strict';

  /* ---------- Menú a pantalla completa ---------- */
  var toggle  = document.getElementById('menuToggle');
  var overlay = document.getElementById('menuOverlay');

  if (toggle && overlay) {
    var links = overlay.querySelectorAll('a');

    function setMenu(open) {
      overlay.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open && links.length) {
        setTimeout(function () { links[0].focus(); }, 400);
      }
    }

    toggle.addEventListener('click', function () {
      setMenu(!overlay.classList.contains('is-open'));
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Mantener el foco dentro del menú abierto
    overlay.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !overlay.classList.contains('is-open')) return;
      var first = links[0];
      var last  = links[links.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });
  }

  /* ---------- Aparición al hacer scroll ---------- */
  var targets = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(targets, function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }

  /* ---------- Flecha de la portada ---------- */
  var scrollBtn = document.getElementById('heroScroll');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      var about = document.getElementById('about');
      if (about) about.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------- Año del pie ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
