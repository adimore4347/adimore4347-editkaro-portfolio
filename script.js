const filterButtons = document.querySelectorAll('[data-filter]');
const videoCards = document.querySelectorAll('.video-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');
    
    videoCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
