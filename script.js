document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("skill-modal");
  const modalTitle = document.getElementById("skill-modal-title");
  const modalDesc = document.getElementById("skill-modal-desc");
  const closeButton = modal.querySelector(".modal__close");
  let lastFocusedElement = null;

  function getFocusableModalElements() {
    return modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  }

  function openModal(skill, description, triggerElement) {
    lastFocusedElement = triggerElement;
    modalTitle.textContent = skill;
    modalDesc.textContent = description;
    modal.classList.add("is-open");
    closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }

  document.querySelectorAll(".skills__item").forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.dataset.skill, button.dataset.desc, button);
    });
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeMenu();
      menuToggle.focus();
    }

    if (!modal.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key === "Tab") {
      const focusableElements = getFocusableModalElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });

  const aboutText = document.getElementById("about-text");
  const aboutToggle = document.getElementById("about-toggle");

  aboutToggle.addEventListener("click", () => {
    const expanded = aboutText.classList.toggle("is-expanded");
    aboutToggle.textContent = expanded ? "Ver menos..." : "Ver más...";
  });

  const projectsContainer = document.getElementById("extra-projects");
  const projectsToggle = document.getElementById("projects-toggle");

  projectsToggle.addEventListener("click", () => {
    const expanded = projectsContainer.classList.toggle("is-expanded");
    projectsToggle.textContent = expanded ? "Ver menos..." : "Ver más...";
  });

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  function openMenu() {
    navMenu.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navMenu.querySelectorAll(".nav-menu__links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const isOutside = !navMenu.contains(event.target) && event.target !== menuToggle && !menuToggle.contains(event.target);
    if (navMenu.classList.contains("is-open") && isOutside) {
      closeMenu();
    }
  });

  const THEME_STORAGE_KEY = "portafolio-tema";
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleText = document.getElementById("theme-toggle-text");
  const themeColorMeta = document.getElementById("theme-color-meta");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggleText.textContent = "Modo claro";
      themeColorMeta.setAttribute("content", "#202020");
    } else {
      document.body.classList.remove("dark-mode");
      themeToggleText.textContent = "Modo oscuro";
      themeColorMeta.setAttribute("content", "#f3f3f3");
    }
  }

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "light";
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    closeMenu();
  });

  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
      formFeedback.textContent = "Por favor completa todos los campos antes de enviar.";
      formFeedback.classList.remove("contact-form__feedback--success");
      formFeedback.classList.add("contact-form__feedback--error");
    } else if (!EMAIL_PATTERN.test(correo)) {
      formFeedback.textContent = "Por favor ingresa un correo electrónico válido.";
      formFeedback.classList.remove("contact-form__feedback--success");
      formFeedback.classList.add("contact-form__feedback--error");
    } else {
      formFeedback.textContent = `Gracias, ${nombre}. Tu mensaje ha sido enviado correctamente.`;
      formFeedback.classList.remove("contact-form__feedback--error");
      formFeedback.classList.add("contact-form__feedback--success");
      contactForm.reset();
    }
  });
});
