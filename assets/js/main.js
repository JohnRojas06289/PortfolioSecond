/* ══════════════════════════════════════
   Main – init everything after DOM ready
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Loader ── */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader?.classList.add('out');
      document.body.classList.remove('is-loading');
    }, 1800);
  });

  /* ── Custom cursor ── */
  const dot  = document.getElementById('cur-dot');
  const ring = document.getElementById('cur-ring');
  if (dot && ring && window.matchMedia('(pointer:fine)').matches) {
    let rx = 0, ry = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; });
    dot.style.left  = '0px'; dot.style.top  = '0px';
    ring.style.left = '0px'; ring.style.top = '0px';
    (function followRing() {
      requestAnimationFrame(followRing);
      dot.style.left  = cx + 'px'; dot.style.top  = cy + 'px';
      rx += (cx - rx) * .12;  ry += (cy - ry) * .12;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    })();
    document.querySelectorAll('a, button, .p-card, .service-card, .skill-card').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
    });
  }

  /* ── Language toggle ── */
  document.getElementById('langToggleBtn')?.addEventListener('click', toggleLang);
  document.getElementById('langToggleMobile')?.addEventListener('click', () => {
    toggleLang(); closeMobileNav();
  });

  /* ── Mobile nav ── */
  const mobileNav = document.getElementById('mobile-nav');
  const menuBtn   = document.getElementById('menuBtn');
  function openMobileNav()  { mobileNav?.classList.add('open');  menuBtn?.classList.add('open'); }
  function closeMobileNav() { mobileNav?.classList.remove('open'); menuBtn?.classList.remove('open'); }
  window.closeMobileNav = closeMobileNav;
  menuBtn?.addEventListener('click', () =>
    mobileNav?.classList.contains('open') ? closeMobileNav() : openMobileNav()
  );
  mobileNav?.querySelectorAll('a[href]').forEach(a => a.addEventListener('click', closeMobileNav));

  /* ── Typed effect ── */
  const typedEl = document.getElementById('typed-text');
  function startTyped() {
    if (!typedEl) return;
    const roles = TRANSLATIONS[currentLang].hero.roles;
    let ri = 0, ci = 0, deleting = false, pause = 0;
    clearInterval(window._typedTimer);
    window._typedTimer = setInterval(() => {
      if (pause > 0) { pause--; return; }
      const word = roles[ri];
      if (!deleting) {
        typedEl.textContent = word.slice(0, ++ci);
        if (ci === word.length) { deleting = true; pause = 18; }
      } else {
        typedEl.textContent = word.slice(0, --ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; pause = 5; }
      }
    }, 85);
  }
  window.restartTyped = startTyped;
  startTyped();

  /* ── Universal IntersectionObserver for reveal classes ── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (typeof gsap !== 'undefined') {
        const vars = { opacity: 1, duration: .8, ease: 'power2.out' };
        if (el.classList.contains('will-reveal-up'))    { vars.y = 0; }
        if (el.classList.contains('will-reveal-left'))  { vars.x = 0; vars.duration = .9; }
        if (el.classList.contains('will-reveal-right')) { vars.x = 0; vars.duration = .9; }
        if (el.classList.contains('will-scale'))        { vars.scale = 1; vars.ease = 'back.out(1.4)'; vars.duration = .7; }
        gsap.to(el, vars);
      } else {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
      revealObs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  window.observeReveal = function () {
    document.querySelectorAll('.will-reveal, .will-reveal-up, .will-reveal-left, .will-reveal-right, .will-scale').forEach(el => {
      if (!el._revObserved) { el._revObserved = true; revealObs.observe(el); }
    });
  };

  /* ── Apply initial lang ── */
  applyLang();
  window.observeReveal();

  /* ── Portfolio data ── */
  const PROJECTS = [
    { id:1,  cat:'design', title:'Ferretería JF',     tools:'Figma',                             date:'Oct 2023',
      desc_es:'Diseño UI/UX para portafolio digital de una ferretería. Interfaz profesional creada en Figma.',
      desc_en:'UI/UX design for a hardware store digital portfolio. Professional interface built in Figma.',
      thumb:'assets/img/portfolio/thumb/project-12.png', large:'assets/img/portfolio/large/project-12/1.jpg',
      figma:'https://www.figma.com/file/tpiYoZDvSmbup5w8Xi1Kwc/' },
    { id:2,  cat:'design', title:'Webelopers v2',      tools:'Figma',                             date:'Oct 2023',
      desc_es:'Segunda versión del portafolio de Webelopers, emprendimiento de desarrollo web freelance.',
      desc_en:'Second version of the Webelopers portfolio, a freelance web dev venture.',
      thumb:'assets/img/portfolio/thumb/project-11.png', large:'assets/img/portfolio/large/project-11/1.png',
      figma:'https://www.figma.com/file/tpiYoZDvSmbup5w8Xi1Kwc/' },
    { id:3,  cat:'design', title:'Spline 3D Test',     tools:'HTML, CSS, JS, Three.js, Spline',   date:'Nov 2021',
      desc_es:'Exploración de objetos 3D con Spline.design, basado en Three.js.',
      desc_en:'Exploration of 3D objects using Spline.design, powered by Three.js.',
      thumb:'assets/img/portfolio/thumb/project-5.png',  large:'assets/img/portfolio/large/project-5/1.png',
      github:'https://github.com/JohnRojas0628/prueba_spline', live:'https://prueba-spline.vercel.app/' },
    { id:4,  cat:'web',    title:'Colegio La Fuente',  tools:'HTML, CSS, JavaScript',             date:'Nov 2023',
      desc_es:'Plataforma web para exalumnos del Colegio La Fuente: recuerdos e información post-colegio.',
      desc_en:'Web platform for Colegio La Fuente alumni to share memories and post-school information.',
      thumb:'assets/img/portfolio/thumb/project-10.png', large:'assets/img/portfolio/large/project-10/1.jpg',
      github:'https://github.com/Gemu03/LaFuente', live:'https://gemu03.github.io/LaFuente/' },
    { id:5,  cat:'web',    title:'Panda Sport Bar',    tools:'HTML, CSS, JavaScript',             date:'Sep 2023',
      desc_es:'Menú digital para bar deportivo. Diseño accesible para explorar el menú durante eventos.',
      desc_en:'Digital menu for a sports bar. Accessible design to browse the menu during sporting events.',
      thumb:'assets/img/portfolio/thumb/project-9.png',  large:'assets/img/portfolio/large/project-9/1.png',
      github:'https://github.com/Gemu03/Panda-SportBar', live:'https://joseph8884.github.io/PandaSportBarMenu/' },
    { id:6,  cat:'web',    title:'Chronometer',        tools:'HTML, CSS, JavaScript',             date:'Jul 2021',
      desc_es:'Primer proyecto JS: cronómetro con capacidad de registrar, pausar y reanudar tiempos.',
      desc_en:'First JS project: a stopwatch with the ability to record, pause, and resume times.',
      thumb:'assets/img/portfolio/thumb/project-6.png',  large:'assets/img/portfolio/large/project-6/1.png',
      github:'https://github.com/JohnRojas0628/CronometroJS', live:'https://cronometro-js-omega.vercel.app/' },
    { id:7,  cat:'web',    title:'Pokédex API',        tools:'HTML, CSS, JavaScript',             date:'Jul 2021',
      desc_es:'Pokédex conectada a RESTful API con 150 pokémon: tipo, nombre y sprites.',
      desc_en:'Pokédex connected to a RESTful API covering 150 Pokémon: type, name, and sprites.',
      thumb:'assets/img/portfolio/thumb/project-4.png',  large:'assets/img/portfolio/large/project-4/1.png',
      github:'https://github.com/JohnRojas0628/RetosJS', live:'https://retos-js-ten.vercel.app/RETOS/D%C3%ADa%2019%20-%20Pokedex%20API/index.html' },
    { id:8,  cat:'web',    title:'JS Challenges',      tools:'HTML, CSS, JavaScript, Particles.js',date:'Aug 2021',
      desc_es:'25 retos de JavaScript. Flexbox, animaciones CSS, propiedades personalizadas, HTTP requests.',
      desc_en:'25 JavaScript challenges. Flexbox, CSS animations, custom properties, HTTP requests, and more.',
      thumb:'assets/img/portfolio/thumb/project-3.png',  large:'assets/img/portfolio/large/project-3/1.png',
      github:'https://github.com/JohnRojas0628/RetosJS', live:'https://retos-js-ten.vercel.app/' },
    { id:9,  cat:'web',    title:'Portfolio v1',       tools:'HTML, CSS, JavaScript, Particles.js',date:'Jul 2021',
      desc_es:'Primera versión de mi portafolio. Primera vez con particles.js, layouts y transiciones CSS.',
      desc_en:'First version of my portfolio. First use of particles.js, CSS layouts and transitions.',
      thumb:'assets/img/portfolio/thumb/project-2.png',  large:'assets/img/portfolio/large/project-2/1.png',
      github:'https://github.com/JohnRojas0628/johnjdeveloper', live:'https://johnjdeveloper-ovoz1g5qj-johnrojas0628.vercel.app/' },
    { id:10, cat:'web',    title:'Tribute Page',       tools:'HTML, CSS, JavaScript',             date:'Jun 2021',
      desc_es:'Primera página web: la carrera espacial humana y la competencia entre países desde 1957.',
      desc_en:'Very first webpage: human space travel and the space race between countries since 1957.',
      thumb:'assets/img/portfolio/thumb/project-1.png',  large:'assets/img/portfolio/large/project-1/1.png',
      github:'https://github.com/john-rojas/Pagina_tributo', live:'https://pagina-tributo-espacial.vercel.app/' },
    { id:11, cat:'crud',   title:'Videoclub',          tools:'Angular, Express, MySQL, TypeScript',date:'Nov 2021',
      desc_es:'CRUD FullStack para gestión de inventario de películas. Angular + Express + MySQL.',
      desc_en:'FullStack CRUD for film inventory management. Angular + Express + MySQL.',
      thumb:'assets/img/portfolio/thumb/project-8.png',  large:'assets/img/portfolio/large/project-8/1.png',
      github:'https://github.com/DaniOspina/frontvideoclub', live:'https://frontvideoclub.vercel.app/home' },
    { id:12, cat:'crud',   title:'CRUD Mercatodo',     tools:'React, MySQL, Django, Bootstrap',   date:'Oct 2021',
      desc_es:'Sistema CRUD con login para gestión de inventario. React + Django + MySQL.',
      desc_en:'CRUD system with login for company inventory. React + Django + MySQL.',
      thumb:'assets/img/portfolio/thumb/project-7.png',  large:'assets/img/portfolio/large/project-7/1.png',
      github:'https://github.com/julianamrg/mercatodo', live:'https://mercatodocrud.netlify.app/' }
  ];

  /* ── Render portfolio ── */
  const portfolioGrid = document.getElementById('portfolio-grid');
  function renderPortfolio(filter = 'all') {
    if (!portfolioGrid) return;
    const lang  = currentLang;
    const items = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
    const catMap = { design: lang==='es'?'Diseño':'Design', web:'Web App', crud:'CRUD' };
    portfolioGrid.innerHTML = items.map(p => `
      <div class="p-card glass glass-lift" data-id="${p.id}" data-cat="${p.cat}">
        <div class="p-card-img">
          <img src="${p.thumb}" alt="${p.title}" loading="lazy">
          <div class="p-card-overlay">
            <button class="btn btn-primary btn-sm open-modal" data-id="${p.id}">${t('portfolio.view')}</button>
          </div>
        </div>
        <div class="p-card-body">
          <div class="p-card-cat">${catMap[p.cat]}</div>
          <div class="p-card-title">${p.title}</div>
          <div class="p-card-tools">${p.tools}</div>
        </div>
      </div>`).join('');

    if (typeof gsap !== 'undefined') {
      gsap.from(portfolioGrid.querySelectorAll('.p-card'), {
        opacity: 0, y: 30, scale: .95, duration: .5, stagger: .06, ease: 'power2.out'
      });
    }
    portfolioGrid.querySelectorAll('.open-modal').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); openModal(+btn.dataset.id); });
    });
    portfolioGrid.querySelectorAll('.p-card').forEach(card => {
      card.addEventListener('click', () => openModal(+card.dataset.id));
    });
    addTiltTo(portfolioGrid.querySelectorAll('.p-card'));
  }

  /* ── Portfolio filters ── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPortfolio(btn.dataset.filter);
    });
  });

  /* ── Project modal ── */
  const modal = document.getElementById('p-modal');
  function openModal(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p || !modal) return;
    const lang = currentLang;
    const desc = lang === 'es' ? p.desc_es : p.desc_en;
    const catMap = { design: lang==='es'?'Diseño':'Design', web:'Web App', crud:'CRUD' };
    let links = '';
    if (p.github) links += `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm"><i class="fab fa-github"></i> ${t('portfolio.code')}</a>`;
    if (p.live)   links += `<a href="${p.live}"   target="_blank" rel="noopener" class="btn btn-primary btn-sm"><i class="fas fa-external-link-alt"></i> ${t('portfolio.live')}</a>`;
    if (p.figma)  links += `<a href="${p.figma}"  target="_blank" rel="noopener" class="btn btn-ghost btn-sm"><i class="fab fa-figma"></i> Figma</a>`;
    modal.querySelector('.modal-img img').src       = p.large;
    modal.querySelector('.modal-cat').textContent   = catMap[p.cat];
    modal.querySelector('.modal-title').textContent = p.title;
    modal.querySelector('.modal-desc').textContent  = desc;
    modal.querySelector('.modal-meta').innerHTML    = `${lang==='es'?'Herramientas':'Tools'}: <span>${p.tools}</span>&nbsp;|&nbsp;${lang==='es'?'Fecha':'Date'}: <span>${p.date}</span>`;
    modal.querySelector('.modal-links').innerHTML   = links;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() { modal?.classList.remove('open'); document.body.style.overflow = ''; }
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  renderPortfolio();

  /* ── Timeline tabs ── */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.timeline-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('timeline-' + btn.dataset.tab)?.classList.add('active');
    });
  });

  /* ── Card tilt ── */
  function addTiltTo(cards) {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width  - .5) * 12;
        const y = ((e.clientY - r.top)  / r.height - .5) * -12;
        card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-5px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }
  addTiltTo(document.querySelectorAll('.service-card'));

  /* ── Smooth anchors ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      if (window.lenis) window.lenis.scrollTo(target, { offset: -80 });
      else target.scrollIntoView({ behavior: 'smooth' });
    });
  });

});
