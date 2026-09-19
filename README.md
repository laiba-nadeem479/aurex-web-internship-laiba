# Laiba Nadeem — Portfolio

A responsive personal portfolio website built with **pure HTML5 and CSS3 (Flexbox + Grid)** — no JavaScript — created for the **AUREX Full‑Stack Engineering Internship — Month 1, Week 2** (CSS3 Fundamentals + Modern Layouts + Basic UI/UX + Responsive Web Design).

---

## 👤 Intern Information

- **Full Name:** Laiba Nadeem
- **Domain:** Web Development (Full‑Stack / Frontend)
- **Week:** Week 2 — CSS3 Fundamentals, Flexbox & Grid, Responsive Web Design

---

## 🔗 Live Deployment

> **Live Link:** _[Add your GitHub Pages or Vercel link here before submitting]_
>
> Example: `https://laiba-nadeem479.github.io/aurex-web-internship-laiba-nadeem/`

**To deploy on GitHub Pages:**
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set **Source: Deploy from a branch**, branch **main**, folder **/(root)**.
4. Save — your live URL will appear at the top of that page within a minute or two.
5. Paste that link above and in your submission.

---

## 📁 Project Structure

```text
aurex-web-internship-laiba-nadeem/
├── index.html
├── styles/
│   ├── main.css          → Layout, design tokens, components, media queries
│   └── animations.css    → Keyframes, entrance & micro-interactions (pure CSS)
├── screenshots/           → Desktop, tablet, and mobile screenshots (add before submitting)
└── README.md
```

---

## 🎨 CSS Features & Layout Techniques Implemented

- **CSS3 fundamentals:** custom properties (`:root` design tokens for color, spacing, typography), class/element/pseudo-class selectors, Google Fonts, gradients, background images.
- **Box model:** consistent `box-sizing: border-box`, padding/margin scale (`--space-sm` → `--space-xl`), bordered cards with border-radius.
- **Flexbox:** header/nav bar, hero layout, button groups, skill tag lists, contact links, footer content — used wherever content needs to align along one axis.
- **CSS Grid:** skills grid, projects grid, and contact grid — used wherever content needs a responsive multi-column layout (`grid-template-columns: repeat(n, 1fr)`).
- **Responsive design:** mobile-first CSS with `@media (min-width: 640px)` (tablet) and `@media (min-width: 1024px)` (desktop) breakpoints; a CSS-only hamburger menu (the "checkbox hack" — an `<input type="checkbox">` + `<label>` + `:checked` selector) for mobile navigation, with no JavaScript involved.
- **UI/UX:** clear visual hierarchy (eyebrow → heading → body), consistent spacing scale, readable typography pairing (serif display font + sans body font), accent color used sparingly, hover/focus states on every interactive element.
- **Pure CSS animations:** fade-up entrance animation on page load (`@keyframes` + `animation-delay` for staggered timing), hover-triggered underline sweeps, a pulsing timeline dot, and a subtle floating background glow — all done with `@keyframes` and transitions, no JavaScript.
- **Native HTML5 form validation:** the contact form uses `required` and `type="email"` attributes so the browser itself validates input — no JavaScript needed.
- **Accessibility:** `prefers-reduced-motion` media query disables animations for users who request reduced motion.

---

## ✅ Submission Checklist

- [ ] GitHub repository updated with all CSS code
- [ ] Live deployment link added above (GitHub Pages / Vercel)
- [ ] Desktop screenshot added to `screenshots/`
- [ ] Tablet screenshot added to `screenshots/`
- [ ] Mobile screenshot added to `screenshots/`
- [ ] Learning reflection completed below
- [ ] Repo folder renamed to `aurex-web-internship-laiba-nadeem` (if not already)

---

## 📝 Key Learnings & Challenges

_(Personalize this section with your own words before submitting — a couple of honest sentences per bullet is enough.)_

- **Flexbox vs. Grid:** Learned when to reach for Flexbox (one-directional alignment — nav bars, button rows, tag lists) versus Grid (two-directional, card-based layouts — skills, projects, contact section).
- **Mobile-first responsive design:** Started with a single-column mobile layout and added complexity at the `640px` and `1024px` breakpoints, rather than designing desktop-first and cramming it down — this made the small-screen layout much cleaner.
- **The box model in practice:** Debugging spacing issues came down to consistently using `border-box` and a small set of spacing variables instead of one-off pixel values.
- **Biggest challenge:** Building a fully working mobile navigation menu using only CSS (the checkbox + label + `:checked` "checkbox hack") instead of JavaScript's `addEventListener` — took some trial and error with `max-height` transitions to get the slide-down animation smooth.
- **CSS-only animation:** Realized entrance animations don't need JavaScript at all — `@keyframes` combined with `animation-delay` gave the same staggered fade-up effect purely through CSS.

---

## 🛠️ Tech Stack

HTML5 · CSS3 (Flexbox, Grid, custom properties, media queries) — no JavaScript

---

&copy; 2026 Laiba Nadeem. All rights reserved.
