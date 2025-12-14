// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  // --- Filtro por região ---

  const filterButtons = document.querySelectorAll(".blog-filters .filter-btn");
  const postCards = document.querySelectorAll(".posts .post-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedRegion = button.getAttribute("data-region");

      // estado visual do botão ativo
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // mostra/esconde cards
      postCards.forEach((card) => {
        const cardRegion = card.getAttribute("data-region");

        if (selectedRegion === "all" || selectedRegion === cardRegion) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // --- Botão "voltar ao topo" ---

  const backToTopBtn = document.createElement("button");
  backToTopBtn.textContent = "↑ Topo";
  backToTopBtn.id = "back-to-top";
  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
