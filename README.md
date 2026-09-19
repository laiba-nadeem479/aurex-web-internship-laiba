# Laiba Nadeem — Portfolio

Animated personal portfolio (HTML5, CSS3, vanilla JS) — **AUREX Full-Stack Engineering Internship**.

- **Full Name:** Laiba Nadeem
- **Domain:** Web Development (Full-Stack Engineer)
- **Week:** Week 3 — CSS Grid & Flexbox + Animations, Transitions & UI Polish
- **Live Link:** https://aurex-web-internship-laiba.vercel.app/

## CSS Grid Layouts
- `.skills-grid` / `.projects-grid` → `repeat(auto-fit, minmax(...))` for media-query-free responsive columns
- `.header-inner` / `.contact-grid` → named `grid-template-areas` for logical, reorderable regions
- Flexbox handles 1D alignment (nav, tags, buttons); Grid handles all 2D layout

## Keyframe Animations
- `fadeInUp` scroll reveals via `IntersectionObserver`, staggered per card
- Button ripple effect, card hover elevation + cursor-tracked spotlight
- Theme toggle icon flip, scroll progress bar, hamburger ↔ × transform
- All animations respect `prefers-reduced-motion`

## UI/UX
- CSS Custom Properties for full theming (light/dark via `localStorage` + `prefers-color-scheme`)
- Glassmorphism header/toggle, fluid `clamp()` typography and spacing

## Performance & Responsive Testing
- Tested at 1440×900 (desktop) and 390×844 (mobile), plus manual resizing
- No horizontal scroll, smooth grid reflow, working hamburger menu, instant theme switch, one-time scroll reveals, working form validation, keyboard-accessible with visible focus states

## Checklist
- [x] Advanced CSS Grid + Flexbox
- [x] Multi-column project gallery
- [x] Hover elevation, ripple, keyframes, fade-ins
- [x] Fully responsive, fluid `clamp()` scaling
- [x] Custom Properties, glassmorphism, dark & light mode
- [x] Clean CSS architecture (`main.css` / `animations.css`)
- [x] Live deployment link
