setTimeout(() => {
  const welcomeSectionContainer = document.querySelector(
    "[data-welcome-section-container]"
  );

  welcomeSectionContainer.style.opacity = "0";
  welcomeSectionContainer.style.transition = "opacity ease 4s";
}, 3000);
