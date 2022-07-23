setTimeout(() => {
  const welcomeSectionContainer = document.querySelector(
    "[data-welcome-section-container]"
  );

  welcomeSectionContainer.style.opacity = "0";
  welcomeSectionContainer.style.transition = "opacity ease 4s";
}, 3000);

// const supermarkets = document.querySelectorAll(".supermarket");

// supermarkets.forEach((supermarket) => {
//   supermarket.addEventListener("pointerover", () => {
//     const image = document.querySelector(".supermarket .image");
//     supermarket.classList.toggle("hover");
//     image.classList.toggle("image-hover");
//     alert("supermarket");
//   });
// });
