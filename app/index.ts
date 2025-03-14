// DOM manipulation
const openModalBtns = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelector(
  ".close-modal"
) as HTMLButtonElement;
const modal = document.querySelector(".modal") as HTMLDivElement;

// Functionality definition
function openModal() {
  modal.classList.remove("hidden");
}

function hideModal(modal: HTMLDivElement) {
  modal.classList.add("hidden");
}

function handleEscKeyToCloseModal(event: KeyboardEvent) {
  if (event.key === "Escape") {
    hideModal(modal);
  }
}

function handleCloseButtonClick(event: MouseEvent) {
  const target = event.target as HTMLButtonElement;

  if (target.classList.contains("close-modal")) {
    hideModal(modal);
  }
}

// Event handling
openModalBtns.forEach(openModelBtn =>
  openModelBtn.addEventListener("click", openModal)
);

closeModalBtn.addEventListener("click", handleCloseButtonClick);

window.addEventListener("keyup", handleEscKeyToCloseModal);
