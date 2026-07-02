document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle Logic
  const menuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  function toggleMenu() {
    const isOpen = menuButton.classList.contains('menu-open');
    if (isOpen) {
      menuButton.classList.remove('menu-open');
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      // Slide out link animation
      menuLinks.forEach((link) => {
        link.classList.add('translate-y-12', 'opacity-0');
        link.classList.remove('translate-y-0', 'opacity-100');
      });
    } else {
      menuButton.classList.add('menu-open');
      mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
      // Staggered slide up animation
      menuLinks.forEach((link, idx) => {
        setTimeout(() => {
          link.classList.remove('translate-y-12', 'opacity-0');
          link.classList.add('translate-y-0', 'opacity-100');
        }, 100 + idx * 80);
      });
    }
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on a link
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menuButton.classList.contains('menu-open')) {
          toggleMenu();
        }
      });
    });
  }

  // 2. IntersectionObserver for Reveal Animations on Scroll
  const revealElements = document.querySelectorAll('.reveal-element');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once visible, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));

  // 3. Contact Form Submission Handling
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');

  if (contactForm && successMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      // Construct WhatsApp message
      const wpNumber = "56996433990";
      const wpText = `Hola, me interesa obtener información sobre Portal Lacustre. Mis datos son:\n\n- Nombre: ${name}\n- Correo: ${email}\n- Teléfono: ${phone}\n- Mensaje: ${message || 'Sin mensaje adicional'}`;
      
      const wpUrl = `https://wa.me/${wpNumber}?text=${encodeURIComponent(wpText)}`;

      // Animate submit button
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Redirigiendo a WhatsApp...';

      setTimeout(() => {
        // Redirect to WhatsApp in a new tab
        window.open(wpUrl, '_blank');

        // Show successful status in UI
        contactForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
        successMessage.classList.add('flex');
        
        // Reset form and button
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 800);
    });
  }
});
