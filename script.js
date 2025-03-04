// Función para abrir la ventana modal
function openModal() {
  document.getElementById('modal').style.display = 'block';
}

// Función para cerrar la ventana modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Cerrar la ventana modal si se hace clic fuera de ella
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Botón "Volver Arriba"
window.onscroll = function() {
  const backToTopButton = document.getElementById('back-to-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

function scrollToTop() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para otros navegadores
}

// Inicializar las estrellas de calificación
function initializeStars() {
  const starsContainers = document.querySelectorAll('.stars');

  starsContainers.forEach(container => {
    const rating = parseInt(container.getAttribute('data-rating'));
    const stars = container.querySelectorAll('span');

    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('active');
      }
    });
  });
}

window.onload = initializeStars;