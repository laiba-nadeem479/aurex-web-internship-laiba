

(function () {
  "use strict";


  document.documentElement.classList.remove("no-js");

  /* ---------- 2. Scroll-triggered reveal animations ---------- */
  var revealTargets = document.querySelectorAll(".fade-up, .section-index");

  if ("IntersectionObserver" in window && revealTargets.length) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // No IntersectionObserver support: just show everything.
    revealTargets.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  /* ---------- 3. Active nav-link highlighting ---------- */
  var sections = document.querySelectorAll("main > section[id]");
  var navLinks = document.querySelectorAll(".main-nav a");

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("active", isActive);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ---------- 4. Mobile nav auto-close ---------- */
  var navToggleInput = document.getElementById("nav-toggle");

  if (navToggleInput) {
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navToggleInput.checked = false;
      });
    });
  }

  /* ---------- 5. Scroll progress bar ---------- */
  var progressBar = document.getElementById("scrollProgress");

  function updateScrollProgress() {
    if (!progressBar) return;
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  }

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
  updateScrollProgress();

  /* ---------- 6. Button ripple effect ---------- */
  var rippleButtons = document.querySelectorAll(".ripple");

  rippleButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var rect = btn.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height);
      var ripple = document.createElement("span");

      ripple.className = "ripple-effect";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

      btn.appendChild(ripple);
      ripple.addEventListener("animationend", function () {
        ripple.remove();
      });
    });
  });

  
  var spotlightCards = document.querySelectorAll(".project-card");

  spotlightCards.forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - rect.left + "px");
      card.style.setProperty("--my", e.clientY - rect.top + "px");
    });
  });

  /* ---------- 8. Contact form validation + fake submit ---------- */
  var form = document.getElementById("contactForm");
  var feedback = document.getElementById("formFeedback");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (form && feedback) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var fields = form.querySelectorAll("input[required], textarea[required]");
      var isValid = true;

      fields.forEach(function (field) {
        var value = field.value.trim();
        var fieldValid = value.length > 0;

        if (field.type === "email" && fieldValid) {
          fieldValid = emailPattern.test(value);
        }

        field.classList.toggle("invalid", !fieldValid);
        if (!fieldValid) isValid = false;
      });

      if (!isValid) {
        feedback.textContent = "Please fill in every field with a valid value.";
        feedback.className = "form-feedback error";
        return;
      }

      // No backend is wired up yet — simulate a successful send so the
      // interaction reads correctly. Replace this with a real fetch()
      // call once an endpoint exists.
      feedback.textContent = "Thanks! Your message has been noted — I'll reply soon.";
      feedback.className = "form-feedback success";
      form.reset();
    });

    form.querySelectorAll("input, textarea").forEach(function (field) {
      field.addEventListener("input", function () {
        field.classList.remove("invalid");
      });
    });
  }

  /* ---------- 9. Light / dark theme toggle ---------- */
  var themeToggle = document.getElementById("themeToggle");
  var themeIcon = themeToggle
    ? themeToggle.querySelector(".theme-toggle__icon")
    : null;
  var THEME_KEY = "ln-portfolio-theme";

  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (themeIcon) themeIcon.textContent = "\u2600\ufe0f"; // ☀️
      if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", "true");
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
      }
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "\ud83c\udf19"; // 🌙
      if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", "false");
        themeToggle.setAttribute("aria-label", "Switch to light theme");
      }
    }
  }

  // Initial theme: saved preference, else system preference, else dark.
  var storedTheme = null;
  try {
    storedTheme = localStorage.getItem(THEME_KEY);
  } catch (err) {
    /* localStorage unavailable (private mode, etc.) — fall back silently */
  }

  var prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  applyTheme(storedTheme || (prefersLight ? "light" : "dark"));

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var isLight = document.documentElement.getAttribute("data-theme") === "light";
      var next = isLight ? "dark" : "light";

      applyTheme(next);

      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (err) {
        /* ignore write failures */
      }

      if (themeIcon) {
        themeIcon.classList.remove("is-flipping");
        // Force reflow so the animation can retrigger on repeated clicks.
        void themeIcon.offsetWidth;
        themeIcon.classList.add("is-flipping");
      }
    });
  }
})();
