/**
 * NARRATIVA.BLOG.BR — script.js
 * Interações: menu mobile, animações, progresso de leitura, scroll-to-top
 */

(function () {
  'use strict';

  /* ─── MENU MOBILE ────────────────────────────────────── */
  const menuToggle = document.getElementById('menu-toggle');
  const siteNav    = document.getElementById('site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      const isAberto = siteNav.classList.toggle('aberto');
      menuToggle.setAttribute('aria-expanded', isAberto);
      menuToggle.setAttribute('aria-label', isAberto ? 'Fechar menu' : 'Abrir menu');

      // Animação das barras do hambúrguer
      const spans = menuToggle.querySelectorAll('span');
      if (isAberto) {
        spans[0].style.cssText = 'transform: translateY(7px) rotate(45deg)';
        spans[1].style.cssText = 'opacity: 0; transform: scaleX(0)';
        spans[2].style.cssText = 'transform: translateY(-7px) rotate(-45deg)';
      } else {
        spans.forEach(s => (s.style.cssText = ''));
      }
    });

    // Fechar menu ao clicar em link
    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('aberto');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.querySelectorAll('span').forEach(s => (s.style.cssText = ''));
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function (e) {
      if (!siteNav.contains(e.target) && !menuToggle.contains(e.target)) {
        siteNav.classList.remove('aberto');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.querySelectorAll('span').forEach(s => (s.style.cssText = ''));
      }
    });
  }

  /* ─── PROGRESSO DE LEITURA ───────────────────────────── */
  const progressoBarra = document.getElementById('progresso-leitura');

  if (progressoBarra) {
    function atualizarProgresso() {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      const percentual   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressoBarra.style.width = Math.min(percentual, 100) + '%';
      progressoBarra.setAttribute('aria-valuenow', Math.round(percentual));
    }

    window.addEventListener('scroll', atualizarProgresso, { passive: true });
    atualizarProgresso();
  }

  /* ─── SCROLL TO TOP ──────────────────────────────────── */
  const topoBtnn = document.getElementById('topo-btn');

  if (topoBtnn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        topoBtnn.classList.add('visivel');
      } else {
        topoBtnn.classList.remove('visivel');
      }
    }, { passive: true });

    topoBtnn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── ANIMAÇÕES DE ENTRADA (INTERSECTION OBSERVER) ──── */
  const animarEls = document.querySelectorAll('.animar');

  if (animarEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    animarEls.forEach(function (el, i) {
      // Stagger delay baseado na posição no DOM
      el.style.animationDelay = (i * 0.08) + 's';
      observer.observe(el);
    });
  } else {
    // Fallback: mostrar tudo sem animação
    animarEls.forEach(el => el.classList.add('visivel'));
  }

  /* ─── NEWSLETTER: FEEDBACK DE ENVIO ─────────────────── */
  document.querySelectorAll('.btn-assinar').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const wrapper = btn.closest('.widget-assine, .sidebar-bloco, .sobre-contato-grid, div');
      const input   = wrapper ? wrapper.querySelector('.input-email') : null;

      if (input && input.value.includes('@') && input.value.includes('.')) {
        btn.textContent = '✓ Inscrito!';
        btn.style.background = '#2a7a2a';
        btn.disabled = true;
        input.value = '';
        input.disabled = true;

        setTimeout(() => {
          btn.textContent = 'Assinar gratuitamente';
          btn.style.background = '';
          btn.disabled = false;
          input.disabled = false;
        }, 4000);
      } else if (input) {
        input.style.borderColor = 'var(--vermelho)';
        input.focus();
        setTimeout(() => (input.style.borderColor = ''), 1500);
      }
    });
  });

  /* ─── SMOOTH SCROLL PARA ÂNCORAS INTERNAS ────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const hash = this.getAttribute('href');
      const alvo = document.querySelector(hash);
      if (alvo) {
        e.preventDefault();
        const offsetTop = alvo.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

})();