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
});
