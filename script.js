document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("skill-modal");
  const modalTitle = document.getElementById("skill-modal-title");
  const modalDesc = document.getElementById("skill-modal-desc");
  const closeButton = modal.querySelector(".modal__close");

  function openModal(skill, description) {
    modalTitle.textContent = skill;
    modalDesc.textContent = description;
    modal.classList.add("is-open");
  }

  function closeModal() {
    modal.classList.remove("is-open");
  }

  document.querySelectorAll(".skills__item").forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.dataset.skill, button.dataset.desc);
    });
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  const projectsContainer = document.querySelector(".projects");
  const projectsToggle = document.getElementById("projects-toggle");

  projectsToggle.addEventListener("click", () => {
    const expanded = projectsContainer.classList.toggle("is-expanded");
    projectsToggle.textContent = expanded ? "Ver menos" : "Ver más";
  });

  const THEME_STORAGE_KEY = "portafolio-tema";
  const themeToggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggle.setAttribute("aria-label", "Cambiar a modo claro");
    } else {
      document.body.classList.remove("dark-mode");
      themeToggle.setAttribute("aria-label", "Cambiar a modo oscuro");
    }
  }

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "light";
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  });
});
