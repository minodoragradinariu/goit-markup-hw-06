const menu = document.querySelector(".header-svg-button");
const modal = document.querySelector(".modal-header");

menu.addEventListener("click", toggleModalheader);
modal.addEventListener("click", (e) => {
  const target = e.target.closest(".btn-close-modal-header");
  if (!target) {
    return;
  }
  toggleModalheader();
});
function toggleModalheader() {
  modal.classList.toggle("is-open");
}