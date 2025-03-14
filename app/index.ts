// DOM manipulation
const openModalBtns = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelector(
  ".close-modal"
) as HTMLButtonElement;
const modal = document.querySelector(".modal") as HTMLDivElement;

// Functionality definition
function showModal() {
  modal.classList.remove("hidden");
}

function hideModal(modal: HTMLDivElement) {
  modal.classList.add("hidden");
}

function handleCloseButtonClick(event: MouseEvent) {
  const target = event.target as HTMLButtonElement;

  if (target.classList.contains("close-modal")) {
    hideModal(modal);
  }
}

// Event handling
openModalBtns.forEach(openModelBtn =>
  openModelBtn.addEventListener("click", showModal)
);

closeModalBtn.addEventListener("click", handleCloseButtonClick);
