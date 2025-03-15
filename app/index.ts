// DOM manipulation
const openModalBtns = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelector(
  ".close-modal"
) as HTMLButtonElement;
const modal = document.querySelector(".modal") as HTMLDivElement;
const overlay = document.querySelector(".overlay") as HTMLDivElement;

// Functionality definition
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function handleEscKeyToCloseModal(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeModal();
  }
}

function handleCloseButtonClick() {
  closeModal();
}

// Event handling
openModalBtns.forEach(openModelBtn =>
  openModelBtn.addEventListener("click", openModal)
);

closeModalBtn.addEventListener("click", handleCloseButtonClick);

window.addEventListener("keyup", handleEscKeyToCloseModal);
