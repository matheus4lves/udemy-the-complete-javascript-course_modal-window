// DOM manipulation
const openModalBtns = document.querySelectorAll(".show-modal");

const modal = document.querySelector(".modal") as HTMLDivElement;

// Functionality definition
function showModal() {
  modal.classList.remove("hidden");
}

// Event handling
openModalBtns.forEach(openModelBtn =>
  openModelBtn.addEventListener("click", showModal)
);
