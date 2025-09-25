// Navegación suave
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mensaje de bienvenida en consola
console.log("Bienvenido a LaRocleta — Gastronomía con identidad");

// Interacción con botón de reservas
document.addEventListener('DOMContentLoaded', () => {
  const reservaBtn = document.querySelector('#reservas button');
  if (reservaBtn) {
    reservaBtn.addEventListener('click', () => {
      alert('Gracias por tu interés. Pronto habilitaremos reservas online.');
    });
  }
});