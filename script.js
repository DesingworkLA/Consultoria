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

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

/* cargar preferencia guardada */
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
