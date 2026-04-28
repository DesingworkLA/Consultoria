document.querySelectorAll(".info-btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + "px";
    ripple.style.top = (e.clientY - rect.top) + "px";

    ripple.classList.add("ripple");
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

/* =========================
   DARK MODE SWITCH (NUEVO)
========================= */

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

/* cargar preferencia guardada */
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.checked = true;
}

/* cambiar tema */
themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});
