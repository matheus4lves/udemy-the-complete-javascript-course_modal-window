// DOM manipulation
const openModalBtns: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".show-modal");
const closeModalBtn: HTMLButtonElement | null =
  document.querySelector(".close-modal");
const modal: HTMLDivElement | null = document.querySelector(".modal");
const overlay: HTMLDivElement | null = document.querySelector(".overlay");

// Functionality definition
function validateElements(...elements: (HTMLElement | null)[]) {
  const missingElements = elements.filter(el => !el);
  if (missingElements.length > 0) {
    console.error("Missing elements: ", missingElements);
    return false;
  } else {
    return true;
  }
}

function openModal() {
  if (!validateElements(modal, overlay)) return;
  // https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
  modal!.classList.remove("hidden");
  overlay!.classList.remove("hidden");
}

function closeModal() {
  if (!validateElements(modal, overlay)) return;

  modal!.classList.add("hidden");
  overlay!.classList.add("hidden");
}

function handleEscKeyToCloseModal(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeModal();
  }
}

function handleCloseButtonClick() {
  closeModal();
}

function handleOverlayClick() {
  closeModal();
}

// Event handling
if (openModalBtns.length > 0) {
  openModalBtns.forEach(openModelBtn =>
    openModelBtn.addEventListener("click", openModal)
  );
} else {
  console.error("openModalBtns is empty!");
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", handleCloseButtonClick);
} else {
  console.error("closeModalBtn element not found!");
}

window.addEventListener("keyup", handleEscKeyToCloseModal);

if (overlay) {
  overlay.addEventListener("click", handleOverlayClick);
} else {
  console.error("overlay element not found!");
}
