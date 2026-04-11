// Animación scroll
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < trigger) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Formulario demo (listo para conectar luego a backend)
document.getElementById('formulario').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Mensaje enviado correctamente ✔️');
});
