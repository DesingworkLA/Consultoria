
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

document.querySelectorAll(".ball-item").forEach((ball) => {
  const colors = ["#ff3b3b","#2f7bff","#ffd400","#00d084","#ff7b00","#b400ff"];

  setInterval(() => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    ball.style.background = random;
  }, 900);
});
