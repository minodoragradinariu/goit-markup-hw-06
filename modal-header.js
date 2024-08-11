const button1 = document.querySelector(".header-button");

const backdrop1 = document.querySelector(".modal-header");

button1.addEventListener("click", toggleModal1);

backdrop1.addEventListener("click", (e) => {

  const target = e.target.closest(".btn-close-modal-header");

  if (!target) {

    return;

  }

  toggleModal1();

});

function toggleModal1() {

  backdrop1.classList.toggle("is-open");

}