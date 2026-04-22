const TRANSLATIONS = {
  es: {
    nav: { about:'Sobre mí', skills:'Skills', experience:'Experiencia', portfolio:'Portafolio', contact:'Contacto' },
    hero: {
      eyebrow: 'Desarrollador Full Stack & Diseñador UI',
      name1: 'John',
      name2: 'Rojas',
      roles: ['Desarrollador Full Stack','Diseñador UI/UX','Ingeniero en Sistemas','Creativo Digital'],
      cta1: 'Ver Proyectos',
      cta2: 'Hablemos',
      scroll: 'scroll'
    },
    about: {
      label: 'Sobre mí',
      title: 'Apasionado por crear experiencias digitales extraordinarias',
      desc1: 'Soy John Rojas, desarrollador web full stack y estudiante de Ingeniería Informática en la Universidad de La Sabana. Combino habilidades técnicas con un ojo para el diseño para construir productos digitales que conectan con las personas.',
      desc2: 'Me considero una persona determinada y arriesgada. Me encantan los retos — en mi vida diaria no faltan, y eso me ayuda a crecer como persona y profesional.',
      stat1: 'Años exp.',
      stat2: 'Proyectos',
      stat3: 'Certificados',
      cv_es: 'Descargar CV',
      cv_en: 'CV en Inglés',
      hire: 'Contrátame'
    },
    skills: {
      label: 'Habilidades',
      title: 'Mi Stack Tecnológico'
    },
    experience: {
      label: 'Trayectoria',
      title: 'Experiencia & Educación',
      work: 'Trabajo',
      education: 'Educación',
      work_items: [
        { period:'May 2023 – Presente', role:'Mentor', org:'Programáte Educamás, Colombia', desc:'Asesoro a estudiantes del Bootcamp en implementación de código, metodología Scrum, diseño y desarrollo web.' },
        { period:'Ene 2023 – Presente', role:'CoFundador & Web Designer', org:'Webelopers, Colombia', desc:'Empresa conjunta en la que trabajamos en varios proyectos. Sirvo como diseñador principal usando Figma.' },
        { period:'Feb 2019 – Dic 2019', role:'Asistente Administrativo', org:'Prochampions S.A.S., Colombia', desc:'Apoyo en contratación, gestión documental, registro en el sistema contable Siesa, apoyo a SG-SST.' }
      ],
      edu_items: [
        { period:'Ene 2022 – Presente', role:'Ingeniería Informática', org:'Universidad de La Sabana, Colombia', desc:'Pregrado en ingeniería informática, cursando actualmente.' },
        { period:'Jun 2021 – Presente', role:'Desarrollador Web Full Stack', org:'Educamás – Programáte, Colombia', desc:'Bootcamp intensivo: Html, Css, React, Angular, Bases de datos, metodologías ágiles.' },
        { period:'Dic 2020 – Jun 2021', role:'Diploma en Robótica y Programación', org:'U. Javeriana – Samsung, Colombia', desc:'Beca en la que desarrollé bases de programación lógica y robótica: Arduino, C++, Python.' },
        { period:'Ene 2020 – Jun 2021', role:'Administración de Empresas', org:'U. Areandina, Colombia', desc:'Dos semestres donde adquirí habilidades analíticas y de trabajo en equipo.' },
        { period:'Ene 2018 – Ago 2019', role:'Tecnología en Gestión Empresarial', org:'SENA, Colombia', desc:'Administración empresarial moderna, pensamiento analítico y crítico.' },
        { period:'Ene 2006 – Dic 2017', role:'Técnico en Asistencia Administrativa y Bachiller', org:'SENA – I.E.D. Arborizadora Baja, Colombia', desc:'Culminación del bachillerato académico y técnico en asistencia administrativa.' }
      ]
    },
    services: {
      label: 'Servicios',
      title: '¿Qué puedo hacer por ti?',
      items: [
        { icon:'fas fa-mobile-alt', title:'Diseño Responsivo', desc:'Desarrollo páginas con capacidad de adaptar la apariencia a cualquier dispositivo.' },
        { icon:'fas fa-laptop-code', title:'Frontend Developer', desc:'Diseño aplicaciones web con experiencias de usuario fascinantes e innovadoras.' },
        { icon:'fas fa-terminal', title:'Código Limpio', desc:'Entrego software de calidad con buenas prácticas y metodologías de proyecto.' },
        { icon:'fas fa-palette', title:'Diseño Gráfico', desc:'Prototipo interfaces con herramientas profesionales de diseño y conceptos UI/UX.' },
        { icon:'fas fa-server', title:'Backend Developer', desc:'Me encargo de la lógica del servidor y la integración con bases de datos.' },
        { icon:'fas fa-robot', title:'Inteligencia Artificial', desc:'Entreno en IA, deep learning y machine learning aplicados al desarrollo.' }
      ]
    },
    portfolio: {
      label: 'Portafolio',
      title: 'Proyectos Seleccionados',
      all: 'Todos', design: 'Diseño', web: 'Web App', crud: 'CRUD',
      view: 'Ver Proyecto', code: 'Ver Código', live: 'Demo Live'
    },
    testimonial: {
      label: 'Testimonios',
      title: 'Lo que dicen',
      quote: 'He trabajado con cientos de desarrolladores HTML/CSS y debo decir que John se lleva el primer puesto. Es un desarrollador increíble. Se enfoca en código bueno y limpio, y presta atención a los detalles. Admiro a los desarrolladores que respetan cada aspecto de un diseño bien pensado.',
      name: 'Elizabeth Gutierrez',
      role: 'Abogada – Prochampions S.A.S.'
    },
    contact: {
      label: 'Contacto',
      title: 'Trabajemos Juntos',
      desc: 'Estoy disponible para proyectos freelance y oportunidades laborales. Si tienes una idea o proyecto en mente, ¡hablemos!',
      phone: 'Teléfono', email: 'Correo', location: 'Ubicación',
      loc_val: 'Barrios Unidos, Bogotá – Colombia',
      name_ph: 'Tu nombre',
      email_ph: 'tu@email.com',
      subject_ph: 'Asunto del mensaje',
      msg_ph: 'Cuéntame sobre tu proyecto...',
      send: 'Enviar Mensaje',
      name_lbl:'Nombre', email_lbl:'Email', subject_lbl:'Asunto', msg_lbl:'Mensaje'
    },
    footer: { copy: '© 2025 John Rojas. Todos los derechos reservados.' }
  },

  en: {
    nav: { about:'About', skills:'Skills', experience:'Experience', portfolio:'Portfolio', contact:'Contact' },
    hero: {
      eyebrow: 'Full Stack Developer & UI Designer',
      name1: 'John',
      name2: 'Rojas',
      roles: ['Full Stack Developer','UI/UX Designer','Computer Engineer','Digital Creative'],
      cta1: 'View Projects',
      cta2: "Let's Talk",
      scroll: 'scroll'
    },
    about: {
      label: 'About me',
      title: 'Passionate about crafting extraordinary digital experiences',
      desc1: "I'm John Rojas, a full stack web developer and Computer Engineering student at Universidad de La Sabana. I combine technical skills with an eye for design to build digital products that truly connect with people.",
      desc2: "I consider myself determined and fearless. I love challenges — they're a daily part of my life, and they help me grow as a person and as a professional.",
      stat1: 'Yrs experience',
      stat2: 'Projects',
      stat3: 'Certificates',
      cv_es: 'CV (Spanish)',
      cv_en: 'Download CV',
      hire: 'Hire Me'
    },
    skills: {
      label: 'Skills',
      title: 'My Tech Stack'
    },
    experience: {
      label: 'Journey',
      title: 'Experience & Education',
      work: 'Work',
      education: 'Education',
      work_items: [
        { period:'May 2023 – Present', role:'Mentor', org:'Programáte Educamás, Colombia', desc:'Advise Bootcamp students on code implementation, Scrum methodology, web design and development.' },
        { period:'Jan 2023 – Present', role:'CoFounder & Web Designer', org:'Webelopers, Colombia', desc:'Shared venture working on various projects. I serve as the lead designer using Figma.' },
        { period:'Feb 2019 – Dec 2019', role:'Administrative Assistant', org:'Prochampions S.A.S., Colombia', desc:'Support in hiring, documentation management, Siesa accounting system, SG-SST support.' }
      ],
      edu_items: [
        { period:'Jan 2022 – Present', role:'Computer Engineering', org:'Universidad de La Sabana, Colombia', desc:'Undergraduate degree in computer engineering, currently enrolled.' },
        { period:'Jun 2021 – Present', role:'Full Stack Web Developer', org:'Educamás – Programáte, Colombia', desc:'Intensive bootcamp: HTML, CSS, React, Angular, Databases, agile methodologies.' },
        { period:'Dec 2020 – Jun 2021', role:'Diploma in Robotics & Coding', org:'Javeriana University – Samsung, Colombia', desc:'Scholarship program: logic programming, robotics, Arduino, C++, Python.' },
        { period:'Jan 2020 – Jun 2021', role:'Business Administration', org:'U. Areandina, Colombia', desc:'Two semesters building analytical skills and teamwork.' },
        { period:'Jan 2018 – Aug 2019', role:'Technology in Business Management', org:'SENA, Colombia', desc:'Modern business administration, analytical and critical thinking.' },
        { period:'Jan 2006 – Dec 2017', role:'Administrative Technician & High School Graduate', org:'SENA – I.E.D. Arborizadora Baja, Colombia', desc:'Academic and technical graduation in administrative assistance.' }
      ]
    },
    services: {
      label: 'Services',
      title: 'What I can do for you',
      items: [
        { icon:'fas fa-mobile-alt', title:'Responsive Design', desc:'I build pages that adapt beautifully to any device and screen size.' },
        { icon:'fas fa-laptop-code', title:'Frontend Developer', desc:'I craft unique mobile and web apps with fascinating, innovative UX.' },
        { icon:'fas fa-terminal', title:'Clean Code', desc:'I deliver quality software following best practices and project methodologies.' },
        { icon:'fas fa-palette', title:'Graphic Design', desc:'I prototype interfaces using professional design tools and UI/UX principles.' },
        { icon:'fas fa-server', title:'Backend Developer', desc:'I handle server logic, APIs, and database integrations.' },
        { icon:'fas fa-robot', title:'Artificial Intelligence', desc:'Currently training in AI, deep learning, and ML applied to development.' }
      ]
    },
    portfolio: {
      label: 'Portfolio',
      title: 'Selected Works',
      all: 'All', design: 'Design', web: 'Web App', crud: 'CRUD',
      view: 'View Project', code: 'View Code', live: 'Live Demo'
    },
    testimonial: {
      label: 'Testimonials',
      title: 'What people say',
      quote: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to John. He's an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect every aspect of a well thought-out design.",
      name: 'Elizabeth Gutierrez',
      role: 'Lawyer – Prochampions S.A.S.'
    },
    contact: {
      label: 'Contact',
      title: "Let's Work Together",
      desc: "I'm available for freelance projects and job opportunities. If you have an idea or project in mind, let's talk!",
      phone: 'Phone', email: 'Email', location: 'Location',
      loc_val: 'Barrios Unidos, Bogotá – Colombia',
      name_ph: 'Your name',
      email_ph: 'you@email.com',
      subject_ph: 'Message subject',
      msg_ph: 'Tell me about your project...',
      send: 'Send Message',
      name_lbl:'Name', email_lbl:'Email', subject_lbl:'Subject', msg_lbl:'Message'
    },
    footer: { copy: '© 2025 John Rojas. All rights reserved.' }
  }
};

let currentLang = localStorage.getItem('jrLang') || 'es';

function t(path) {
  return path.split('.').reduce((o, k) => (o ? o[k] : ''), TRANSLATIONS[currentLang]) ?? '';
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (val !== undefined && val !== '') {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else if (el.tagName === 'LABEL') el.textContent = val;
      else el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.dataset.i18nHtml);
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.dataset.i18nPlaceholder);
    if (val) el.placeholder = val;
  });
  document.getElementById('langToggleBtn').textContent = currentLang === 'es' ? 'EN' : 'ES';

  // Rebuild dynamic sections
  buildTimeline();
  buildServices();
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('jrLang', currentLang);
  applyLang();
  if (window.restartTyped) window.restartTyped();
}

function buildTimeline() {
  const work = document.querySelector('#timeline-work .timeline');
  const edu  = document.querySelector('#timeline-education .timeline');
  if (!work || !edu) return;
  const wi = t('experience.work_items');
  const ei = t('experience.edu_items');
  if (!Array.isArray(wi)) return;
  work.innerHTML = wi.map(item => tlItem(item, 'fas fa-briefcase')).join('');
  edu.innerHTML  = ei.map(item => tlItem(item, 'fas fa-graduation-cap')).join('');
  requestAnimationFrame(() => { window.observeReveal?.(); });
}

function tlItem(item, icon) {
  return `<div class="tl-item glass glass-lift will-reveal-up">
    <div class="tl-period"><i class="${icon}" style="margin-right:.5rem;font-size:.9em;"></i>${item.period}</div>
    <div class="tl-role">${item.role}</div>
    <div class="tl-org">${item.org}</div>
    <div class="tl-desc">${item.desc}</div>
  </div>`;
}

function buildServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  const items = t('services.items');
  if (!Array.isArray(items)) return;
  grid.innerHTML = items.map(s => `
    <div class="service-card glass glass-lift glass-glow will-scale">
      <div class="service-icon"><i class="${s.icon}"></i></div>
      <div class="service-title">${s.title}</div>
      <div class="service-desc">${s.desc}</div>
    </div>`).join('');
  requestAnimationFrame(() => { window.observeReveal?.(); });
}
