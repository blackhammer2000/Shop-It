setTimeout(() => {
  const welcomeSectionContainer = document.querySelector(
    "[data-welcome-section-container]"
  );

  welcomeSectionContainer.style.opacity = "0";
  welcomeSectionContainer.style.transition = "opacity ease 4s";
}, 3000);

const accountDetails = document.querySelector("[data-account-details]");
const accountDetailsDropdown = document.querySelector(
  "[data-account-details-dropdown]"
);

// accountDetails.addEventListener("click", (e) => {
//   if (
//     e.target.parentElement.parentElement.parentElement.classList.contains(
//       "account-details"
//     )
//   ) {
//     console.log(
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .parentElement.parentElement.children[5]
//     );
//     e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[5].classList.toggle(
//       "show"
//     );
//   }
// });

// const supermarkets = document.querySelectorAll(".supermarket");

// supermarkets.forEach((supermarket) => {
//   supermarket.addEventListener("pointerover", () => {
//     const image = document.querySelector(".supermarket .image");
//     supermarket.classList.toggle("hover");
//     image.classList.toggle("image-hover");
//     alert("supermarket");
//   });
// });
