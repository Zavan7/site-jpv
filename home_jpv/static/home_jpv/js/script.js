/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const button = document.getElementById("theme-toggle");
  const header = document.querySelector(".header");

  /* ================= DARK MODE ================= */

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");
    if (button) button.innerText = "☀️";
  } else if (savedTheme === "light") {
    body.classList.remove("dark");
    if (button) button.innerText = "🌙";
  } else {
    // fallback: usa preferência do sistema
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (prefersDark) {
      body.classList.add("dark");
      if (button) button.innerText = "☀️";
    }
  }

  if (button) {
    button.addEventListener("click", () => {
      body.classList.toggle("dark");

      const isDark = body.classList.contains("dark");

      localStorage.setItem("theme", isDark ? "dark" : "light");

      button.innerText = isDark ? "☀️" : "🌙";
    });
  }

  /* ================= HEADER SCROLL ================= */

  window.addEventListener("scroll", () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 50);
    }
  });

  /* ================= SCROLL REVEAL ================= */

  const elements = document.querySelectorAll(".fade, .reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show", "active");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  elements.forEach((el) => observer.observe(el));

  /* ================= BOTÃO MAGNÉTICO ================= */

  const btns = document.querySelectorAll(".btn-primary");

  btns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px) scale(1.05)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
});
