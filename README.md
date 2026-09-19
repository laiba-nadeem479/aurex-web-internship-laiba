# Laiba Nadeem — Portfolio

A modern, animated personal portfolio site built with **HTML5, CSS3, and vanilla JavaScript**, as part of the **AUREX Full-Stack Engineering Internship**.

---

## 👤 Intern Information

- **Full Name:** Laiba Nadeem
- **Domain:** Web Development (Full-Stack)
- **Week:** Week 3 — Advanced CSS + CSS Grid & Flexbox Masterclass + CSS Animations, Transitions & UI Polish

---

## 🔗 Live Deployment

> **Live Link:** https://aurex-web-internship-laiba.vercel.app/
>
> Example: `https://laiba-nadeem479.github.io/aurex-web-internship-laiba-nadeem/`

---

## 📁 Project Structure

```text
aurex-web-internship-laiba-nadeem/
├── index.html
├── styles/
│   ├── main.css          
│   └── animations.css    
├── script.js              
└── README.md
```

**CSS architecture:** Design tokens (color, type, spacing, radius) live as CSS Custom Properties on `:root` in `main.css`, so every component reads from one source of truth instead of hard-coded values. Class names follow a light BEM-inspired convention for new components (`theme-toggle`, `theme-toggle__icon`) and descriptive component names elsewhere (`.skill-card`, `.project-card`), grouped under commented section headers. Layout and color rules stay in `main.css`; anything keyframe- or transition-driven stays in `animations.css`, so the two files can be reasoned about independently.

---

## 🧱 CSS Grid Layouts

| Where | Technique | Why |
|---|---|---|
| `.skills-grid` | `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` | Cards never drop below 220px, and the browser decides column count — 1 column on phones, up to 4+ on wide desktops, with **zero media queries**. |
| `.projects-grid` | `repeat(auto-fit, minmax(320px, 1fr))` | The required multi-column project showcase/gallery — reflows from a single column to a multi-column gallery as space allows. |
| `.header-inner` | CSS Grid with named `grid-template-areas: "logo nav theme burger"` | Keeps the logo, nav, theme toggle and mobile hamburger button readable and orderable by name instead of column index. |
| `.contact-grid` | `grid-template-areas: "links" / "form"` (stacked on mobile, `"links form"` side-by-side ≥640px) | Contact info and the form are named regions, so the visual order can change independently of source order. |

Flexbox is still used for one-dimensional alignment inside components (nav links, tag lists, button rows, form rows), while Grid handles every two-dimensional layout — the combination the brief asks for.

---

## 🎞️ Keyframe Animations & Micro-Interactions

- **Entrance reveals:** `fadeInUp` keyframe, triggered per-element by an `IntersectionObserver` in `script.js` (adds `.in-view` the first time a section scrolls into view).
- **Grid stagger:** skill/project cards reveal with incremental `animation-delay` by `nth-child`, so a grid feels like it's cascading in rather than popping in all at once.
- **Button ripple:** `.ripple` buttons spawn a `span.ripple-effect` on click (created in JS, animated with the `ripple` keyframe) that expands and fades from the click point.
- **Card hover elevation:** skill/project cards lift (`translateY`) and gain a soft shadow on hover; project cards also get a cursor-tracked radial-gradient "spotlight" via CSS custom properties (`--mx`, `--my`) updated on `mousemove`.
- **Theme toggle flip:** the sun/moon icon plays an `iconFlip` keyframe (rotate + scale) whenever the theme switches.
- **Scroll progress bar:** a fixed top bar whose `width` is updated on scroll to show reading progress.
- **Other polish:** logo dot float, timeline dot pulse, nav-link underline sweep, hamburger → × transform, typing-cursor blink on the hero eyebrow.
- All motion respects `prefers-reduced-motion: reduce` (animations/transitions collapse to ~0s and reveals show their end state immediately).

---

## 🎨 Modern UI/UX Refinement

- **CSS Custom Properties** drive the entire palette, spacing scale and radii from `:root`.
- **Light/Dark mode foundation:** a `[data-theme="light"]` variable override plus a glassmorphism-styled toggle button in the header; the choice is saved to `localStorage` and falls back to the OS's `prefers-color-scheme` on first visit.
- **Glassmorphism:** the sticky header and the theme-toggle button use `backdrop-filter: blur()` over a translucent background.
- **Fluid typography:** the base font size, `h1`, `h2`, `h3`, hero lede, and the whole spacing scale (`--space-sm` → `--space-xl`) use `clamp()` so type and rhythm scale continuously with viewport width instead of jumping at breakpoints.

---

## 📱 Performance & Responsive Testing Outcomes

Tested with Chromium (desktop 1440×900 and mobile 390×844 viewports) plus manual resize testing between those widths:

- ✅ No horizontal scrollbars at any width from 320px up.
- ✅ `auto-fit`/`minmax()` grids reflow smoothly with no visual breaks between the 1/2/3/4-column states.
- ✅ Mobile hamburger menu opens as a blurred overlay, closes automatically after a nav link is tapped, and animates to an × icon.
- ✅ Theme toggle switches instantly with no flash of unstyled content and persists across reloads.
- ✅ Scroll-reveal animations fire once per element (no re-trigger jank on scroll-up) and respect reduced-motion settings.
- ✅ Contact form validates required fields + email format client-side and shows inline success/error feedback without a page reload.
- ✅ Lighthouse-style checks: fonts are preconnected, no layout-shifting images, all interactive elements are keyboard-reachable, and focus states are visible on inputs/buttons.

---

## ✅ Week 3 Feature Checklist

- [x] Advanced CSS Grid: `auto-fit`, `minmax`, `grid-template-areas`, combined with Flexbox
- [x] Multi-column project showcase/gallery
- [x] Card hover elevation, button ripple, keyframe animations, page-load fade-ins
- [x] Fully responsive: mobile / tablet / desktop, fluid scaling via `clamp()`
- [x] CSS Custom Properties, glassmorphism, dark **and** light mode foundation
- [x] Clean, documented CSS architecture split across `main.css` / `animations.css`
- [ ] Live deployment link

---

