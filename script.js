/* ===== Atlas AI Nexus — Interactions v2 ===== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Reveal ──────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  revealEls.forEach(el => revealObs.observe(el));

  // ── Navbar scroll effect ───────────────────────────────
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // ── Mobile menu ────────────────────────────────────────
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Smooth scroll for anchor links ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Services Interactive Tabs ────────────────────────
  const serviceTabs = document.querySelectorAll('.service-tab');
  const servicePanels = document.querySelectorAll('.service-panel');

  if (serviceTabs.length > 0 && servicePanels.length > 0) {
    serviceTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active from all tabs and panels
        serviceTabs.forEach(t => t.classList.remove('active'));
        servicePanels.forEach(p => p.classList.remove('active'));

        // Add active to clicked tab
        tab.classList.add('active');

        // Add active to corresponding panel
        const targetId = tab.getAttribute('data-target');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }

});
