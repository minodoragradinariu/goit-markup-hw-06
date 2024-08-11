const button = document.querySelector(".header-button");

const backdrop = document.querySelector(".modal-header");

button.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {

  const target = e.target.closest(".btn-close-modal-header");

  if (!target) {

    return;

  }

  toggleModal();

});

function toggleModal() {

  backdrop.classList.toggle("is-open");

}