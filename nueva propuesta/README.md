# JohnJDev Portfolio Design System

**Brand:** John J Rojas — Personal Portfolio  
**Handle:** @JohnJDev  
**Tagline:** Web Developer & Business Administrator  
**Location:** Bogotá, Colombia  

---

## Sources

- **Repository:** https://github.com/JohnRojas06289/PortfolioSecond (branch: `master`)
- **Live site:** https://john-rojas.github.io/portfolio/
- **LinkedIn:** https://www.linkedin.com/in/john-jairo-rojas-johnjdev

---

## Product Overview

A single-page personal portfolio website built with vanilla HTML, CSS, and JavaScript. It features a **neumorphic design aesthetic** in dark mode by default, with a slide-in full-screen navigation overlay. The site is organized into six sections: Home, About (with tabs for Skills, Experience, Education, Certifications), Services, Portfolio, Testimonial, and Contact.

The site supports **5 swappable accent color skins** via a style-switcher panel.

---

## Content Fundamentals

### Tone & Voice
- **Informal but professional** — written in first person ("I am a web developer", "Hi! My name is John J Rojas")
- **Bilingual**: English is primary, but some project descriptions appear in Spanish (project titles, dates, tool labels)
- **Modest and direct** — describes himself honestly: "I consider myself to be a determined and risky person"
- **Growth-oriented** — emphasizes learning, challenges, and continuous improvement
- **No emoji** — the writing is clean text, no emoji or unicode icons in copy
- **Sentence case** for body text; **Title Case** for section headings and card titles; **lowercase** for navigation links and tab labels
- **Date format**: Month YYYY or Month YYYY – Present (e.g. "May 2023 - Present")
- **Casing note**: Service card headings use lowercase ("frontend developer", "clean code")

### Example Copy Patterns
- `"Hello World"` — greeting label above hero name
- `"I'm John Rojas"` — large hero h2
- `"Web developer & Business Administrator."` — subtitle
- `"More About Me"` / `"Download CV"` / `"Hire Me"` — CTA buttons
- `"What i do"` — section title (intentional lowercase 'i')
- `"Latest Works"` — portfolio section title

---

## Visual Foundations

### Colors

**Base system (two themes — dark is default):**

| Token | Dark Value | Light Value | Usage |
|---|---|---|---|
| `--bg-black-900` | `#ffffff` | `#000000` | Text, high contrast |
| `--bg-black-100` | `#353535` | `#dddddd` | Borders, dividers, timeline lines |
| `--bg-black-50` | `#2b2c2f` | `#eff0f4` | Page background |
| `--bg-opacity` | `rgba(43,44,47,0.5)` | `rgba(255,255,255,0.5)` | Overlay, loader bg |
| `--text-black-900` | `#ffffff` | `#000000` | Primary text |
| `--text-black-700` | `#ffffff` | `#555555` | Strong body text |
| `--text-black-600` | `#bbbbbb` | `#666666` | Secondary text, labels |
| `--text-black-300` | (implied light grey) | `#bbbbbb` | Muted text |

**Accent / Skin Colors (user-selectable):**

| Skin | Value | Name |
|---|---|---|
| color-1 (default) | `#fb839e` | Rose Pink |
| color-2 | `#312783` | Deep Indigo |
| color-3 | `#E30613` | Crimson Red |
| color-4 | `#2eb1ed` | Sky Blue |
| color-5 | `#1fc586` | Emerald Green |

**Decorative floating effect colors (non-semantic):**
- `#8a49ff` — purple (rotating square border)
- `#ff9c07` — amber (bouncing dot grid)
- `#06d79c` — teal (spinning triangle)
- `#4dd0e1` — cyan (spinning line disc)

### Typography

- **Font family:** `Raleway` (Google Fonts) — weights 400, 500, 600, 700
- **Base size:** 16px / 1.5 line-height
- **No serif or mono typefaces used**

| Role | Size | Weight | Transform |
|---|---|---|---|
| Hero name (h2) | 55px | 700 | none |
| Hero subtitle (h1) | 20px | 500 | capitalize |
| Section heading (h2) | 30px | 700 | uppercase |
| Section subheading (h2:before) | 16px | 600 | none |
| Nav links | 28px | 600 | capitalize |
| Card heading (h3) | 20px | 600 | capitalize |
| Body | 16px | 400 | none |
| Small/meta | 14–15px | 400–600 | capitalize |
| Buttons | 16px | 500 | none |

### Shadow System (Neumorphic)

The design is **neumorphic** — all depth is achieved with double-layered box shadows, no borders.

**Dark theme:**
- `--outer-shadow`: `3px 3px 3px #222327, -3px -3px 3px #363636`
- `--outer-shadow-0`: `0 0 0 ...` (reset, for hover transition)
- `--inner-shadow`: `inset 3px 3px 3px #222327, inset -3px -3px 3px #363636`
- `--inner-shadow-0`: `inset 0 0 0 ...` (reset)

**Hover interaction pattern:**
1. Element starts with `.outer-shadow`
2. On hover: outer-shadow transitions to 0, inner-shadow fades in via `::after`
3. This creates a "press in" neumorphic effect

### Border Radius
- **Buttons / Pills / Tags:** `30px` (fully rounded)
- **Cards / Panels / Images (portrait):** `5px`
- **Profile image, social icons, hamburger, logo:** `50%` (full circle)
- **Progress bar:** `10px`

### Backgrounds
- **Solid flat color** — page background is always `--bg-black-50`
- **No gradients, no textures, no images as backgrounds**
- Profile photos are images placed within circular/rounded containers with `inner-shadow`
- **Decorative floating elements** animate in the hero section: rotating border, dot grid, triangle, line disc

### Animations
- `spin` — `rotate(0 → 360deg)`, linear infinite (10s, 15s)
- `topBounce` — `translateY(0 → 25px)`, ease-in-out 3s infinite
- `leftBounce` — `translateX(0 → 25px)`, ease-in-out 3s infinite
- `fadeInTop` — `opacity 0→1 + translateY(-25px → 0)`, 0.5s ease (section entry)
- `loaderAni` — bounce dots `translateY(0 → -30px)`, 1s ease infinite (staggered)
- `fadeOut` — nav close, 0.3s ease-out
- `grow` — `scaleX(0 → 1)`, 10s linear (testimonial progress bar)
- **All transitions:** `0.3s ease` (standard), `0.5s ease` (sections)

### Hover & Press States
- **Links/buttons:** shadow transitions from outer→inner (neumorphic "press")
- **Portfolio card images:** `translateY(-25px)` lift on hover
- **Service icons:** color changes to `--skin-color`
- **Social links:** color changes to `--skin-color`
- **Navigation active state:** text color = `--skin-color`
- **Opacity hover:** `.hover:not(.active)` → `opacity: 0.6`

### Imagery
- Profile photos in circular containers (home) and rounded rectangle (about)
- Certificate diploma images in timeline cards
- Portfolio project thumbnails — square/rectangular, `border-radius: 5px`
- No illustration, no decorative imagery — just real photos and screenshots

### Layout
- Max content width: `1140px`, centered
- 12-column flex grid with 15px column gutters
- Full-height sections (`min-height: 100vh`)
- Fixed header (absolute), full-screen nav overlay (fixed)
- **No sticky sidebar** — fully scrollable single-page

---

## Iconography

### Icon System: Font Awesome 5
The portfolio uses a **self-hosted Font Awesome 5** (CSS + webfonts in `assets/css/` and `assets/webfonts/`). Three icon subsets are included:
- `fa-solid-900` — general UI icons (briefcase, graduation-cap, mobile-alt, laptop-code, etc.)
- `fa-brands-400` — tech brand icons (html5, css3-alt, js-square, react, angular, python, figma, github, linkedin-in, whatsapp)
- `fa-regular-400` — general icons (quote-left, quote-right)

### Icon Usage Patterns
- Used via `<i class="fas/fab/far fa-{name}">` inline HTML
- **Never used as standalone SVGs or PNG files**
- Size via `font-size` — typically 16px, 25px, 30px depending on context
- Color: `--text-black-600` default, `--skin-color` on hover or active states
- **No PNG icon files found** in the repository
- **No emoji used** in the interface

### Key Icons Used
| Context | Icon class |
|---|---|
| Experience | `fas fa-briefcase` |
| Education | `fas fa-graduation-cap` |
| Responsive Design | `fas fa-mobile-alt` |
| Frontend | `fas fa-laptop-code` |
| Clean Code | `fas fa-desktop` |
| Graphic Design | `fas fa-palette` |
| Backend | `fas fa-code` |
| AI | `fas fa-robot` |
| GitHub social | `fab fa-github` |
| LinkedIn social | `fab fa-linkedin-in` |
| WhatsApp social | `fab fa-whatsapp` |

**CDN fallback:** If self-hosted fonts unavailable, use Font Awesome 5 Free CDN:  
`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css`

---

## File Index

```
/
├── README.md                    ← This file
├── SKILL.md                     ← Agent skill definition
├── colors_and_type.css          ← CSS variables & typography tokens
├── assets/css/                  ← Imported portfolio CSS (style.css, font-awesome.css, skins/, etc.)
├── preview/                     ← Design System card previews
│   ├── colors-base.html
│   ├── colors-accent.html
│   ├── colors-effects.html
│   ├── type-scale.html
│   ├── type-weights.html
│   ├── shadows.html
│   ├── spacing-radius.html
│   ├── animations.html
│   ├── btn-states.html
│   ├── nav-links.html
│   ├── cards-service.html
│   ├── cards-timeline.html
│   ├── progress-skills.html
│   └── portfolio-item.html
└── ui_kits/
    └── portfolio/
        ├── README.md
        ├── index.html           ← Full interactive portfolio UI kit
        ├── Header.jsx
        ├── HomeSection.jsx
        ├── AboutSection.jsx
        ├── ServicesSection.jsx
        └── PortfolioSection.jsx
```
