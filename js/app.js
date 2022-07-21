const shrinkNavBar = () => {
  const mainNavBar = document.getElementById("mainNavBar");

  if (window.scrollY === 0) {
    mainNavBar.classList.remove("nav-shrink");
  } else {
    mainNavBar.classList.add("nav-shrink");
  }
};

window.addEventListener("scroll", () => {
  shrinkNavBar();
});

const openPhoto = () => {
  document.querySelectorAll(".card").forEach((e) => {
    e.addEventListener("click", () => {
      const getMyPhotoName = e.dataset.photo;
      const myTitle = document.getElementById("openPhotoModalLabel");
      const modalBody = document.getElementById("modalBody");

      myTitle.textContent = getMyPhotoName;

      modalBody.innerHTML = `<img src=".././assets/images/${getMyPhotoName}.png" class="w-75 d-block text-center m-auto">`;
    });
  });
};

openPhoto();

const closeTooglerAfterClick = () => {
  document.querySelectorAll(".nav-link").forEach((e) => {
    e.addEventListener("click", () => {
      document.getElementById("navLists").classList.remove("show");
    });
  });
};

closeTooglerAfterClick();
