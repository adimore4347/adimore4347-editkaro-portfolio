document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filters button");
  const videoCards = document.querySelectorAll(".video-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-filter");

      videoCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
