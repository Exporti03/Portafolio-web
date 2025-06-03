document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            // Si el href es solo '#', se asume que es el inicio o ya estamos en el
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset para que la sección no quede oculta detrás del header fijo
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; // Añade un poco de margen

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de desplazamiento para elementos (usando Intersection Observer)
    const elementsToAnimate = document.querySelectorAll('.hero-content h1, .hero-content h2, .hero-content p, .btn, .proyecto-item, .habilidad-item, .contacto-section form, .social-links, .profile-pic');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Dejar de observar una vez que se ha animado
            }
        });
    }, {
        threshold: 0.1, // El elemento debe estar visible en un 10%
        rootMargin: "0px 0px -50px 0px" // Inicia la animación 50px antes de que llegue al final del viewport
    });

    elementsToAnimate.forEach(element => {
        // La clase hidden-fade se añade directamente en el HTML para elementos iniciales,
        // pero el Intersection Observer la añadirá a los que no la tienen y la quitará al entrar al viewport.
        // Asegúrate de que los elementos que no quieres que aparezcan de golpe al cargar la página
        // tengan la clase `hidden-fade` en su HTML (como los proyectos y habilidades).
        observer.observe(element);
    });

    // Lógica para el formulario de contacto (ejemplo básico, necesitarías un backend real)
    const contactForm = document.querySelector('.contacto-section form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita el envío por defecto del formulario

            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;

            // En un entorno de producción, aquí enviarías estos datos a un servidor.
            // Para un portafolio estático, considera usar servicios como Formspree.io o Netlify Forms.
            // Recuerda cambiar "tu-formspree-id" en el action del formulario en index.html
            console.log('Datos del formulario:', { name, email, message });
            alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
            this.reset(); // Limpia el formulario
        });
    }

});