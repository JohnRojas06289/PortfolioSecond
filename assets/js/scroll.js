/* GSAP + Lenis scroll animations */
(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* ── Lenis smooth scroll ── */
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* ── Navbar ── */
  ScrollTrigger.create({
    start: 'top -60',
    onEnter:      () => document.getElementById('navbar')?.classList.add('scrolled'),
    onLeaveBack:  () => document.getElementById('navbar')?.classList.remove('scrolled')
  });

  /* ── Active nav link on scroll ── */
  document.querySelectorAll('section[id]').forEach(sec => {
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 55%',
      end: 'bottom 45%',
      onEnter:      () => setActiveNav(sec.id),
      onEnterBack:  () => setActiveNav(sec.id)
    });
  });
  function setActiveNav(id) {
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
    });
  }

  /* ── Hero entrance ── */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .from('.hero-eyebrow', { opacity: 0, y: 30, duration: .8, delay: 1.8 })
    .from('.hero-name .line', { opacity: 0, y: 70, duration: 1, stagger: .18 }, '-=.4')
    .from('.hero-role',       { opacity: 0, y: 20, duration: .7 }, '-=.3')
    .from('.hero-ctas .btn',  { opacity: 0, y: 20, duration: .6, stagger: .1 }, '-=.4')
    .from('.hero-social a',   { opacity: 0, scale: 0, duration: .4, stagger: .07 }, '-=.3')
    .from('.hero-scroll',     { opacity: 0, y: -10, duration: .5 }, '-=.2');

  /* ── Generic reveals handled via IntersectionObserver in main.js ── */

  /* ── About badges counter ── */
  document.querySelectorAll('.badge-count').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target, duration: 1.5, ease: 'power2.out',
          onUpdate() { el.textContent = Math.round(this.targets()[0].val) + (el.dataset.suffix || ''); }
        });
      }
    });
  });

  /* ── Skill bars ── */
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const pct = bar.dataset.pct || '0';
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 88%',
      once: true,
      onEnter: () => gsap.to(bar, { width: pct + '%', duration: 1.3, ease: 'power2.out', delay: .1 })
    });
  });

  /* ── Staggered grid items ── */
  ['#portfolio .p-card', '#skills .skill-card'].forEach(sel => {
    const items = gsap.utils.toArray(sel);
    if (!items.length) return;
    items.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0, y: 40, scale: .95, duration: .7, ease: 'power2.out',
        delay: (i % 4) * .08,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      });
    });
  });

  /* ── Section title letters (SplitType) ── */
  if (typeof SplitType !== 'undefined') {
    document.querySelectorAll('.section-title').forEach(el => {
      const split = new SplitType(el, { types: 'chars' });
      gsap.from(split.chars, {
        opacity: 0, y: '80%', rotateX: -40, duration: .6,
        ease: 'power3.out', stagger: .025,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
  }

  /* ── Timeline draw line ── */
  document.querySelectorAll('.timeline').forEach(tl => {
    gsap.fromTo(tl, { '--line-h': '0%' }, {
      '--line-h': '100%', ease: 'none',
      scrollTrigger: {
        trigger: tl,
        start: 'top 70%',
        end:   'bottom 30%',
        scrub: 1
      }
    });
  });

  /* ── Testimonial parallax ── */
  gsap.to('#testimonial .testi-wrap', {
    y: -30,
    scrollTrigger: {
      trigger: '#testimonial',
      start: 'top bottom',
      end:   'bottom top',
      scrub: 1
    }
  });

  /* expose lenis for other modules */
  window.lenis = lenis;
})();
